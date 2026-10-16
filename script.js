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
  "theory_intro": {
    "ru": "Простые формы употребляются в разговоре с близкими и в составе сложных предложений. Глагол имеет четыре простые формы: утверждение и отрицание в настоящем/будущем и прошедшем времени. Утвердительная форма настоящего/будущего времени называется словарной: <ruby>食<rt>た</rt></ruby>べる.",
    "uz": "Oddiy shakllar yaqinlar bilan suhbatda va qo‘shma gap tarkibida qo‘llanadi. Fe’lning to‘rtta oddiy shakli bor: hozirgi/kelasi va o‘tgan zamonning tasdiq hamda inkor shakllari. Hozirgi/kelasi zamonning tasdiq shakli lug‘aviy shakl deb ataladi: <ruby>食<rt>た</rt></ruby>べる."
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
    "ru": "Неправильные Глаголы",
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
  "form_pres_aff": {
    "ru": "Настоящее/Будущее +",
    "uz": "Hozirgi/Kelasi +"
  },
  "form_pres_neg": {
    "ru": "Настоящее/Будущее −",
    "uz": "Hozirgi/Kelasi −"
  },
  "form_past_aff": {
    "ru": "Прошедшее +",
    "uz": "O‘tgan Zamon +"
  },
  "form_past_neg": {
    "ru": "Прошедшее −",
    "uz": "O‘tgan Zamon −"
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
  "tip_g1": {
    "ru": "Уберите ます. В утверждении настоящего/будущего времени последняя кана основы переходит из ряда い в ряд う. В отрицании она переходит в ряд あ, затем добавляется ない. Особый случай: い → わない. Прошедшие формы приведены в таблице. Группу глагола следует запоминать вместе со словом.",
    "uz": "ます ni olib tashlang. Hozirgi/kelasi zamon tasdiq shaklida asosning oxirgi kanasi い qatoridan う qatoriga o‘tadi. Inkor shaklida u あ qatoriga o‘tadi va ない qo‘shiladi. Alohida holat: い → わない. O‘tgan zamon shakllari jadvalda berilgan. Fe’l guruhini so‘z bilan birga yodlash kerak."
  },
  "tip_g2": {
    "ru": "Замените ます на る, ない, た или なかった. Основа сохраняется. <ruby>見<rt>み</rt></ruby>ます и <ruby>起<rt>お</rt></ruby>きます также относятся ко II группе. По одному лишь звучанию -imasu определить группу нельзя.",
    "uz": "ます o‘rniga る, ない, た yoki なかった qo‘shing. Asos o‘zgarmaydi. <ruby>見<rt>み</rt></ruby>ます va <ruby>起<rt>お</rt></ruby>きます ham II guruhga kiradi. Fe’l guruhini faqat -imasu talaffuziga qarab aniqlab bo‘lmaydi."
  },
  "tip_g3": {
    "ru": "Формы III группы следует запомнить: します → する / しない / した / しなかった; <ruby>来<rt>き</rt></ruby>ます → <ruby>来<rt>く</rt></ruby>る / <ruby>来<rt>こ</rt></ruby>ない / <ruby>来<rt>き</rt></ruby>た / <ruby>来<rt>こ</rt></ruby>なかった. Сложные глаголы на します, например <ruby>勉強<rt>べんきょう</rt></ruby>します, изменяются так же, как します. Не путайте <ruby>来<rt>き</rt></ruby>ます и <ruby>着<rt>き</rt></ruby>ます: это разные глаголы.",
    "uz": "III guruh shakllarini yodlang: します → する / しない / した / しなかった; <ruby>来<rt>き</rt></ruby>ます → <ruby>来<rt>く</rt></ruby>る / <ruby>来<rt>こ</rt></ruby>ない / <ruby>来<rt>き</rt></ruby>た / <ruby>来<rt>こ</rt></ruby>なかった. します bilan tugaydigan qo‘shma fe’llar, masalan <ruby>勉強<rt>べんきょう</rt></ruby>します, します kabi o‘zgaradi. <ruby>来<rt>き</rt></ruby>ます va <ruby>着<rt>き</rt></ruby>ます ni farqlang: bular boshqa-boshqa fe’llar."
  },
  "tip_iadj": {
    "ru": "В отрицательной и прошедших формах い-прилагательных конечное い заменяется на くない, かった или くなかった. Исключение: いい → よくない / よかった / よくなかった.",
    "uz": "い-sifatlarning inkor va o‘tgan zamon shakllarida oxirgi い o‘rniga くない, かった yoki くなかった qo‘shiladi. Istisno: いい → よくない / よかった / よくなかった."
  },
  "tip_naadj": {
    "ru": "な-прилагательные образуют простые формы с помощью связки: だ / じゃない / だった / じゃなかった. Те же формы связки употребляются с существительными.",
    "uz": "な-sifatlarning oddiy shakllari だ / じゃない / だった / じゃなかった bog‘lamalari yordamida yasaladi. Otlar bilan ham shu bog‘lama shakllari qo‘llanadi."
  },
  "tip_noun": {
    "ru": "К существительному присоединяется связка: だ / じゃない / だった / じゃなかった. Само существительное не изменяется.",
    "uz": "Otga だ / じゃない / だった / じゃなかった bog‘lamasi qo‘shiladi. Otning o‘zi o‘zgarmaydi."
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
  "table_term": {
    "ru": "Слово",
    "uz": "So‘z"
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

const lessonQuestionIds = {group1:[2], group2:[12,20], group3:[5], iadj:[26,29,34], naadj:[37,42,46], noun:[91,52,49]};
let selectedLesson = 'group1';

const theorySections = [
  {id:'theory-group1', titleKey:'th_g1_title'},
  {id:'theory-group2', titleKey:'th_g2_title'},
  {id:'theory-group3', titleKey:'th_g3_title'},
  {id:'theory-iadj', titleKey:'th_iadj_title'},
  {id:'theory-naadj', titleKey:'th_naadj_title'},
  {id:'theory-noun', titleKey:'th_noun_title'}
];

const uiState = { analyticsRingTimer:null, analyticsBarsTimer:null, analyticsRevision:0 };
const SCORE_RING_CIRCUMFERENCE = 2 * Math.PI * 72;
const THEORY_FORM_LABEL_KEYS = ['form_pres_aff','form_pres_neg','form_past_aff','form_past_neg'];
const TIP_ICON = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>';

function t(key){ return i18n[key]?.[currentLang] || key; }

function copyForLang(ru, uz){
  return currentLang === 'ru' ? ru : uz;
}

function prefersReducedMotion(){
  return typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function motionBehavior(){
  return prefersReducedMotion() ? 'auto' : 'smooth';
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

function setTheorySectionOpen(target, open){
  const group = target?.classList?.contains('theory-group') ? target : target?.closest('.theory-group');
  if(!group) return;
  const header = group.querySelector('.collapsible-header');
  const body = group.querySelector('.collapsible-body');
  header.classList.toggle('open', open);
  header.setAttribute('aria-expanded', open ? 'true' : 'false');
  body.classList.toggle('open', open);
}

function renderTheoryMap(){
  document.getElementById('lesson-select').innerHTML = theorySections.map((section, index) =>
    `<option value="${section.id.replace('theory-', '')}">${index + 1} / ${theorySections.length} · ${t(section.titleKey)}</option>`
  ).join('');
  document.getElementById('lesson-select').value = selectedLesson;
}

function selectLesson(lesson){
  if (!lessonQuestionIds[lesson]) return;
  selectedLesson = lesson;
  document.querySelectorAll('.theory-group').forEach(group => {
    group.hidden = group.id !== 'theory-' + lesson;
    setTheorySectionOpen(group, !group.hidden);
  });
  document.getElementById('lesson-select').value = lesson;
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
    if(i18n[k]) el.innerHTML = i18n[k][lang];
  });
  document.querySelectorAll('[data-i18n-label]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nLabel));
  });
  buildTheoryTables();
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
  updateLessonActions();
  if (name !== 'analytics') clearAnalyticsTimers();
  else renderAnalytics();
  renderSessionControls();
  scrollAppToTop();
}

function toggleSection(header){
  setTheorySectionOpen(header, !header.classList.contains('open'));
}

function renderProgressiveVerbLesson(group, renderTipBox) {
  const copy = copyForLang;
  const id = ['kaku', 'taberu', 'suru'][group - 1];
  const v = TrainerVerbs.byId[id];
  const rules = [
    copy('У I группы きます обычно меняется на いた. Исключение: <ruby>行<rt>い</rt></ruby>きます → <ruby>行<rt>い</rt></ruby>った.', 'I guruhda きます odatda いた ga almashadi. Istisno: <ruby>行<rt>い</rt></ruby>きます → <ruby>行<rt>い</rt></ruby>った.'),
    copy('Прошедшее время: у II группы уберите ます и добавьте た.', 'O‘tgan zamon: II guruhda ます ni olib, た qo‘shing.'),
    copy('Запомните особую прошедшую форму: します → した.', 'Maxsus o‘tgan zamon shaklini eslab qoling: します → した.')
  ];
  const sentences = [
    ['ノートに<ruby>書<rt>か</rt></ruby>いた。',copy('Записал(а) в тетрадь.','Daftarga yozdi.')],
    ['パンを<ruby>食<rt>た</rt></ruby>べた。',copy('Съел(а) хлеб.','Non yedi.')],
    ['<ruby>勉強<rt>べんきょう</rt></ruby>した。',copy('Позанимался / позанималась.','Dars qildi.')]
  ];
  return `<div class="lesson-core">
    <div class="lesson-rule"><p class="step-label">${copy('Правило','Qoida')}</p><p>${rules[group-1]}</p></div>
    <div class="worked-example"><p class="step-label">${copy('Например','Masalan')}</p>
      <div class="word-change"><span class="jp">${v.masu.html}</span><span aria-hidden="true">→</span><strong class="jp">${v.forms[2].html}</strong></div>
      <p class="example-meaning">${v.meaning[currentLang]} · ${TrainerVerbs.groupLabel(v,currentLang)}</p>
      <p class="example-sentence jp">${sentences[group-1][0]}</p><p class="example-translation">${sentences[group-1][1]}</p>
    </div></div>
    <button type="button" class="lesson-practice start-btn" data-quick-lesson="${id}">${copy('Практика: 4 Формы','To‘rtta Shakl Mashqi')}</button>
    <p class="reference-legend">${copy('Словарная форма, например <ruby>書<rt>か</rt></ruby>く, выражает утверждение в настоящем или будущем. Это одна из четырёх простых форм.','Lug‘aviy shakl, masalan <ruby>書<rt>か</rt></ruby>く, hozirgi yoki kelasi zamondagi tasdiqni bildiradi. U to‘rtta oddiy shakldan biri.')}</p>
    <details class="lesson-details" id="group${group}-examples"><summary>${copy('Ещё Примеры · 4 Формы','Yana Misollar · 4 Shakl')}</summary>${VerbLessons.group(group)}</details>
    <details class="lesson-details" id="group${group}-reference"><summary>${copy('Правила и Исключения','Qoidalar va Istisnolar')}</summary><p class="reference-intro">${t('theory_intro')}</p>${renderTipBox('tip_g'+group)}${group===1?VerbLessons.kanaTable():''}</details>`;
}

function buildTheoryTables(){
  const openedMore = [...document.querySelectorAll('.more-verbs[open]')].map(el => el.dataset.moreGroup);
  const openDetails = new Set([...document.querySelectorAll('#screen-theory details[open]')].map(el => el.id));
  const describe = copyForLang;
  const formLabels = THEORY_FORM_LABEL_KEYS.map(t);
  const renderTipBox = key => `<div class="tip-box">${TIP_ICON}<span>${t(key)}</span></div>`;
  const renderTermCell = ({ term, meaning }) => `<th scope="row" class="term"><span class="jp">${term}</span><div class="note">${meaning}</div></th>`;
  const renderFormTable = rows => `
    <div class="table-scroll" tabindex="0" role="region" aria-label="${copyForLang('Таблица Форм', 'Shakllar Jadvali')}">
      <table class="form-table">
        <thead>
          <tr>
            <th scope="col">${t('table_term')}</th>
            ${formLabels.map(label => `<th scope="col">${label}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${rows.map(row => `
            <tr${row.highlight ? ' class="is-accent-row"' : ''}>
              ${renderTermCell(row)}
              ${row.forms.map((form, index) => `<td data-label="${formLabels[index]}"><span class="jp">${form}</span></td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  const mountTheorySection = (bodyId, html) => {
    const target = document.getElementById(bodyId);
    if(target) target.innerHTML = html;
  };

  const iAdjRows = [
    { term:'<ruby>高<rt>たか</rt></ruby>い', meaning:describe('дорогой','qimmat'), forms:['<ruby>高<rt>たか</rt></ruby>い','<ruby>高<rt>たか</rt></ruby>くない','<ruby>高<rt>たか</rt></ruby>かった','<ruby>高<rt>たか</rt></ruby>くなかった'] },
    { term:'<ruby>面白<rt>おもしろ</rt></ruby>い', meaning:describe('интересный','qiziq'), forms:['<ruby>面白<rt>おもしろ</rt></ruby>い','<ruby>面白<rt>おもしろ</rt></ruby>くない','<ruby>面白<rt>おもしろ</rt></ruby>かった','<ruby>面白<rt>おもしろ</rt></ruby>くなかった'] },
    { term:'いい', meaning:describe('хороший','yaxshi'), forms:['いい','よくない','よかった','よくなかった'], highlight:true }
  ];
  const naAdjRows = [
    { term:'<ruby>静<rt>しず</rt></ruby>か', meaning:describe('тихий','sokin'), forms:['<ruby>静<rt>しず</rt></ruby>かだ','<ruby>静<rt>しず</rt></ruby>かじゃない','<ruby>静<rt>しず</rt></ruby>かだった','<ruby>静<rt>しず</rt></ruby>かじゃなかった'] },
    { term:'<ruby>元気<rt>げんき</rt></ruby>', meaning:describe('в порядке','tetik'), forms:['<ruby>元気<rt>げんき</rt></ruby>だ','<ruby>元気<rt>げんき</rt></ruby>じゃない','<ruby>元気<rt>げんき</rt></ruby>だった','<ruby>元気<rt>げんき</rt></ruby>じゃなかった'] },
    { term:'<ruby>好<rt>す</rt></ruby>き', meaning:describe('нравится','yoqadi'), forms:['<ruby>好<rt>す</rt></ruby>きだ','<ruby>好<rt>す</rt></ruby>きじゃない','<ruby>好<rt>す</rt></ruby>きだった','<ruby>好<rt>す</rt></ruby>きじゃなかった'] }
  ];
  const nounRows = [
    { term:'<ruby>学生<rt>がくせい</rt></ruby>', meaning:describe('студент','talaba'), forms:['<ruby>学生<rt>がくせい</rt></ruby>だ','<ruby>学生<rt>がくせい</rt></ruby>じゃない','<ruby>学生<rt>がくせい</rt></ruby>だった','<ruby>学生<rt>がくせい</rt></ruby>じゃなかった'] },
    { term:'<ruby>雨<rt>あめ</rt></ruby>', meaning:describe('дождь','yomg‘ir'), forms:['<ruby>雨<rt>あめ</rt></ruby>だ','<ruby>雨<rt>あめ</rt></ruby>じゃない','<ruby>雨<rt>あめ</rt></ruby>だった','<ruby>雨<rt>あめ</rt></ruby>じゃなかった'] }
  ];

  const lessons = [
    {id:'iadj', items:iAdjRows, tip:'tip_iadj',
      rule:describe('Прошедшее время: замените конечное い на かった. У いい особая форма: よかった.','O‘tgan zamon: oxirgi い ni かった ga almashtiring. いい ning maxsus shakli: よかった.'),
      before:iAdjRows[0].term, after:iAdjRows[0].forms[2], meaning:describe('дорогой → был дорогим','qimmat → qimmat edi'),
      sentence:'このパンは<ruby>高<rt>たか</rt></ruby>かった。', translation:describe('Этот хлеб был дорогим.','Bu non qimmat edi.')},
    {id:'naadj', items:naAdjRows, tip:'tip_naadj',
      rule:describe('Прошедшее время: после な-прилагательного замените связку だ на だった.','O‘tgan zamon: な-sifatdan keyingi だ bog‘lamasini だった ga almashtiring.'),
      before:naAdjRows[0].forms[0], after:naAdjRows[0].forms[2], meaning:describe('тихо → было тихо','sokin → sokin edi'),
      sentence:'<ruby>部屋<rt>へや</rt></ruby>は<ruby>静<rt>しず</rt></ruby>かだった。', translation:describe('В комнате было тихо.','Xona sokin edi.')},
    {id:'noun', items:nounRows, tip:'tip_noun',
      rule:describe('Прошедшее время: после существительного замените связку だ на だった. Само слово не меняется.','O‘tgan zamon: otdan keyingi だ ni だった ga almashtiring. Ot o‘zgarmaydi.'),
      before:nounRows[0].forms[0], after:nounRows[0].forms[2], meaning:describe('студент → был(а) студентом','talaba → talaba edi'),
      sentence:'<ruby>去年<rt>きょねん</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>だった。', translation:describe('В прошлом году я был(а) студентом.','O‘tgan yili talaba edim.')}
  ];
  [1,2,3].forEach(group => mountTheorySection('group'+group+'-body', renderProgressiveVerbLesson(group, renderTipBox)));
  lessons.forEach(lesson => {
      mountTheorySection(lesson.id + '-body', `
      <div class="lesson-core">
        <div class="lesson-rule"><p class="step-label">${describe('Правило','Qoida')}</p><p>${lesson.rule}</p></div>
        <div class="worked-example"><p class="step-label">${describe('Например','Masalan')}</p>
          <div class="word-change"><span class="jp">${lesson.before}</span><span aria-hidden="true">→</span><strong class="jp">${lesson.after}</strong></div>
          <p class="example-meaning">${lesson.meaning}</p>
          <p class="example-sentence jp">${lesson.sentence}</p><p class="example-translation">${lesson.translation}</p>
        </div>
      </div>
      <button type="button" class="lesson-practice start-btn" data-lesson-practice="${lesson.id}"></button>
      <details class="lesson-details" id="${lesson.id}-examples"><summary>${describe('Ещё Примеры · 4 Формы','Yana Misollar · 4 Shakl')}</summary>${renderFormTable(lesson.items)}</details>
      <details class="lesson-details" id="${lesson.id}-reference"><summary>${describe('Правила и Исключения','Qoidalar va Istisnolar')}</summary>
        <p class="reference-intro">${t('theory_intro')}</p>
        <p class="reference-legend">${describe('+ утверждение, − отрицание.','+ tasdiq, − inkor.')}</p>
        ${renderTipBox(lesson.tip)}
        ${renderFormTable(lesson.items)}
      </details>`);
  });
  openDetails.forEach(id => { const el = document.getElementById(id); if(el) el.open = true; });

  openedMore.forEach(group => document.querySelector(`[data-more-group="${group}"]`)?.setAttribute('open',''));
  VerbLessons.syncPracticeButtons();
  markJapaneseContent(document.getElementById('screen-theory'));
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
const recoveryLessons = {...lessonQuestionIds, ...Object.fromEntries(TrainerVerbs.verbs.map(v => [v.id, TrainerVerbs.practice(v).map(q => q.id)]))};
const sessionBankVersion = TrainerSession.bankVersion(recoveryQuestions);
const recoveryCatalog = {
  lessons:recoveryLessons, cycleQuestions:allQuestions,
  // This copy update keeps the same question IDs, answers and option IDs.
  compatibleBanks:['440-920ae5ed', '440-43d9a45', '440-fd4dad5d', '440-ae8dcf1d'],
  transformQuestion:(q,mode) => q.verbId ? TrainerVerbs.question(q,mode) : q
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
      Object.assign(practiceState,restored.state);
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
  nextBtn.disabled = false;
  nextBtn.classList.add('show');

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
  const sessionQuestions = lesson ? recoveryLessons[lesson].map(id => recoveryQuestions.find(q => q.id === id)) : buildSessionQuestions();
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

function selectOption(questionId, optionId, keyboard = false) {
  if (recoveryPending || !document.getElementById('screen-practice').classList.contains('visible')) return;
  const answer = TrainerCore.recordAnswer(practiceState, questionId, optionId);
  if (!answer) return;
  saveSession();
  renderAnswerState(answer);
  updateProgress();
  document.getElementById('answer-announcement').textContent = t(answer.correct ? 'exp_correct' : 'exp_wrong') + '. ' + t('fb_answer') + ': ' + findCorrectOption(answer.question).html.replace(/<rt>[^<]*<\/rt>/g, '').replace(/<[^>]+>/g, '');
  const feedback = document.getElementById('explanation-box');
  feedback.focus({preventScroll:true});
  if (keyboard) feedback.scrollIntoView({block:'nearest', behavior:'instant'});
}

function nextQuestion(questionId = Number(document.getElementById('next-btn').dataset.questionId)) {
  if (recoveryPending || !document.getElementById('screen-practice').classList.contains('visible')) return;
  if (!TrainerCore.advanceQuestion(practiceState, questionId)) return;
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
  showScreen('theory');
  selectLesson('group'+v.group);
  const card = document.getElementById('lesson-'+v.id);
  setTheorySectionOpen(card.closest('.theory-group'),true);
  for(let parent=card.parentElement;parent;parent=parent.parentElement) {
    if(parent.tagName === 'DETAILS') parent.open = true;
  }
  card.scrollIntoView({behavior:motionBehavior(),block:'start'});
  card.querySelector('[data-lesson-practice]').focus({preventScroll:true});
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

  const {lang, nav, explainForm, verb, lessonPractice, quickLesson, filter, optionId, questionId, action} = button.dataset;
  if (lang) return setLang(lang);
  if (nav) return showScreen(nav);
  if (explainForm !== undefined) return VerbLessons.select(verb, Number(explainForm));
  if (lessonPractice || quickLesson) return startPractice(lessonPractice || quickLesson);
  if (filter) return toggleFilter(filter);
  if (button.classList.contains('collapsible-header')) return toggleSection(button);
  if (optionId) return selectOption(Number(questionId), optionId, event.detail === 0);
  actionHandlers[action]?.(button);
});

document.getElementById('lesson-select').addEventListener('change', event => selectLesson(event.target.value));
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

