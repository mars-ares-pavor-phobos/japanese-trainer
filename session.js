// Only IDs cross the storage boundary. Content and scoring always come from the bank.
const TrainerSession = (() => {
  const KEY = 'plain-form-trainer.session';
  const VERSION = 1;
  const TOPICS = ['all', 'verb', 'i-adj', 'na-adj', 'noun'];
  const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const unique = values => new Set(values).size === values.length;

  function bankVersion(questions) {
    let hash = 2166136261;
    for (const character of JSON.stringify(questions)) {
      hash = Math.imul(hash ^ character.codePointAt(0), 16777619) >>> 0;
    }
    return `${questions.length}-${hash.toString(16)}`;
  }

  function encode({ language, topic, mode = 'masu', cycles, state }, bank) {
    return JSON.stringify({ version:VERSION, bank, language, topic, mode,
      cycles:Object.fromEntries([...cycles].map(([key, cycle]) => [key, cycle.snapshot()])),
      session:state.shuffledQuestions.length ? {
        status:state.status, topic:state.topic, lesson:state.lesson || null, mode:state.mode || 'masu', currentIndex:state.currentIndex,
        questionIds:state.shuffledQuestions.map(q => q.id),
        optionOrders:state.shuffledQuestions.map(q => state.optionOrders.get(q.id).map(o => o.id)),
        answers:state.answers.map(answer => ({ qId:answer.qId, optionId:answer.selectedOption.id }))
      } : null
    });
  }

  function decode(raw, questions, bank, core, {lessons = {}, transformQuestion = q => q, cycleQuestions = questions, compatibleBanks = []} = {}) {
    if (raw === null) return { kind:'empty' };
    try {
      if (typeof raw !== 'string' || raw.length > 100000) throw new Error('Size');
      const data = JSON.parse(raw);
      if (!object(data)) throw new Error('Envelope');
      if (data.version !== VERSION || (data.bank !== bank && !compatibleBanks.includes(data.bank))) return { kind:'outdated' };
      if (!['masu','dictionary'].includes(data.mode) || !['ru','uz'].includes(data.language) || !TOPICS.includes(data.topic) || !object(data.cycles)) throw new Error('Preferences');
      const cycles = new Map();
      for (const [topic, snapshot] of Object.entries(data.cycles)) {
        if (!TOPICS.includes(topic) || !object(snapshot)) throw new Error('Cycle');
        const pool = cycleQuestions.filter(q => topic === 'all' || q.partOfSpeech === topic);
        cycles.set(topic, core.createQuestionCycle(pool, Math.random, snapshot));
      }
      let state = null;
      if (data.session !== null) {
        const s = data.session;
        if (!object(s) || !['masu','dictionary'].includes(s.mode) || !['in-progress','completed','exited'].includes(s.status) || !TOPICS.includes(s.topic)) throw new Error('Session');
        if (!Array.isArray(s.questionIds) || s.questionIds.length < 1 || s.questionIds.length > 20 || !unique(s.questionIds)) throw new Error('Questions');
        const byId = new Map(questions.map(q => [q.id,q]));
        const selected = s.questionIds.map(id => byId.has(id) ? transformQuestion(byId.get(id),s.mode) : undefined);
        if (selected.some(q => !q || (s.topic !== 'all' && q.partOfSpeech !== s.topic)) || (!s.lesson && !unique(selected.map(core.lexemeKey)))) throw new Error('Topic/lexemes');
        if (s.lesson !== null) {
          if (typeof s.lesson !== 'string' || !Object.hasOwn(lessons,s.lesson) ||
              JSON.stringify(s.questionIds) !== JSON.stringify(lessons[s.lesson])) throw new Error('Lesson');
        } else if (!cycles.has(s.topic) || cycles.get(s.topic).snapshot().previousId !== s.questionIds.at(-1)) throw new Error('Session cycle');
        const size = selected.length;
        if (!Number.isInteger(s.currentIndex) || s.currentIndex < 0 || s.currentIndex > size || !Array.isArray(s.answers)) throw new Error('Position');
        if (s.status === 'completed') {
          if (s.currentIndex !== size || s.answers.length !== size) throw new Error('Completion');
        } else if (s.currentIndex >= size || ![s.currentIndex,s.currentIndex + 1].includes(s.answers.length)) throw new Error('Answer continuity');
        if (s.status === 'in-progress' && !s.lesson && data.topic !== s.topic) throw new Error('Active topic');
        if (!Array.isArray(s.optionOrders) || s.optionOrders.length !== size) throw new Error('Orders');
        const optionOrders = new Map(selected.map((q,i) => {
          const ids = s.optionOrders[i];
          if (!Array.isArray(ids) || ids.length !== q.options.length || !unique(ids) || ids.some(id => !q.options.some(o => o.id === id))) throw new Error('Options');
          if (q.shuffleOptions === false && ids.some((id,j) => id !== q.options[j].id)) throw new Error('Fixed order');
          return [q.id, ids.map(id => q.options.find(o => o.id === id))];
        }));
        const answers = s.answers.map((answer,i) => {
          const q = selected[i];
          if (!object(answer) || answer.qId !== q.id) throw new Error('Answer question');
          const option = q.options.find(o => o.id === answer.optionId);
          if (!option) throw new Error('Answer option');
          return { qId:q.id, question:q, selectedOption:option, correct:option.isCorrect === true };
        });
        state = { active:s.status === 'in-progress', status:s.status, topic:s.topic, lesson:s.lesson, mode:s.mode,
          currentIndex:s.currentIndex, shuffledQuestions:selected, optionOrders, answers, currentOptions:[] };
      }
      return { kind:'ok', language:data.language, topic:data.topic, mode:data.mode, cycles, state };
    } catch (_) {
      return { kind:'invalid' };
    }
  }

  // Access to localStorage itself can throw, even before getItem is called.
  function createStore(getStorage) {
    return {
      read() {
        try { return { ok:true, raw:getStorage().getItem(KEY) }; }
        catch (_) { return { ok:false }; }
      },
      write(raw) {
        try { getStorage().setItem(KEY,raw); return true; }
        catch (_) {
          // Avoid resurrecting an older attempt if writes fail but removal works.
          try { getStorage().removeItem(KEY); } catch (_) { /* Warning is shown by the UI. */ }
          return false;
        }
      },
      clear() {
        try { getStorage().removeItem(KEY); return true; }
        catch (_) { return false; }
      }
    };
  }
  return { KEY, VERSION, bankVersion, encode, decode, createStore };
})();
if (typeof module !== 'undefined') module.exports = TrainerSession;
