let currentLang = 'ru';

const LABEL_SMALL_WORDS = {
  ru: new Set('в во на о об обо по при под подо над надо к ко с со у от ото до за из из-за из-под без для про через между среди перед после около возле внутри вне вдоль вокруг против ради сквозь согласно благодаря вопреки и а но или либо да зато однако чтобы что как если когда пока хотя поскольку не ни же ли бы б ведь лишь только'.split(' ')),
  uz: new Set('va hamda bilan uchun haqida to‘g‘risida bo‘yicha kabi singari orqali sari qadar ko‘ra keyin so‘ng oldin avval ham emas faqat xolos esa deb ta ni ga da dan'.split(' '))
};

function titleCaseLabel(value, lang = currentLang) {
  let index = 0;
  return value.split(/(<[^>]+>)/g).map((part, partIndex) => partIndex % 2 ? part :
    part.replace(/[\p{Script=Latin}\p{Script=Cyrillic}]+(?:[‘’ʼ'‐‑-][\p{Script=Latin}\p{Script=Cyrillic}]+)*/gu, word => {
      const first = index++ === 0;
      if (/^[IVXLCDM]+$/.test(word)) return word;
      const lower = word.toLowerCase();
      if (LABEL_SMALL_WORDS[lang].has(lower)) return first ? lower[0].toUpperCase() + lower.slice(1) : lower;
      return lower.replace(/(^|[-‐‑])([\p{Script=Latin}\p{Script=Cyrillic}])/gu, (_, separator, letter) => separator + letter.toUpperCase());
    })
  ).join('');
}

const i18n = {
  "answer_delay_note": {
    "ru": "После ответа прочитайте объяснение. Переход далее станет доступен через 5 секунд.",
    "uz": "Javobdan so‘ng izohni o‘qing. Keyingi savolga 5 soniyadan keyin o‘tishingiz mumkin."
  },
  "lesson_back": {
    "ru": "Вернуться к Уроку",
    "uz": "Darsga Qaytish"
  },
  "document_title": {
    "ru": "Тренажер Простой Формы · 普通形",
    "uz": "Oddiy Shakl Mashqlari · 普通形"
  },
  "app_subtitle": {
    "ru": "Тренажер Простой Формы",
    "uz": "Oddiy Shakl Mashqlari"
  },
  "nav_theory": {
    "ru": "Теория",
    "uz": "Nazariya"
  },
  "nav_practice": {
    "ru": "Практика",
    "uz": "Mashq"
  },
  "nav_analytics": {
    "ru": "Результаты",
    "uz": "Natijalar"
  },
  "practice_ready_title": {
    "ru": "Выбор Темы",
    "uz": "Mavzuni Tanlash"
  },
  "th_g1_title": {
    "ru": "Глаголы I Группы",
    "uz": "I Guruh Fe’llari"
  },
  "th_g2_title": {
    "ru": "Глаголы II Группы",
    "uz": "II Guruh Fe’llari"
  },
  "th_g3_title": {
    "ru": "Глаголы III Группы",
    "uz": "Noto‘g‘ri Fe’llar"
  },
  "th_iadj_title": {
    "ru": "い-Прилагательные",
    "uz": "い-Sifatlar"
  },
  "th_naadj_title": {
    "ru": "な-Прилагательные",
    "uz": "な-Sifatlar"
  },
  "th_noun_title": {
    "ru": "Существительные",
    "uz": "Otlar"
  },
  "practice_desc": {
    "ru": "Выберите тему. После ответа откроется правило образования формы.",
    "uz": "Mavzuni tanlang. Javobdan so‘ng shaklning yasalish qoidasi ko‘rsatiladi."
  },
  "practice_start_btn": {
    "ru": "Начать Практику",
    "uz": "Mashqni Boshlash"
  },
  "next_btn": {
    "ru": "Далее",
    "uz": "Keyingi"
  },
  "finish_btn": {
    "ru": "Завершить",
    "uz": "Yakunlash"
  },
  "analytics_empty_title": {
    "ru": "Результаты Тренировок",
    "uz": "Mashq Natijalari"
  },
  "analytics_empty": {
    "ru": "Результат и разбор ошибок появятся после первых ответов.",
    "uz": "Birinchi javoblardan so‘ng natija va xatolar tahlili ko‘rsatiladi."
  },
  "analytics_empty_cta": {
    "ru": "Начать Практику",
    "uz": "Mashqni Boshlash"
  },
  "score_label": {
    "ru": "Верных Ответов",
    "uz": "To‘g‘ri Javob"
  },
  "analytics_title": {
    "ru": "Результат Тренировки",
    "uz": "Mashq Natijasi"
  },
  "stat_correct": {
    "ru": "Верно",
    "uz": "To‘g‘ri"
  },
  "stat_wrong": {
    "ru": "Ошибки",
    "uz": "Xatolar"
  },
  "breakdown_title": {
    "ru": "Результаты по Темам",
    "uz": "Mavzular bo‘yicha Natijalar"
  },
  "mistakes_title": {
    "ru": "Разбор Ошибок",
    "uz": "Xatolar Tahlili"
  },
  "restart_btn": {
    "ru": "Выбрать Тему",
    "uz": "Mavzuni Tanlash"
  },
  "q_label": {
    "ru": "Выберите Простую Форму",
    "uz": "Oddiy Shaklni Tanlang"
  },
  "exp_correct": {
    "ru": "Верно",
    "uz": "To‘g‘ri"
  },
  "exp_wrong": {
    "ru": "Неверно",
    "uz": "Noto‘g‘ri"
  },
  "choice_correct": {
    "ru": "Правильно",
    "uz": "To‘g‘ri"
  },
  "choice_yours": {
    "ru": "Ваш Ответ",
    "uz": "Sizning Javobingiz"
  },
  "fb_selected": {
    "ru": "Ваш Ответ",
    "uz": "Sizning Javobingiz"
  },
  "fb_answer": {
    "ru": "Правильная Форма",
    "uz": "To‘g‘ri Shakl"
  },
  "fb_reminder": {
    "ru": "Правило",
    "uz": "Qoida"
  },
  "result_perfect": {
    "ru": "Все ответы верны.",
    "uz": "Barcha javoblar to‘g‘ri."
  },
  "filter_label": {
    "ru": "Тема Тренировки",
    "uz": "Mashq Mavzusi"
  },
  "filter_all": {
    "ru": "Все Темы",
    "uz": "Barcha Mavzular"
  },
  "filter_verb": {
    "ru": "Глаголы",
    "uz": "Fe’llar"
  },
  "filter_iadj": {
    "ru": "い-Прилагательные",
    "uz": "い-Sifatlar"
  },
  "filter_naadj": {
    "ru": "な-Прилагательные",
    "uz": "な-Sifatlar"
  },
  "filter_noun": {
    "ru": "Существительные",
    "uz": "Otlar"
  },
  "hero_title": {
    "ru": "Простая Форма",
    "uz": "Oddiy Shakl"
  },
  "practice_empty": {
    "ru": "В этой теме нет заданий. Выберите другую тему.",
    "uz": "Bu mavzuda topshiriq yo‘q. Boshqa mavzuni tanlang."
  },
  "practice_cycle_note": {
    "ru": "Вопросы общей тренировки охватывают разные слова. Задания повторяются после завершения цикла выбранной темы. В браузере сохраняется последняя тренировка.",
    "uz": "Umumiy mashq savollari turli so‘zlarni qamrab oladi. Mavzudagi barcha savollar tugagach, topshiriqlar takrorlanadi. Brauzerda oxirgi mashq saqlanadi."
  },
  "skip_link": {
    "ru": "К Содержанию",
    "uz": "Asosiy Mazmunga O‘tish"
  },
  "nav_label": {
    "ru": "Разделы Приложения",
    "uz": "Ilova Bo‘limlari"
  },
  "lang_label": {
    "ru": "Язык Интерфейса",
    "uz": "Interfeys Tili"
  },
  "progress_label": {
    "ru": "Число Ответов",
    "uz": "Berilgan Javoblar Soni"
  },
  "lesson_intro": {
    "ru": "Глаголы, прилагательные и существительные в обычной речи.",
    "uz": "Oddiy nutqda fe’llar, sifatlar va otlar."
  },
  "lesson_label": {
    "ru": "Урок",
    "uz": "Dars"
  },
  "question_details": {
    "ru": "Пояснение к Заданию",
    "uz": "Topshiriq Izohi"
  },
  "session_details": {
    "ru": "О Тренировке",
    "uz": "Mashq haqida"
  },
  "back_lesson": {
    "ru": "К Уроку",
    "uz": "Darsga"
  },
  "session_resume": {
    "ru": "Продолжить",
    "uz": "Davom Ettirish"
  },
  "session_start_over": {
    "ru": "Начать Заново",
    "uz": "Qaytadan Boshlash"
  },
  "session_exit": {
    "ru": "Выйти из Тренировки",
    "uz": "Mashqdan Chiqish"
  },
  "session_recovered": {
    "ru": "Сохранённая Тренировка",
    "uz": "Saqlangan Mashq"
  },
  "session_running": {
    "ru": "Текущая Тренировка",
    "uz": "Joriy Mashq"
  },
  "session_partial": {
    "ru": "Промежуточный Результат",
    "uz": "Oraliq Natija"
  },
  "session_exited": {
    "ru": "Незавершённая Тренировка",
    "uz": "Tugallanmagan Mashq"
  },
  "session_help": {
    "ru": "При повторном запуске ответы текущей тренировки удаляются. При выходе сохраняется неполный результат.",
    "uz": "Qaytadan boshlanganda joriy mashqning javoblari o‘chiriladi. Mashqdan chiqilganda tugallanmagan natija saqlanadi."
  },
  "session_partial_note": {
    "ru": "Результат рассчитан по полученным ответам.",
    "uz": "Natija berilgan javoblar asosida hisoblangan."
  },
  "storage_unavailable": {
    "ru": "Не удалось сохранить прогресс. После обновления или закрытия страницы ответы могут быть потеряны. Тренировку можно продолжить в этой вкладке.",
    "uz": "Javoblarni saqlab bo‘lmadi. Sahifa yangilansa yoki yopilsa, ular yo‘qolishi mumkin. Mashqni shu oynada davom ettirishingiz mumkin."
  },
  "result_review": {
    "ru": "Повторите формы из разбора ошибок.",
    "uz": "Xatolar tahlilidagi shakllarni takrorlang."
  },
  "storage_invalid": {
    "ru": "Сохранённую тренировку не удалось открыть. Выберите тему и начните заново.",
    "uz": "Saqlangan mashqni ochib bo‘lmadi. Mavzuni tanlab, qaytadan boshlang."
  },
  "storage_outdated": {
    "ru": "Сохранённая тренировка несовместима с текущей версией заданий. Выберите тему и начните заново.",
    "uz": "Saqlangan mashq topshiriqlarning joriy versiyasiga mos kelmaydi. Mavzuni tanlab, qaytadan boshlang."
  }
};

const posNames = {
  "verb": {
    "ru": "Глаголы",
    "uz": "Fe’llar"
  },
  "i-adj": {
    "ru": "い-Прилагательные",
    "uz": "い-Sifatlar"
  },
  "na-adj": {
    "ru": "な-Прилагательные",
    "uz": "な-Sifatlar"
  },
  "noun": {
    "ru": "Существительные",
    "uz": "Otlar"
  }
};

const lessonQuestionIds = {group1:[2], group2:[12,20], group3:[5], iadj:[31,28,26,25], naadj:[35,36,37,38], noun:[47,48,49,50]};
let selectedLesson = 'group1';

const theorySections = [
  {id:'theory-group1', titleKey:'th_g1_title'},
  {id:'theory-group2', titleKey:'th_g2_title'},
  {id:'theory-group3', titleKey:'th_g3_title'},
  {id:'theory-iadj', titleKey:'th_iadj_title'},
  {id:'theory-naadj', titleKey:'th_naadj_title'},
  {id:'theory-noun', titleKey:'th_noun_title'}
];

const uiState = { analyticsRingTimer:null, analyticsBarsTimer:null, analyticsRevision:0, answerTimer:null };
const renderedLessons = new Map();
const SCORE_RING_CIRCUMFERENCE = 2 * Math.PI * 72;

function t(key){ return i18n[key]?.[currentLang] || key; }

function copyForLang(ru, uz){
  return currentLang === 'ru' ? ru : uz;
}

function prefersReducedMotion(){
  return typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function scrollAppToTop(){
  window.scrollTo({ top:0, behavior:'instant' });
}

function setDisplay(target, isVisible, display = 'block'){
  const el = typeof target === 'string' ? document.getElementById(target) : target;
  if(el) el.style.display = isVisible ? display : 'none';
}

function pluralRu(count, one, few, many){
  const mod10 = count % 10;
  const mod100 = count % 100;
  if(mod10 === 1 && mod100 !== 11) return one;
  if(mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

function renderTheoryMap(){
  document.getElementById('lesson-select').innerHTML = theorySections.map((section, index) =>
    `<option value="${section.id.replace('theory-', '')}">${index + 1} / ${theorySections.length} · ${t(section.titleKey)}</option>`
  ).join('');
  document.getElementById('lesson-select').value = selectedLesson;
}

function selectLesson(lesson, { scroll = false } = {}){
  if (!lessonQuestionIds[lesson]) return;
  selectedLesson = lesson;
  document.querySelectorAll('.theory-group').forEach(group => {
    group.hidden = group.id !== 'theory-' + lesson;
  });
  buildTheoryTables();
  document.getElementById('lesson-select').value = lesson;
  updateLessonActions();
  if (scroll) focusLessonStart();
}

function focusLessonStart() {
  const region = document.getElementById('theory-' + selectedLesson);
  const heading = region.querySelector('.theory-section-heading');
  heading.focus({preventScroll:true});
  region.scrollIntoView({block:'start', behavior:'instant'});
}

function updateLessonActions(){
  document.querySelectorAll('[data-lesson-practice]').forEach(button => {
    if (TrainerVerbs.byId[button.dataset.lessonPractice]) return;
    const count = lessonQuestionIds[button.dataset.lessonPractice].length;
    button.textContent = practiceState.active
      ? copyForLang('Продолжить Практику', 'Mashqni Davom Ettirish')
      : copyForLang(`Упражнение · ${count} ${pluralRu(count,'Вопрос','Вопроса','Вопросов')}`, `Mashq · ${count} ta Savol`);
  });
}

function practiceFocusMetaText() {
  const count = questionsForTopic().length;
  const sessionCount = Math.min(SESSION_SIZE, count);
  return titleCaseLabel(copyForLang(
    sessionCount + ' ' + pluralRu(sessionCount, 'вопрос', 'вопроса', 'вопросов') + ' за тренировку · ' + count + ' в теме',
    'Mashqda ' + sessionCount + ' ta savol · mavzuda ' + count + ' ta'
  ));
}

function updatePracticeFocusMeta(){
  const meta = document.getElementById('practice-focus-meta');
  if(meta) meta.textContent = practiceFocusMetaText();
}

function analyticsSessionMetaText(total){
  if (practiceState.status !== 'completed') return copyForLang(
    `Отвечено: ${total} / ${practiceState.shuffledQuestions.length} · Тренировка не Завершена`,
    `Javoblar: ${total} / ${practiceState.shuffledQuestions.length} · Mashq Yakunlanmagan`);
  return currentLang === 'ru'
    ? `Тренировка Завершена: ${total} ${pluralRu(total,'Вопрос','Вопроса','Вопросов')}`
    : `Mashq Yakunlandi: ${total} ta Savol`;
}

function setPracticeFiltersDisabled(disabled){
  document.querySelectorAll('.filter-chip').forEach(btn => {
    btn.disabled = disabled;
  });
  VerbLessons.syncPracticeButtons();
}

function clearAnalyticsTimers(){
  uiState.analyticsRevision++;
  if(uiState.analyticsRingTimer !== null){
    clearTimeout(uiState.analyticsRingTimer);
    uiState.analyticsRingTimer = null;
  }
  if(uiState.analyticsBarsTimer !== null){
    clearTimeout(uiState.analyticsBarsTimer);
    uiState.analyticsBarsTimer = null;
  }
}

function resetAnalyticsView(){
  clearAnalyticsTimers();
  setDisplay('analytics-results', false);
  setDisplay('analytics-empty', true);
  document.getElementById('score-percent').textContent = '0%';
  document.getElementById('stat-correct').textContent = '0';
  document.getElementById('stat-wrong').textContent = '0';
  document.getElementById('analytics-subtitle').textContent = '';
  document.getElementById('analytics-session-meta').textContent = '';
  document.getElementById('breakdown-rows').innerHTML = '';
  document.getElementById('mistakes-list').innerHTML = '';
  setDisplay('mistakes-section', false);

  const ring = document.getElementById('score-ring-fill');
  ring.style.strokeDasharray = SCORE_RING_CIRCUMFERENCE;
  ring.style.strokeDashoffset = SCORE_RING_CIRCUMFERENCE;
}

function keepJapaneseWords(scope) {
  const prose = '.lesson-rule p, .reference-intro, .reference-legend, .tip-box > span, .verb-note, .verb-steps li > span, .question-context, .exp-note > div, .mk-note';
  scope.querySelectorAll(prose).forEach(element => {
    if (element.dataset.japaneseWrapped === 'true') return;
    element.dataset.japaneseWrapped = 'true';
    const fragment = document.createDocumentFragment();
    let word = null;
    const appendJapanese = node => {
      if (!word) {
        word = document.createElement('span');
        word.className = 'jp-word';
        word.lang = 'ja';
        fragment.append(word);
      }
      word.append(node);
    };
    // Keep ruby and its following kana together. Existing wrappers stay intact.
    for (const node of [...element.childNodes]) {
      if (node.nodeType === Node.TEXT_NODE) {
        const parts = node.textContent.split(/([\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}々ー]+)/gu);
        parts.forEach((part, index) => {
          if (!part) return;
          if (index % 2) appendJapanese(document.createTextNode(part));
          else { word = null; fragment.append(part); }
        });
      } else if (node.nodeName === 'RUBY') appendJapanese(node);
      else { word = null; fragment.append(node); }
    }
    element.replaceChildren(fragment);
  });
}

function markJapaneseContent(scope = document){
  keepJapaneseWords(scope);
  scope.querySelectorAll('ruby, rt, .jp, .dialogue-bubble, .option-text, .logo-icon').forEach(el => el.setAttribute('lang','ja'));
}

function setLang(lang){
  if (!['ru', 'uz'].includes(lang)) return;
  if (!initializingSession && currentLang === lang) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  document.title = t('document_title');
  document.querySelectorAll('.lang-btn').forEach(b => {
    const isActive = b.dataset.lang === lang;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if(i18n[k]) {
      const isLabel = el.matches('button, summary, label, h1, h2, h3, h4, .settings-label, .score-label, .stat-lbl, .en-title, .skip-link') || el.closest('.nav-btn, .theory-section-heading, h4');
      el.innerHTML = isLabel ? titleCaseLabel(i18n[k][lang]) : i18n[k][lang];
    }
  });
  document.querySelectorAll('[data-i18n-label]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nLabel));
  });
  renderTheoryMap();
  selectLesson(selectedLesson);
  updateLessonActions();
  updatePracticeFocusMeta();
  if(practiceState.active && practiceState.currentIndex < practiceState.shuffledQuestions.length){
    renderQuestion();
  }
  if(document.getElementById('screen-analytics').classList.contains('visible')){
    renderAnalytics();
  }
  markJapaneseContent();
  renderSessionControls();
  saveSession();
}

function showScreen(name){
  const target = document.getElementById('screen-'+name);
  if(!target) return;
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('visible'));
  document.querySelectorAll('.nav-btn').forEach(b => {
    const isActive = b.getAttribute('data-nav') === name;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
  target.classList.add('visible');
  clearAnswerTimer();
  if (name === 'practice' && getRecordedAnswer()) updateNextButton();
  updateLessonActions();
  if (name !== 'analytics') clearAnalyticsTimers();
  else renderAnalytics();
  renderSessionControls();
  scrollAppToTop();
}

function buildTheoryTables(){
  const body = document.getElementById(selectedLesson + '-body');
  if (renderedLessons.get(selectedLesson) !== currentLang) {
    body.innerHTML = VerbLessons.render(selectedLesson);
    renderedLessons.set(selectedLesson, currentLang);
    markJapaneseContent(body);
  }
  VerbLessons.syncPracticeButtons();
}

const SESSION_SIZE = 20;
const POS_TYPES = ['verb', 'i-adj', 'na-adj', 'noun'];
const questionCycles = new Map();

function findCorrectOption(question) {
  return question.options.find(option => option.isCorrect);
}

function buildFeedbackHtml(q){
  const correctOption = findCorrectOption(q);
  const reminder = q.verbId ? VerbLessons.steps(TrainerVerbs.byId[q.verbId], TrainerVerbs.formIndex(q), q.sourceMode) : q.explanation[currentLang];
  const parts = [];

  parts.push(`
    <div class="exp-row">
      <span class="exp-kicker">${t('fb_answer')}</span>
      <span class="exp-answer jp">${correctOption.html}</span>
    </div>
  `);

  if(reminder){
    parts.push(`
      <div class="exp-note">
        <span class="exp-note-label">${t('fb_reminder')}</span>
        <div>${reminder}</div>
      </div>
    `);
  }

  return `<div class="exp-stack">${parts.join('')}</div>`;
}

function buildMistakeCardHtml(answer){
  const correctOption = findCorrectOption(answer.question);
  const q = answer.question;
  const reminder = q.verbId ? VerbLessons.steps(TrainerVerbs.byId[q.verbId], TrainerVerbs.formIndex(q), q.sourceMode) : q.explanation[currentLang];

  return `
    <div class="mistake-card">
      <div class="mk-q">${answer.question.prompt[currentLang]}</div>
      <div class="mk-context jp">${answer.question.dialogue.map(line => line.text.replace('____', '＿')).join('<br>')}</div>
      <div class="mk-answer">
        <span class="mk-kicker">${t('fb_selected')}</span>
        <span class="jp">${answer.selectedOption?.html || ''}</span>
      </div>
      <div class="mk-answer">
        <span class="mk-kicker">${t('fb_answer')}</span>
        <span class="jp">${correctOption.html}</span>
      </div>
      <div class="mk-note">${reminder}</div>
    </div>
  `;
}

let activeFilter = 'all';
let lessonVerbId = null;
const practiceState = {
  active:false,
  status:'idle',
  topic:'all',
  lesson:null,
  mode:'masu',
  currentIndex:0,
  answers:[],
  shuffledQuestions:[],
  currentOptions:[],
  optionOrders:new Map()
};

const recoveryQuestions = [...allQuestions, ...TrainerVerbs.verbs.flatMap(TrainerVerbs.practice)];
const recoveryQuestionById = new Map(recoveryQuestions.map(q => [q.id, q]));
const recoveryLessons = {...lessonQuestionIds, ...Object.fromEntries(TrainerVerbs.verbs.map(v => [v.id, recoveryQuestions.filter(q => q.verbId === v.id && q.tags.includes('lesson')).map(q => q.id)]))};
const sessionBankVersion = TrainerSession.bankVersion(recoveryQuestions);
const recoveryCatalog = {
  lessons:recoveryLessons, cycleQuestions:allQuestions,
  legacyLessons:{iadj:[26,29,34], naadj:[37,42,46], noun:[91,52,49]},
  // This copy update keeps the same question IDs, answers and option IDs.
  compatibleBanks:['440-920ae5ed', '440-43d9a45', '440-fd4dad5d', '440-ae8dcf1d', '440-2d47f139'],
  transformQuestion:q => q.verbId ? TrainerVerbs.question(q,'masu') : q
};
const sessionStore = TrainerSession.createStore(() => window.localStorage);
let recoveryPending = false;
let initializingSession = true;
let storageNotice = '';

function renderSessionControls() {
  const active = practiceState.active;
  const inPractice = document.getElementById('screen-practice').classList.contains('visible');
  document.getElementById('session-controls').classList.toggle('is-compact',active && !recoveryPending && inPractice);
  setDisplay('session-controls', active);
  setDisplay('practice-start', !active);
  setDisplay('practice-active', active && !recoveryPending);
  setPracticeFiltersDisabled(active);
  document.getElementById('session-heading').textContent = t(recoveryPending ? 'session_recovered' : 'session_running');
  const lessonVerb = TrainerVerbs.byId[practiceState.lesson];
  const lessonSection = theorySections.find(section => section.id === 'theory-' + practiceState.lesson);
  const topic = lessonVerb ? lessonVerb.masu.reading : lessonSection ? t(lessonSection.titleKey)
    : (posNames[practiceState.topic]?.[currentLang] || t('filter_all'));
  document.getElementById('session-summary').textContent = topic + ' · ' + copyForLang(
    `Вопрос ${practiceState.currentIndex + 1} / ${practiceState.shuffledQuestions.length} · Ответов: ${practiceState.answers.length}`,
    `Savol ${practiceState.currentIndex + 1} / ${practiceState.shuffledQuestions.length} · Javoblar: ${practiceState.answers.length}`);
  setDisplay('resume-btn', recoveryPending || !document.getElementById('screen-practice').classList.contains('visible'), 'inline-flex');
  setDisplay('storage-notice', Boolean(storageNotice));
  document.getElementById('storage-notice').textContent = storageNotice ? t(storageNotice) : '';
}

function saveSession() {
  if (initializingSession) return;
  let saved = false;
  try {
    saved = sessionStore.write(TrainerSession.encode({language:currentLang, topic:activeFilter, mode:'masu', cycles:questionCycles, state:practiceState}, sessionBankVersion));
  } catch (_) { /* Keep the in-memory attempt usable if saving fails. */ }
  if (!saved) storageNotice = 'storage_unavailable';
  else if (storageNotice === 'storage_unavailable') storageNotice = '';
  renderSessionControls();
}

function restoreSession() {
  const stored = sessionStore.read();
  if (!stored.ok) { storageNotice = 'storage_unavailable'; return; }
  const restored = TrainerSession.decode(stored.raw, recoveryQuestions, sessionBankVersion, TrainerCore, recoveryCatalog);
  if (restored.kind === 'ok') {
    currentLang = restored.language;
    activeFilter = restored.topic;
    for (const [topic,cycle] of restored.cycles) questionCycles.set(topic,cycle);
    if (restored.state) {
      Object.assign(practiceState,restored.state, {mode: 'masu'});
      lessonVerbId = TrainerVerbs.byId[practiceState.lesson] ? practiceState.lesson : null;
      if (lessonVerbId) selectedLesson = 'group' + TrainerVerbs.byId[lessonVerbId].group;
      else if (practiceState.lesson) selectedLesson = practiceState.lesson;
      recoveryPending = practiceState.active;
    }
  } else if (restored.kind !== 'empty') {
    storageNotice = sessionStore.clear() ? 'storage_' + restored.kind : 'storage_unavailable';
  }
}

function resumeSession() {
  if (!practiceState.active) return;
  recoveryPending = false;
  showScreen('practice');
  renderQuestion();
  focusQuestion();
}

function exitSession() {
  if (!practiceState.active) return;
  practiceState.active = false;
  practiceState.status = 'exited';
  recoveryPending = false;
  saveSession();
  renderAnalytics();
  showScreen('practice');
  document.getElementById('start-btn').focus({preventScroll:true});
}

function getRecordedAnswer(index = practiceState.currentIndex){
  const answer = practiceState.answers[index];
  const question = practiceState.shuffledQuestions[index];
  if(!answer || !question || answer.qId !== question.id) return null;
  return answer;
}

function getOptionOrder(question){
  if(!question) return [];
  if(!practiceState.optionOrders.has(question.id)){
    practiceState.optionOrders.set(question.id, TrainerCore.orderOptions(question));
  }
  return practiceState.optionOrders.get(question.id);
}

function clearAnswerTimer() {
  if (uiState.answerTimer !== null) {
    clearTimeout(uiState.answerTimer);
    uiState.answerTimer = null;
  }
}

function updateNextButton() {
  clearAnswerTimer();
  const answer = getRecordedAnswer();
  const button = document.getElementById('next-btn');
  if (!answer || !practiceState.active) return;
  const remaining = TrainerCore.remainingAnswerDelay(answer);
  const ready = remaining === 0;
  button.disabled = !ready;
  const label = t(practiceState.currentIndex === practiceState.shuffledQuestions.length - 1 ? 'finish_btn' : 'next_btn');
  const text = ready ? label : copyForLang(`${label} через ${Math.ceil(remaining / 1000)} с`, `${label}: ${Math.ceil(remaining / 1000)} Soniya`);
  if (button.textContent !== text) button.textContent = text;
  if (!ready && !document.hidden && document.getElementById('screen-practice').classList.contains('visible')) {
    uiState.answerTimer = setTimeout(updateNextButton, Math.min(100, remaining));
  }
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) clearAnswerTimer();
  else updateNextButton();
});

function renderFeedbackState(question, isCorrect){
  const expBox = document.getElementById('explanation-box');
  const expTitle = document.getElementById('exp-title');
  const expText = document.getElementById('exp-text');

  expBox.classList.remove('correct-exp','wrong-exp');
  if(isCorrect){
    expBox.classList.add('show','correct-exp');
    expTitle.innerHTML = `<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg> ${t('exp_correct')}`;
  } else {
    expBox.classList.add('show','wrong-exp');
    expTitle.innerHTML = `<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> ${t('exp_wrong')}`;
  }
  expText.innerHTML = buildFeedbackHtml(question);
  markJapaneseContent(expBox);

  const nextBtn = document.getElementById('next-btn');
  nextBtn.classList.add('show');
  updateNextButton();

}

function renderAnswerState(answer){
  const allBtns = document.querySelectorAll('#options-container .option-btn');

  allBtns.forEach((button, index) => {
    const option = practiceState.currentOptions[index];
    const marker = button.querySelector('.marker');
    const status = button.querySelector('.option-status');
    const isSelected = option?.id === answer.selectedOption.id;

    button.disabled = true;
    button.classList.remove('correct','wrong');

    marker.textContent = '';
    if(status) status.textContent = '';

    if(option?.isCorrect){
      button.classList.add('correct');
      marker.innerHTML = '<svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
      if(status) status.textContent = t('choice_correct');
    }

    if(!answer.correct && isSelected){
      button.classList.add('wrong');
      marker.innerHTML = '<svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
      if(status) status.textContent = t('choice_yours');
    }
  });

  renderFeedbackState(answer.question, answer.correct);
}

function questionsForTopic(topic = activeFilter) {
  return allQuestions.filter(q => topic === 'all' || q.partOfSpeech === topic);
}

function buildSessionQuestions(topic = activeFilter) {
  if (!questionCycles.has(topic)) {
    questionCycles.set(topic, TrainerCore.createQuestionCycle(questionsForTopic(topic)));
  }
  return questionCycles.get(topic).draw(SESSION_SIZE).map(q => q.verbId ? TrainerVerbs.question(q) : q);
}

function toggleFilter(filter){
  if (practiceState.active || !['all', ...POS_TYPES].includes(filter)) return;
  activeFilter = filter;
  document.querySelectorAll('.filter-chip').forEach(b => {
    const isActive = b.getAttribute('data-filter') === filter;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
  updatePracticeFocusMeta();
  saveSession();
}

function startPractice(lesson = null) {
  if (practiceState.active) { resumeSession(); return; }
  if (lesson && !Object.hasOwn(recoveryLessons,lesson)) return;
  const sessionQuestions = lesson ? recoveryLessons[lesson].map(id => { const q = recoveryQuestionById.get(id); return q.verbId ? TrainerVerbs.question(q) : q; }) : buildSessionQuestions();
  if (!sessionQuestions.length) {
    document.getElementById('practice-focus-meta').textContent = t('practice_empty');
    return;
  }
  resetAnalyticsView();
  if (storageNotice !== 'storage_unavailable') storageNotice = '';
  showScreen('practice');
  practiceState.active = true;
  practiceState.status = 'in-progress';
  practiceState.mode = 'masu';
  lessonVerbId = TrainerVerbs.byId[lesson] ? lesson : null;
  practiceState.topic = lesson ? sessionQuestions[0].partOfSpeech : activeFilter;
  recoveryPending = false;
  practiceState.lesson = lesson;
  practiceState.currentIndex = 0;
  practiceState.answers = [];
  practiceState.shuffledQuestions = sessionQuestions;
  practiceState.currentOptions = [];
  practiceState.optionOrders = new Map(sessionQuestions.map(q => [q.id, TrainerCore.orderOptions(q)]));
  setPracticeFiltersDisabled(true);
  setDisplay('practice-start', false);
  setDisplay('practice-active', true);
  renderQuestion();
  saveSession();
  focusQuestion();
}

function focusQuestion() {
  document.getElementById('q-text').focus({ preventScroll: true });
  const top = document.querySelector('.practice-header').getBoundingClientRect().top + window.scrollY - 12;
  window.scrollTo({top:Math.max(0, top), behavior:'instant'});
}

function updateProgress() {
  const total = practiceState.shuffledQuestions.length;
  const answered = practiceState.answers.filter(Boolean).length;
  document.getElementById('progress-bar').style.width = total ? (answered / total * 100) + '%' : '0%';
  const track = document.getElementById('practice-progress');
  track.setAttribute('aria-valuemax', total);
  track.setAttribute('aria-valuenow', answered);
}

function renderQuestion(){
  clearAnswerTimer();
  const focusedOption = document.activeElement?.dataset.optionId;
  const idx = practiceState.currentIndex;
  const total = practiceState.shuffledQuestions.length;
  if(total === 0 || idx >= total){ finishPractice(); return; }
  const q = practiceState.shuffledQuestions[idx];
  const existingAnswer = getRecordedAnswer(idx);
  document.getElementById('answer-announcement').textContent = '';
  if (document.getElementById('next-btn').dataset.questionId !== String(q.id)) document.getElementById('question-details').open = Boolean(q.verbId);

  document.getElementById('q-counter').innerHTML = `<svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> ${idx+1} / ${total}`;
  updateProgress();

  const posLabel = q.verbId ? TrainerVerbs.groupLabel(TrainerVerbs.byId[q.verbId],currentLang) : posNames[q.partOfSpeech]?.[currentLang] || q.partOfSpeech;
  const posBadge = document.getElementById('q-pos-badge');
  posBadge.textContent = titleCaseLabel(posLabel);

  document.getElementById('q-label').innerHTML = `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg> ${t('q_label')}`;

  const dialogueEl = document.getElementById('q-dialogue');
  if(q.dialogue && !q.tags.includes('lesson')){
    const lines = q.dialogue;
    const isExample = lines.every(line => !line.speaker);
    dialogueEl.innerHTML = `<div class="${isExample ? 'example-scene' : 'dialogue-scene'}">${lines.map(line => `
      <div class="${line.speaker ? 'dialogue-line' : 'example-line'}">
        ${line.speaker ? `<div class="dialogue-avatar" aria-hidden="true">${line.speaker}</div>` : ''}
        <div class="dialogue-bubble">${line.text.replace('____', '<span class="blank" role="img" aria-label="' + copyForLang('пропуск', 'bo‘sh joy') + '">　</span>')}</div>
      </div>
    `).join('')}</div>`;
  } else {
    dialogueEl.innerHTML = '';
  }

  document.getElementById('q-text').innerHTML = q.prompt[currentLang];
  document.getElementById('q-context').innerHTML = q.context[currentLang];
  delete document.getElementById('q-context').dataset.japaneseWrapped;

  const container = document.getElementById('options-container');
  const questionOptions = getOptionOrder(q);
  practiceState.currentOptions = questionOptions;
  container.innerHTML = questionOptions.map(opt => `
    <button class="option-btn" type="button" data-question-id="${q.id}" data-option-id="${opt.id}">
      <span class="marker" aria-hidden="true"></span>
      <span class="option-main">
        <span class="option-text">${opt.html}</span>
        <span class="option-status"></span>
      </span>
    </button>
  `).join('');

  const expBox = document.getElementById('explanation-box');
  expBox.classList.remove('show','correct-exp','wrong-exp');
  document.getElementById('exp-title').innerHTML = '';
  document.getElementById('exp-text').innerHTML = '';
  const nextBtn = document.getElementById('next-btn');
  nextBtn.dataset.questionId = q.id;
  nextBtn.classList.remove('show');
  nextBtn.disabled = true;
  if(idx === total - 1){
    nextBtn.setAttribute('data-i18n','finish_btn');
    nextBtn.textContent = t('finish_btn');
  } else {
    nextBtn.setAttribute('data-i18n','next_btn');
    nextBtn.textContent = t('next_btn');
  }

  if(existingAnswer){
    renderAnswerState(existingAnswer);
  }

  markJapaneseContent(document.getElementById('screen-practice'));
  if (focusedOption) {
    const option = [...container.querySelectorAll('button')].find(button => button.dataset.optionId === focusedOption);
    (option?.disabled ? expBox : option)?.focus({ preventScroll:true });
  }
}

function selectOption(questionId, optionId) {
  if (recoveryPending || !document.getElementById('screen-practice').classList.contains('visible')) return;
  const answer = TrainerCore.recordAnswer(practiceState, questionId, optionId);
  if (!answer) return;
  saveSession();
  renderAnswerState(answer);
  updateProgress();
  document.getElementById('answer-announcement').textContent = t(answer.correct ? 'exp_correct' : 'exp_wrong') + '. ' + t('fb_answer') + ': ' + findCorrectOption(answer.question).html.replace(/<rt>[^<]*<\/rt>/g, '').replace(/<[^>]+>/g, '');
  const feedback = document.getElementById('explanation-box');
  feedback.focus({preventScroll:true});
  feedback.scrollIntoView({block:'nearest', behavior:'instant'});
}

function nextQuestion(questionId = Number(document.getElementById('next-btn').dataset.questionId)) {
  if (recoveryPending || !document.getElementById('screen-practice').classList.contains('visible')) return;
  if (!TrainerCore.advanceQuestion(practiceState, questionId)) return;
  clearAnswerTimer();
  document.getElementById('next-btn').disabled = true;
  renderQuestion();
  saveSession();
  if (practiceState.active) focusQuestion();
}

function finishPractice(){
  if (!practiceState.active || practiceState.currentIndex !== practiceState.shuffledQuestions.length || practiceState.answers.length !== practiceState.shuffledQuestions.length) return;
  practiceState.active = false;
  practiceState.status = 'completed';
  recoveryPending = false;
  saveSession();
  practiceState.currentOptions = [];
  setDisplay('practice-active', false);
  setDisplay('practice-start', true);
  setPracticeFiltersDisabled(false);
  showScreen('analytics');
  document.getElementById('analytics-title').focus({ preventScroll: true });
}

function renderAnalytics(){
  clearAnalyticsTimers();
  const revision = uiState.analyticsRevision;
  const answers = practiceState.answers.filter(Boolean);
  const total = answers.length;
  if(practiceState.shuffledQuestions.length === 0){
    resetAnalyticsView();
    return;
  }

  setDisplay('analytics-empty', false);
  setDisplay('analytics-results', true);
  setDisplay('lesson-back-btn', Boolean(lessonVerbId));
  setDisplay('results-theory-btn', !lessonVerbId);

  const correct = answers.filter(a=>a.correct).length;
  const wrong = total - correct;
  const pct = total ? Math.round((correct/total)*100) : 0;

  document.getElementById('score-percent').textContent = total ? pct + '%' : '…';
  document.getElementById('stat-correct').textContent = correct;
  document.getElementById('stat-wrong').textContent = wrong;

  const offset = SCORE_RING_CIRCUMFERENCE - (pct/100)*SCORE_RING_CIRCUMFERENCE;
  const ring = document.getElementById('score-ring-fill');
  ring.style.strokeDasharray = SCORE_RING_CIRCUMFERENCE;
  ring.style.strokeDashoffset = SCORE_RING_CIRCUMFERENCE;
  if(prefersReducedMotion()){
    ring.style.strokeDashoffset = offset;
  } else {
    uiState.analyticsRingTimer = setTimeout(() => {
      if (revision !== uiState.analyticsRevision) return;
      ring.style.strokeDashoffset = offset;
      uiState.analyticsRingTimer = null;
    }, 100);
  }

  const resultKey = pct === 100 ? 'result_perfect' : 'result_review';
  document.getElementById('analytics-title').textContent = t(practiceState.status === 'completed' ? 'analytics_title' : practiceState.status === 'exited' ? 'session_exited' : 'session_partial');
  document.getElementById('analytics-subtitle').textContent = t(practiceState.status === 'completed' ? resultKey : 'session_partial_note');
  setDisplay('results-restart', !practiceState.active);
  document.getElementById('analytics-session-meta').textContent = analyticsSessionMetaText(total);

  const breakdownEl = document.getElementById('breakdown-rows');
  const breakdownRows = [];
  POS_TYPES.forEach(pos => {
    const posAnswers = answers.filter(a => a.question.partOfSpeech === pos);
    if(posAnswers.length === 0) return;
    const posCorrect = posAnswers.filter(a => a.correct).length;
    const posTotal = posAnswers.length;
    const posPct = posTotal ? Math.round((posCorrect/posTotal)*100) : 0;
    breakdownRows.push(`
      <div class="breakdown-row">
        <span class="br-label">${posNames[pos][currentLang]}</span>
        <div class="br-bar-wrap"><div class="br-bar" style="width:0%" data-target="${posPct}"></div></div>
        <span class="br-val">${posCorrect}/${posTotal}</span>
      </div>`);
  });
  breakdownEl.innerHTML = breakdownRows.join('');
  if(prefersReducedMotion()){
    document.querySelectorAll('.br-bar').forEach(bar => {
      bar.style.width = bar.getAttribute('data-target')+'%';
    });
  } else {
    uiState.analyticsBarsTimer = setTimeout(() => {
      if (revision !== uiState.analyticsRevision) return;
      document.querySelectorAll('.br-bar').forEach(bar => {
        bar.style.width = bar.getAttribute('data-target')+'%';
      });
      uiState.analyticsBarsTimer = null;
    }, 200);
  }

  const mistakes = answers.filter(a => !a.correct);
  const mistakesSection = document.getElementById('mistakes-section');
  const mistakesList = document.getElementById('mistakes-list');
  if(mistakes.length > 0){
    setDisplay(mistakesSection, true);
    mistakesList.innerHTML = mistakes.map(buildMistakeCardHtml).join('');
  } else {
    setDisplay(mistakesSection, false);
  }

  markJapaneseContent(document.getElementById('screen-analytics'));
}

function restartAll(){
  practiceState.active = false;
  practiceState.status = 'idle';
  practiceState.lesson = null;
  lessonVerbId = null;
  recoveryPending = false;
  practiceState.currentIndex = 0;
  practiceState.answers = [];
  practiceState.shuffledQuestions = [];
  practiceState.currentOptions = [];
  practiceState.optionOrders = new Map();
  setPracticeFiltersDisabled(false);
  resetAnalyticsView();
  setDisplay('practice-active', false);
  setDisplay('practice-start', true);
  updatePracticeFocusMeta();
  showScreen('practice');
  saveSession();
  document.getElementById('start-btn').focus({ preventScroll: true });
}

function returnToLesson() {
  const v = TrainerVerbs.byId[lessonVerbId];
  if (!v) return;
  selectLesson('group'+v.group);
  showScreen('theory');
  // A saved drill may refer to a word beyond the compact examples in the lesson.
  let card = document.getElementById('lesson-'+v.id);
  if (!card) {
    const body = document.getElementById('group'+v.group+'-body');
    body.insertAdjacentHTML('beforeend', VerbLessons.card(v));
    card = document.getElementById('lesson-'+v.id);
    markJapaneseContent(card);
    VerbLessons.syncPracticeButtons();
  }
  card.setAttribute('tabindex', '-1');
  card.focus({preventScroll:true});
  card.scrollIntoView({behavior:'instant',block:'start'});
}

function openRelatedLesson() {
  if (lessonVerbId) return returnToLesson();
  const question = practiceState.active
    ? practiceState.shuffledQuestions[practiceState.currentIndex]
    : practiceState.answers.find(answer => !answer.correct)?.question;
  const lesson = question?.verbId ? 'group' + TrainerVerbs.byId[question.verbId].group
    : {'i-adj':'iadj', 'na-adj':'naadj', noun:'noun'}[question?.partOfSpeech];
  if (lesson) selectLesson(lesson);
  showScreen('theory');
  document.getElementById('lesson-select').focus({preventScroll:true});
}

// Prevent a held key from activating the control focused after a transition.
document.addEventListener('keydown', event => {
  if (event.repeat && ['Enter',' '].includes(event.key) && event.target.closest('button')) event.preventDefault();
});

const actionHandlers = {
  start: () => startPractice(),
  'lesson-back': returnToLesson,
  lesson: openRelatedLesson,
  next: button => nextQuestion(Number(button.dataset.questionId)),
  restart: restartAll,
  resume: resumeSession,
  exit: exitSession,
  practice: () => showScreen('practice')
};

let lastActivatedButton = null;
document.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button || button.disabled) return;
  if (event.detail > 1 && button === lastActivatedButton) return;
  lastActivatedButton = button;

  const {lang, nav, lessonPractice, quickLesson, filter, optionId, questionId, action} = button.dataset;
  if (lang) return setLang(lang);
  if (nav) return showScreen(nav);
  if (lessonPractice || quickLesson) return startPractice(lessonPractice || quickLesson);
  if (filter) return toggleFilter(filter);
  if (optionId) return selectOption(Number(questionId), optionId);
  actionHandlers[action]?.(button);
});

document.getElementById('lesson-select').addEventListener('change', event => selectLesson(event.target.value, {scroll:true}));
restoreSession();
setLang(currentLang);
document.querySelectorAll('.filter-chip').forEach(btn => {
  const active = btn.dataset.filter === activeFilter;
  btn.classList.toggle('active', active);
  btn.setAttribute('aria-pressed', String(active));
});
if (practiceState.active) showScreen('practice');
else if (practiceState.shuffledQuestions.length) showScreen('analytics');
initializingSession = false;
renderSessionControls();
document.querySelectorAll('.nav-btn').forEach(btn => btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false'));
