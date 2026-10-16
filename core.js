const TrainerCore = (() => {
  function shuffle(items, random = Math.random) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  const lexemeKey = question => question.lexeme || String(question.id);
  const formKey = question => `${question.tense || question.tags?.find(tag => ['present', 'past'].includes(tag))}/${question.polarity || question.tags?.find(tag => ['affirmative', 'negative'].includes(tag))}`;
  const countBy = (items, key) => items.reduce((counts, item) => {
    const value = key(item);
    counts.set(value, (counts.get(value) || 0) + 1);
    return counts;
  }, new Map());

  // Search within the unused cycle. Quotas soften only when the pool cannot meet them.
  function selectBalanced(pool, size, excludedLexemes, excludedIds, random) {
    const candidates = shuffle(pool.filter(q => !excludedLexemes.has(lexemeKey(q)) && !excludedIds.has(q.id)), random);
    const count = Math.min(size, new Set(candidates.map(lexemeKey)).size);
    const keys = [q => q.partOfSpeech, formKey, q => q.difficulty];
    const totals = keys.map(key => countBy(candidates, key));
    const lexicalCounts = countBy(pool, lexemeKey);
    const futureSessions = Math.ceil((pool.length - count) / Math.max(size, 1));
    const mandatory = new Set([...lexicalCounts].filter(([, n]) => n > futureSessions).map(([key]) => key));
    let best = [], bestCost = Infinity;

    for (let attempt = 0; attempt < 48; attempt++) {
      const available = shuffle(candidates, random);
      const used = new Set(), selected = [];
      const counts = keys.map(() => new Map());
      while (selected.length < count) {
        const remainingMandatory = [...mandatory].filter(key => !used.has(key) && available.some(q => lexemeKey(q) === key));
        const mustChoose = remainingMandatory.length >= count - selected.length;
        let winner = null, winnerScore = Infinity;
        for (const q of available) {
          const lexeme = lexemeKey(q);
          if (used.has(lexeme) || (mustChoose && !mandatory.has(lexeme))) continue;
          let score = 0;
          keys.forEach((key, i) => {
            const n = counts[i].get(key(q)) || 0;
            const quota = count / totals[i].size;
            score += (i === 2 ? 1 : 8) * (2 * n + 1) / quota;
          });
          score -= mandatory.has(lexeme) ? 2 : 0;
          score -= (lexicalCounts.get(lexeme) || 0) * .15;
          if (score < winnerScore) { winner = q; winnerScore = score; }
        }
        if (!winner) break;
        selected.push(winner);
        used.add(lexemeKey(winner));
        keys.forEach((key, i) => counts[i].set(key(winner), (counts[i].get(key(winner)) || 0) + 1));
      }
      let cost = (count - selected.length) * 10000;
      for (const key of mandatory) if (!used.has(key) && candidates.some(q => lexemeKey(q) === key)) cost += 1000;
      counts.forEach((values, i) => {
        for (const key of totals[i].keys()) cost += (i === 2 ? 1 : 50) * ((values.get(key) || 0) - count / totals[i].size) ** 2;
      });
      if (cost < bestCost) { best = selected; bestCost = cost; }
      if (cost < 1) break;
    }
    return best;
  }

  // Minimize adjacent repetitions of topic, tense and polarity without changing the sample.
  function interleave(questions, random, previousQuestion) {
    const pending = shuffle(questions, random), ordered = [];
    const formsUsed = new Map(), topicsUsed = new Map();
    while (pending.length) {
      const previous = ordered.at(-1) || previousQuestion;
      const score = q =>
        6 * (formsUsed.get(formKey(q)) || 0) +
        3 * (topicsUsed.get(q.partOfSpeech) || 0) +
        (!previous ? 0 : 100 * Number(lexemeKey(q) === lexemeKey(previous)) +
        4 * Number(q.polarity === previous.polarity) +
        3 * Number(q.tense === previous.tense) +
        2 * Number(q.partOfSpeech === previous.partOfSpeech) +
        Number(formKey(q) === formKey(previous)));
      let index = 0;
      for (let i = 1; i < pending.length; i++) if (score(pending[i]) < score(pending[index])) index = i;
      const question = pending.splice(index, 1)[0];
      ordered.push(question);
      formsUsed.set(formKey(question), (formsUsed.get(formKey(question)) || 0) + 1);
      topicsUsed.set(question.partOfSpeech, (topicsUsed.get(question.partOfSpeech) || 0) + 1);
    }
    return ordered;
  }

  function createQuestionCycle(questions, random = Math.random, snapshot = null) {
    const pool = [...questions];
    if (new Set(pool.map(q => q.id)).size !== pool.length) throw new Error('Question IDs must be unique');
    const byId = new Map(pool.map(q => [q.id, q]));
    if (snapshot && (!Array.isArray(snapshot.remainingIds) ||
        new Set(snapshot.remainingIds).size !== snapshot.remainingIds.length ||
        snapshot.remainingIds.some(id => !byId.has(id)) ||
        (snapshot.previousId !== null && !byId.has(snapshot.previousId)) ||
        snapshot.remainingIds.includes(snapshot.previousId))) {
      throw new Error('Invalid question cycle');
    }
    let remaining = snapshot ? snapshot.remainingIds.map(id => byId.get(id)) : [];
    let previousQuestion = snapshot ? byId.get(snapshot.previousId) : undefined;
    return {
      snapshot() {
        return { remainingIds: remaining.map(q => q.id), previousId: previousQuestion?.id ?? null };
      },
      draw(size) {
        if (!Number.isFinite(size) || size <= 0 || !pool.length) return [];
        const count = Math.min(Math.floor(size), pool.length);
        const selected = [], ids = new Set(), lexemes = new Set();
        while (selected.length < count) {
          if (!remaining.length) remaining = shuffle(pool, random);
          const batch = selectBalanced(remaining, count - selected.length, lexemes, ids, random);
          if (!batch.length) break;
          const ordered = interleave(batch, random, selected.at(-1) || previousQuestion);
          for (const q of ordered) { selected.push(q); ids.add(q.id); lexemes.add(lexemeKey(q)); }
          const batchIds = new Set(batch.map(q => q.id));
          remaining = remaining.filter(q => !batchIds.has(q.id));
          // Repeated lexemes stay unused for the next session, even at a cycle boundary.
          if (remaining.length && !remaining.some(q => !lexemes.has(lexemeKey(q)) && !ids.has(q.id))) break;
        }
        previousQuestion = selected.at(-1) || previousQuestion;
        return selected;
      }
    };
  }

  function orderOptions(question, random = Math.random) {
    return question.shuffleOptions === false ? [...question.options] : shuffle(question.options, random);
  }

  function recordAnswer(state, questionId, optionId) {
    const question = state.shuffledQuestions[state.currentIndex];
    if (!state.active || !question || question.id !== questionId || state.answers[state.currentIndex]) return null;
    const selectedOption = question.options.find(option => option.id === optionId);
    if (!selectedOption) return null;
    const answer = { qId: question.id, question, selectedOption, correct: selectedOption.isCorrect === true };
    state.answers[state.currentIndex] = answer;
    return answer;
  }

  function advanceQuestion(state, questionId) {
    const question = state.shuffledQuestions[state.currentIndex];
    const answer = state.answers[state.currentIndex];
    if (!state.active || !question || (questionId !== undefined && questionId !== question.id) || answer?.qId !== question.id) return false;
    state.currentIndex++;
    return true;
  }

  return { shuffle, createQuestionCycle, orderOptions, recordAnswer, advanceQuestion, lexemeKey, formKey };
})();

if (typeof module !== 'undefined') module.exports = TrainerCore;
