// Explicit lexical groups. Never classify a verb from its -imasu sound.
// Furigana notation: [kanji|reading]; okurigana stays outside the brackets.
// Lexical sources are listed in LANGUAGE_REVIEW.md.
const TrainerVerbs = (() => {
  const sources = {
    marugoto: 'https://a2.marugotoweb.jp/en/grammar/reference/data/pdf/A2_appendix_02_en.pdf',
    mlc: 'https://www.mlcjapanese.co.jp/img/file24.pdf',
    marugotoVocabulary: 'https://marugoto.jpf.go.jp/assets/docs/download/elementary2_c/MarugotoElementary2CompetencesVocabularyIndex_EG.pdf',
    irodori: 'https://www.irodori-online.jpf.go.jp/a2-1/assets/pdf/lesson-ref/lesson18-grammar-en.pdf'
  };
  // id, verified group, familiar masu form, Russian meaning, Uzbek meaning
  const entries = [
  [
    "kaku",
    1,
    "[書|か]きます",
    "писать",
    "yozmoq"
  ],
  [
    "oyogu",
    1,
    "[泳|およ]ぎます",
    "плавать",
    "suzmoq"
  ],
  [
    "hanasu",
    1,
    "[話|はな]します",
    "говорить",
    "gapirmoq"
  ],
  [
    "matsu",
    1,
    "[待|ま]ちます",
    "ждать",
    "kutmoq"
  ],
  [
    "shinu",
    1,
    "[死|し]にます",
    "умирать",
    "o‘lmoq"
  ],
  [
    "nomu",
    1,
    "[飲|の]みます",
    "пить",
    "ichmoq"
  ],
  [
    "asobu",
    1,
    "[遊|あそ]びます",
    "играть",
    "o‘ynamoq"
  ],
  [
    "tsukuru",
    1,
    "[作|つく]ります",
    "делать, создавать",
    "yasamoq"
  ],
  [
    "kau",
    1,
    "[買|か]います",
    "покупать",
    "sotib olmoq"
  ],
  [
    "iku",
    1,
    "[行|い]きます",
    "идти, ехать",
    "bormoq"
  ],
  [
    "aru",
    1,
    "あります",
    "быть, иметься (о предметах)",
    "bor bo‘lmoq (jonsiz narsalar)"
  ],
  [
    "taberu",
    2,
    "[食|た]べます",
    "есть",
    "yemoq"
  ],
  [
    "miru",
    2,
    "[見|み]ます",
    "смотреть, видеть",
    "ko‘rmoq"
  ],
  [
    "okiru",
    2,
    "[起|お]きます",
    "вставать, просыпаться",
    "turmoq, uyg‘onmoq"
  ],
  [
    "oshieru",
    2,
    "[教|おし]えます",
    "учить, объяснять",
    "o‘rgatmoq"
  ],
  [
    "kiru_wear",
    2,
    "[着|き]ます",
    "надевать (рубашку, пальто и т. п.)",
    "kiymoq (ko‘ylak, palto va h.k.)"
  ],
  [
    "suru",
    3,
    "します",
    "делать",
    "qilmoq"
  ],
  [
    "kuru",
    3,
    "[来|き]ます",
    "приходить",
    "kelmoq"
  ],
  [
    "benkyou",
    3,
    "[勉強|べんきょう]します",
    "учиться, заниматься",
    "o‘qimoq, o‘rganmoq"
  ],
  [
    "kaeru",
    1,
    "[帰|かえ]ります",
    "возвращаться домой",
    "uyga qaytmoq"
  ],
  [
    "hairu",
    1,
    "[入|はい]ります",
    "входить",
    "kirmoq"
  ],
  [
    "neru",
    2,
    "[寝|ね]ます",
    "спать, ложиться спать",
    "uxlamoq"
  ],
  [
    "tsukau",
    1,
    "[使|つか]います",
    "использовать",
    "ishlatmoq"
  ],
  [
    "toru",
    1,
    "[取|と]ります",
    "брать",
    "olmoq"
  ],
  [
    "iru",
    2,
    "います",
    "быть, находиться (о людях и животных)",
    "bor bo‘lmoq (odamlar va hayvonlar)"
  ],
  [
    "yomu",
    1,
    "[読|よ]みます",
    "читать",
    "o‘qimoq"
  ],
  [
    "hashiru",
    1,
    "[走|はし]ります",
    "бежать",
    "yugurmoq"
  ],
  [
    "kiru_cut",
    1,
    "[切|き]ります",
    "резать",
    "kesmoq"
  ],
  [
    "kiku",
    1,
    "[聞|き]きます",
    "слушать, спрашивать",
    "tinglamoq, so‘ramoq"
  ],
  [
    "aruku",
    1,
    "[歩|ある]きます",
    "идти пешком",
    "piyoda yurmoq"
  ],
  [
    "hataraku",
    1,
    "[働|はたら]きます",
    "работать",
    "ishlamoq"
  ],
  [
    "isogu",
    1,
    "[急|いそ]ぎます",
    "спешить",
    "shoshilmoq"
  ],
  [
    "kasu",
    1,
    "[貸|か]します",
    "давать взаймы",
    "qarzga bermoq"
  ],
  [
    "kaesu",
    1,
    "[返|かえ]します",
    "возвращать (что-либо)",
    "qaytarib bermoq"
  ],
  [
    "kesu",
    1,
    "[消|け]します",
    "выключать, стирать",
    "o‘chirmoq"
  ],
  [
    "motsu",
    1,
    "[持|も]ちます",
    "держать, иметь при себе",
    "ushlamoq, olib yurmoq"
  ],
  [
    "tatsu",
    1,
    "[立|た]ちます",
    "вставать",
    "o‘rnidan turmoq"
  ],
  [
    "sumu",
    1,
    "[住|す]みます",
    "жить (где-либо)",
    "yashamoq"
  ],
  [
    "yasumu",
    1,
    "[休|やす]みます",
    "отдыхать",
    "dam olmoq"
  ],
  [
    "erabu",
    1,
    "[選|えら]びます",
    "выбирать",
    "tanlamoq"
  ],
  [
    "yobu",
    1,
    "[呼|よ]びます",
    "звать",
    "chaqirmoq"
  ],
  [
    "au",
    1,
    "[会|あ]います",
    "встречаться",
    "uchrashmoq"
  ],
  [
    "arau",
    1,
    "[洗|あら]います",
    "мыть",
    "yuvmoq"
  ],
  [
    "utau",
    1,
    "[歌|うた]います",
    "петь",
    "kuylamoq"
  ],
  [
    "okuru",
    1,
    "[送|おく]ります",
    "отправлять",
    "yubormoq"
  ],
  [
    "uru",
    1,
    "[売|う]ります",
    "продавать",
    "sotmoq"
  ],
  [
    "owaru",
    1,
    "[終|お]わります",
    "заканчиваться",
    "tugamoq"
  ],
  [
    "hajimaru",
    1,
    "[始|はじ]まります",
    "начинаться",
    "boshlanmoq"
  ],
  [
    "akeru",
    2,
    "[開|あ]けます",
    "открывать",
    "ochmoq"
  ],
  [
    "shimeru",
    2,
    "[閉|し]めます",
    "закрывать",
    "yopmoq"
  ]
];
  // Masu-stem kana → nonpast affirmative, negative base, past affirmative.
  const kanaRows = {
    'い':['う','わ','った'], 'き':['く','か','いた'], 'ぎ':['ぐ','が','いだ'],
    'し':['す','さ','した'], 'ち':['つ','た','った'], 'に':['ぬ','な','んだ'],
    'び':['ぶ','ば','んだ'], 'み':['む','ま','んだ'], 'り':['る','ら','った']
  };
  const formLabels = {
    ru:['Настоящее/Будущее · Утверждение','Настоящее/Будущее · Отрицание','Прошедшее · Утверждение','Прошедшее · Отрицание'],
    uz:['Hozirgi/Kelasi · Tasdiq','Hozirgi/Kelasi · Inkor','O‘tgan Zamon · Tasdiq','O‘tgan Zamon · Inkor']
  };
  const groupLabel = (v, lang) => ['','I','II','III'][v.group] + (lang === 'ru' ? ' группа' : ' guruh');
  function form(notation) {
    return {
      html: notation.replace(/\[([^|]+)\|([^\]]+)\]/g,'<ruby>$1<rt>$2</rt></ruby>'),
      text: notation.replace(/\[([^|]+)\|([^\]]+)\]/g,'$1'),
      reading: notation.replace(/\[([^|]+)\|([^\]]+)\]/g,'$2')
    };
  }
  // One-based PDF pages; lexical group/reading checks supplement the common grammar rules.
  const mlcPages = Object.fromEntries([
    [1,'kaku kiku iku aruku oyogu isogu'],
    [2,'kasu kesu hanasu shinu yobu asobu nomu yomu sumu yasumu kau au utau tsukau matsu tatsu'],
    [3,'uru toru aru tsukuru okuru kaeru hashiru neru taberu akeru shimeru oshieru okiru'],
    [4,'kiru_wear miru iru suru benkyou kuru']
  ].flatMap(([page,ids])=>ids.split(' ').map(id=>[id,page])));
  const vocabularyPages = {hataraku:19,kaesu:5,motsu:22,erabu:3,arau:2,owaru:5,hajimaru:19,hairu:18,kiru_cut:8};
  const verbs = entries.map(([id,group,masu,ru,uz], index) => {
    const stem = masu.slice(0,-2);
    let forms;
    if (group === 1) {
      const base = stem.slice(0,-1), [u,a,past] = kanaRows[stem.at(-1)];
      forms = [base+u,base+a+'ない',base+(id==='iku'?'った':past),base+a+'なかった'];
      if (id==='aru') { forms[1]='ない'; forms[3]='なかった'; }
    } else if (group === 2) forms = ['る','ない','た','なかった'].map(s=>stem+s);
    else if (id==='kuru') forms = ['[来|く]る','[来|こ]ない','[来|き]た','[来|こ]なかった'];
    else forms = ['する','しない','した','しなかった'].map(s=>masu.slice(0,-3)+s);
    return Object.freeze({id,group,masu:form(masu),forms:forms.map(form),meaning:{ru,uz},
      rule: id==='iku'||id==='aru'||id==='kuru' ? id : group===1 ? 'godan' : group===2 ? 'ichidan' : 'suru',
      featured:index<19, sources:['marugoto','irodori',mlcPages[id]?'mlc':'marugotoVocabulary'],
      verification:{source:mlcPages[id]?'mlc':'marugotoVocabulary',page:mlcPages[id]||vocabularyPages[id],checked:'2026-10-14'}});
  });
  const byId = Object.fromEntries(verbs.map(v=>[v.id,v]));
  const byLexeme = Object.fromEntries(verbs.map(v=>[v.forms[0].text,v]));
  const formIndex = q => (q.tense==='past'?2:0)+(q.polarity==='negative'?1:0);
  function steps(v, index, mode='masu') {
    const result = v.forms[index].reading, start = v.masu.reading, stem = start.slice(0,-2);
    const step = (ru,uz,from,to) => ({label:{ru,uz},from,to});
    if(mode==='dictionary') {
      const dictionary = v.forms[0].reading;
      if(index===0) return [step('Это уже нужная форма. Менять ничего не нужно.','Bu kerakli shakl. Uni o‘zgartirish shart emas.',dictionary,result)];
      if(v.rule==='aru' && index%2) return [step('У ある особое отрицание: '+result+'.','ある ning maxsus inkor shakli: '+result+'.',dictionary,result)];
      if(v.group===3) return [step('У III группы особые формы. Запомните '+dictionary+' → '+result+'.','III guruhning maxsus shakllarini yodlang: '+dictionary+' → '+result+'.',dictionary,result)];
      if(v.group===2) return [step('Замените конечное る на '+['','ない','た','なかった'][index]+'.','Oxirgi る ni '+['','ない','た','なかった'][index]+' ga almashtiring.',dictionary,result)];
      if(index===3) return [...steps(v,1,mode),step('Замените ない на なかった.','ない ni なかった ga almashtiring.',v.forms[1].reading,result)];
      const [,a,past] = kanaRows[stem.at(-1)];
      const ending = index===1 ? a+'ない' : v.rule==='iku' ? 'った' : past;
      return [step(v.rule==='iku'&&index===2 ? 'У <ruby>行<rt>い</rt></ruby>く особая прошедшая форма: <ruby>行<rt>い</rt></ruby>った.' : 'Замените конечное '+dictionary.at(-1)+' на '+ending+'.',v.rule==='iku'&&index===2 ? '<ruby>行<rt>い</rt></ruby>く ning maxsus o‘tgan zamon shakli: <ruby>行<rt>い</rt></ruby>った.' : 'Oxirgi '+dictionary.at(-1)+' ni '+ending+' ga almashtiring.',dictionary,result)];
    }
    if(v.rule==='aru' && index%2) {
      const out=[step('Запомните особое отрицание: вся форма あります заменяется на ない.','Maxsus inkorni yodlang: butun あります shakli ない bilan almashadi.',start,'ない')];
      if(index===3) out.push(step('Для прошедшего отрицания замените ない на なかった.','O‘tgan zamon inkori uchun ない ni なかった ga almashtiring.','ない',result));
      return out;
    }
    if(v.group===3) return [step(v.rule==='kuru'?'Запомните форму '+v.forms[index].html+'. Обратите внимание на чтение.':'Запомните особую форму III группы.',v.rule==='kuru'?'Shaklni yodlang: '+v.forms[index].html+'. O‘qilishiga e’tibor bering.':'III guruhning maxsus shaklini yodlang.',start,result)];
    const out=[step('Уберите ます.','ます ni olib tashlang.',start,stem)];
    if(v.group===2) out.push(step('Сохраните основу и добавьте '+['る','ない','た','なかった'][index]+'.','Asosni saqlab, '+['る','ない','た','なかった'][index]+' qo‘shing.',stem,result));
    else {
      const [u,a,past] = kanaRows[stem.at(-1)];
      const ending = index===0?u:index===2?(v.rule==='iku'?'った':past):a+'ない';
      const intermediate = index===3?v.forms[1].reading:result;
      out.push(step(v.rule==='iku'&&index===2?'Исключение: замените き на った (не いた).':'Замените последнюю кану '+stem.at(-1)+' на '+ending+'.',v.rule==='iku'&&index===2?'Istisno: き ni った ga almashtiring (いた emas).':'Oxirgi '+stem.at(-1)+' kanasini '+ending+' ga almashtiring.',stem,intermediate));
      if(index===3) out.push(step('Замените ない на なかった.','ない ni なかった ga almashtiring.',intermediate,result));
    }
    return out;
  }
  function question(spec, mode='masu') {
    const v=byId[spec.verbId] || byLexeme[spec.lexeme];
    if(!v) throw new Error('Unknown verb: '+spec.lexeme);
    const index=formIndex(spec), source=mode==='masu'?v.masu:v.forms[0];
    const prompt={}, context={}, explanation={};
    for(const lang of ['ru','uz']) {
      prompt[lang]=source.html+' → '+formLabels[lang][index];
      context[lang]=v.meaning[lang]+' · '+groupLabel(v,lang)+(mode==='masu'?' · ます':' · '+(lang==='ru'?'словарная форма':'lug‘aviy shakl'));
      explanation[lang]=source.html+' → '+v.forms[index].html+'. '+groupLabel(v,lang)+'. '+steps(v,index,mode).map((s,i)=>(i+1)+'. '+s.label[lang]+' '+s.from+' → '+s.to+'.').join(' ');
    }
    return {...spec,verbId:v.id,lexeme:v.forms[0].text,sourceMode:mode,prompt,context,explanation,
      options:spec.options.map(o=>({...o,html:o.isCorrect?v.forms[index].html:o.html}))};
  }
  // Four targeted questions intentionally repeat one verb to rehearse each cell.
  function practice(v) {
    return v.forms.map((_,index)=>question({id:10000+verbs.indexOf(v)*4+index,verbId:v.id,partOfSpeech:'verb',difficulty:'easy',
      tense:index<2?'present':'past',polarity:index%2?'negative':'affirmative',tags:['lesson'],
      dialogue:[{speaker:'',text:'____'}],
      options:v.forms.map((f,i)=>({id:'lesson-'+v.id+'-'+index+'-'+i,html:f.html,isCorrect:i===index}))}));
  }
  return {verbs,byId,byLexeme,kanaRows,formLabels,groupLabel,formIndex,steps,question,practice,sources};
})();
if (typeof module !== 'undefined') module.exports = TrainerVerbs;
