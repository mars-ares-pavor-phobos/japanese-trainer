// Lesson rendering reads the same lexical records and transformations as questions.
const VerbLessons = (() => {
  const selectedForms = new Map();
  const copy = {
    known:{ru:'Знакомая Форма',uz:'Tanish Shakl'},
    choose:{ru:'Выберите форму для пошагового разбора.',uz:'Bosqichma-bosqich izoh uchun shaklni tanlang.'},
    affirmative:{ru:'Утверждение',uz:'Tasdiq'}, negative:{ru:'Отрицание',uz:'Inkor'},
    nonpast:{ru:'Настоящее/Будущее',uz:'Hozirgi/Kelasi'}, past:{ru:'Прошедшее',uz:'O‘tgan Zamon'},
    dictionary:{ru:'Словарная Форма',uz:'Lug‘aviy Shakl'},
    practice:{ru:'Практика: 4 Формы',uz:'To‘rtta Shakl Mashqi'},
    busy:{ru:'Сначала Завершите Текущую Тренировку',uz:'Avval Joriy Mashqni Yakunlang'},
    more:{ru:'Другие Глаголы',uz:'Boshqa Fe’llar'},
    changes:{ru:'Изменяемая часть подчёркнута.',uz:'O‘zgaradigan qismning tagi chizilgan.'},
    aru:{ru:'Особое отрицание: あります → ない; прошедшее отрицание: なかった. Формы あらない нет.',uz:'Maxsus inkor: あります → ない; o‘tgan zamon inkori: なかった. あらない shakli yo‘q.'},
    iku:{ru:'Исключение в прошедшем утверждении: <ruby>行<rt>い</rt></ruby>きます → <ruby>行<rt>い</rt></ruby>った, не <ruby>行<rt>い</rt></ruby>いた.',uz:'O‘tgan zamon tasdiqdagi istisno: <ruby>行<rt>い</rt></ruby>きます → <ruby>行<rt>い</rt></ruby>った, <ruby>行<rt>い</rt></ruby>いた emas.'},
    contrast:{ru:'Не путайте: <ruby>来<rt>き</rt></ruby>ます: приходить, III группа → <ruby>来<rt>く</rt></ruby>る／<ruby>来<rt>こ</rt></ruby>ない. <ruby>着<rt>き</rt></ruby>ます: надевать, II группа → <ruby>着<rt>き</rt></ruby>る／<ruby>着<rt>き</rt></ruby>ない.',uz:'Farqlang: <ruby>来<rt>き</rt></ruby>ます: kelmoq, III guruh → <ruby>来<rt>く</rt></ruby>る／<ruby>来<rt>こ</rt></ruby>ない. <ruby>着<rt>き</rt></ruby>ます: kiymoq, II guruh → <ruby>着<rt>き</rt></ruby>る／<ruby>着<rt>き</rt></ruby>ない.'},
    group2:{ru:'<ruby>見<rt>み</rt></ruby>ます и <ruby>起<rt>お</rt></ruby>きます: II группа, хотя перед ます звучит и. Группу учим вместе со словом; по -imasu её не определить.',uz:'<ruby>見<rt>み</rt></ruby>ます va <ruby>起<rt>お</rt></ruby>きます: II guruh, garchi ます oldidan i eshitilsa ham. Guruhni so‘z bilan birga o‘rganamiz; uni faqat -imasu orqali aniqlab bo‘lmaydi.'}
  };
  const label = key => copy[key][currentLang];
  function diff(from,to) {
    let i=0;while(i<from.length && i<to.length && from[i]===to[i]) i++;
    const paint = value => value.slice(0,i)+(value.slice(i)?'<mark>'+value.slice(i)+'</mark>':'');
    return `<span class="form-change"><span class="jp" lang="ja">${paint(from)}</span><span aria-hidden="true">→</span><span class="jp" lang="ja">${paint(to)}</span></span>`;
  }
  function steps(v,index,mode='masu') {
    return `<ol class="verb-steps">${TrainerVerbs.steps(v,index,mode).map(s=>`<li><span>${s.label[currentLang]}</span><div class="step-change">${diff(s.from,s.to)}</div></li>`).join('')}</ol>`;
  }
  function note(v) {
    const key = ['aru','iku'].includes(v.id)?v.id:['kuru','kiru_wear'].includes(v.id)?'contrast':['miru','okiru'].includes(v.id)?'group2':null;
    return key ? `<p class="verb-note">${label(key)}</p>` : '';
  }
  function card(v) {
    const selected=selectedForms.get(v.id)||0;
    return `<article class="verb-example-card masu-card" id="lesson-${v.id}" aria-labelledby="verb-title-${v.id}">
      <div class="card-header"><div><p class="lesson-kicker">${label('known')} · ます</p><h4 class="verb-masu jp" lang="ja" id="verb-title-${v.id}">${v.masu.html}</h4><p class="verb-reading jp" lang="ja">${v.masu.reading}</p></div><span class="group-badge">${titleCaseLabel(TrainerVerbs.groupLabel(v,currentLang))}</span><p class="verb-meaning">${v.meaning[currentLang]}</p></div>
      <div class="verb-walkthrough"><p class="lesson-target">${titleCaseLabel(TrainerVerbs.formLabels[currentLang][selected])}</p>${steps(v,selected)}<p class="lesson-help">${label('changes')}</p></div>
      <div class="plain-grid" role="group" aria-label="${v.masu.reading}: ${copyForLang('Четыре простые формы','To‘rtta oddiy shakl')}">${v.forms.map((f,i)=>`<button type="button" class="plain-cell" data-verb="${v.id}" data-explain-form="${i}" aria-pressed="${selected===i}"><span class="cell-tense">${label(i<2?'nonpast':'past')}</span><span class="cell-polarity">${label(i%2?'negative':'affirmative')}</span><span class="jp cell-form" lang="ja">${f.html}</span>${i===0?`<span class="dictionary-label">${label('dictionary')}</span>`:''}</button>`).join('')}</div>
      <div class="lesson-footer"><p class="lesson-help">${label('choose')}</p>${note(v)}<button type="button" class="theory-action-btn lesson-practice" data-lesson-practice="${v.id}">${label('practice')}</button></div>
    </article>`;
  }
  function group(group) {
    const verbs=TrainerVerbs.verbs.filter(v=>v.group===group);
    const main=verbs.filter(v=>v.featured), more=verbs.filter(v=>!v.featured);
    return `<div class="verb-examples">${main.map(card).join('')}</div>`+(more.length?`<details class="more-verbs" data-more-group="${group}"><summary>${label('more')} (${more.length})</summary><div class="verb-examples">${more.map(card).join('')}</div></details>`:'');
  }
  function select(id,index) {
    const v=TrainerVerbs.byId[id];if(!v || !Number.isInteger(index) || index<0 || index>3)return;
    selectedForms.set(id,index);
    document.getElementById('lesson-'+id).outerHTML=card(v);
    syncPracticeButtons();
    markJapaneseContent(document.getElementById('lesson-'+id));
    document.querySelector(`[data-verb="${id}"][data-explain-form="${index}"]`).focus({preventScroll:true});
  }
  function syncPracticeButtons() {
    document.querySelectorAll('[data-lesson-practice], [data-quick-lesson]').forEach(b=>{
      if (!TrainerVerbs.byId[b.dataset.lessonPractice || b.dataset.quickLesson]) return;
      b.disabled=practiceState.active;
      b.textContent=label(practiceState.active?'busy':'practice');
    });
  }
  function kanaTable() {
    return `<details class="kana-reference" id="kana-reference" open><summary>${copyForLang('I Группа: Кана перед ます → Простая Форма','I Guruh: ます Oldidagi Kana → Oddiy Shakl')}</summary>
      <p class="table-hint">${copyForLang("Таблицу можно прокрутить вбок.","Jadvalni yon tomonga surish mumkin.")}</p><div class="kana-table-scroll" tabindex="0" role="region" aria-label="${copyForLang("Окончания Глаголов I Группы","I Guruh Fe’llarining Qo‘shimchalari")}"><table class="kana-table"><thead><tr><th scope="col">ます</th><th scope="col">${label('nonpast')}<br>${label('affirmative')}</th><th scope="col">${label('nonpast')}<br>${label('negative')}</th><th scope="col">${label('past')}<br>${label('affirmative')}</th><th scope="col">${label('past')}<br>${label('negative')}</th></tr></thead><tbody>
      ${Object.entries(TrainerVerbs.kanaRows).map(([i,[u,a,past]])=>`<tr><th scope="row" class="jp" lang="ja">${i}ます</th><td class="jp" lang="ja">${u}</td><td class="jp" lang="ja">${a}ない</td><td class="jp" lang="ja">${past}</td><td class="jp" lang="ja">${a}なかった</td></tr>`).join('')}
      </tbody></table></div><p class="verb-note">${copyForLang('Только для I группы. Прошедшее отрицание: ない → なかった. Исключения: <ruby>行<rt>い</rt></ruby>きます → <ruby>行<rt>い</rt></ruby>った; あります → ない／なかった.','Faqat I guruh uchun. O‘tgan zamon inkori: ない → なかった. Istisnolar: <ruby>行<rt>い</rt></ruby>きます → <ruby>行<rt>い</rt></ruby>った; あります → ない／なかった.')}</p></details>`;
  }
  return {group,steps,select,syncPracticeButtons,kanaTable};
})();
