// Plain-form lessons share lexical records with practice. Every core rule is visible.
const VerbLessons = (() => {
  const copy = (ru, uz) => currentLang === 'uz' ? uz : ru;
  const jp = value => `<span class="jp" lang="ja">${value}</span>`;
  const heading = (ru, uz) => titleCaseLabel(copy(ru, uz));
  const labels = () => ({
    time: copy('Время', 'Zamon'), yes: copy('Утверждение', 'Tasdiq'), no: copy('Отрицание', 'Inkor'),
    now: copy('Настоящее/Будущее', 'Hozirgi/Kelasi'), past: copy('Прошедшее', 'O‘tgan Zamon'),
    from: copy('Исходная Форма', 'Boshlang‘ich Shakl'), change: copy('Что Изменить', 'Nimani O‘zgartirish'),
    result: copy('Результат', 'Natija')
  });
  const section = (title, content) => `<section class="study-section"><h3>${title}</h3>${content}</section>`;
  const p = value => `<p>${value}</p>`;
  const note = value => `<p class="verb-note">${value}</p>`;
  const sourceTitle = (form, meaning) => `${jp(form)} <span class="study-meaning">${meaning}</span>`;
  function matrix(form, meaning, forms) {
    const l = labels();
    return `<div class="study-table-wrap study-table-scroll" tabindex="0" role="region" aria-label="${copy('Таблица Четырёх Форм', 'To‘rtta Shakl Jadvali')}"><table class="study-table form-matrix"><caption>${sourceTitle(form, meaning)}</caption><thead><tr><th scope="col">${l.time}</th><th scope="col">${l.yes}</th><th scope="col">${l.no}</th></tr></thead><tbody><tr><th scope="row">${l.now}</th><td>${jp(forms[0])}</td><td>${jp(forms[1])}</td></tr><tr><th scope="row">${l.past}</th><td>${jp(forms[2])}</td><td>${jp(forms[3])}</td></tr></tbody></table></div>`;
  }
  function markEnd(value, suffix) {
    if (!suffix) return value;
    return value.endsWith(suffix) ? value.slice(0, -suffix.length) + '<u>' + suffix + '</u>' : '<u>' + value + '</u>';
  }
  function replaceText(from, to) {
    return copy(`Замените ${jp(from)} на ${jp(to)}.`, `${jp(from)} ni ${jp(to)} ga almashtiring.`);
  }
  function ruleRow(from, to, oldPart, newPart, instruction) {
    return {from: jp(markEnd(from, oldPart)), change: instruction || replaceText(oldPart, newPart), to: jp(markEnd(to, newPart))};
  }
  function ruleTable(rows, caption) {
    const l = labels();
    return `<div class="study-table-wrap study-table-scroll" tabindex="0" role="region" aria-label="${copy('Правила Образования', 'Shakl Yasash Qoidalari')}"><table class="study-table rule-table">${caption ? `<caption>${caption}</caption>` : ''}<thead><tr><th scope="col">${l.from}</th><th scope="col">${l.change}</th><th scope="col">${l.result}</th></tr></thead><tbody>${rows.map(r => `<tr><td>${r.from}</td><td>${r.change}</td><td>${r.to}</td></tr>`).join('')}</tbody></table></div>`;
  }
  function card(v) {
    return `<article class="verb-example-card study-word" id="lesson-${v.id}" aria-label="${v.masu.reading}">${matrix(v.masu.html, v.meaning[currentLang], v.forms.map(f => f.html))}<button type="button" class="theory-action-btn lesson-practice" data-lesson-practice="${v.id}">${copy('Практика: 4 Формы', 'To‘rtta Shakl Mashqi')}</button></article>`;
  }
  function diff(from, to) {
    let common = 0;
    while (common < from.length && common < to.length && from[common] === to[common]) common++;
    const paint = value => value.slice(0, common) + (value.slice(common) ? '<u>' + value.slice(common) + '</u>' : '');
    return `<span class="form-change">${jp(paint(from))}<span aria-hidden="true">→</span>${jp(paint(to))}</span>`;
  }
  function steps(v, index, mode = 'masu') {
    return `<ol class="verb-steps">${TrainerVerbs.steps(v, index, mode).map(s => `<li><span>${s.label[currentLang]}</span><div class="step-change">${diff(s.from, s.to)}</div></li>`).join('')}</ol>`;
  }
  function syncPracticeButtons() {
    document.querySelectorAll('[data-lesson-practice], [data-quick-lesson]').forEach(button => {
      if (!TrainerVerbs.byId[button.dataset.lessonPractice || button.dataset.quickLesson]) return;
      button.disabled = practiceState.active;
      button.textContent = copy(practiceState.active ? 'Сначала Завершите Текущую Тренировку' : 'Практика: 4 Формы', practiceState.active ? 'Avval Joriy Mashqni Yakunlang' : 'To‘rtta Shakl Mashqi');
    });
  }
  function introduction(isVerb) {
    return section(heading('Значение и Употребление', 'Ma’nosi va Qo‘llanishi'),
      p(copy('Простые формы подходят для непринуждённого разговора с близкими и друзьями. С незнакомыми людьми обычно нужна вежливая форма.', 'Oddiy shakllar yaqinlar va do‘stlar bilan erkin suhbatda ishlatiladi. Notanish odamlar bilan odatda odobli shakl ishlatiladi.')) +
      p(isVerb ? copy('Настоящее/будущее: действие происходит обычно или произойдёт; отрицание: не происходит или не произойдёт. Прошедшее: действие произошло или не произошло. Слова сегодня, завтра, вчера и ситуация уточняют время.', 'Hozirgi/kelasi zamon odatiy yoki kelajakdagi harakatni, inkori esa harakat bajarilmasligini bildiradi. O‘tgan zamon harakat bajarilgan yoki bajarilmaganini bildiradi. Vaqt vaziyat va bugun, ertaga, kecha kabi so‘zlardan bilinadi.') :
        copy('Настоящее/будущее утверждение описывает признак или состояние, отрицание его отрицает. Прошедшие формы описывают, каким что-то было или не было. Будущее значение зависит от контекста.', 'Hozirgi/kelasi zamon tasdig‘i belgi yoki holatni bildiradi, inkori esa uni inkor etadi. O‘tgan zamon shakllari oldingi belgi yoki holatni bildiradi. Kelasi zamon ma’nosi vaziyatga bog‘liq.')) +
      (isVerb ? note(copy('Словарная форма, например かく, является только утвердительной простой формой настоящего/будущего времени. Остальные три формы тоже простые. Все правила ниже начинаются со знакомой ます-формы.', 'Lug‘aviy shakl, masalan かく, faqat hozirgi/kelasi zamonning oddiy tasdiq shaklidir. Qolgan uch shakl ham oddiy shakllardir. Quyidagi qoidalar tanish ます shaklidan boshlanadi.')) : ''));
  }
  function sentence(japanese, ru, uz) {
    return `<div class="study-example"><p class="example-sentence jp" lang="ja">${japanese}</p><p class="example-translation">${copy(ru, uz)}</p></div>`;
  }
  function groupOne() {
    const ids = ['kau', 'kaku', 'oyogu', 'hanasu', 'matsu', 'shinu', 'asobu', 'nomu', 'tsukuru'];
    const verbs = ids.map(id => TrainerVerbs.byId[id]);
    const rows = index => verbs.map(v => {
      const last = v.masu.reading.slice(-3, -2);
      const row = TrainerVerbs.kanaRows[last];
      const ending = index === 0 ? row[0] : row[1] + 'ない';
      return ruleRow(v.masu.reading, v.forms[index].reading, last + 'ます', ending);
    });
    const pastGroups = [['kau', 'matsu', 'tsukuru'], ['shinu', 'asobu', 'nomu'], ['kaku'], ['oyogu'], ['hanasu']];
    const pastRows = pastGroups.map(group => {
      const samples = group.map(id => TrainerVerbs.byId[id]);
      const endings = samples.map(v => v.masu.reading.slice(-3));
      const result = TrainerVerbs.kanaRows[samples[0].masu.reading.slice(-3, -2)][2];
      return {
        from: samples.map((v, i) => `<div>${jp(markEnd(v.masu.reading, endings[i]))}</div>`).join(''),
        change: copy(`Замените ${endings.map(jp).join(', ')} на ${jp(result)}.`, `${endings.map(jp).join(', ')} ni ${jp(result)} ga almashtiring.`),
        to: samples.map(v => `<div>${jp(markEnd(v.forms[2].reading, result))}</div>`).join('')
      };
    });
    return introduction(true) +
      section(heading('Четыре Формы Целиком', 'To‘rtta To‘liq Shakl'), card(TrainerVerbs.byId.kaku)) +
      section(heading('Как Образуются Формы', 'Shakllar Qanday Yasaladi'),
        p(copy('Сначала узнайте группу глагола. У I группы изменяется кана непосредственно перед ます. Группу запоминают вместе со словом: одного звучания -imasu недостаточно. Например, 見ます и 起きます относятся ко II группе.', 'Avval fe’lning guruhini biling. I guruhda ます dan oldingi kana o‘zgaradi. Guruhni so‘z bilan birga yodlang: faqat -imasu talaffuziga qarab guruhni aniqlab bo‘lmaydi. Masalan, 見ます va 起きます II guruhga kiradi.')) +
        p(copy('В таблицах изменяемые части подчёркнуты. Остальная часть слова сохраняется.', 'Jadvallarda o‘zgaradigan qismlarning tagi chizilgan. So‘zning qolgan qismi saqlanadi.'))) +
      section(heading('Настоящее/Будущее: Утверждение', 'Hozirgi/Kelasi: Tasdiq'), ruleTable(rows(0)) +
        note(copy('Не всякий глагол на します относится к III группе. はなします (говорить) относится к I группе: はなす, はなさない. Группу определяйте по словарю или учебнику, а не только по окончанию.', 'します bilan tugagan har bir fe’l III guruhga kirmaydi. はなします (gapirmoq) I guruhga kiradi: はなす, はなさない. Guruhni faqat qo‘shimchaga qarab emas, lug‘at yoki darslikdan aniqlang.'))) +
      section(heading('Настоящее/Будущее: Отрицание', 'Hozirgi/Kelasi: Inkor'), ruleTable(rows(1)) +
        note(copy('У глаголов I группы окончание います меняется на わない, а не あない: かいます → かわない. Особый глагол あります даёт ない, а не あらない.', 'I guruh fe’llarida います qo‘shimchasi あない ga emas, わない ga almashadi: かいます → かわない. Maxsus fe’l あります ning inkori あらない emas, ない.')) +
        ruleTable([ruleRow('あります', 'ない', 'あります', 'ない', copy('Замените всю форму.', 'Butun shaklni almashtiring.'))]) + card(TrainerVerbs.byId.aru)) +
      section(heading('Прошедшее: Утверждение', 'O‘tgan Zamon: Tasdiq'),
        p(copy('Окончания с одинаковым изменением объединены в одной строке. Сопоставляйте слова сверху вниз.', 'Bir xil o‘zgaradigan qo‘shimchalar bitta qatorda berilgan. So‘zlarni yuqoridan pastga moslang.')) +
        ruleTable(pastRows) + note(copy('Исключение рядом с правилом きます → いた: 行きます даёт 行った (いった), а не 行いた. Остальные формы образуются обычно: いく, いかない, いかなかった.', 'きます → いた qoidasining istisnosi: 行きます dan 行いた emas, 行った (いった) yasaladi. Qolgan shakllar odatiy qoida bo‘yicha: いく, いかない, いかなかった.')) +
        ruleTable([ruleRow('いきます', 'いった', 'きます', 'った')]) + card(TrainerVerbs.byId.iku)) +
      section(heading('Прошедшее: Отрицание', 'O‘tgan Zamon: Inkor'),
        p(copy('Сначала получите отрицание от ます-формы по таблице выше. Затем замените ない на なかった. Это одинаковое изменение для всех глаголов, включая あります.', 'Avval yuqoridagi jadval bo‘yicha ます shaklidan inkor shaklini yasang. So‘ng ない ni なかった ga almashtiring. Bu barcha fe’llar, jumladan あります uchun bir xil.')) +
        ruleTable([ruleRow('かかない', 'かかなかった', 'ない', 'なかった'), ruleRow('かわない', 'かわなかった', 'ない', 'なかった'), ruleRow('ない', 'なかった', 'ない', 'なかった')])) +
      section(heading('Примеры', 'Misollar'),
        sentence('あした、<ruby>友達<rt>ともだち</rt></ruby>に<ruby>手紙<rt>てがみ</rt></ruby>を<ruby>書<rt>か</rt></ruby>く。', 'Завтра напишу другу письмо.', 'Ertaga do‘stimga xat yozaman.') +
        sentence('きのうは<ruby>学校<rt>がっこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>かなかった。', 'Вчера я не ходил(а) в школу.', 'Kecha maktabga bormadim.'));
  }
  function groupTwo() {
    const v = TrainerVerbs.byId.taberu;
    const endings = ['る', 'ない', 'た', 'なかった'];
    const rows = endings.map((ending, index) => ruleRow(v.masu.reading, v.forms[index].reading, 'ます', ending,
      `<strong>${TrainerVerbs.formLabels[currentLang][index]}</strong><br>${copy(`Уберите ${jp('ます')} и добавьте ${jp(ending)}.`, `${jp('ます')} ni olib, ${jp(ending)} qo‘shing.`)}`));
    return introduction(true) +
      section(heading('Четыре Формы Целиком', 'To‘rtta To‘liq Shakl'), card(v)) +
      section(heading('Как Образуются Формы', 'Shakllar Qanday Yasaladi'),
        p(copy('У глагола II группы уберите только ます. Оставшуюся основу не меняйте; добавьте нужное окончание. Изменяемая часть подчёркнута.', 'II guruh fe’lidan faqat ます ni olib tashlang. Qolgan asosni o‘zgartirmay, kerakli qo‘shimchani qo‘shing. O‘zgaradigan qismning tagi chizilgan.')) + ruleTable(rows)) +
      section(heading('Группу Запоминаем со Словом', 'Guruhni So‘z Bilan Yodlaymiz'),
        note(copy('見ます и 起きます относятся ко II группе, хотя перед ます звучит и. Не превращайте み в ま и き в か: 見ない, 起きない. Для этих слов работает обычное правило II группы.', '見ます va 起きます fe’llari ます oldidan i tovushi kelsa ham II guruhga kiradi. み ni ま ga, き ni か ga o‘zgartirmang: 見ない, 起きない. Bu so‘zlarga II guruhning odatiy qoidasi qo‘llanadi.')) +
        card(TrainerVerbs.byId.miru) + card(TrainerVerbs.byId.okiru) +
        note(copy('着ます (きます), надевать, относится ко II группе. 来ます (きます), приходить, относится к III группе и меняет чтение: 来る (くる), 来ない (こない). Одинаковое произношение исходной формы не означает одинаковое спряжение.', '着ます (きます), kiymoq, II guruhga kiradi. 来ます (きます), kelmoq, III guruhga kiradi va o‘qilishi o‘zgaradi: 来る (くる), 来ない (こない). Boshlang‘ich shakllarning bir xil aytilishi bir xil tuslanishni anglatmaydi.')) + card(TrainerVerbs.byId.kiru_wear)) +
      section(heading('Пример', 'Misol'), sentence('<ruby>朝<rt>あさ</rt></ruby>ごはんは<ruby>食<rt>た</rt></ruby>べない。', 'Я не завтракаю.', 'Men nonushta qilmayman.'));
  }
  function groupThree() {
    const suru = TrainerVerbs.byId.suru, kuru = TrainerVerbs.byId.kuru;
    const rows = v => v.forms.map((f, index) => ({
      from: jp(`<u>${v.masu.html}</u>`),
      change: `<strong>${TrainerVerbs.formLabels[currentLang][index]}</strong><br>${copy('Замените всю форму.', 'Butun shaklni almashtiring.')}`,
      to: jp(`<u>${f.html}</u>`)
    }));
    return introduction(true) +
      section(heading('Как Образуются Формы', 'Shakllar Qanday Yasaladi'), p(copy('У III группы две модели: します и 来ます. Их формы нужно запомнить. Для каждой формы ниже исходной точкой остаётся ます-форма.', 'III guruhda ikki model bor: します va 来ます. Ularning shakllarini yodlash kerak. Quyidagi har bir shakl tanish ます shaklidan olinadi.'))) +
      section(heading('します: Делать', 'します: Qilmoq'), card(suru) + ruleTable(rows(suru)) +
        note(copy('В сочетаниях с します первая часть не меняется: 勉強します → 勉強する, 勉強しない, 勉強した, 勉強しなかった.', 'します bilan tuzilgan birikmalarda birinchi qism o‘zgarmaydi: 勉強します → 勉強する, 勉強しない, 勉強した, 勉強しなかった.')) +
        note(copy('Не определяйте III группу только по буквам します: はなします (говорить) относится к I группе и даёт はなす, はなさない.', 'III guruhni faqat します ga qarab aniqlamang: はなします (gapirmoq) I guruhga kiradi, uning shakllari はなす, はなさない.'))) +
      section(heading('来ます: Приходить', '来ます: Kelmoq'), card(kuru) +
        p(copy('Меняются форма и чтение кандзи 来: きます → くる, こない, きた, こなかった. Чтение показано над кандзи.', '来 kanjisining o‘qilishi ham o‘zgaradi: きます → くる, こない, きた, こなかった. O‘qilishi kanji ustida berilgan.')) + ruleTable(rows(kuru)) +
        note(copy('Не путайте с 着ます (きます), надевать: это II группа, у неё 着る (きる), 着ない (きない), 着た (きた), 着なかった (きなかった).', '着ます (きます), kiymoq, bilan adashtirmang: bu II guruh, shakllari 着る (きる), 着ない (きない), 着た (きた), 着なかった (きなかった).'))) +
      section(heading('Примеры', 'Misollar'),
        sentence('<ruby>毎日<rt>まいにち</rt></ruby>、<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>する。', 'Каждый день я занимаюсь японским.', 'Har kuni yapon tilini o‘rganaman.') +
        sentence('<ruby>友達<rt>ともだち</rt></ruby>は<ruby>来<rt>こ</rt></ruby>なかった。', 'Друг не пришёл.', 'Do‘stim kelmadi.'));
  }
  function adjectiveI() {
    const forms = ['たかい', 'たかくない', 'たかかった', 'たかくなかった'];
    const changes = [
      copy('Уберите только です. Конечное い сохраните.', 'Faqat です ni olib tashlang. Oxirgi い ni saqlang.'),
      copy('Уберите です. Замените конечное い на くない.', 'です ni olib tashlang. Oxirgi い ni くない ga almashtiring.'),
      copy('Уберите です. Замените конечное い на かった.', 'です ni olib tashlang. Oxirgi い ni かった ga almashtiring.'),
      copy('Уберите です. Замените конечное い на くなかった.', 'です ni olib tashlang. Oxirgi い ni くなかった ga almashtiring.')
    ];
    return introduction(false) +
      section(heading('Четыре Формы Целиком', 'To‘rtta To‘liq Shakl'), matrix('<ruby>高<rt>たか</rt></ruby>いです', copy('дорогой', 'qimmat'), ['い','くない','かった','くなかった'].map(s => '<ruby>高<rt>たか</rt></ruby>' + s))) +
      section(heading('Как Образуются Формы', 'Shakllar Qanday Yasaladi'),
        p(copy('Начните со знакомого 高いです (дорогой). Здесь изменяется само い-прилагательное; глагольные правила с ます не применяются.', 'Tanish 高いです (qimmat) shaklidan boshlang. Bu yerda い-sifatning o‘zi o‘zgaradi; ます bilan bog‘liq fe’l qoidalari qo‘llanmaydi.')) +
        ruleTable(forms.map((f, i) => ruleRow('たかいです', f, i === 0 ? 'です' : 'いです', i === 0 ? '' : ['','くない','かった','くなかった'][i], `<strong>${TrainerVerbs.formLabels[currentLang][i]}</strong><br>${changes[i]}`))) +
        note(copy('После い-прилагательного не добавляйте だ: правильно 高い, неправильно 高いだ. Это относится и к отрицанию и прошедшим формам: 高くない, 高かった, 高くなかった.', 'い-sifatdan keyin だ qo‘shmang: 高い to‘g‘ri, 高いだ noto‘g‘ri. Inkor va o‘tgan zamon shakllaridan keyin ham だ qo‘shilmaydi: 高くない, 高かった, 高くなかった.'))) +
      section(heading('Исключение: いい', 'Istisno: いい'),
        p(copy('У いい (хороший) в отрицании и прошедшем времени используется основа よ. Формы いくない и いかった здесь неверны. Утверждение настоящего/будущего: いい; вариант よい тоже допустим.', 'いい (yaxshi) ning inkor va o‘tgan zamon shakllarida よ asosi ishlatiladi. Bu yerda いくない va いかった shakllari noto‘g‘ri. Hozirgi/kelasi zamon tasdig‘i: いい; よい varianti ham to‘g‘ri.')) +
        matrix('いいです', copy('хороший', 'yaxshi'), ['いい','よくない','よかった','よくなかった'])) +
      section(heading('Примеры', 'Misollar'),
        sentence('このパンは<ruby>高<rt>たか</rt></ruby>くない。', 'Этот хлеб недорогой.', 'Bu non qimmat emas.') +
        sentence('きのうは<ruby>天気<rt>てんき</rt></ruby>がよかった。', 'Вчера была хорошая погода.', 'Kecha havo yaxshi edi.')) + practiceButton('iadj');
  }
  function practiceButton(id) {
    return `<button type="button" class="theory-action-btn lesson-practice" data-lesson-practice="${id}">${copy('Практика', 'Mashq')}</button>`;
  }
  function nominal(isAdjective) {
    const source = isAdjective ? 'しずか' : 'がくせい';
    const term = isAdjective ? '<ruby>静<rt>しず</rt></ruby>か' : '<ruby>学生<rt>がくせい</rt></ruby>';
    const meaning = isAdjective ? copy('тихий, спокойный', 'sokin') : copy('студент', 'talaba');
    const ends = ['だ','じゃない','だった','じゃなかった'];
    const rows = ends.map((ending, index) => ruleRow(source + 'です', source + ending, 'です', ending,
      `<strong>${TrainerVerbs.formLabels[currentLang][index]}</strong><br>${replaceText('です', ending)}`));
    return introduction(false) +
      section(heading('Четыре Формы Целиком', 'To‘rtta To‘liq Shakl'), matrix(term + 'です', meaning, ends.map(s => term + s))) +
      section(heading('Как Образуются Формы', 'Shakllar Qanday Yasaladi'),
        p(isAdjective ? copy('Начните со знакомого 静かです (тихо, спокойный). Само な-прилагательное не меняется; меняется связка после него. Не используйте правила глаголов или い-прилагательных.', 'Tanish 静かです (sokin) shaklidan boshlang. な-sifatning o‘zi o‘zgarmaydi; undan keyingi bog‘lama o‘zgaradi. Fe’l yoki い-sifat qoidalarini qo‘llamang.') :
          copy('Начните со знакомого 学生です (студент). Существительное не спрягается. Меняется только связка после него; правила глаголов с ます здесь не работают.', 'Tanish 学生です (talaba) shaklidan boshlang. Ot tuslanmaydi. Faqat undan keyingi bog‘lama o‘zgaradi; ます bilan bog‘liq fe’l qoidalari bu yerda qo‘llanmaydi.')) +
        ruleTable(rows) +
        note(copy('Здесь показаны полные формы сказуемого в конце предложения. В утверждении используйте だ или だった. После じゃない и じゃなかった дополнительное だ не нужно. В разговоре だ иногда опускают, но в таблице и заданиях на полную форму оно сохраняется.', 'Bu yerda gap oxiridagi kesimning to‘liq shakllari berilgan. Tasdiqda だ yoki だった ishlatiladi. じゃない va じゃなかった dan keyin yana だ qo‘shilmaydi. Suhbatda だ ba’zan tushiriladi, lekin jadval va to‘liq shakl mashqlarida saqlanadi.')) +
        note(copy('じゃない и ではない означают одно и то же; じゃなかった и ではなかった тоже допустимые варианты. じゃ чаще встречается в разговоре. В упражнениях требуемый вариант уточняется.', 'じゃない va ではない bir xil ma’noni bildiradi; じゃなかった va ではなかった ham to‘g‘ri variantlardir. Suhbatda じゃ ko‘proq uchraydi. Mashqlarda kerakli variant aniqlashtiriladi.'))) +
      (isAdjective ? section(heading('Правила и Исключения', 'Qoidalar va Istisnolar'),
        p(copy('な не является окончанием этих четырёх форм. Оно связывает な-прилагательное с существительным: 静かな部屋 (тихая комната). В конце предложения: 部屋は静かだ. Слова きれい (красивый, чистый) и 嫌い (не любить) относятся к な-прилагательным, хотя заканчиваются на い.', 'な bu to‘rtta shaklning qo‘shimchasi emas. U な-sifatni ot bilan bog‘laydi: 静かな部屋 (sokin xona). Gap oxirida: 部屋は静かだ. きれい (chiroyli, toza) va 嫌い (yoqtirmaslik) so‘zlari い bilan tugasa ham な-sifatlardir.')) +
        matrix('きれいです', copy('красивый, чистый', 'chiroyli, toza'), ends.map(s => 'きれい' + s))) : '') +
      section(heading('Примеры', 'Misollar'), isAdjective ?
        sentence('この<ruby>部屋<rt>へや</rt></ruby>は<ruby>静<rt>しず</rt></ruby>かだ。', 'В этой комнате тихо.', 'Bu xona sokin.') + sentence('きのうは<ruby>元気<rt>げんき</rt></ruby>じゃなかった。', 'Вчера я был(а) не в форме.', 'Kecha o‘zimni yaxshi his qilmadim.') :
        sentence('<ruby>兄<rt>あに</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>だ。', 'Мой старший брат студент.', 'Akam talaba.') + sentence('きのうは<ruby>休<rt>やす</rt></ruby>みじゃなかった。', 'Вчера не было выходного.', 'Kecha dam olish kuni emas edi.')) + practiceButton(isAdjective ? 'naadj' : 'noun');
  }
  const readings = {
    '見': 'み', '起': 'お', '着': 'き', '行': 'い', '高': 'たか',
    '静': 'しず', '部屋': 'へや', '勉強': 'べんきょう', '学生': 'がくせい', '嫌': 'きら'
  };
  function annotateProse(html) {
    let rubyDepth = 0;
    return html.split(/(<[^>]+>)/g).map((part, index) => {
      if (index % 2) {
        if (/^<ruby(?:\s|>)/.test(part)) rubyDepth++;
        if (/^<\/ruby>/.test(part)) rubyDepth--;
        return part;
      }
      if (rubyDepth) return part;
      return part.replace(/来(?:なかった|ない|ます|る|た)|部屋|勉強|学生|[見起着行高静嫌]/g, text => {
        if (text.startsWith('来')) {
          const reading = text === '来る' ? 'く' : text.startsWith('来な') ? 'こ' : 'き';
          return `<ruby>来<rt>${reading}</rt></ruby>${text.slice(1)}`;
        }
        return `<ruby>${text}<rt>${readings[text]}</rt></ruby>`;
      });
    }).join('');
  }
  function render(key) {
    const builders = {group1: groupOne, group2: groupTwo, group3: groupThree, iadj: adjectiveI, naadj: () => nominal(true), noun: () => nominal(false)};
    return builders[key] ? annotateProse(builders[key]()) : '';
  }
  return {render, steps, syncPracticeButtons, card};
})();
