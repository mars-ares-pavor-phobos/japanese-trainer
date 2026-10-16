const questionSpecs = [
  {
    "id": 1,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "tags": [
      "ichidan",
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>今日<rt>きょう</rt></ruby>の<ruby>昼<rt>ひる</rt></ruby>、<ruby>何<rt>なに</rt></ruby>を____？"
      },
      {
        "speaker": "B",
        "text": "パスタにしようかな。"
      }
    ],
    "options": [
      {
        "id": "1-1",
        "isCorrect": true
      },
      {
        "id": "1-2",
        "html": "<ruby>食<rt>た</rt></ruby>べるだ",
        "isCorrect": false
      },
      {
        "id": "1-3",
        "html": "<ruby>食<rt>た</rt></ruby>べりる",
        "isCorrect": false
      },
      {
        "id": "1-4",
        "html": "<ruby>食<rt>た</rt></ruby>べだ",
        "isCorrect": false
      }
    ],
    "lexeme": "食べる",
    "tense": "present",
    "polarity": "affirmative",
    "verbId": "taberu"
  },
  {
    "id": 2,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "tags": [
      "godan-ku",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>の<ruby>会議<rt>かいぎ</rt></ruby>、メモした？"
      },
      {
        "speaker": "B",
        "text": "うん、<ruby>大事<rt>だいじ</rt></ruby>なことをノートに____。"
      }
    ],
    "options": [
      {
        "id": "2-1",
        "isCorrect": true
      },
      {
        "id": "2-2",
        "html": "<ruby>書<rt>か</rt></ruby>くた",
        "isCorrect": false
      },
      {
        "id": "2-3",
        "html": "<ruby>書<rt>か</rt></ruby>きた",
        "isCorrect": false
      },
      {
        "id": "2-4",
        "html": "<ruby>書<rt>か</rt></ruby>った",
        "isCorrect": false
      }
    ],
    "lexeme": "書く",
    "tense": "past",
    "polarity": "affirmative",
    "verbId": "kaku"
  },
  {
    "id": 3,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "tags": [
      "godan",
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>今夜<rt>こんや</rt></ruby>の<ruby>飲<rt>の</rt></ruby>み<ruby>会<rt>かい</rt></ruby>、<ruby>行<rt>い</rt></ruby>く？"
      },
      {
        "speaker": "B",
        "text": "ごめん、<ruby>今日<rt>きょう</rt></ruby>は<ruby>残業<rt>ざんぎょう</rt></ruby>で____。"
      }
    ],
    "options": [
      {
        "id": "3-1",
        "isCorrect": true
      },
      {
        "id": "3-2",
        "html": "<ruby>行<rt>い</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "3-3",
        "html": "<ruby>行<rt>い</rt></ruby>きない",
        "isCorrect": false
      },
      {
        "id": "3-4",
        "html": "<ruby>行<rt>い</rt></ruby>かないだ",
        "isCorrect": false
      }
    ],
    "lexeme": "行く",
    "tense": "present",
    "polarity": "negative",
    "verbId": "iku"
  },
  {
    "id": 4,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "tags": [
      "godan-mu",
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>、コーヒー<ruby>飲<rt>の</rt></ruby>んだ？"
      },
      {
        "speaker": "B",
        "text": "ううん、<ruby>眠<rt>ねむ</rt></ruby>れなくなるから____。"
      }
    ],
    "options": [
      {
        "id": "4-1",
        "isCorrect": true
      },
      {
        "id": "4-2",
        "html": "<ruby>飲<rt>の</rt></ruby>むなかった",
        "isCorrect": false
      },
      {
        "id": "4-3",
        "html": "<ruby>飲<rt>の</rt></ruby>みなかった",
        "isCorrect": false
      },
      {
        "id": "4-4",
        "html": "<ruby>飲<rt>の</rt></ruby>まないだった",
        "isCorrect": false
      }
    ],
    "lexeme": "飲む",
    "tense": "past",
    "polarity": "negative",
    "verbId": "nomu"
  },
  {
    "id": 5,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "tags": [
      "suru",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>、<ruby>部屋<rt>へや</rt></ruby>の<ruby>掃除<rt>そうじ</rt></ruby>を____？"
      },
      {
        "speaker": "B",
        "text": "うん、すっかりきれいになったよ。"
      }
    ],
    "options": [
      {
        "id": "5-1",
        "isCorrect": true
      },
      {
        "id": "5-2",
        "html": "すった",
        "isCorrect": false
      },
      {
        "id": "5-3",
        "html": "しった",
        "isCorrect": false
      },
      {
        "id": "5-4",
        "html": "するた",
        "isCorrect": false
      }
    ],
    "lexeme": "する",
    "tense": "past",
    "polarity": "affirmative",
    "verbId": "suru"
  },
  {
    "id": 6,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "tags": [
      "kuru",
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>田中<rt>たなか</rt></ruby>さん、<ruby>今日<rt>きょう</rt></ruby>のランチに____？"
      },
      {
        "speaker": "B",
        "text": "うん、あと<ruby>五分<rt>ごふん</rt></ruby>だって。"
      }
    ],
    "options": [
      {
        "id": "6-1",
        "isCorrect": true
      },
      {
        "id": "6-2",
        "html": "<ruby>来<rt>く</rt></ruby>るだ",
        "isCorrect": false
      },
      {
        "id": "6-3",
        "html": "<ruby>来<rt>く</rt></ruby>ります",
        "isCorrect": false
      },
      {
        "id": "6-4",
        "html": "<ruby>来<rt>く</rt></ruby>るる",
        "isCorrect": false
      }
    ],
    "lexeme": "来る",
    "tense": "present",
    "polarity": "affirmative",
    "verbId": "kuru"
  },
  {
    "id": 7,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "tags": [
      "godan-bu",
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>は、<ruby>何<rt>なに</rt></ruby>をする？"
      },
      {
        "speaker": "B",
        "text": "よく<ruby>公園<rt>こうえん</rt></ruby>で____。"
      }
    ],
    "options": [
      {
        "id": "7-1",
        "isCorrect": true
      },
      {
        "id": "7-2",
        "html": "<ruby>遊<rt>あそ</rt></ruby>ぶだ",
        "isCorrect": false
      },
      {
        "id": "7-3",
        "html": "<ruby>遊<rt>あそ</rt></ruby>いる",
        "isCorrect": false
      },
      {
        "id": "7-4",
        "html": "<ruby>遊<rt>あそ</rt></ruby>ぶる",
        "isCorrect": false
      }
    ],
    "lexeme": "遊ぶ",
    "tense": "present",
    "polarity": "affirmative",
    "verbId": "asobu"
  },
  {
    "id": 8,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "tags": [
      "ichidan",
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>も<ruby>早<rt>はや</rt></ruby>く<ruby>起<rt>お</rt></ruby>きる？"
      },
      {
        "speaker": "B",
        "text": "ううん、<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>はそんなに<ruby>早<rt>はや</rt></ruby>く____。"
      }
    ],
    "options": [
      {
        "id": "8-1",
        "isCorrect": true
      },
      {
        "id": "8-2",
        "html": "<ruby>起<rt>お</rt></ruby>きらない",
        "isCorrect": false
      },
      {
        "id": "8-3",
        "html": "<ruby>起<rt>お</rt></ruby>きるない",
        "isCorrect": false
      },
      {
        "id": "8-4",
        "html": "<ruby>起<rt>お</rt></ruby>きないだ",
        "isCorrect": false
      }
    ],
    "lexeme": "起きる",
    "tense": "present",
    "polarity": "negative",
    "verbId": "okiru"
  },
  {
    "id": 9,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "tags": [
      "godan-tsu",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>のバス、すぐ<ruby>来<rt>き</rt></ruby>た？"
      },
      {
        "speaker": "B",
        "text": "ううん、<ruby>三十分<rt>さんじゅっぷん</rt></ruby>ぐらい____。"
      }
    ],
    "options": [
      {
        "id": "9-1",
        "isCorrect": true
      },
      {
        "id": "9-2",
        "html": "<ruby>待<rt>ま</rt></ruby>つた",
        "isCorrect": false
      },
      {
        "id": "9-3",
        "html": "<ruby>待<rt>ま</rt></ruby>ちた",
        "isCorrect": false
      },
      {
        "id": "9-4",
        "html": "<ruby>待<rt>ま</rt></ruby>いた",
        "isCorrect": false
      }
    ],
    "lexeme": "待つ",
    "tense": "past",
    "polarity": "affirmative",
    "verbId": "matsu"
  },
  {
    "id": 10,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "tags": [
      "suru-verb",
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>、<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>した？"
      },
      {
        "speaker": "B",
        "text": "ううん、<ruby>疲<rt>つか</rt></ruby>れていて____。"
      }
    ],
    "options": [
      {
        "id": "10-1",
        "isCorrect": true
      },
      {
        "id": "10-2",
        "html": "<ruby>勉強<rt>べんきょう</rt></ruby>すなかった",
        "isCorrect": false
      },
      {
        "id": "10-3",
        "html": "<ruby>勉強<rt>べんきょう</rt></ruby>しないだった",
        "isCorrect": false
      },
      {
        "id": "10-4",
        "html": "<ruby>勉強<rt>べんきょう</rt></ruby>するなかった",
        "isCorrect": false
      }
    ],
    "lexeme": "勉強する",
    "tense": "past",
    "polarity": "negative",
    "verbId": "benkyou"
  },
  {
    "id": 11,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "tags": [
      "godan-gu",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>週末<rt>しゅうまつ</rt></ruby>、プールに<ruby>行<rt>い</rt></ruby>った？"
      },
      {
        "speaker": "B",
        "text": "うん、<ruby>久<rt>ひさ</rt></ruby>しぶりにたくさん____。"
      }
    ],
    "options": [
      {
        "id": "11-1",
        "isCorrect": true
      },
      {
        "id": "11-2",
        "html": "<ruby>泳<rt>およ</rt></ruby>ぐた",
        "isCorrect": false
      },
      {
        "id": "11-3",
        "html": "<ruby>泳<rt>およ</rt></ruby>ぎた",
        "isCorrect": false
      },
      {
        "id": "11-4",
        "html": "<ruby>泳<rt>およ</rt></ruby>った",
        "isCorrect": false
      }
    ],
    "lexeme": "泳ぐ",
    "tense": "past",
    "polarity": "affirmative",
    "verbId": "oyogu"
  },
  {
    "id": 12,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "tags": [
      "ichidan",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>新<rt>あたら</rt></ruby>しい<ruby>映画<rt>えいが</rt></ruby>、どうだった？"
      },
      {
        "speaker": "B",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>____けど、おもしろかったよ。"
      }
    ],
    "options": [
      {
        "id": "12-1",
        "isCorrect": true
      },
      {
        "id": "12-2",
        "html": "<ruby>見<rt>み</rt></ruby>った",
        "isCorrect": false
      },
      {
        "id": "12-3",
        "html": "<ruby>見<rt>み</rt></ruby>りた",
        "isCorrect": false
      },
      {
        "id": "12-4",
        "html": "<ruby>見<rt>み</rt></ruby>るた",
        "isCorrect": false
      }
    ],
    "lexeme": "見る",
    "tense": "past",
    "polarity": "affirmative",
    "verbId": "miru"
  },
  {
    "id": 13,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "tags": [
      "contrast",
      "godan-ru",
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>今日<rt>きょう</rt></ruby>はもう<ruby>帰<rt>かえ</rt></ruby>るの？"
      },
      {
        "speaker": "B",
        "text": "ううん、まだ____。<ruby>仕事<rt>しごと</rt></ruby>が<ruby>残<rt>のこ</rt></ruby>ってる。"
      }
    ],
    "options": [
      {
        "id": "13-1",
        "isCorrect": true
      },
      {
        "id": "13-2",
        "html": "<ruby>帰<rt>かえ</rt></ruby>るない",
        "isCorrect": false
      },
      {
        "id": "13-3",
        "html": "<ruby>帰<rt>かえ</rt></ruby>りない",
        "isCorrect": false
      },
      {
        "id": "13-4",
        "html": "<ruby>帰<rt>かえ</rt></ruby>らないだ",
        "isCorrect": false
      }
    ],
    "lexeme": "帰る",
    "tense": "present",
    "polarity": "negative",
    "verbId": "kaeru"
  },
  {
    "id": 14,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "tags": [
      "contrast",
      "godan-ru",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "さっきのカフェ、どうだった？"
      },
      {
        "speaker": "B",
        "text": "こんでいたけど、すぐ<ruby>店<rt>みせ</rt></ruby>に____よ。"
      }
    ],
    "options": [
      {
        "id": "14-1",
        "isCorrect": true
      },
      {
        "id": "14-2",
        "html": "<ruby>入<rt>はい</rt></ruby>るた",
        "isCorrect": false
      },
      {
        "id": "14-3",
        "html": "<ruby>入<rt>はい</rt></ruby>りた",
        "isCorrect": false
      },
      {
        "id": "14-4",
        "html": "<ruby>入<rt>はい</rt></ruby>いた",
        "isCorrect": false
      }
    ],
    "lexeme": "入る",
    "tense": "past",
    "polarity": "affirmative",
    "verbId": "hairu"
  },
  {
    "id": 15,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "tags": [
      "ichidan",
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>昨夜<rt>さくや</rt></ruby>、<ruby>何時<rt>なんじ</rt></ruby>に<ruby>寝<rt>ね</rt></ruby>た？"
      },
      {
        "speaker": "B",
        "text": "<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ていて、<ruby>二時<rt>にじ</rt></ruby>まで____。"
      }
    ],
    "options": [
      {
        "id": "15-1",
        "isCorrect": true
      },
      {
        "id": "15-2",
        "html": "<ruby>寝<rt>ね</rt></ruby>らなかった",
        "isCorrect": false
      },
      {
        "id": "15-3",
        "html": "<ruby>寝<rt>ね</rt></ruby>ないだった",
        "isCorrect": false
      },
      {
        "id": "15-4",
        "html": "<ruby>寝<rt>ね</rt></ruby>るなかった",
        "isCorrect": false
      }
    ],
    "lexeme": "寝る",
    "tense": "past",
    "polarity": "negative",
    "verbId": "neru"
  },
  {
    "id": 16,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "tags": [
      "godan-u",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "このアプリ、どう？"
      },
      {
        "speaker": "B",
        "text": "<ruby>今朝<rt>けさ</rt></ruby>ちょっと____けど、わかりやすかった。"
      }
    ],
    "options": [
      {
        "id": "16-1",
        "isCorrect": true
      },
      {
        "id": "16-2",
        "html": "<ruby>使<rt>つか</rt></ruby>うた",
        "isCorrect": false
      },
      {
        "id": "16-3",
        "html": "<ruby>使<rt>つか</rt></ruby>いた",
        "isCorrect": false
      },
      {
        "id": "16-4",
        "html": "<ruby>使<rt>つか</rt></ruby>っただ",
        "isCorrect": false
      }
    ],
    "lexeme": "使う",
    "tense": "past",
    "polarity": "affirmative",
    "verbId": "tsukau"
  },
  {
    "id": 17,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "tags": [
      "godan-ru",
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>の<ruby>夕飯<rt>ゆうはん</rt></ruby>は<ruby>自分<rt>じぶん</rt></ruby>で<ruby>作<rt>つく</rt></ruby>った？"
      },
      {
        "speaker": "B",
        "text": "ううん、____。<ruby>外<rt>そと</rt></ruby>で<ruby>食<rt>た</rt></ruby>べたよ。"
      }
    ],
    "options": [
      {
        "id": "17-1",
        "isCorrect": true
      },
      {
        "id": "17-2",
        "html": "<ruby>作<rt>つく</rt></ruby>るなかった",
        "isCorrect": false
      },
      {
        "id": "17-3",
        "html": "<ruby>作<rt>つく</rt></ruby>りなかった",
        "isCorrect": false
      },
      {
        "id": "17-4",
        "html": "<ruby>作<rt>つく</rt></ruby>らないだった",
        "isCorrect": false
      }
    ],
    "lexeme": "作る",
    "tense": "past",
    "polarity": "negative",
    "verbId": "tsukuru"
  },
  {
    "id": 18,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "tags": [
      "kuru",
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>のサークル、<ruby>山本<rt>やまもと</rt></ruby>さんは<ruby>来<rt>き</rt></ruby>た？"
      },
      {
        "speaker": "B",
        "text": "ううん、<ruby>仕事<rt>しごと</rt></ruby>で____みたい。"
      }
    ],
    "options": [
      {
        "id": "18-1",
        "isCorrect": true
      },
      {
        "id": "18-2",
        "html": "<ruby>来<rt>こ</rt></ruby>ないだった",
        "isCorrect": false
      },
      {
        "id": "18-3",
        "html": "<ruby>来<rt>く</rt></ruby>るなかった",
        "isCorrect": false
      },
      {
        "id": "18-4",
        "html": "<ruby>来<rt>こ</rt></ruby>なかっただ",
        "isCorrect": false
      }
    ],
    "lexeme": "来る",
    "tense": "past",
    "polarity": "negative",
    "verbId": "kuru"
  },
  {
    "id": 19,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "tags": [
      "suru",
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>今日<rt>きょう</rt></ruby>は<ruby>運動<rt>うんどう</rt></ruby>する？"
      },
      {
        "speaker": "B",
        "text": "ううん、<ruby>雨<rt>あめ</rt></ruby>だから____。"
      }
    ],
    "options": [
      {
        "id": "19-1",
        "isCorrect": true
      },
      {
        "id": "19-2",
        "html": "すない",
        "isCorrect": false
      },
      {
        "id": "19-3",
        "html": "するない",
        "isCorrect": false
      },
      {
        "id": "19-4",
        "html": "しないだ",
        "isCorrect": false
      }
    ],
    "lexeme": "する",
    "tense": "present",
    "polarity": "negative",
    "verbId": "suru"
  },
  {
    "id": 20,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "tags": [
      "ichidan",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>、どうだった？"
      },
      {
        "speaker": "B",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>が<ruby>新<rt>あたら</rt></ruby>しい<ruby>表現<rt>ひょうげん</rt></ruby>をたくさん____。"
      }
    ],
    "options": [
      {
        "id": "20-1",
        "isCorrect": true
      },
      {
        "id": "20-2",
        "html": "<ruby>教<rt>おし</rt></ruby>えった",
        "isCorrect": false
      },
      {
        "id": "20-3",
        "html": "<ruby>教<rt>おし</rt></ruby>えりた",
        "isCorrect": false
      },
      {
        "id": "20-4",
        "html": "<ruby>教<rt>おし</rt></ruby>えるた",
        "isCorrect": false
      }
    ],
    "lexeme": "教える",
    "tense": "past",
    "polarity": "affirmative",
    "verbId": "oshieru"
  },
  {
    "id": 21,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "tags": [
      "contrast",
      "godan-ru",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>新幹線<rt>しんかんせん</rt></ruby>のきっぷ、もう____？"
      },
      {
        "speaker": "B",
        "text": "うん、<ruby>窓側<rt>まどがわ</rt></ruby>の<ruby>席<rt>せき</rt></ruby>だよ。"
      }
    ],
    "options": [
      {
        "id": "21-1",
        "isCorrect": true
      },
      {
        "id": "21-2",
        "html": "<ruby>取<rt>と</rt></ruby>るた",
        "isCorrect": false
      },
      {
        "id": "21-3",
        "html": "<ruby>取<rt>と</rt></ruby>りた",
        "isCorrect": false
      },
      {
        "id": "21-4",
        "html": "<ruby>取<rt>と</rt></ruby>いた",
        "isCorrect": false
      }
    ],
    "lexeme": "取る",
    "tense": "past",
    "polarity": "affirmative",
    "verbId": "toru"
  },
  {
    "id": 22,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "tags": [
      "exception",
      "iku",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>週末<rt>しゅうまつ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をした？"
      },
      {
        "speaker": "B",
        "text": "<ruby>土曜日<rt>どようび</rt></ruby>に<ruby>図書館<rt>としょかん</rt></ruby>へ____よ。"
      }
    ],
    "options": [
      {
        "id": "22-1",
        "isCorrect": true
      },
      {
        "id": "22-2",
        "html": "<ruby>行<rt>い</rt></ruby>いた",
        "isCorrect": false
      },
      {
        "id": "22-3",
        "html": "<ruby>行<rt>い</rt></ruby>きた",
        "isCorrect": false
      },
      {
        "id": "22-4",
        "html": "<ruby>行<rt>い</rt></ruby>んだ",
        "isCorrect": false
      }
    ],
    "lexeme": "行く",
    "tense": "past",
    "polarity": "affirmative",
    "verbId": "iku"
  },
  {
    "id": 23,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "tags": [
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "このドラマ、どう？"
      },
      {
        "speaker": "B",
        "text": "すごく____よ。<ruby>続<rt>つづ</rt></ruby>きが<ruby>気<rt>き</rt></ruby>になる。"
      }
    ],
    "prompt": {
      "ru": "<ruby>面白<rt>おもしろ</rt></ruby>い → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>面白<rt>おもしろ</rt></ruby>い → Hozirgi/Kelasi · Tasdiq"
    },
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, утверждение",
      "uz": "I-sifat, hozirgi/kelasi zamon, tasdiq"
    },
    "options": [
      {
        "id": "23-1",
        "html": "<ruby>面白<rt>おもしろ</rt></ruby>い",
        "isCorrect": true
      },
      {
        "id": "23-2",
        "html": "<ruby>面白<rt>おもしろ</rt></ruby>いだ",
        "isCorrect": false
      },
      {
        "id": "23-3",
        "html": "<ruby>面白<rt>おもしろ</rt></ruby>だ",
        "isCorrect": false
      },
      {
        "id": "23-4",
        "html": "<ruby>面白<rt>おもしろ</rt></ruby>な",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "В утвердительной форме настоящего/будущего времени い-прилагательное сохраняет словарную форму. だ не добавляется.",
      "uz": "Hozirgi/kelasi tasdiqda i-sifat lug‘aviy shaklda qoladi. だ qo‘shilmaydi."
    },
    "lexeme": "面白い",
    "tense": "present",
    "polarity": "affirmative"
  },
  {
    "id": 24,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "tags": [
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>今日<rt>きょう</rt></ruby>の<ruby>午後<rt>ごご</rt></ruby>、<ruby>時間<rt>じかん</rt></ruby>ある？"
      },
      {
        "speaker": "B",
        "text": "うん、<ruby>今日<rt>きょう</rt></ruby>はそんなに____。お<ruby>茶<rt>ちゃ</rt></ruby>しよう。"
      }
    ],
    "prompt": {
      "ru": "<ruby>忙<rt>いそが</rt></ruby>しい → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>忙<rt>いそが</rt></ruby>しい → Hozirgi/Kelasi · Inkor"
    },
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, отрицание",
      "uz": "I-sifat, hozirgi/kelasi zamon, inkor"
    },
    "options": [
      {
        "id": "24-1",
        "html": "<ruby>忙<rt>いそが</rt></ruby>しくない",
        "isCorrect": true
      },
      {
        "id": "24-2",
        "html": "<ruby>忙<rt>いそが</rt></ruby>しいくない",
        "isCorrect": false
      },
      {
        "id": "24-3",
        "html": "<ruby>忙<rt>いそが</rt></ruby>しない",
        "isCorrect": false
      },
      {
        "id": "24-4",
        "html": "<ruby>忙<rt>いそが</rt></ruby>しくないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "У い-прилагательного заменяем конечное い на くない.",
      "uz": "I-sifatda oxirgi い o‘rniga くない keladi."
    },
    "lexeme": "忙しい",
    "tense": "present",
    "polarity": "negative"
  },
  {
    "id": 25,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>旅行<rt>りょこう</rt></ruby>、どうだった？"
      },
      {
        "speaker": "B",
        "text": "<ruby>雨<rt>あめ</rt></ruby>が<ruby>多<rt>おお</rt></ruby>くて、あまり____。"
      }
    ],
    "prompt": {
      "ru": "<ruby>楽<rt>たの</rt></ruby>しい → Прошедшая Отрицательная Форма",
      "uz": "<ruby>楽<rt>たの</rt></ruby>しい → O‘tgan Zamon Inkor Shakli"
    },
    "context": {
      "ru": "い-прилагательное, прошедшее, отрицание",
      "uz": "I-sifat, o‘tgan zamon, inkor"
    },
    "options": [
      {
        "id": "25-1",
        "html": "<ruby>楽<rt>たの</rt></ruby>しくなかった",
        "isCorrect": true
      },
      {
        "id": "25-2",
        "html": "<ruby>楽<rt>たの</rt></ruby>しいくなかった",
        "isCorrect": false
      },
      {
        "id": "25-3",
        "html": "<ruby>楽<rt>たの</rt></ruby>しくないだった",
        "isCorrect": false
      },
      {
        "id": "25-4",
        "html": "<ruby>楽<rt>たの</rt></ruby>しくなかっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "У い-прилагательного заменяем конечное い на くなかった.",
      "uz": "I-sifatda oxirgi い o‘rniga くなかった keladi."
    },
    "lexeme": "楽しい",
    "tense": "past",
    "polarity": "negative"
  },
  {
    "id": 26,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "あのホテル、どうだった？"
      },
      {
        "speaker": "B",
        "text": "きれいだったけど、ちょっと____。"
      }
    ],
    "prompt": {
      "ru": "<ruby>高<rt>たか</rt></ruby>い → Прошедшая Утвердительная Форма",
      "uz": "<ruby>高<rt>たか</rt></ruby>い → O‘tgan Zamon Tasdiq Shakli"
    },
    "context": {
      "ru": "い-прилагательное, прошедшее, утверждение",
      "uz": "I-sifat, o‘tgan zamon, tasdiq"
    },
    "options": [
      {
        "id": "26-1",
        "html": "<ruby>高<rt>たか</rt></ruby>かった",
        "isCorrect": true
      },
      {
        "id": "26-2",
        "html": "<ruby>高<rt>たか</rt></ruby>いかった",
        "isCorrect": false
      },
      {
        "id": "26-3",
        "html": "<ruby>高<rt>たか</rt></ruby>いだった",
        "isCorrect": false
      },
      {
        "id": "26-4",
        "html": "<ruby>高<rt>たか</rt></ruby>くかった",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "У い-прилагательного заменяем конечное い на かった.",
      "uz": "I-sifatda oxirgi い o‘rniga かった keladi."
    },
    "lexeme": "高い",
    "tense": "past",
    "polarity": "affirmative"
  },
  {
    "id": 27,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "tags": [
      "exception",
      "ii",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>のライブ、どうだった？"
      },
      {
        "speaker": "B",
        "text": "すごく____。また<ruby>行<rt>い</rt></ruby>きたい。"
      }
    ],
    "prompt": {
      "ru": "いい → Прошедшая Утвердительная Форма",
      "uz": "いい → O‘tgan Zamon Tasdiq Shakli"
    },
    "context": {
      "ru": "い-прилагательное, прошедшее, утверждение (исключение いい → よ-)",
      "uz": "I-sifat, o‘tgan zamon, tasdiq (いい → よ- istisnosi)"
    },
    "options": [
      {
        "id": "27-1",
        "html": "よかった",
        "isCorrect": true
      },
      {
        "id": "27-2",
        "html": "いかった",
        "isCorrect": false
      },
      {
        "id": "27-3",
        "html": "いいだった",
        "isCorrect": false
      },
      {
        "id": "27-4",
        "html": "いくかった",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "いい: исключение: в прошедшем используется よかった.",
      "uz": "いい: istisno: o‘tgan zamonda よかった ishlatiladi."
    },
    "lexeme": "いい",
    "tense": "past",
    "polarity": "affirmative"
  },
  {
    "id": 28,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "tags": [
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "コート、いる？"
      },
      {
        "speaker": "B",
        "text": "ううん、<ruby>今日<rt>きょう</rt></ruby>は<ruby>思<rt>おも</rt></ruby>ったより____から、だいじょうぶ。"
      }
    ],
    "prompt": {
      "ru": "<ruby>寒<rt>さむ</rt></ruby>い → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>寒<rt>さむ</rt></ruby>い → Hozirgi/Kelasi · Inkor"
    },
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, отрицание",
      "uz": "I-sifat, hozirgi/kelasi zamon, inkor"
    },
    "options": [
      {
        "id": "28-1",
        "html": "<ruby>寒<rt>さむ</rt></ruby>くない",
        "isCorrect": true
      },
      {
        "id": "28-2",
        "html": "<ruby>寒<rt>さむ</rt></ruby>いくない",
        "isCorrect": false
      },
      {
        "id": "28-3",
        "html": "<ruby>寒<rt>さむ</rt></ruby>ない",
        "isCorrect": false
      },
      {
        "id": "28-4",
        "html": "<ruby>寒<rt>さむ</rt></ruby>くないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "У い-прилагательного заменяем конечное い на くない.",
      "uz": "I-sifatda oxirgi い o‘rniga くない keladi."
    },
    "lexeme": "寒い",
    "tense": "present",
    "polarity": "negative"
  },
  {
    "id": 29,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>昨日<rt>きのう</rt></ruby><ruby>見<rt>み</rt></ruby>たアパート、<ruby>駅<rt>えき</rt></ruby>から<ruby>遠<rt>とお</rt></ruby>かった？"
      },
      {
        "speaker": "B",
        "text": "ううん、<ruby>思<rt>おも</rt></ruby>ったより____よ。"
      }
    ],
    "prompt": {
      "ru": "<ruby>近<rt>ちか</rt></ruby>い → Прошедшая Утвердительная Форма",
      "uz": "<ruby>近<rt>ちか</rt></ruby>い → O‘tgan Zamon Tasdiq Shakli"
    },
    "context": {
      "ru": "い-прилагательное, прошедшее, утверждение",
      "uz": "I-sifat, o‘tgan zamon, tasdiq"
    },
    "options": [
      {
        "id": "29-1",
        "html": "<ruby>近<rt>ちか</rt></ruby>かった",
        "isCorrect": true
      },
      {
        "id": "29-2",
        "html": "<ruby>近<rt>ちか</rt></ruby>いかった",
        "isCorrect": false
      },
      {
        "id": "29-3",
        "html": "<ruby>近<rt>ちか</rt></ruby>いだった",
        "isCorrect": false
      },
      {
        "id": "29-4",
        "html": "<ruby>近<rt>ちか</rt></ruby>くかった",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "У い-прилагательного заменяем конечное い на かった.",
      "uz": "I-sifatda oxirgi い o‘rniga かった keladi."
    },
    "lexeme": "近い",
    "tense": "past",
    "polarity": "affirmative"
  },
  {
    "id": 30,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>の<ruby>文法<rt>ぶんぽう</rt></ruby>テスト、どうだった？"
      },
      {
        "speaker": "B",
        "text": "<ruby>復習<rt>ふくしゅう</rt></ruby>したから、そんなに____。"
      }
    ],
    "prompt": {
      "ru": "<ruby>難<rt>むずか</rt></ruby>しい → Прошедшая Отрицательная Форма",
      "uz": "<ruby>難<rt>むずか</rt></ruby>しい → O‘tgan Zamon Inkor Shakli"
    },
    "context": {
      "ru": "い-прилагательное, прошедшее, отрицание",
      "uz": "I-sifat, o‘tgan zamon, inkor"
    },
    "options": [
      {
        "id": "30-1",
        "html": "<ruby>難<rt>むずか</rt></ruby>しくなかった",
        "isCorrect": true
      },
      {
        "id": "30-2",
        "html": "<ruby>難<rt>むずか</rt></ruby>しいくなかった",
        "isCorrect": false
      },
      {
        "id": "30-3",
        "html": "<ruby>難<rt>むずか</rt></ruby>しくないだった",
        "isCorrect": false
      },
      {
        "id": "30-4",
        "html": "<ruby>難<rt>むずか</rt></ruby>しくなかっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "У い-прилагательного заменяем конечное い на くなかった.",
      "uz": "I-sifatda oxirgi い o‘rniga くなかった keladi."
    },
    "lexeme": "難しい",
    "tense": "past",
    "polarity": "negative"
  },
  {
    "id": 31,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "tags": [
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "この<ruby>店<rt>みせ</rt></ruby>の<ruby>野菜<rt>やさい</rt></ruby>、どう？"
      },
      {
        "speaker": "B",
        "text": "<ruby>新鮮<rt>しんせん</rt></ruby>だし、けっこう____よ。"
      }
    ],
    "prompt": {
      "ru": "<ruby>安<rt>やす</rt></ruby>い → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>安<rt>やす</rt></ruby>い → Hozirgi/Kelasi · Tasdiq"
    },
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, утверждение",
      "uz": "I-sifat, hozirgi/kelasi zamon, tasdiq"
    },
    "options": [
      {
        "id": "31-1",
        "html": "<ruby>安<rt>やす</rt></ruby>い",
        "isCorrect": true
      },
      {
        "id": "31-2",
        "html": "<ruby>安<rt>やす</rt></ruby>いだ",
        "isCorrect": false
      },
      {
        "id": "31-3",
        "html": "<ruby>安<rt>やす</rt></ruby>だ",
        "isCorrect": false
      },
      {
        "id": "31-4",
        "html": "<ruby>安<rt>やす</rt></ruby>な",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "В утвердительной форме настоящего/будущего времени い-прилагательное сохраняет словарную форму. だ не добавляется.",
      "uz": "Hozirgi/kelasi tasdiqda i-sifat lug‘aviy shaklda qoladi. だ qo‘shilmaydi."
    },
    "lexeme": "安い",
    "tense": "present",
    "polarity": "affirmative"
  },
  {
    "id": 32,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "tags": [
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "そのバッグ、いつ<ruby>買<rt>か</rt></ruby>ったの？"
      },
      {
        "speaker": "B",
        "text": "<ruby>先週<rt>せんしゅう</rt></ruby>だよ。まだ____から、<ruby>大切<rt>たいせつ</rt></ruby>に<ruby>使<rt>つか</rt></ruby>っている。"
      }
    ],
    "prompt": {
      "ru": "<ruby>新<rt>あたら</rt></ruby>しい → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>新<rt>あたら</rt></ruby>しい → Hozirgi/Kelasi · Tasdiq"
    },
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, утверждение",
      "uz": "I-sifat, hozirgi/kelasi zamon, tasdiq"
    },
    "options": [
      {
        "id": "32-1",
        "html": "<ruby>新<rt>あたら</rt></ruby>しい",
        "isCorrect": true
      },
      {
        "id": "32-2",
        "html": "<ruby>新<rt>あたら</rt></ruby>しいだ",
        "isCorrect": false
      },
      {
        "id": "32-3",
        "html": "<ruby>新<rt>あたら</rt></ruby>しだ",
        "isCorrect": false
      },
      {
        "id": "32-4",
        "html": "<ruby>新<rt>あたら</rt></ruby>しな",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "В утвердительной форме настоящего/будущего времени い-прилагательное сохраняет словарную форму. だ не добавляется.",
      "uz": "Hozirgi/kelasi tasdiqda i-sifat lug‘aviy shaklda qoladi. だ qo‘shilmaydi."
    },
    "lexeme": "新しい",
    "tense": "present",
    "polarity": "affirmative"
  },
  {
    "id": 33,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>昨日<rt>きのう</rt></ruby><ruby>見<rt>み</rt></ruby>た<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>、どうだった？"
      },
      {
        "speaker": "B",
        "text": "<ruby>思<rt>おも</rt></ruby>ったほど____。うちにも<ruby>置<rt>お</rt></ruby>けそうだ。"
      }
    ],
    "prompt": {
      "ru": "<ruby>大<rt>おお</rt></ruby>きい → Прошедшая Отрицательная Форма",
      "uz": "<ruby>大<rt>おお</rt></ruby>きい → O‘tgan Zamon Inkor Shakli"
    },
    "context": {
      "ru": "い-прилагательное, прошедшее, отрицание",
      "uz": "I-sifat, o‘tgan zamon, inkor"
    },
    "options": [
      {
        "id": "33-1",
        "html": "<ruby>大<rt>おお</rt></ruby>きくなかった",
        "isCorrect": true
      },
      {
        "id": "33-2",
        "html": "<ruby>大<rt>おお</rt></ruby>きいくなかった",
        "isCorrect": false
      },
      {
        "id": "33-3",
        "html": "<ruby>大<rt>おお</rt></ruby>きくないだった",
        "isCorrect": false
      },
      {
        "id": "33-4",
        "html": "<ruby>大<rt>おお</rt></ruby>きくなかっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "У い-прилагательного заменяем конечное い на くなかった.",
      "uz": "I-sifatda oxirgi い o‘rniga くなかった keladi."
    },
    "lexeme": "大きい",
    "tense": "past",
    "polarity": "negative"
  },
  {
    "id": 34,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>のバス、どうだった？"
      },
      {
        "speaker": "B",
        "text": "<ruby>道<rt>みち</rt></ruby>がこんでいて、<ruby>進<rt>すす</rt></ruby>むのが____んだ。"
      }
    ],
    "prompt": {
      "ru": "<ruby>遅<rt>おそ</rt></ruby>い → Прошедшая Утвердительная Форма",
      "uz": "<ruby>遅<rt>おそ</rt></ruby>い → O‘tgan Zamon Tasdiq Shakli"
    },
    "context": {
      "ru": "い-прилагательное, прошедшее, утверждение",
      "uz": "I-sifat, o‘tgan zamon, tasdiq"
    },
    "options": [
      {
        "id": "34-1",
        "html": "<ruby>遅<rt>おそ</rt></ruby>かった",
        "isCorrect": true
      },
      {
        "id": "34-2",
        "html": "<ruby>遅<rt>おそ</rt></ruby>いかった",
        "isCorrect": false
      },
      {
        "id": "34-3",
        "html": "<ruby>遅<rt>おそ</rt></ruby>いだった",
        "isCorrect": false
      },
      {
        "id": "34-4",
        "html": "<ruby>遅<rt>おそ</rt></ruby>くかった",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "У い-прилагательного заменяем конечное い на かった.",
      "uz": "I-sifatda oxirgi い o‘rniga かった keladi."
    },
    "lexeme": "遅い",
    "tense": "past",
    "polarity": "affirmative"
  },
  {
    "id": 35,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "tags": [
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>最近<rt>さいきん</rt></ruby>、どう？"
      },
      {
        "speaker": "B",
        "text": "うん、おかげさまで____よ。"
      }
    ],
    "prompt": {
      "ru": "<ruby>元気<rt>げんき</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>元気<rt>げんき</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, утверждение",
      "uz": "Na-sifat, hozirgi/kelasi zamon, tasdiq"
    },
    "options": [
      {
        "id": "35-1",
        "html": "<ruby>元気<rt>げんき</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "35-2",
        "html": "<ruby>元気<rt>げんき</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "35-3",
        "html": "<ruby>元気<rt>げんき</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "35-4",
        "html": "<ruby>元気<rt>げんき</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "У существительных и な-прилагательных связка だ выражает утверждение в настоящем/будущем времени. В разговорной речи она иногда опускается.",
      "uz": "Otlar va na-sifatlarda hozirgi/kelasi tasdiq bog‘lamasi: だ. Suhbatda u ba’zan tushiriladi."
    },
    "lexeme": "元気",
    "tense": "present",
    "polarity": "affirmative"
  },
  {
    "id": 36,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "tags": [
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>納豆<rt>なっとう</rt></ruby>、<ruby>好<rt>す</rt></ruby>き？"
      },
      {
        "speaker": "B",
        "text": "ごめん、あまり____。"
      }
    ],
    "prompt": {
      "ru": "<ruby>好<rt>す</rt></ruby>き → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>好<rt>す</rt></ruby>き → Hozirgi/Kelasi · Inkor"
    },
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, отрицание",
      "uz": "Na-sifat, hozirgi/kelasi zamon, inkor"
    },
    "options": [
      {
        "id": "36-1",
        "html": "<ruby>好<rt>す</rt></ruby>きじゃない",
        "isCorrect": true
      },
      {
        "id": "36-2",
        "html": "<ruby>好<rt>す</rt></ruby>きくない",
        "isCorrect": false
      },
      {
        "id": "36-3",
        "html": "<ruby>好<rt>す</rt></ruby>きだない",
        "isCorrect": false
      },
      {
        "id": "36-4",
        "html": "<ruby>好<rt>す</rt></ruby>きじゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Здесь нужна связка じゃない. У な-прилагательных и существительных формы связки одинаковы.",
      "uz": "Bu yerda じゃない bog‘lamasi kerak. Na-sifatlar va otlarda bog‘lama shakllari bir xil."
    },
    "lexeme": "好き",
    "tense": "present",
    "polarity": "negative"
  },
  {
    "id": 37,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>子<rt>こ</rt></ruby>どものころ、この<ruby>町<rt>まち</rt></ruby>はどうだった？"
      },
      {
        "speaker": "B",
        "text": "<ruby>今<rt>いま</rt></ruby>よりずっと____よ。"
      }
    ],
    "prompt": {
      "ru": "<ruby>静<rt>しず</rt></ruby>か → Прошедшая Утвердительная Форма",
      "uz": "<ruby>静<rt>しず</rt></ruby>か → O‘tgan Zamon Tasdiq Shakli"
    },
    "context": {
      "ru": "な-прилагательное, прошедшее, утверждение",
      "uz": "Na-sifat, o‘tgan zamon, tasdiq"
    },
    "options": [
      {
        "id": "37-1",
        "html": "<ruby>静<rt>しず</rt></ruby>かだった",
        "isCorrect": true
      },
      {
        "id": "37-2",
        "html": "<ruby>静<rt>しず</rt></ruby>かかった",
        "isCorrect": false
      },
      {
        "id": "37-3",
        "html": "<ruby>静<rt>しず</rt></ruby>かだた",
        "isCorrect": false
      },
      {
        "id": "37-4",
        "html": "<ruby>静<rt>しず</rt></ruby>かだっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Здесь нужна связка だった. У な-прилагательных и существительных формы связки одинаковы.",
      "uz": "Bu yerda だった bog‘lamasi kerak. Na-sifatlar va otlarda bog‘lama shakllari bir xil."
    },
    "lexeme": "静か",
    "tense": "past",
    "polarity": "affirmative"
  },
  {
    "id": 38,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>前<rt>まえ</rt></ruby>のアパート、<ruby>住<rt>す</rt></ruby>みやすかった？"
      },
      {
        "speaker": "B",
        "text": "<ruby>駅<rt>えき</rt></ruby>から<ruby>遠<rt>とお</rt></ruby>くて、あまり____。"
      }
    ],
    "prompt": {
      "ru": "<ruby>便利<rt>べんり</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>便利<rt>べんり</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "context": {
      "ru": "な-прилагательное, прошедшее, отрицание",
      "uz": "Na-sifat, o‘tgan zamon, inkor"
    },
    "options": [
      {
        "id": "38-1",
        "html": "<ruby>便利<rt>べんり</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "38-2",
        "html": "<ruby>便利<rt>べんり</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "38-3",
        "html": "<ruby>便利<rt>べんり</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "38-4",
        "html": "<ruby>便利<rt>べんり</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Здесь нужна связка じゃなかった. У な-прилагательных и существительных формы связки одинаковы.",
      "uz": "Bu yerda じゃなかった bog‘lamasi kerak. Na-sifatlar va otlarda bog‘lama shakllari bir xil."
    },
    "lexeme": "便利",
    "tense": "past",
    "polarity": "negative"
  },
  {
    "id": 39,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "tags": [
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "この<ruby>歌手<rt>かしゅ</rt></ruby>、<ruby>知<rt>し</rt></ruby>ってる？"
      },
      {
        "speaker": "B",
        "text": "うん、<ruby>日本<rt>にほん</rt></ruby>でも____よ。"
      }
    ],
    "prompt": {
      "ru": "<ruby>有名<rt>ゆうめい</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>有名<rt>ゆうめい</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, утверждение",
      "uz": "Na-sifat, hozirgi/kelasi zamon, tasdiq"
    },
    "options": [
      {
        "id": "39-1",
        "html": "<ruby>有名<rt>ゆうめい</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "39-2",
        "html": "<ruby>有名<rt>ゆうめい</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "39-3",
        "html": "<ruby>有名<rt>ゆうめい</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "39-4",
        "html": "<ruby>有名<rt>ゆうめい</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "У существительных и な-прилагательных связка だ выражает утверждение в настоящем/будущем времени. В разговорной речи она иногда опускается.",
      "uz": "Otlar va na-sifatlarda hozirgi/kelasi tasdiq bog‘lamasi: だ. Suhbatda u ba’zan tushiriladi."
    },
    "lexeme": "有名",
    "tense": "present",
    "polarity": "affirmative"
  },
  {
    "id": 40,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "tags": [
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>今週末<rt>こんしゅうまつ</rt></ruby>、<ruby>暇<rt>ひま</rt></ruby>？"
      },
      {
        "speaker": "B",
        "text": "<ruby>土曜日<rt>どようび</rt></ruby>は____けど、<ruby>日曜日<rt>にちようび</rt></ruby>ならだいじょうぶ。"
      }
    ],
    "prompt": {
      "ru": "<ruby>暇<rt>ひま</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>暇<rt>ひま</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, отрицание",
      "uz": "Na-sifat, hozirgi/kelasi zamon, inkor"
    },
    "options": [
      {
        "id": "40-1",
        "html": "<ruby>暇<rt>ひま</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "40-2",
        "html": "<ruby>暇<rt>ひま</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "40-3",
        "html": "<ruby>暇<rt>ひま</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "40-4",
        "html": "<ruby>暇<rt>ひま</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Здесь нужна связка じゃない. У な-прилагательных и существительных формы связки одинаковы.",
      "uz": "Bu yerda じゃない bog‘lamasi kerak. Na-sifatlar va otlarda bog‘lama shakllari bir xil."
    },
    "lexeme": "暇",
    "tense": "present",
    "polarity": "negative"
  },
  {
    "id": 41,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "tags": [
      "contrast",
      "kirei",
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "この<ruby>部屋<rt>へや</rt></ruby>、きれい？"
      },
      {
        "speaker": "B",
        "text": "ううん、<ruby>今日<rt>きょう</rt></ruby>はまだ____。<ruby>今<rt>いま</rt></ruby>から<ruby>掃除<rt>そうじ</rt></ruby>する。"
      }
    ],
    "prompt": {
      "ru": "きれい → Настоящее/Будущее · Отрицание",
      "uz": "きれい → Hozirgi/Kelasi · Inkor"
    },
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, отрицание (な-прилагательное с конечным い)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, inkor (い bilan tugagan na-sifat)"
    },
    "options": [
      {
        "id": "41-1",
        "html": "きれいじゃない",
        "isCorrect": true
      },
      {
        "id": "41-2",
        "html": "きれいくない",
        "isCorrect": false
      },
      {
        "id": "41-3",
        "html": "きれいだない",
        "isCorrect": false
      },
      {
        "id": "41-4",
        "html": "きれいじゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "きれい: な-прилагательное, несмотря на конечное い. Его отрицательная связка: じゃない.",
      "uz": "きれい oxiri い bo‘lsa ham, na-sifat hisoblanadi. Uning inkor bog‘lamasi: じゃない."
    },
    "lexeme": "きれい",
    "tense": "present",
    "polarity": "negative"
  },
  {
    "id": 42,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>子<rt>こ</rt></ruby>どものころ、ピーマンどうだった？"
      },
      {
        "speaker": "B",
        "text": "<ruby>実<rt>じつ</rt></ruby>はずっと____。"
      }
    ],
    "prompt": {
      "ru": "<ruby>嫌<rt>きら</rt></ruby>い → Прошедшая Утвердительная Форма",
      "uz": "<ruby>嫌<rt>きら</rt></ruby>い → O‘tgan Zamon Tasdiq Shakli"
    },
    "context": {
      "ru": "な-прилагательное, прошедшее, утверждение (な-прилагательное с конечным い)",
      "uz": "Na-sifat, o‘tgan zamon, tasdiq (い bilan tugagan na-sifat)"
    },
    "options": [
      {
        "id": "42-1",
        "html": "<ruby>嫌<rt>きら</rt></ruby>いだった",
        "isCorrect": true
      },
      {
        "id": "42-2",
        "html": "<ruby>嫌<rt>きら</rt></ruby>いかった",
        "isCorrect": false
      },
      {
        "id": "42-3",
        "html": "<ruby>嫌<rt>きら</rt></ruby>いだた",
        "isCorrect": false
      },
      {
        "id": "42-4",
        "html": "<ruby>嫌<rt>きら</rt></ruby>いだっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Здесь нужна связка だった. У な-прилагательных и существительных формы связки одинаковы.",
      "uz": "Bu yerda だった bog‘lamasi kerak. Na-sifatlar va otlarda bog‘lama shakllari bir xil."
    },
    "lexeme": "嫌い",
    "tense": "past",
    "polarity": "affirmative"
  },
  {
    "id": 43,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "tags": [
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "もう<ruby>漢字<rt>かんじ</rt></ruby>、<ruby>上手<rt>じょうず</rt></ruby>に<ruby>書<rt>か</rt></ruby>ける？"
      },
      {
        "speaker": "B",
        "text": "まだ____けど、<ruby>前<rt>まえ</rt></ruby>よりはいいと<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "prompt": {
      "ru": "<ruby>上手<rt>じょうず</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>上手<rt>じょうず</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, отрицание",
      "uz": "Na-sifat, hozirgi/kelasi zamon, inkor"
    },
    "options": [
      {
        "id": "43-1",
        "html": "<ruby>上手<rt>じょうず</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "43-2",
        "html": "<ruby>上手<rt>じょうず</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "43-3",
        "html": "<ruby>上手<rt>じょうず</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "43-4",
        "html": "<ruby>上手<rt>じょうず</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Здесь нужна связка じゃない. У な-прилагательных и существительных формы связки одинаковы.",
      "uz": "Bu yerda じゃない bog‘lamasi kerak. Na-sifatlar va otlarda bog‘lama shakllari bir xil."
    },
    "lexeme": "上手",
    "tense": "present",
    "polarity": "negative"
  },
  {
    "id": 44,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "tags": [
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>荷物<rt>にもつ</rt></ruby>、<ruby>重<rt>おも</rt></ruby>くない？<ruby>手伝<rt>てつだ</rt></ruby>おうか。"
      },
      {
        "speaker": "B",
        "text": "ありがとう。でも<ruby>一人<rt>ひとり</rt></ruby>で____よ。"
      }
    ],
    "prompt": {
      "ru": "<ruby>大丈夫<rt>だいじょうぶ</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>大丈夫<rt>だいじょうぶ</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, утверждение",
      "uz": "Na-sifat, hozirgi/kelasi zamon, tasdiq"
    },
    "options": [
      {
        "id": "44-1",
        "html": "<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "44-2",
        "html": "<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "44-3",
        "html": "<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "44-4",
        "html": "<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "У существительных и な-прилагательных связка だ выражает утверждение в настоящем/будущем времени. В разговорной речи она иногда опускается.",
      "uz": "Otlar va na-sifatlarda hozirgi/kelasi tasdiq bog‘lamasi: だ. Suhbatda u ba’zan tushiriladi."
    },
    "lexeme": "大丈夫",
    "tense": "present",
    "polarity": "affirmative"
  },
  {
    "id": 45,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>学生<rt>がくせい</rt></ruby>のころ、<ruby>毎日<rt>まいにち</rt></ruby>ちゃんと<ruby>勉強<rt>べんきょう</rt></ruby>した？"
      },
      {
        "speaker": "B",
        "text": "いや、そのころはあまり____。"
      }
    ],
    "prompt": {
      "ru": "<ruby>真面目<rt>まじめ</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>真面目<rt>まじめ</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "context": {
      "ru": "な-прилагательное, прошедшее, отрицание",
      "uz": "Na-sifat, o‘tgan zamon, inkor"
    },
    "options": [
      {
        "id": "45-1",
        "html": "<ruby>真面目<rt>まじめ</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "45-2",
        "html": "<ruby>真面目<rt>まじめ</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "45-3",
        "html": "<ruby>真面目<rt>まじめ</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "45-4",
        "html": "<ruby>真面目<rt>まじめ</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Здесь нужна связка じゃなかった. У な-прилагательных и существительных формы связки одинаковы.",
      "uz": "Bu yerda じゃなかった bog‘lamasi kerak. Na-sifatlar va otlarda bog‘lama shakllari bir xil."
    },
    "lexeme": "真面目",
    "tense": "past",
    "polarity": "negative"
  },
  {
    "id": 46,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>去年<rt>きょねん</rt></ruby>の<ruby>私<rt>わたし</rt></ruby>、<ruby>料理<rt>りょうり</rt></ruby>どうだったと<ruby>思<rt>おも</rt></ruby>う？"
      },
      {
        "speaker": "B",
        "text": "うーん、たぶんかなり____。"
      }
    ],
    "prompt": {
      "ru": "<ruby>下手<rt>へた</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>下手<rt>へた</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "context": {
      "ru": "な-прилагательное, прошедшее, утверждение",
      "uz": "Na-sifat, o‘tgan zamon, tasdiq"
    },
    "options": [
      {
        "id": "46-1",
        "html": "<ruby>下手<rt>へた</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "46-2",
        "html": "<ruby>下手<rt>へた</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "46-3",
        "html": "<ruby>下手<rt>へた</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "46-4",
        "html": "<ruby>下手<rt>へた</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Здесь нужна связка だった. У な-прилагательных и существительных формы связки одинаковы.",
      "uz": "Bu yerda だった bog‘lamasi kerak. Na-sifatlar va otlarda bog‘lama shakllari bir xil."
    },
    "lexeme": "下手",
    "tense": "past",
    "polarity": "affirmative"
  },
  {
    "id": 47,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "tags": [
      "copula",
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>弟<rt>おとうと</rt></ruby>さん、<ruby>大学生<rt>だいがくせい</rt></ruby>？"
      },
      {
        "speaker": "B",
        "text": "うん、<ruby>今<rt>いま</rt></ruby><ruby>一年生<rt>いちねんせい</rt></ruby>だから____。"
      }
    ],
    "prompt": {
      "ru": "<ruby>学生<rt>がくせい</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>学生<rt>がくせい</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "context": {
      "ru": "Существительное, настоящее/будущее, утверждение",
      "uz": "Ot, hozirgi/kelasi zamon, tasdiq"
    },
    "options": [
      {
        "id": "47-1",
        "html": "<ruby>学生<rt>がくせい</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "47-2",
        "html": "<ruby>学生<rt>がくせい</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "47-3",
        "html": "<ruby>学生<rt>がくせい</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "47-4",
        "html": "<ruby>学生<rt>がくせい</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "У существительных и な-прилагательных связка だ выражает утверждение в настоящем/будущем времени. В разговорной речи она иногда опускается.",
      "uz": "Otlar va na-sifatlarda hozirgi/kelasi tasdiq bog‘lamasi: だ. Suhbatda u ba’zan tushiriladi."
    },
    "lexeme": "学生",
    "tense": "present",
    "polarity": "affirmative"
  },
  {
    "id": 48,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "tags": [
      "copula",
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "あの<ruby>新<rt>あたら</rt></ruby>しい<ruby>先生<rt>せんせい</rt></ruby>、<ruby>日本人<rt>にほんじん</rt></ruby>？"
      },
      {
        "speaker": "B",
        "text": "ううん、____。オーストラリアの<ruby>人<rt>ひと</rt></ruby>だよ。"
      }
    ],
    "prompt": {
      "ru": "<ruby>日本人<rt>にほんじん</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>日本人<rt>にほんじん</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "context": {
      "ru": "Существительное, настоящее/будущее, отрицание",
      "uz": "Ot, hozirgi/kelasi zamon, inkor"
    },
    "options": [
      {
        "id": "48-1",
        "html": "<ruby>日本人<rt>にほんじん</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "48-2",
        "html": "<ruby>日本人<rt>にほんじん</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "48-3",
        "html": "<ruby>日本人<rt>にほんじん</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "48-4",
        "html": "<ruby>日本人<rt>にほんじん</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Здесь нужна связка じゃない. У な-прилагательных и существительных формы связки одинаковы.",
      "uz": "Bu yerda じゃない bog‘lamasi kerak. Na-sifatlar va otlarda bog‘lama shakllari bir xil."
    },
    "lexeme": "日本人",
    "tense": "present",
    "polarity": "negative"
  },
  {
    "id": 49,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "tags": [
      "copula",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>、<ruby>会社<rt>かいしゃ</rt></ruby>どうだった？"
      },
      {
        "speaker": "B",
        "text": "<ruby>祝日<rt>しゅくじつ</rt></ruby>だったから____。"
      }
    ],
    "prompt": {
      "ru": "<ruby>休<rt>やす</rt></ruby>み → Прошедшая Утвердительная Форма",
      "uz": "<ruby>休<rt>やす</rt></ruby>み → O‘tgan Zamon Tasdiq Shakli"
    },
    "context": {
      "ru": "Существительное, прошедшее, утверждение",
      "uz": "Ot, o‘tgan zamon, tasdiq"
    },
    "options": [
      {
        "id": "49-1",
        "html": "<ruby>休<rt>やす</rt></ruby>みだった",
        "isCorrect": true
      },
      {
        "id": "49-2",
        "html": "<ruby>休<rt>やす</rt></ruby>みかった",
        "isCorrect": false
      },
      {
        "id": "49-3",
        "html": "<ruby>休<rt>やす</rt></ruby>みだた",
        "isCorrect": false
      },
      {
        "id": "49-4",
        "html": "<ruby>休<rt>やす</rt></ruby>みだっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Здесь нужна связка だった. У な-прилагательных и существительных формы связки одинаковы.",
      "uz": "Bu yerda だった bog‘lamasi kerak. Na-sifatlar va otlarda bog‘lama shakllari bir xil."
    },
    "lexeme": "休み",
    "tense": "past",
    "polarity": "affirmative"
  },
  {
    "id": 50,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "tags": [
      "copula",
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>先週<rt>せんしゅう</rt></ruby><ruby>休<rt>やす</rt></ruby>んでいたけど、<ruby>病気<rt>びょうき</rt></ruby>だった？"
      },
      {
        "speaker": "B",
        "text": "ううん、____。<ruby>用事<rt>ようじ</rt></ruby>があっただけ。"
      }
    ],
    "prompt": {
      "ru": "<ruby>病気<rt>びょうき</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>病気<rt>びょうき</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "context": {
      "ru": "Существительное, прошедшее, отрицание",
      "uz": "Ot, o‘tgan zamon, inkor"
    },
    "options": [
      {
        "id": "50-1",
        "html": "<ruby>病気<rt>びょうき</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "50-2",
        "html": "<ruby>病気<rt>びょうき</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "50-3",
        "html": "<ruby>病気<rt>びょうき</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "50-4",
        "html": "<ruby>病気<rt>びょうき</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Здесь нужна связка じゃなかった. У な-прилагательных и существительных формы связки одинаковы.",
      "uz": "Bu yerda じゃなかった bog‘lamasi kerak. Na-sifatlar va otlarda bog‘lama shakllari bir xil."
    },
    "lexeme": "病気",
    "tense": "past",
    "polarity": "negative"
  },
  {
    "id": 51,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "tags": [
      "copula",
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>外<rt>そと</rt></ruby>、どう？"
      },
      {
        "speaker": "B",
        "text": "<ruby>今日<rt>きょう</rt></ruby>はずっと____から、かさを<ruby>持<rt>も</rt></ruby>っていって。"
      }
    ],
    "prompt": {
      "ru": "<ruby>雨<rt>あめ</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>雨<rt>あめ</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "context": {
      "ru": "Существительное, настоящее/будущее, утверждение",
      "uz": "Ot, hozirgi/kelasi zamon, tasdiq"
    },
    "options": [
      {
        "id": "51-1",
        "html": "<ruby>雨<rt>あめ</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "51-2",
        "html": "<ruby>雨<rt>あめ</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "51-3",
        "html": "<ruby>雨<rt>あめ</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "51-4",
        "html": "<ruby>雨<rt>あめ</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "У существительных и な-прилагательных связка だ выражает утверждение в настоящем/будущем времени. В разговорной речи она иногда опускается.",
      "uz": "Otlar va na-sifatlarda hozirgi/kelasi tasdiq bog‘lamasi: だ. Suhbatda u ba’zan tushiriladi."
    },
    "lexeme": "雨",
    "tense": "present",
    "polarity": "affirmative"
  },
  {
    "id": 52,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "tags": [
      "copula",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "おじいさんは<ruby>昔<rt>むかし</rt></ruby>、どんな<ruby>仕事<rt>しごと</rt></ruby>をしていたの？"
      },
      {
        "speaker": "B",
        "text": "<ruby>小学校<rt>しょうがっこう</rt></ruby>の____よ。"
      }
    ],
    "prompt": {
      "ru": "<ruby>先生<rt>せんせい</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>先生<rt>せんせい</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "context": {
      "ru": "Существительное, прошедшее, утверждение",
      "uz": "Ot, o‘tgan zamon, tasdiq"
    },
    "options": [
      {
        "id": "52-1",
        "html": "<ruby>先生<rt>せんせい</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "52-2",
        "html": "<ruby>先生<rt>せんせい</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "52-3",
        "html": "<ruby>先生<rt>せんせい</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "52-4",
        "html": "<ruby>先生<rt>せんせい</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Здесь нужна связка だった. У な-прилагательных и существительных формы связки одинаковы.",
      "uz": "Bu yerda だった bog‘lamasi kerak. Na-sifatlar va otlarda bog‘lama shakllari bir xil."
    },
    "lexeme": "先生",
    "tense": "past",
    "polarity": "affirmative"
  },
  {
    "id": 53,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "tags": [
      "copula",
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>新<rt>あたら</rt></ruby>しいクラスメート、<ruby>留学生<rt>りゅうがくせい</rt></ruby>？"
      },
      {
        "speaker": "B",
        "text": "うん、<ruby>中国<rt>ちゅうごく</rt></ruby>から<ruby>来<rt>き</rt></ruby>た____。"
      }
    ],
    "prompt": {
      "ru": "<ruby>留学生<rt>りゅうがくせい</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>留学生<rt>りゅうがくせい</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "context": {
      "ru": "Существительное, настоящее/будущее, утверждение",
      "uz": "Ot, hozirgi/kelasi zamon, tasdiq"
    },
    "options": [
      {
        "id": "53-1",
        "html": "<ruby>留学生<rt>りゅうがくせい</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "53-2",
        "html": "<ruby>留学生<rt>りゅうがくせい</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "53-3",
        "html": "<ruby>留学生<rt>りゅうがくせい</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "53-4",
        "html": "<ruby>留学生<rt>りゅうがくせい</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "У существительных и な-прилагательных связка だ выражает утверждение в настоящем/будущем времени. В разговорной речи она иногда опускается.",
      "uz": "Otlar va na-sifatlarda hozirgi/kelasi tasdiq bog‘lamasi: だ. Suhbatda u ba’zan tushiriladi."
    },
    "lexeme": "留学生",
    "tense": "present",
    "polarity": "affirmative"
  },
  {
    "id": 54,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "tags": [
      "copula",
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "お<ruby>父<rt>とう</rt></ruby>さんは<ruby>医者<rt>いしゃ</rt></ruby>？"
      },
      {
        "speaker": "B",
        "text": "ううん、____。エンジニアだよ。"
      }
    ],
    "prompt": {
      "ru": "<ruby>医者<rt>いしゃ</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>医者<rt>いしゃ</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "context": {
      "ru": "Существительное, настоящее/будущее, отрицание",
      "uz": "Ot, hozirgi/kelasi zamon, inkor"
    },
    "options": [
      {
        "id": "54-1",
        "html": "<ruby>医者<rt>いしゃ</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "54-2",
        "html": "<ruby>医者<rt>いしゃ</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "54-3",
        "html": "<ruby>医者<rt>いしゃ</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "54-4",
        "html": "<ruby>医者<rt>いしゃ</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Здесь нужна связка じゃない. У な-прилагательных и существительных формы связки одинаковы.",
      "uz": "Bu yerda じゃない bog‘lamasi kerak. Na-sifatlar va otlarda bog‘lama shakllari bir xil."
    },
    "lexeme": "医者",
    "tense": "present",
    "polarity": "negative"
  },
  {
    "id": 55,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "tags": [
      "copula",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "パーティーはいつだったっけ？"
      },
      {
        "speaker": "B",
        "text": "<ruby>先週<rt>せんしゅう</rt></ruby>の____よ。"
      }
    ],
    "prompt": {
      "ru": "<ruby>金曜日<rt>きんようび</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>金曜日<rt>きんようび</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "context": {
      "ru": "Существительное, прошедшее, утверждение",
      "uz": "Ot, o‘tgan zamon, tasdiq"
    },
    "options": [
      {
        "id": "55-1",
        "html": "<ruby>金曜日<rt>きんようび</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "55-2",
        "html": "<ruby>金曜日<rt>きんようび</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "55-3",
        "html": "<ruby>金曜日<rt>きんようび</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "55-4",
        "html": "<ruby>金曜日<rt>きんようび</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Здесь нужна связка だった. У な-прилагательных и существительных формы связки одинаковы.",
      "uz": "Bu yerda だった bog‘lamasi kerak. Na-sifatlar va otlarda bog‘lama shakllari bir xil."
    },
    "lexeme": "金曜日",
    "tense": "past",
    "polarity": "affirmative"
  },
  {
    "id": 56,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "tags": [
      "copula",
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>の<ruby>午後<rt>ごご</rt></ruby>は<ruby>会議<rt>かいぎ</rt></ruby>だった？"
      },
      {
        "speaker": "B",
        "text": "ううん、____。ただの<ruby>研修<rt>けんしゅう</rt></ruby>だった。"
      }
    ],
    "prompt": {
      "ru": "<ruby>会議<rt>かいぎ</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>会議<rt>かいぎ</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "context": {
      "ru": "Существительное, прошедшее, отрицание",
      "uz": "Ot, o‘tgan zamon, inkor"
    },
    "options": [
      {
        "id": "56-1",
        "html": "<ruby>会議<rt>かいぎ</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "56-2",
        "html": "<ruby>会議<rt>かいぎ</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "56-3",
        "html": "<ruby>会議<rt>かいぎ</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "56-4",
        "html": "<ruby>会議<rt>かいぎ</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Здесь нужна связка じゃなかった. У な-прилагательных и существительных формы связки одинаковы.",
      "uz": "Bu yerda じゃなかった bog‘lamasi kerak. Na-sifatlar va otlarda bog‘lama shakllari bir xil."
    },
    "lexeme": "会議",
    "tense": "past",
    "polarity": "negative"
  },
  {
    "id": 57,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "tags": [
      "aru",
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>に<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>はある？"
      },
      {
        "speaker": "B",
        "text": "ううん、もう____。"
      }
    ],
    "options": [
      {
        "id": "57-1",
        "isCorrect": true
      },
      {
        "id": "57-2",
        "html": "あらない",
        "isCorrect": false
      },
      {
        "id": "57-3",
        "html": "あない",
        "isCorrect": false
      },
      {
        "id": "57-4",
        "html": "ないだ",
        "isCorrect": false
      }
    ],
    "lexeme": "ある",
    "tense": "present",
    "polarity": "negative",
    "verbId": "aru"
  },
  {
    "id": 58,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "tags": [
      "aru",
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>は<ruby>時間<rt>じかん</rt></ruby>が____から、<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>まなかった。"
      }
    ],
    "options": [
      {
        "id": "58-1",
        "isCorrect": true
      },
      {
        "id": "58-2",
        "html": "あらなかった",
        "isCorrect": false
      },
      {
        "id": "58-3",
        "html": "ないだった",
        "isCorrect": false
      },
      {
        "id": "58-4",
        "html": "あるなかった",
        "isCorrect": false
      }
    ],
    "lexeme": "ある",
    "tense": "past",
    "polarity": "negative",
    "verbId": "aru"
  },
  {
    "id": 59,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "tags": [
      "ichidan",
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>猫<rt>ねこ</rt></ruby>は<ruby>部屋<rt>へや</rt></ruby>にいる？"
      },
      {
        "speaker": "B",
        "text": "ううん、ここには____。"
      }
    ],
    "options": [
      {
        "id": "59-1",
        "isCorrect": true
      },
      {
        "id": "59-2",
        "html": "いらない",
        "isCorrect": false
      },
      {
        "id": "59-3",
        "html": "いるない",
        "isCorrect": false
      },
      {
        "id": "59-4",
        "html": "いないだ",
        "isCorrect": false
      }
    ],
    "lexeme": "いる",
    "tense": "present",
    "polarity": "negative",
    "verbId": "iru"
  },
  {
    "id": 60,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "tags": [
      "godan-u",
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "この<ruby>靴<rt>くつ</rt></ruby>、<ruby>買<rt>か</rt></ruby>う？"
      },
      {
        "speaker": "B",
        "text": "ううん、<ruby>高<rt>たか</rt></ruby>いから____。"
      }
    ],
    "options": [
      {
        "id": "60-1",
        "isCorrect": true
      },
      {
        "id": "60-2",
        "html": "<ruby>買<rt>か</rt></ruby>うない",
        "isCorrect": false
      },
      {
        "id": "60-3",
        "html": "<ruby>買<rt>か</rt></ruby>いない",
        "isCorrect": false
      },
      {
        "id": "60-4",
        "html": "<ruby>買<rt>か</rt></ruby>わないだ",
        "isCorrect": false
      }
    ],
    "lexeme": "買う",
    "tense": "present",
    "polarity": "negative",
    "verbId": "kau"
  },
  {
    "id": 61,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "tags": [
      "godan-su",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>、<ruby>先生<rt>せんせい</rt></ruby>と<ruby>日本語<rt>にほんご</rt></ruby>で____。"
      }
    ],
    "options": [
      {
        "id": "61-1",
        "isCorrect": true
      },
      {
        "id": "61-2",
        "html": "<ruby>話<rt>はな</rt></ruby>すた",
        "isCorrect": false
      },
      {
        "id": "61-3",
        "html": "<ruby>話<rt>はな</rt></ruby>った",
        "isCorrect": false
      },
      {
        "id": "61-4",
        "html": "<ruby>話<rt>はな</rt></ruby>いた",
        "isCorrect": false
      }
    ],
    "lexeme": "話す",
    "tense": "past",
    "polarity": "affirmative",
    "verbId": "hanasu"
  },
  {
    "id": 62,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "tags": [
      "godan-nu",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>池<rt>いけ</rt></ruby>の<ruby>魚<rt>さかな</rt></ruby>はどうしたの？"
      },
      {
        "speaker": "B",
        "text": "<ruby>残念<rt>ざんねん</rt></ruby>だけど、<ruby>昨日<rt>きのう</rt></ruby>____。"
      }
    ],
    "options": [
      {
        "id": "62-1",
        "isCorrect": true
      },
      {
        "id": "62-2",
        "html": "<ruby>死<rt>し</rt></ruby>ぬた",
        "isCorrect": false
      },
      {
        "id": "62-3",
        "html": "<ruby>死<rt>し</rt></ruby>にた",
        "isCorrect": false
      },
      {
        "id": "62-4",
        "html": "<ruby>死<rt>し</rt></ruby>った",
        "isCorrect": false
      }
    ],
    "lexeme": "死ぬ",
    "tense": "past",
    "polarity": "affirmative",
    "verbId": "shinu"
  },
  {
    "id": 63,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "tags": [
      "godan-mu",
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "この<ruby>雑誌<rt>ざっし</rt></ruby>、まだ<ruby>読<rt>よ</rt></ruby>む？"
      },
      {
        "speaker": "B",
        "text": "ううん、もう____から、あげるよ。"
      }
    ],
    "options": [
      {
        "id": "63-1",
        "isCorrect": true
      },
      {
        "id": "63-2",
        "html": "<ruby>読<rt>よ</rt></ruby>むない",
        "isCorrect": false
      },
      {
        "id": "63-3",
        "html": "<ruby>読<rt>よ</rt></ruby>みない",
        "isCorrect": false
      },
      {
        "id": "63-4",
        "html": "<ruby>読<rt>よ</rt></ruby>まないだ",
        "isCorrect": false
      }
    ],
    "lexeme": "読む",
    "tense": "present",
    "polarity": "negative",
    "verbId": "yomu"
  },
  {
    "id": 64,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "tags": [
      "godan-tsu",
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>はバスを____。<ruby>歩<rt>ある</rt></ruby>いて<ruby>帰<rt>かえ</rt></ruby>った。"
      }
    ],
    "options": [
      {
        "id": "64-1",
        "isCorrect": true
      },
      {
        "id": "64-2",
        "html": "<ruby>待<rt>ま</rt></ruby>つなかった",
        "isCorrect": false
      },
      {
        "id": "64-3",
        "html": "<ruby>待<rt>ま</rt></ruby>ちなかった",
        "isCorrect": false
      },
      {
        "id": "64-4",
        "html": "<ruby>待<rt>ま</rt></ruby>たないだった",
        "isCorrect": false
      }
    ],
    "lexeme": "待つ",
    "tense": "past",
    "polarity": "negative",
    "verbId": "matsu"
  },
  {
    "id": 65,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "tags": [
      "godan-ru",
      "contrast",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>は<ruby>公園<rt>こうえん</rt></ruby>で<ruby>三<rt>さん</rt></ruby>キロ____。"
      }
    ],
    "options": [
      {
        "id": "65-1",
        "isCorrect": true
      },
      {
        "id": "65-2",
        "html": "<ruby>走<rt>はし</rt></ruby>るた",
        "isCorrect": false
      },
      {
        "id": "65-3",
        "html": "<ruby>走<rt>はし</rt></ruby>りた",
        "isCorrect": false
      },
      {
        "id": "65-4",
        "html": "<ruby>走<rt>はし</rt></ruby>いた",
        "isCorrect": false
      }
    ],
    "lexeme": "走る",
    "tense": "past",
    "polarity": "affirmative",
    "verbId": "hashiru"
  },
  {
    "id": 66,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "tags": [
      "godan-ru",
      "contrast",
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>髪<rt>かみ</rt></ruby>、<ruby>短<rt>みじか</rt></ruby>くするの？"
      },
      {
        "speaker": "B",
        "text": "ううん、<ruby>今<rt>いま</rt></ruby>は____。<ruby>長<rt>なが</rt></ruby>くしたいんだ。"
      }
    ],
    "options": [
      {
        "id": "66-1",
        "isCorrect": true
      },
      {
        "id": "66-2",
        "html": "<ruby>切<rt>き</rt></ruby>るない",
        "isCorrect": false
      },
      {
        "id": "66-3",
        "html": "<ruby>切<rt>き</rt></ruby>りない",
        "isCorrect": false
      },
      {
        "id": "66-4",
        "html": "<ruby>切<rt>き</rt></ruby>らないだ",
        "isCorrect": false
      }
    ],
    "lexeme": "切る",
    "tense": "present",
    "polarity": "negative",
    "verbId": "kiru_cut"
  },
  {
    "id": 67,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "tags": [
      "ichidan",
      "contrast",
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>は<ruby>暖<rt>あたた</rt></ruby>かかったから、コートを____。"
      }
    ],
    "options": [
      {
        "id": "67-1",
        "isCorrect": true
      },
      {
        "id": "67-2",
        "html": "<ruby>着<rt>き</rt></ruby>らなかった",
        "isCorrect": false
      },
      {
        "id": "67-3",
        "html": "<ruby>着<rt>き</rt></ruby>ないだった",
        "isCorrect": false
      },
      {
        "id": "67-4",
        "html": "<ruby>着<rt>き</rt></ruby>るなかった",
        "isCorrect": false
      }
    ],
    "lexeme": "着る",
    "tense": "past",
    "polarity": "negative",
    "verbId": "kiru_wear"
  },
  {
    "id": 68,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "tags": [
      "kuru",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>田中<rt>たなか</rt></ruby>さん、もういる？"
      },
      {
        "speaker": "B",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>____よ。"
      }
    ],
    "options": [
      {
        "id": "68-1",
        "isCorrect": true
      },
      {
        "id": "68-2",
        "html": "<ruby>来<rt>く</rt></ruby>るた",
        "isCorrect": false
      },
      {
        "id": "68-3",
        "html": "<ruby>来<rt>き</rt></ruby>った",
        "isCorrect": false
      },
      {
        "id": "68-4",
        "html": "<ruby>来<rt>き</rt></ruby>ただ",
        "isCorrect": false
      }
    ],
    "lexeme": "来る",
    "tense": "past",
    "polarity": "affirmative",
    "verbId": "kuru"
  },
  {
    "id": 69,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "tags": [
      "relative-clause",
      "godan-mu",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "これが<ruby>昨日<rt>きのう</rt></ruby>____<ruby>本<rt>ほん</rt></ruby>だよ。"
      }
    ],
    "options": [
      {
        "id": "69-1",
        "isCorrect": true
      },
      {
        "id": "69-2",
        "html": "<ruby>読<rt>よ</rt></ruby>むた",
        "isCorrect": false
      },
      {
        "id": "69-3",
        "html": "<ruby>読<rt>よ</rt></ruby>みた",
        "isCorrect": false
      },
      {
        "id": "69-4",
        "html": "<ruby>読<rt>よ</rt></ruby>った",
        "isCorrect": false
      }
    ],
    "lexeme": "読む",
    "tense": "past",
    "polarity": "affirmative",
    "verbId": "yomu"
  },
  {
    "id": 70,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "tags": [
      "quotation",
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>明日<rt>あした</rt></ruby>、<ruby>京都<rt>きょうと</rt></ruby>へ____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "options": [
      {
        "id": "70-1",
        "isCorrect": true
      },
      {
        "id": "70-2",
        "html": "<ruby>行<rt>い</rt></ruby>くだ",
        "isCorrect": false
      },
      {
        "id": "70-3",
        "html": "<ruby>行<rt>い</rt></ruby>いる",
        "isCorrect": false
      },
      {
        "id": "70-4",
        "html": "<ruby>行<rt>い</rt></ruby>くる",
        "isCorrect": false
      }
    ],
    "lexeme": "行く",
    "tense": "present",
    "polarity": "affirmative",
    "verbId": "iku"
  },
  {
    "id": 71,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "tags": [
      "ichidan",
      "reason",
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>朝<rt>あさ</rt></ruby>ごはんを____から、<ruby>今<rt>いま</rt></ruby>おなかがすいている。"
      }
    ],
    "options": [
      {
        "id": "71-1",
        "isCorrect": true
      },
      {
        "id": "71-2",
        "html": "<ruby>食<rt>た</rt></ruby>べらなかった",
        "isCorrect": false
      },
      {
        "id": "71-3",
        "html": "<ruby>食<rt>た</rt></ruby>べないだった",
        "isCorrect": false
      },
      {
        "id": "71-4",
        "html": "<ruby>食<rt>た</rt></ruby>べるなかった",
        "isCorrect": false
      }
    ],
    "lexeme": "食べる",
    "tense": "past",
    "polarity": "negative",
    "verbId": "taberu"
  },
  {
    "id": 72,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "tags": [
      "quotation",
      "godan-gu",
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>今日<rt>きょう</rt></ruby>は<ruby>海<rt>うみ</rt></ruby>で____と<ruby>言<rt>い</rt></ruby>った。"
      }
    ],
    "options": [
      {
        "id": "72-1",
        "isCorrect": true
      },
      {
        "id": "72-2",
        "html": "<ruby>泳<rt>およ</rt></ruby>ぐない",
        "isCorrect": false
      },
      {
        "id": "72-3",
        "html": "<ruby>泳<rt>およ</rt></ruby>ぎない",
        "isCorrect": false
      },
      {
        "id": "72-4",
        "html": "<ruby>泳<rt>およ</rt></ruby>がないだ",
        "isCorrect": false
      }
    ],
    "lexeme": "泳ぐ",
    "tense": "present",
    "polarity": "negative",
    "verbId": "oyogu"
  },
  {
    "id": 73,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "tags": [
      "ii",
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "この<ruby>部屋<rt>へや</rt></ruby>、どう？"
      },
      {
        "speaker": "B",
        "text": "<ruby>駅<rt>えき</rt></ruby>から<ruby>遠<rt>とお</rt></ruby>いし、あまり____。"
      }
    ],
    "prompt": {
      "ru": "いい → Настоящее/Будущее · Отрицание",
      "uz": "いい → Hozirgi/Kelasi · Inkor"
    },
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, отрицание (исключение いい → よ-)",
      "uz": "I-sifat, hozirgi/kelasi zamon, inkor (いい → よ- istisnosi)"
    },
    "options": [
      {
        "id": "73-1",
        "html": "よくない",
        "isCorrect": true
      },
      {
        "id": "73-2",
        "html": "いくない",
        "isCorrect": false
      },
      {
        "id": "73-3",
        "html": "いない",
        "isCorrect": false
      },
      {
        "id": "73-4",
        "html": "いくないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "В отрицании いい используется основа よ-: よくない. いいじゃない может выражать разве не хорошо?, но это не указанная отрицательная форма.",
      "uz": "いい ning inkorida よ- asosi ishlatiladi: よくない. いいじゃない yaxshi-ku? degan ma’noda kelishi mumkin, ammo bu so‘ralgan inkor shakli emas."
    },
    "lexeme": "いい",
    "tense": "present",
    "polarity": "negative"
  },
  {
    "id": 74,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "tags": [
      "ii",
      "reason",
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>は<ruby>天気<rt>てんき</rt></ruby>が____から、<ruby>家<rt>いえ</rt></ruby>にいた。"
      }
    ],
    "prompt": {
      "ru": "いい → Прошедшая Отрицательная Форма",
      "uz": "いい → O‘tgan Zamon Inkor Shakli"
    },
    "context": {
      "ru": "い-прилагательное, прошедшее, отрицание (исключение いい → よ-)",
      "uz": "I-sifat, o‘tgan zamon, inkor (いい → よ- istisnosi)"
    },
    "options": [
      {
        "id": "74-1",
        "html": "よくなかった",
        "isCorrect": true
      },
      {
        "id": "74-2",
        "html": "いくなかった",
        "isCorrect": false
      },
      {
        "id": "74-3",
        "html": "いくないだった",
        "isCorrect": false
      },
      {
        "id": "74-4",
        "html": "いくなかっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Прошедшее отрицание いい: よくなかった.",
      "uz": "いい ning o‘tgan inkor shakli: よくなかった."
    },
    "lexeme": "いい",
    "tense": "past",
    "polarity": "negative"
  },
  {
    "id": 75,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "この<ruby>写真<rt>しゃしん</rt></ruby>の<ruby>子犬<rt>こいぬ</rt></ruby>、どうだった？"
      },
      {
        "speaker": "B",
        "text": "とても____よ。"
      }
    ],
    "prompt": {
      "ru": "かわいい → Прошедшая Утвердительная Форма",
      "uz": "かわいい → O‘tgan Zamon Tasdiq Shakli"
    },
    "context": {
      "ru": "い-прилагательное, прошедшее, утверждение",
      "uz": "I-sifat, o‘tgan zamon, tasdiq"
    },
    "options": [
      {
        "id": "75-1",
        "html": "かわいかった",
        "isCorrect": true
      },
      {
        "id": "75-2",
        "html": "かわいいかった",
        "isCorrect": false
      },
      {
        "id": "75-3",
        "html": "かわいいだった",
        "isCorrect": false
      },
      {
        "id": "75-4",
        "html": "かわいくかった",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "かわいい спрягается регулярно: убирается только последнее い, затем добавляется かった.",
      "uz": "かわいい odatiy tuslanadi: faqat oxirgi い olib tashlanib, かった qo‘shiladi."
    },
    "lexeme": "かわいい",
    "tense": "past",
    "polarity": "affirmative"
  },
  {
    "id": 76,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>去年<rt>きょねん</rt></ruby>の<ruby>夏<rt>なつ</rt></ruby>は、そんなに____。"
      }
    ],
    "prompt": {
      "ru": "<ruby>暑<rt>あつ</rt></ruby>い → Прошедшая Отрицательная Форма",
      "uz": "<ruby>暑<rt>あつ</rt></ruby>い → O‘tgan Zamon Inkor Shakli"
    },
    "context": {
      "ru": "い-прилагательное, прошедшее, отрицание",
      "uz": "I-sifat, o‘tgan zamon, inkor"
    },
    "options": [
      {
        "id": "76-1",
        "html": "<ruby>暑<rt>あつ</rt></ruby>くなかった",
        "isCorrect": true
      },
      {
        "id": "76-2",
        "html": "<ruby>暑<rt>あつ</rt></ruby>いくなかった",
        "isCorrect": false
      },
      {
        "id": "76-3",
        "html": "<ruby>暑<rt>あつ</rt></ruby>くないだった",
        "isCorrect": false
      },
      {
        "id": "76-4",
        "html": "<ruby>暑<rt>あつ</rt></ruby>くなかっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Конечное い заменяется на くなかった. そんなに сочетается здесь с отрицанием.",
      "uz": "Oxirgi い o‘rniga くなかった keladi. Bu yerda そんなに inkor bilan ishlatilgan."
    },
    "lexeme": "暑い",
    "tense": "past",
    "polarity": "negative"
  },
  {
    "id": 77,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "tags": [
      "quotation",
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "このスープは____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "prompt": {
      "ru": "おいしい → Настоящее/Будущее · Утверждение",
      "uz": "おいしい → Hozirgi/Kelasi · Tasdiq"
    },
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "I-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "options": [
      {
        "id": "77-1",
        "html": "おいしい",
        "isCorrect": true
      },
      {
        "id": "77-2",
        "html": "おいしいだ",
        "isCorrect": false
      },
      {
        "id": "77-3",
        "html": "おいしだ",
        "isCorrect": false
      },
      {
        "id": "77-4",
        "html": "おいしな",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Перед と <ruby>思<rt>おも</rt></ruby>う い-прилагательное остаётся в простой форме; だ не добавляется.",
      "uz": "と <ruby>思<rt>おも</rt></ruby>う dan oldin i-sifat oddiy shaklda qoladi; だ qo‘shilmaydi."
    },
    "lexeme": "おいしい",
    "tense": "present",
    "polarity": "affirmative"
  },
  {
    "id": 78,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "tags": [
      "relative-clause",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>去年<rt>きょねん</rt></ruby>は____<ruby>店<rt>みせ</rt></ruby>が、<ruby>今<rt>いま</rt></ruby>は<ruby>安<rt>やす</rt></ruby>くなった。"
      }
    ],
    "prompt": {
      "ru": "<ruby>高<rt>たか</rt></ruby>い → Прошедшая Утвердительная Форма",
      "uz": "<ruby>高<rt>たか</rt></ruby>い → O‘tgan Zamon Tasdiq Shakli"
    },
    "context": {
      "ru": "い-прилагательное, прошедшее, утверждение (определение перед существительным)",
      "uz": "I-sifat, o‘tgan zamon, tasdiq (ot oldidagi aniqlovchi)"
    },
    "options": [
      {
        "id": "78-1",
        "html": "<ruby>高<rt>たか</rt></ruby>かった",
        "isCorrect": true
      },
      {
        "id": "78-2",
        "html": "<ruby>高<rt>たか</rt></ruby>いかった",
        "isCorrect": false
      },
      {
        "id": "78-3",
        "html": "<ruby>高<rt>たか</rt></ruby>いだった",
        "isCorrect": false
      },
      {
        "id": "78-4",
        "html": "<ruby>高<rt>たか</rt></ruby>くかった",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Прошедшая форма い-прилагательного может определять существительное: <ruby>高<rt>たか</rt></ruby>かった <ruby>店<rt>みせ</rt></ruby>: магазин, который был дорогим.",
      "uz": "I-sifatning o‘tgan shakli otni aniqlashi mumkin: <ruby>高<rt>たか</rt></ruby>かった <ruby>店<rt>みせ</rt></ruby>: ilgari qimmat bo‘lgan do‘kon."
    },
    "lexeme": "高い",
    "tense": "past",
    "polarity": "affirmative"
  },
  {
    "id": 79,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "tags": [
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "このかばん、<ruby>欲<rt>ほ</rt></ruby>しい？"
      },
      {
        "speaker": "B",
        "text": "ううん、もう<ruby>一<rt>ひと</rt></ruby>つあるから____。"
      }
    ],
    "prompt": {
      "ru": "<ruby>欲<rt>ほ</rt></ruby>しい → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>欲<rt>ほ</rt></ruby>しい → Hozirgi/Kelasi · Inkor"
    },
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, отрицание",
      "uz": "I-sifat, hozirgi/kelasi zamon, inkor"
    },
    "options": [
      {
        "id": "79-1",
        "html": "<ruby>欲<rt>ほ</rt></ruby>しくない",
        "isCorrect": true
      },
      {
        "id": "79-2",
        "html": "<ruby>欲<rt>ほ</rt></ruby>しいくない",
        "isCorrect": false
      },
      {
        "id": "79-3",
        "html": "<ruby>欲<rt>ほ</rt></ruby>しない",
        "isCorrect": false
      },
      {
        "id": "79-4",
        "html": "<ruby>欲<rt>ほ</rt></ruby>しくないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>欲<rt>ほ</rt></ruby>しい: い-прилагательное: его отрицание: <ruby>欲<rt>ほ</rt></ruby>しくない.",
      "uz": "<ruby>欲<rt>ほ</rt></ruby>しい: i-sifat: uning inkori: <ruby>欲<rt>ほ</rt></ruby>しくない."
    },
    "lexeme": "欲しい",
    "tense": "present",
    "polarity": "negative"
  },
  {
    "id": 80,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "tags": [
      "time-clause",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "<ruby>学生<rt>がくせい</rt></ruby>のころ、よく<ruby>旅行<rt>りょこう</rt></ruby>したの？"
      },
      {
        "speaker": "B",
        "text": "うん、____ときは、<ruby>毎年<rt>まいとし</rt></ruby><ruby>海外<rt>かいがい</rt></ruby>へ<ruby>行<rt>い</rt></ruby>った。"
      }
    ],
    "prompt": {
      "ru": "<ruby>若<rt>わか</rt></ruby>い → Прошедшая Утвердительная Форма",
      "uz": "<ruby>若<rt>わか</rt></ruby>い → O‘tgan Zamon Tasdiq Shakli"
    },
    "context": {
      "ru": "い-прилагательное, прошедшее, утверждение (придаточное времени с とき)",
      "uz": "I-sifat, o‘tgan zamon, tasdiq (とき bilan payt ifodasi)"
    },
    "options": [
      {
        "id": "80-1",
        "html": "<ruby>若<rt>わか</rt></ruby>かった",
        "isCorrect": true
      },
      {
        "id": "80-2",
        "html": "<ruby>若<rt>わか</rt></ruby>いかった",
        "isCorrect": false
      },
      {
        "id": "80-3",
        "html": "<ruby>若<rt>わか</rt></ruby>いだった",
        "isCorrect": false
      },
      {
        "id": "80-4",
        "html": "<ruby>若<rt>わか</rt></ruby>くかった",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Перед とき подходит простая прошедшая форма <ruby>若<rt>わか</rt></ruby>かった: речь о более молодом возрасте.",
      "uz": "とき dan oldin <ruby>若<rt>わか</rt></ruby>かった oddiy o‘tgan shakli mos keladi: gap yoshlik davri haqida."
    },
    "lexeme": "若い",
    "tense": "past",
    "polarity": "affirmative"
  },
  {
    "id": 81,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "tags": [
      "quotation",
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>道<rt>みち</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "prompt": {
      "ru": "<ruby>安全<rt>あんぜん</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>安全<rt>あんぜん</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "options": [
      {
        "id": "81-1",
        "html": "<ruby>安全<rt>あんぜん</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "81-2",
        "html": "<ruby>安全<rt>あんぜん</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "81-3",
        "html": "<ruby>安全<rt>あんぜん</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "81-4",
        "html": "<ruby>安全<rt>あんぜん</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "В утвердительной форме настоящего/будущего времени перед と <ruby>思<rt>おも</rt></ruby>う у な-прилагательного нужна связка だ.",
      "uz": "Hozirgi/kelasi tasdiqda と <ruby>思<rt>おも</rt></ruby>う dan oldin na-sifatga だ bog‘lamasi kerak."
    },
    "lexeme": "安全",
    "tense": "present",
    "polarity": "affirmative"
  },
  {
    "id": 82,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "tags": [
      "quotation",
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>書類<rt>しょるい</rt></ruby>は____と<ruby>言<rt>い</rt></ruby>っていた。"
      }
    ],
    "prompt": {
      "ru": "<ruby>必要<rt>ひつよう</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>必要<rt>ひつよう</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, отрицание (косвенная речь с と <ruby>言<rt>い</rt></ruby>う)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, inkor (と <ruby>言<rt>い</rt></ruby>う bilan o‘zlashtirma gap)"
    },
    "options": [
      {
        "id": "82-1",
        "html": "<ruby>必要<rt>ひつよう</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "82-2",
        "html": "<ruby>必要<rt>ひつよう</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "82-3",
        "html": "<ruby>必要<rt>ひつよう</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "82-4",
        "html": "<ruby>必要<rt>ひつよう</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>必要<rt>ひつよう</rt></ruby>: な-прилагательное: отрицание перед と: <ruby>必要<rt>ひつよう</rt></ruby>じゃない.",
      "uz": "<ruby>必要<rt>ひつよう</rt></ruby>: na-sifat: と dan oldingi inkori: <ruby>必要<rt>ひつよう</rt></ruby>じゃない."
    },
    "lexeme": "必要",
    "tense": "present",
    "polarity": "negative"
  },
  {
    "id": 83,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "tags": [
      "contrast-clause",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>のテストは____けど、<ruby>時間<rt>じかん</rt></ruby>が<ruby>足<rt>た</rt></ruby>りなかった。"
      }
    ],
    "prompt": {
      "ru": "<ruby>簡単<rt>かんたん</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>簡単<rt>かんたん</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "context": {
      "ru": "な-прилагательное, прошедшее, утверждение (противопоставление с けど)",
      "uz": "Na-sifat, o‘tgan zamon, tasdiq (けど bilan zidlov)"
    },
    "options": [
      {
        "id": "83-1",
        "html": "<ruby>簡単<rt>かんたん</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "83-2",
        "html": "<ruby>簡単<rt>かんたん</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "83-3",
        "html": "<ruby>簡単<rt>かんたん</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "83-4",
        "html": "<ruby>簡単<rt>かんたん</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Простая прошедшая связка な-прилагательного: だった; けど присоединяется после неё.",
      "uz": "Na-sifatning oddiy o‘tgan bog‘lamasi: だった; undan keyin けど qo‘shiladi."
    },
    "lexeme": "簡単",
    "tense": "past",
    "polarity": "affirmative"
  },
  {
    "id": 84,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "あの<ruby>店<rt>みせ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>、どうだった？"
      },
      {
        "speaker": "B",
        "text": "<ruby>忙<rt>いそが</rt></ruby>しかったのか、あまり____。"
      }
    ],
    "prompt": {
      "ru": "<ruby>親切<rt>しんせつ</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>親切<rt>しんせつ</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "context": {
      "ru": "な-прилагательное, прошедшее, отрицание",
      "uz": "Na-sifat, o‘tgan zamon, inkor"
    },
    "options": [
      {
        "id": "84-1",
        "html": "<ruby>親切<rt>しんせつ</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "84-2",
        "html": "<ruby>親切<rt>しんせつ</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "84-3",
        "html": "<ruby>親切<rt>しんせつ</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "84-4",
        "html": "<ruby>親切<rt>しんせつ</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Для прошедшего отрицания <ruby>親切<rt>しんせつ</rt></ruby> используется связка じゃなかった.",
      "uz": "<ruby>親切<rt>しんせつ</rt></ruby> ning o‘tgan inkori uchun じゃなかった bog‘lamasi ishlatiladi."
    },
    "lexeme": "親切",
    "tense": "past",
    "polarity": "negative"
  },
  {
    "id": 85,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "tags": [
      "kirei",
      "quotation",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>の<ruby>海<rt>うみ</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "prompt": {
      "ru": "きれい → Прошедшая Утвердительная Форма",
      "uz": "きれい → O‘tgan Zamon Tasdiq Shakli"
    },
    "context": {
      "ru": "な-прилагательное, прошедшее, утверждение (な-прилагательное с конечным い)",
      "uz": "Na-sifat, o‘tgan zamon, tasdiq (い bilan tugagan na-sifat)"
    },
    "options": [
      {
        "id": "85-1",
        "html": "きれいだった",
        "isCorrect": true
      },
      {
        "id": "85-2",
        "html": "きれいかった",
        "isCorrect": false
      },
      {
        "id": "85-3",
        "html": "きれいだた",
        "isCorrect": false
      },
      {
        "id": "85-4",
        "html": "きれいだっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "きれい: な-прилагательное: прошедшая форма перед と: きれいだった.",
      "uz": "きれい: na-sifat: と dan oldingi o‘tgan shakli: きれいだった."
    },
    "lexeme": "きれい",
    "tense": "past",
    "polarity": "affirmative"
  },
  {
    "id": 86,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "tags": [
      "reason",
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>部屋<rt>へや</rt></ruby>は____から、<ruby>別<rt>べつ</rt></ruby>の<ruby>場所<rt>ばしょ</rt></ruby>で<ruby>勉強<rt>べんきょう</rt></ruby>する。"
      }
    ],
    "prompt": {
      "ru": "<ruby>静<rt>しず</rt></ruby>か → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>静<rt>しず</rt></ruby>か → Hozirgi/Kelasi · Inkor"
    },
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, отрицание (придаточное причины с から)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, inkor (から bilan sabab ifodasi)"
    },
    "options": [
      {
        "id": "86-1",
        "html": "<ruby>静<rt>しず</rt></ruby>かじゃない",
        "isCorrect": true
      },
      {
        "id": "86-2",
        "html": "<ruby>静<rt>しず</rt></ruby>かくない",
        "isCorrect": false
      },
      {
        "id": "86-3",
        "html": "<ruby>静<rt>しず</rt></ruby>かだない",
        "isCorrect": false
      },
      {
        "id": "86-4",
        "html": "<ruby>静<rt>しず</rt></ruby>かじゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Причина выбора другого места: шум сейчас. Отрицательная форма настоящего/будущего времени для <ruby>静<rt>しず</rt></ruby>か: <ruby>静<rt>しず</rt></ruby>かじゃない.",
      "uz": "Boshqa joyni tanlash sababi: hozirgi shovqin. <ruby>静<rt>しず</rt></ruby>か ning hozirgi/kelasi inkori: <ruby>静<rt>しず</rt></ruby>かじゃない."
    },
    "lexeme": "静か",
    "tense": "present",
    "polarity": "negative"
  },
  {
    "id": 87,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "tags": [
      "reason",
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>写真<rt>しゃしん</rt></ruby>は____から、<ruby>捨<rt>す</rt></ruby>てない。"
      }
    ],
    "prompt": {
      "ru": "<ruby>大切<rt>たいせつ</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>大切<rt>たいせつ</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, утверждение (придаточное причины с から)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, tasdiq (から bilan sabab ifodasi)"
    },
    "options": [
      {
        "id": "87-1",
        "html": "<ruby>大切<rt>たいせつ</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "87-2",
        "html": "<ruby>大切<rt>たいせつ</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "87-3",
        "html": "<ruby>大切<rt>たいせつ</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "87-4",
        "html": "<ruby>大切<rt>たいせつ</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Перед から в указанной утвердительной форме <ruby>大切<rt>たいせつ</rt></ruby> нужна связка だ.",
      "uz": "から dan oldin <ruby>大切<rt>たいせつ</rt></ruby> ning so‘ralgan tasdiq shakliga だ bog‘lamasi kerak."
    },
    "lexeme": "大切",
    "tense": "present",
    "polarity": "affirmative"
  },
  {
    "id": 88,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "tags": [
      "quotation",
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>学生<rt>がくせい</rt></ruby>のころは、<ruby>時間<rt>じかん</rt></ruby>があっても____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "prompt": {
      "ru": "<ruby>自由<rt>じゆう</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>自由<rt>じゆう</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "context": {
      "ru": "な-прилагательное, прошедшее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Na-sifat, o‘tgan zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "options": [
      {
        "id": "88-1",
        "html": "<ruby>自由<rt>じゆう</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "88-2",
        "html": "<ruby>自由<rt>じゆう</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "88-3",
        "html": "<ruby>自由<rt>じゆう</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "88-4",
        "html": "<ruby>自由<rt>じゆう</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Перед と <ruby>思<rt>おも</rt></ruby>う сохраняется прошедшая отрицательная связка じゃなかった.",
      "uz": "と <ruby>思<rt>おも</rt></ruby>う dan oldin じゃなかった o‘tgan inkor bog‘lamasi saqlanadi."
    },
    "lexeme": "自由",
    "tense": "past",
    "polarity": "negative"
  },
  {
    "id": 89,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "tags": [
      "quotation",
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>明日<rt>あした</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "prompt": {
      "ru": "<ruby>休<rt>やす</rt></ruby>み → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>休<rt>やす</rt></ruby>み → Hozirgi/Kelasi · Tasdiq"
    },
    "context": {
      "ru": "Существительное, настоящее/будущее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Ot, hozirgi/kelasi zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "options": [
      {
        "id": "89-1",
        "html": "<ruby>休<rt>やす</rt></ruby>みだ",
        "isCorrect": true
      },
      {
        "id": "89-2",
        "html": "<ruby>休<rt>やす</rt></ruby>みな",
        "isCorrect": false
      },
      {
        "id": "89-3",
        "html": "<ruby>休<rt>やす</rt></ruby>みい",
        "isCorrect": false
      },
      {
        "id": "89-4",
        "html": "<ruby>休<rt>やす</rt></ruby>みだだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Перед と <ruby>思<rt>おも</rt></ruby>う существительное в утвердительной форме настоящего/будущего времени требует だ. Форма может относиться к завтрашнему дню.",
      "uz": "と <ruby>思<rt>おも</rt></ruby>う dan oldin otning hozirgi/kelasi tasdiq shakliga だ kerak. Bu shakl ertangi kunga ham tegishli bo‘lishi mumkin."
    },
    "lexeme": "休み",
    "tense": "present",
    "polarity": "affirmative"
  },
  {
    "id": 90,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "tags": [
      "quotation",
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>田中<rt>たなか</rt></ruby>さんは____と<ruby>言<rt>い</rt></ruby>っていた。"
      }
    ],
    "prompt": {
      "ru": "<ruby>学生<rt>がくせい</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>学生<rt>がくせい</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "context": {
      "ru": "Существительное, настоящее/будущее, отрицание (косвенная речь с と <ruby>言<rt>い</rt></ruby>う)",
      "uz": "Ot, hozirgi/kelasi zamon, inkor (と <ruby>言<rt>い</rt></ruby>う bilan o‘zlashtirma gap)"
    },
    "options": [
      {
        "id": "90-1",
        "html": "<ruby>学生<rt>がくせい</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "90-2",
        "html": "<ruby>学生<rt>がくせい</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "90-3",
        "html": "<ruby>学生<rt>がくせい</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "90-4",
        "html": "<ruby>学生<rt>がくせい</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Цитируемая отрицательная форма существительного: <ruby>学生<rt>がくせい</rt></ruby>じゃない.",
      "uz": "Otning ko‘chirma inkor shakli: <ruby>学生<rt>がくせい</rt></ruby>じゃない."
    },
    "lexeme": "学生",
    "tense": "present",
    "polarity": "negative"
  },
  {
    "id": 91,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "tags": [
      "quotation",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "prompt": {
      "ru": "<ruby>雨<rt>あめ</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>雨<rt>あめ</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "context": {
      "ru": "Существительное, прошедшее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Ot, o‘tgan zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "options": [
      {
        "id": "91-1",
        "html": "<ruby>雨<rt>あめ</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "91-2",
        "html": "<ruby>雨<rt>あめ</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "91-3",
        "html": "<ruby>雨<rt>あめ</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "91-4",
        "html": "<ruby>雨<rt>あめ</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>雨<rt>あめ</rt></ruby>: существительное. Простая прошедшая связка перед と: だった.",
      "uz": "<ruby>雨<rt>あめ</rt></ruby>: ot. と dan oldingi oddiy o‘tgan bog‘lama: だった."
    },
    "lexeme": "雨",
    "tense": "past",
    "polarity": "affirmative"
  },
  {
    "id": 92,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "tags": [
      "reason",
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>は____から、<ruby>会社<rt>かいしゃ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>った。"
      }
    ],
    "prompt": {
      "ru": "<ruby>休<rt>やす</rt></ruby>み → Прошедшая Отрицательная Форма",
      "uz": "<ruby>休<rt>やす</rt></ruby>み → O‘tgan Zamon Inkor Shakli"
    },
    "context": {
      "ru": "Существительное, прошедшее, отрицание (придаточное причины с から)",
      "uz": "Ot, o‘tgan zamon, inkor (から bilan sabab ifodasi)"
    },
    "options": [
      {
        "id": "92-1",
        "html": "<ruby>休<rt>やす</rt></ruby>みじゃなかった",
        "isCorrect": true
      },
      {
        "id": "92-2",
        "html": "<ruby>休<rt>やす</rt></ruby>みくなかった",
        "isCorrect": false
      },
      {
        "id": "92-3",
        "html": "<ruby>休<rt>やす</rt></ruby>みじゃないだった",
        "isCorrect": false
      },
      {
        "id": "92-4",
        "html": "<ruby>休<rt>やす</rt></ruby>みだったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Причина похода на работу: вчера не было выходного. Нужна связка じゃなかった.",
      "uz": "Ishga borish sababi: kecha dam olish kuni bo‘lmagan. じゃなかった bog‘lamasi kerak."
    },
    "lexeme": "休み",
    "tense": "past",
    "polarity": "negative"
  },
  {
    "id": 93,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "tags": [
      "time-clause",
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>日本<rt>にほん</rt></ruby>に<ruby>着<rt>つ</rt></ruby>いたときは____。<ruby>雪<rt>ゆき</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っていた。"
      }
    ],
    "prompt": {
      "ru": "<ruby>冬<rt>ふゆ</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>冬<rt>ふゆ</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "context": {
      "ru": "Существительное, прошедшее, утверждение",
      "uz": "Ot, o‘tgan zamon, tasdiq"
    },
    "options": [
      {
        "id": "93-1",
        "html": "<ruby>冬<rt>ふゆ</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "93-2",
        "html": "<ruby>冬<rt>ふゆ</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "93-3",
        "html": "<ruby>冬<rt>ふゆ</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "93-4",
        "html": "<ruby>冬<rt>ふゆ</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Для описания сезона в прошлом существительное <ruby>冬<rt>ふゆ</rt></ruby> получает связку だった.",
      "uz": "O‘tgan faslni tasvirlash uchun <ruby>冬<rt>ふゆ</rt></ruby> otiga だった bog‘lamasi qo‘shiladi."
    },
    "lexeme": "冬",
    "tense": "past",
    "polarity": "affirmative"
  },
  {
    "id": 94,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "tags": [
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "これは____。<ruby>美術館<rt>びじゅつかん</rt></ruby>で<ruby>買<rt>か</rt></ruby>ったコピーだ。"
      }
    ],
    "prompt": {
      "ru": "<ruby>本物<rt>ほんもの</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>本物<rt>ほんもの</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "context": {
      "ru": "Существительное, настоящее/будущее, отрицание",
      "uz": "Ot, hozirgi/kelasi zamon, inkor"
    },
    "options": [
      {
        "id": "94-1",
        "html": "<ruby>本物<rt>ほんもの</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "94-2",
        "html": "<ruby>本物<rt>ほんもの</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "94-3",
        "html": "<ruby>本物<rt>ほんもの</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "94-4",
        "html": "<ruby>本物<rt>ほんもの</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Существительное <ruby>本物<rt>ほんもの</rt></ruby> (подлинник) отрицается связкой じゃない.",
      "uz": "<ruby>本物<rt>ほんもの</rt></ruby> (asl nusxa) oti じゃない bog‘lamasi bilan inkor qilinadi."
    },
    "lexeme": "本物",
    "tense": "present",
    "polarity": "negative"
  },
  {
    "id": 95,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "tags": [
      "reason",
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "これは____から、<ruby>忘<rt>わす</rt></ruby>れないでね。"
      }
    ],
    "prompt": {
      "ru": "<ruby>約束<rt>やくそく</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>約束<rt>やくそく</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "context": {
      "ru": "Существительное, настоящее/будущее, утверждение (придаточное причины с から)",
      "uz": "Ot, hozirgi/kelasi zamon, tasdiq (から bilan sabab ifodasi)"
    },
    "options": [
      {
        "id": "95-1",
        "html": "<ruby>約束<rt>やくそく</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "95-2",
        "html": "<ruby>約束<rt>やくそく</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "95-3",
        "html": "<ruby>約束<rt>やくそく</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "95-4",
        "html": "<ruby>約束<rt>やくそく</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Перед から в утвердительной форме настоящего/будущего времени после <ruby>約束<rt>やくそく</rt></ruby> нужна связка だ.",
      "uz": "Hozirgi/kelasi tasdiqda から dan oldin <ruby>約束<rt>やくそく</rt></ruby> otiga だ bog‘lamasi kerak."
    },
    "lexeme": "約束",
    "tense": "present",
    "polarity": "affirmative"
  },
  {
    "id": 96,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "tags": [
      "quotation",
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>祖父<rt>そふ</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。<ruby>先生<rt>せんせい</rt></ruby>だったそうだ。"
      }
    ],
    "prompt": {
      "ru": "<ruby>医者<rt>いしゃ</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>医者<rt>いしゃ</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "context": {
      "ru": "Существительное, прошедшее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Ot, o‘tgan zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "options": [
      {
        "id": "96-1",
        "html": "<ruby>医者<rt>いしゃ</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "96-2",
        "html": "<ruby>医者<rt>いしゃ</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "96-3",
        "html": "<ruby>医者<rt>いしゃ</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "96-4",
        "html": "<ruby>医者<rt>いしゃ</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "Прошедшее отрицание существительного: <ruby>医者<rt>いしゃ</rt></ruby>じゃなかった. と <ruby>聞<rt>き</rt></ruby>いた присоединяется к этой простой форме.",
      "uz": "Otning o‘tgan inkori: <ruby>医者<rt>いしゃ</rt></ruby>じゃなかった. と <ruby>聞<rt>き</rt></ruby>いた shu oddiy shaklga qo‘shiladi."
    },
    "lexeme": "医者",
    "tense": "past",
    "polarity": "negative"
  },
  {
    "id": 97,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "lexeme": "聞く",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "godan",
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>普段<rt>ふだん</rt></ruby>は、ラジオを____。"
      }
    ],
    "options": [
      {
        "id": "97-1",
        "isCorrect": true
      },
      {
        "id": "97-2",
        "html": "<ruby>聞<rt>き</rt></ruby>くだ",
        "isCorrect": false
      },
      {
        "id": "97-3",
        "html": "<ruby>聞<rt>き</rt></ruby>いる",
        "isCorrect": false
      },
      {
        "id": "97-4",
        "html": "<ruby>聞<rt>き</rt></ruby>くる",
        "isCorrect": false
      }
    ],
    "verbId": "kiku"
  },
  {
    "id": 98,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "lexeme": "歩く",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "godan",
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>普段<rt>ふだん</rt></ruby>は、<ruby>駅<rt>えき</rt></ruby>まで____。"
      }
    ],
    "options": [
      {
        "id": "98-1",
        "isCorrect": true
      },
      {
        "id": "98-2",
        "html": "<ruby>歩<rt>ある</rt></ruby>くだ",
        "isCorrect": false
      },
      {
        "id": "98-3",
        "html": "<ruby>歩<rt>ある</rt></ruby>いる",
        "isCorrect": false
      },
      {
        "id": "98-4",
        "html": "<ruby>歩<rt>ある</rt></ruby>くる",
        "isCorrect": false
      }
    ],
    "verbId": "aruku"
  },
  {
    "id": 99,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "lexeme": "働く",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "godan",
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>来月<rt>らいげつ</rt></ruby>から<ruby>図書館<rt>としょかん</rt></ruby>で____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "options": [
      {
        "id": "99-1",
        "isCorrect": true
      },
      {
        "id": "99-2",
        "html": "<ruby>働<rt>はたら</rt></ruby>くだ",
        "isCorrect": false
      },
      {
        "id": "99-3",
        "html": "<ruby>働<rt>はたら</rt></ruby>いる",
        "isCorrect": false
      },
      {
        "id": "99-4",
        "html": "<ruby>働<rt>はたら</rt></ruby>くる",
        "isCorrect": false
      }
    ],
    "verbId": "hataraku"
  },
  {
    "id": 100,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "lexeme": "急ぐ",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "godan",
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>遅<rt>おく</rt></ruby>れそうなときは<ruby>駅<rt>えき</rt></ruby>まで____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "options": [
      {
        "id": "100-1",
        "isCorrect": true
      },
      {
        "id": "100-2",
        "html": "<ruby>急<rt>いそ</rt></ruby>ぐだ",
        "isCorrect": false
      },
      {
        "id": "100-3",
        "html": "<ruby>急<rt>いそ</rt></ruby>いる",
        "isCorrect": false
      },
      {
        "id": "100-4",
        "html": "<ruby>急<rt>いそ</rt></ruby>ぐる",
        "isCorrect": false
      }
    ],
    "verbId": "isogu"
  },
  {
    "id": 101,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "lexeme": "貸す",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "godan",
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>普段<rt>ふだん</rt></ruby>は、<ruby>友達<rt>ともだち</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>を____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "options": [
      {
        "id": "101-1",
        "isCorrect": true
      },
      {
        "id": "101-2",
        "html": "<ruby>貸<rt>か</rt></ruby>すだ",
        "isCorrect": false
      },
      {
        "id": "101-3",
        "html": "<ruby>貸<rt>か</rt></ruby>いる",
        "isCorrect": false
      },
      {
        "id": "101-4",
        "html": "<ruby>貸<rt>か</rt></ruby>する",
        "isCorrect": false
      }
    ],
    "verbId": "kasu"
  },
  {
    "id": 102,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "lexeme": "返す",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "godan",
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>普段<rt>ふだん</rt></ruby>は、<ruby>図書館<rt>としょかん</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>を____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "options": [
      {
        "id": "102-1",
        "isCorrect": true
      },
      {
        "id": "102-2",
        "html": "<ruby>返<rt>かえ</rt></ruby>すだ",
        "isCorrect": false
      },
      {
        "id": "102-3",
        "html": "<ruby>返<rt>かえ</rt></ruby>いる",
        "isCorrect": false
      },
      {
        "id": "102-4",
        "html": "<ruby>返<rt>かえ</rt></ruby>する",
        "isCorrect": false
      }
    ],
    "verbId": "kaesu"
  },
  {
    "id": 103,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "lexeme": "消す",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "godan",
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>普段<rt>ふだん</rt></ruby>は、<ruby>部屋<rt>へや</rt></ruby>の<ruby>電気<rt>でんき</rt></ruby>を____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "options": [
      {
        "id": "103-1",
        "isCorrect": true
      },
      {
        "id": "103-2",
        "html": "<ruby>消<rt>け</rt></ruby>すだ",
        "isCorrect": false
      },
      {
        "id": "103-3",
        "html": "<ruby>消<rt>け</rt></ruby>いる",
        "isCorrect": false
      },
      {
        "id": "103-4",
        "html": "<ruby>消<rt>け</rt></ruby>する",
        "isCorrect": false
      }
    ],
    "verbId": "kesu"
  },
  {
    "id": 104,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "lexeme": "持つ",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "godan",
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>明日<rt>あした</rt></ruby>は<ruby>荷物<rt>にもつ</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いから、<ruby>彼<rt>かれ</rt></ruby>も<ruby>自分<rt>じぶん</rt></ruby>のかばんを____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "options": [
      {
        "id": "104-1",
        "isCorrect": true
      },
      {
        "id": "104-2",
        "html": "<ruby>持<rt>も</rt></ruby>つだ",
        "isCorrect": false
      },
      {
        "id": "104-3",
        "html": "<ruby>持<rt>も</rt></ruby>いる",
        "isCorrect": false
      },
      {
        "id": "104-4",
        "html": "<ruby>持<rt>も</rt></ruby>つる",
        "isCorrect": false
      }
    ],
    "verbId": "motsu"
  },
  {
    "id": 105,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "lexeme": "立つ",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "godan",
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "コンサートでは、<ruby>彼<rt>かれ</rt></ruby>は<ruby>入口<rt>いりぐち</rt></ruby>に____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "options": [
      {
        "id": "105-1",
        "isCorrect": true
      },
      {
        "id": "105-2",
        "html": "<ruby>立<rt>た</rt></ruby>つだ",
        "isCorrect": false
      },
      {
        "id": "105-3",
        "html": "<ruby>立<rt>た</rt></ruby>いる",
        "isCorrect": false
      },
      {
        "id": "105-4",
        "html": "<ruby>立<rt>た</rt></ruby>つる",
        "isCorrect": false
      }
    ],
    "verbId": "tatsu"
  },
  {
    "id": 106,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "lexeme": "住む",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "godan",
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>来年<rt>らいねん</rt></ruby>は<ruby>京都<rt>きょうと</rt></ruby>に____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "options": [
      {
        "id": "106-1",
        "isCorrect": true
      },
      {
        "id": "106-2",
        "html": "<ruby>住<rt>す</rt></ruby>むだ",
        "isCorrect": false
      },
      {
        "id": "106-3",
        "html": "<ruby>住<rt>す</rt></ruby>いる",
        "isCorrect": false
      },
      {
        "id": "106-4",
        "html": "<ruby>住<rt>す</rt></ruby>むる",
        "isCorrect": false
      }
    ],
    "verbId": "sumu"
  },
  {
    "id": 107,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "lexeme": "休む",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "godan",
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>今度<rt>こんど</rt></ruby>の<ruby>日曜日<rt>にちようび</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "options": [
      {
        "id": "107-1",
        "isCorrect": true
      },
      {
        "id": "107-2",
        "html": "<ruby>休<rt>やす</rt></ruby>むだ",
        "isCorrect": false
      },
      {
        "id": "107-3",
        "html": "<ruby>休<rt>やす</rt></ruby>いる",
        "isCorrect": false
      },
      {
        "id": "107-4",
        "html": "<ruby>休<rt>やす</rt></ruby>むる",
        "isCorrect": false
      }
    ],
    "verbId": "yasumu"
  },
  {
    "id": 108,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "lexeme": "選ぶ",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "godan",
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>本<rt>ほん</rt></ruby>は____。"
      }
    ],
    "options": [
      {
        "id": "108-1",
        "isCorrect": true
      },
      {
        "id": "108-2",
        "html": "<ruby>選<rt>えら</rt></ruby>ぶない",
        "isCorrect": false
      },
      {
        "id": "108-3",
        "html": "<ruby>選<rt>えら</rt></ruby>びない",
        "isCorrect": false
      },
      {
        "id": "108-4",
        "html": "<ruby>選<rt>えら</rt></ruby>ばないだ",
        "isCorrect": false
      }
    ],
    "verbId": "erabu"
  },
  {
    "id": 109,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "lexeme": "呼ぶ",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "godan",
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>明日<rt>あした</rt></ruby>の<ruby>集<rt>あつ</rt></ruby>まりには<ruby>先生<rt>せんせい</rt></ruby>を____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "options": [
      {
        "id": "109-1",
        "isCorrect": true
      },
      {
        "id": "109-2",
        "html": "<ruby>呼<rt>よ</rt></ruby>ぶない",
        "isCorrect": false
      },
      {
        "id": "109-3",
        "html": "<ruby>呼<rt>よ</rt></ruby>びない",
        "isCorrect": false
      },
      {
        "id": "109-4",
        "html": "<ruby>呼<rt>よ</rt></ruby>ばないだ",
        "isCorrect": false
      }
    ],
    "verbId": "yobu"
  },
  {
    "id": 110,
    "partOfSpeech": "verb",
    "difficulty": "medium",
    "lexeme": "会う",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "godan",
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>今週<rt>こんしゅう</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>に____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "options": [
      {
        "id": "110-1",
        "isCorrect": true
      },
      {
        "id": "110-2",
        "html": "<ruby>会<rt>あ</rt></ruby>うない",
        "isCorrect": false
      },
      {
        "id": "110-3",
        "html": "<ruby>会<rt>あ</rt></ruby>いない",
        "isCorrect": false
      },
      {
        "id": "110-4",
        "html": "<ruby>会<rt>あ</rt></ruby>わないだ",
        "isCorrect": false
      }
    ],
    "verbId": "au"
  },
  {
    "id": 111,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "lexeme": "洗う",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "godan",
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>彼<rt>かれ</rt></ruby>はこのシャツを<ruby>自分<rt>じぶん</rt></ruby>では____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "options": [
      {
        "id": "111-1",
        "isCorrect": true
      },
      {
        "id": "111-2",
        "html": "<ruby>洗<rt>あら</rt></ruby>うない",
        "isCorrect": false
      },
      {
        "id": "111-3",
        "html": "<ruby>洗<rt>あら</rt></ruby>いない",
        "isCorrect": false
      },
      {
        "id": "111-4",
        "html": "<ruby>洗<rt>あら</rt></ruby>わないだ",
        "isCorrect": false
      }
    ],
    "verbId": "arau"
  },
  {
    "id": 112,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "lexeme": "歌う",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "godan",
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "カラオケでは、<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>歌<rt>うた</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "options": [
      {
        "id": "112-1",
        "isCorrect": true
      },
      {
        "id": "112-2",
        "html": "<ruby>歌<rt>うた</rt></ruby>うない",
        "isCorrect": false
      },
      {
        "id": "112-3",
        "html": "<ruby>歌<rt>うた</rt></ruby>いない",
        "isCorrect": false
      },
      {
        "id": "112-4",
        "html": "<ruby>歌<rt>うた</rt></ruby>わないだ",
        "isCorrect": false
      }
    ],
    "verbId": "utau"
  },
  {
    "id": 113,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "lexeme": "送る",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "godan",
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>は、<ruby>母<rt>はは</rt></ruby>に<ruby>手紙<rt>てがみ</rt></ruby>を____。"
      }
    ],
    "options": [
      {
        "id": "113-1",
        "isCorrect": true
      },
      {
        "id": "113-2",
        "html": "<ruby>送<rt>おく</rt></ruby>るなかった",
        "isCorrect": false
      },
      {
        "id": "113-3",
        "html": "<ruby>送<rt>おく</rt></ruby>りなかった",
        "isCorrect": false
      },
      {
        "id": "113-4",
        "html": "<ruby>送<rt>おく</rt></ruby>らないだった",
        "isCorrect": false
      }
    ],
    "verbId": "okuru"
  },
  {
    "id": 114,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "lexeme": "売る",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "godan",
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>は、この<ruby>店<rt>みせ</rt></ruby>でパンを____。"
      }
    ],
    "options": [
      {
        "id": "114-1",
        "isCorrect": true
      },
      {
        "id": "114-2",
        "html": "<ruby>売<rt>う</rt></ruby>るなかった",
        "isCorrect": false
      },
      {
        "id": "114-3",
        "html": "<ruby>売<rt>う</rt></ruby>りなかった",
        "isCorrect": false
      },
      {
        "id": "114-4",
        "html": "<ruby>売<rt>う</rt></ruby>らないだった",
        "isCorrect": false
      }
    ],
    "verbId": "uru"
  },
  {
    "id": 115,
    "partOfSpeech": "verb",
    "difficulty": "easy",
    "lexeme": "終わる",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "godan",
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>は、<ruby>授業<rt>じゅぎょう</rt></ruby>は<ruby>四時<rt>よじ</rt></ruby>に____。"
      }
    ],
    "options": [
      {
        "id": "115-1",
        "isCorrect": true
      },
      {
        "id": "115-2",
        "html": "<ruby>終<rt>お</rt></ruby>わるなかった",
        "isCorrect": false
      },
      {
        "id": "115-3",
        "html": "<ruby>終<rt>お</rt></ruby>わりなかった",
        "isCorrect": false
      },
      {
        "id": "115-4",
        "html": "<ruby>終<rt>お</rt></ruby>わらないだった",
        "isCorrect": false
      }
    ],
    "verbId": "owaru"
  },
  {
    "id": 116,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "lexeme": "始まる",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "godan",
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>は、<ruby>映画<rt>えいが</rt></ruby>は<ruby>七時<rt>しちじ</rt></ruby>に____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "options": [
      {
        "id": "116-1",
        "isCorrect": true
      },
      {
        "id": "116-2",
        "html": "<ruby>始<rt>はじ</rt></ruby>まるなかった",
        "isCorrect": false
      },
      {
        "id": "116-3",
        "html": "<ruby>始<rt>はじ</rt></ruby>まりなかった",
        "isCorrect": false
      },
      {
        "id": "116-4",
        "html": "<ruby>始<rt>はじ</rt></ruby>まらないだった",
        "isCorrect": false
      }
    ],
    "verbId": "hajimaru"
  },
  {
    "id": 117,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "lexeme": "開ける",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "ichidan",
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>は、<ruby>窓<rt>まど</rt></ruby>を____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "options": [
      {
        "id": "117-1",
        "isCorrect": true
      },
      {
        "id": "117-2",
        "html": "<ruby>開<rt>あ</rt></ruby>けらなかった",
        "isCorrect": false
      },
      {
        "id": "117-3",
        "html": "<ruby>開<rt>あ</rt></ruby>けないだった",
        "isCorrect": false
      },
      {
        "id": "117-4",
        "html": "<ruby>開<rt>あ</rt></ruby>けるなかった",
        "isCorrect": false
      }
    ],
    "verbId": "akeru"
  },
  {
    "id": 118,
    "partOfSpeech": "verb",
    "difficulty": "hard",
    "lexeme": "閉める",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "ichidan",
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>は、ドアを____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "options": [
      {
        "id": "118-1",
        "isCorrect": true
      },
      {
        "id": "118-2",
        "html": "<ruby>閉<rt>し</rt></ruby>めらなかった",
        "isCorrect": false
      },
      {
        "id": "118-3",
        "html": "<ruby>閉<rt>し</rt></ruby>めないだった",
        "isCorrect": false
      },
      {
        "id": "118-4",
        "html": "<ruby>閉<rt>し</rt></ruby>めるなかった",
        "isCorrect": false
      }
    ],
    "verbId": "shimeru"
  },
  {
    "id": 119,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "lexeme": "白い",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>紙<rt>かみ</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, утверждение",
      "uz": "I-sifat, hozirgi/kelasi zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>白<rt>しろ</rt></ruby>い → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>白<rt>しろ</rt></ruby>い → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "119-1",
        "html": "<ruby>白<rt>しろ</rt></ruby>い",
        "isCorrect": true
      },
      {
        "id": "119-2",
        "html": "<ruby>白<rt>しろ</rt></ruby>いだ",
        "isCorrect": false
      },
      {
        "id": "119-3",
        "html": "<ruby>白<rt>しろ</rt></ruby>だ",
        "isCorrect": false
      },
      {
        "id": "119-4",
        "html": "<ruby>白<rt>しろ</rt></ruby>な",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>白<rt>しろ</rt></ruby>い: утвердительная форма настоящего/будущего времени. После い-прилагательного связка だ не ставится.",
      "uz": "<ruby>白<rt>しろ</rt></ruby>い: hozirgi/kelasi zamon tasdiq shakli. I-sifatdan keyin だ bog‘lamasi qo‘yilmaydi."
    }
  },
  {
    "id": 120,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "lexeme": "黒い",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "このかばんは____。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, утверждение",
      "uz": "I-sifat, hozirgi/kelasi zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>黒<rt>くろ</rt></ruby>い → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>黒<rt>くろ</rt></ruby>い → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "120-1",
        "html": "<ruby>黒<rt>くろ</rt></ruby>い",
        "isCorrect": true
      },
      {
        "id": "120-2",
        "html": "<ruby>黒<rt>くろ</rt></ruby>いだ",
        "isCorrect": false
      },
      {
        "id": "120-3",
        "html": "<ruby>黒<rt>くろ</rt></ruby>だ",
        "isCorrect": false
      },
      {
        "id": "120-4",
        "html": "<ruby>黒<rt>くろ</rt></ruby>な",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>黒<rt>くろ</rt></ruby>い: утвердительная форма настоящего/будущего времени. После い-прилагательного связка だ не ставится.",
      "uz": "<ruby>黒<rt>くろ</rt></ruby>い: hozirgi/kelasi zamon tasdiq shakli. I-sifatdan keyin だ bog‘lamasi qo‘yilmaydi."
    }
  },
  {
    "id": 121,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "lexeme": "赤い",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>花<rt>はな</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "I-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>赤<rt>あか</rt></ruby>い → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>赤<rt>あか</rt></ruby>い → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "121-1",
        "html": "<ruby>赤<rt>あか</rt></ruby>い",
        "isCorrect": true
      },
      {
        "id": "121-2",
        "html": "<ruby>赤<rt>あか</rt></ruby>いだ",
        "isCorrect": false
      },
      {
        "id": "121-3",
        "html": "<ruby>赤<rt>あか</rt></ruby>だ",
        "isCorrect": false
      },
      {
        "id": "121-4",
        "html": "<ruby>赤<rt>あか</rt></ruby>な",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>赤<rt>あか</rt></ruby>い: утвердительная форма настоящего/будущего времени. После い-прилагательного связка だ не ставится. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>赤<rt>あか</rt></ruby>い: hozirgi/kelasi zamon tasdiq shakli. I-sifatdan keyin だ bog‘lamasi qo‘yilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 122,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "lexeme": "青い",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>冬<rt>ふゆ</rt></ruby>の<ruby>沖縄<rt>おきなわ</rt></ruby>の<ruby>空<rt>そら</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "I-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>青<rt>あお</rt></ruby>い → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>青<rt>あお</rt></ruby>い → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "122-1",
        "html": "<ruby>青<rt>あお</rt></ruby>い",
        "isCorrect": true
      },
      {
        "id": "122-2",
        "html": "<ruby>青<rt>あお</rt></ruby>いだ",
        "isCorrect": false
      },
      {
        "id": "122-3",
        "html": "<ruby>青<rt>あお</rt></ruby>だ",
        "isCorrect": false
      },
      {
        "id": "122-4",
        "html": "<ruby>青<rt>あお</rt></ruby>な",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>青<rt>あお</rt></ruby>い: утвердительная форма настоящего/будущего времени. После い-прилагательного связка だ не ставится. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>青<rt>あお</rt></ruby>い: hozirgi/kelasi zamon tasdiq shakli. I-sifatdan keyin だ bog‘lamasi qo‘yilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 123,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "lexeme": "長い",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>橋<rt>はし</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "I-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>長<rt>なが</rt></ruby>い → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>長<rt>なが</rt></ruby>い → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "123-1",
        "html": "<ruby>長<rt>なが</rt></ruby>い",
        "isCorrect": true
      },
      {
        "id": "123-2",
        "html": "<ruby>長<rt>なが</rt></ruby>いだ",
        "isCorrect": false
      },
      {
        "id": "123-3",
        "html": "<ruby>長<rt>なが</rt></ruby>だ",
        "isCorrect": false
      },
      {
        "id": "123-4",
        "html": "<ruby>長<rt>なが</rt></ruby>な",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>長<rt>なが</rt></ruby>い: утвердительная форма настоящего/будущего времени. После い-прилагательного связка だ не ставится. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>長<rt>なが</rt></ruby>い: hozirgi/kelasi zamon tasdiq shakli. I-sifatdan keyin だ bog‘lamasi qo‘yilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 124,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "lexeme": "短い",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>映画<rt>えいが</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "I-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>短<rt>みじか</rt></ruby>い → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>短<rt>みじか</rt></ruby>い → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "124-1",
        "html": "<ruby>短<rt>みじか</rt></ruby>い",
        "isCorrect": true
      },
      {
        "id": "124-2",
        "html": "<ruby>短<rt>みじか</rt></ruby>いだ",
        "isCorrect": false
      },
      {
        "id": "124-3",
        "html": "<ruby>短<rt>みじか</rt></ruby>だ",
        "isCorrect": false
      },
      {
        "id": "124-4",
        "html": "<ruby>短<rt>みじか</rt></ruby>な",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>短<rt>みじか</rt></ruby>い: утвердительная форма настоящего/будущего времени. После い-прилагательного связка だ не ставится. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>短<rt>みじか</rt></ruby>い: hozirgi/kelasi zamon tasdiq shakli. I-sifatdan keyin だ bog‘lamasi qo‘yilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 125,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "lexeme": "広い",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>部屋<rt>へや</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "I-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>広<rt>ひろ</rt></ruby>い → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>広<rt>ひろ</rt></ruby>い → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "125-1",
        "html": "<ruby>広<rt>ひろ</rt></ruby>い",
        "isCorrect": true
      },
      {
        "id": "125-2",
        "html": "<ruby>広<rt>ひろ</rt></ruby>いだ",
        "isCorrect": false
      },
      {
        "id": "125-3",
        "html": "<ruby>広<rt>ひろ</rt></ruby>だ",
        "isCorrect": false
      },
      {
        "id": "125-4",
        "html": "<ruby>広<rt>ひろ</rt></ruby>な",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>広<rt>ひろ</rt></ruby>い: утвердительная форма настоящего/будущего времени. После い-прилагательного связка だ не ставится. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>広<rt>ひろ</rt></ruby>い: hozirgi/kelasi zamon tasdiq shakli. I-sifatdan keyin だ bog‘lamasi qo‘yilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 126,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "lexeme": "狭い",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>道<rt>みち</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "I-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>狭<rt>せま</rt></ruby>い → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>狭<rt>せま</rt></ruby>い → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "126-1",
        "html": "<ruby>狭<rt>せま</rt></ruby>い",
        "isCorrect": true
      },
      {
        "id": "126-2",
        "html": "<ruby>狭<rt>せま</rt></ruby>いだ",
        "isCorrect": false
      },
      {
        "id": "126-3",
        "html": "<ruby>狭<rt>せま</rt></ruby>だ",
        "isCorrect": false
      },
      {
        "id": "126-4",
        "html": "<ruby>狭<rt>せま</rt></ruby>な",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>狭<rt>せま</rt></ruby>い: утвердительная форма настоящего/будущего времени. После い-прилагательного связка だ не ставится. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>狭<rt>せま</rt></ruby>い: hozirgi/kelasi zamon tasdiq shakli. I-sifatdan keyin だ bog‘lamasi qo‘yilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 127,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "lexeme": "重い",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>荷物<rt>にもつ</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "I-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>重<rt>おも</rt></ruby>い → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>重<rt>おも</rt></ruby>い → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "127-1",
        "html": "<ruby>重<rt>おも</rt></ruby>い",
        "isCorrect": true
      },
      {
        "id": "127-2",
        "html": "<ruby>重<rt>おも</rt></ruby>いだ",
        "isCorrect": false
      },
      {
        "id": "127-3",
        "html": "<ruby>重<rt>おも</rt></ruby>だ",
        "isCorrect": false
      },
      {
        "id": "127-4",
        "html": "<ruby>重<rt>おも</rt></ruby>な",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>重<rt>おも</rt></ruby>い: утвердительная форма настоящего/будущего времени. После い-прилагательного связка だ не ставится. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>重<rt>おも</rt></ruby>い: hozirgi/kelasi zamon tasdiq shakli. I-sifatdan keyin だ bog‘lamasi qo‘yilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 128,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "lexeme": "軽い",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "このかばんは____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "I-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>軽<rt>かる</rt></ruby>い → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>軽<rt>かる</rt></ruby>い → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "128-1",
        "html": "<ruby>軽<rt>かる</rt></ruby>い",
        "isCorrect": true
      },
      {
        "id": "128-2",
        "html": "<ruby>軽<rt>かる</rt></ruby>いだ",
        "isCorrect": false
      },
      {
        "id": "128-3",
        "html": "<ruby>軽<rt>かる</rt></ruby>だ",
        "isCorrect": false
      },
      {
        "id": "128-4",
        "html": "<ruby>軽<rt>かる</rt></ruby>な",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>軽<rt>かる</rt></ruby>い: утвердительная форма настоящего/будущего времени. После い-прилагательного связка だ не ставится. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>軽<rt>かる</rt></ruby>い: hozirgi/kelasi zamon tasdiq shakli. I-sifatdan keyin だ bog‘lamasi qo‘yilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 129,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "lexeme": "強い",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "このチームは____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "I-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>強<rt>つよ</rt></ruby>い → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>強<rt>つよ</rt></ruby>い → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "129-1",
        "html": "<ruby>強<rt>つよ</rt></ruby>い",
        "isCorrect": true
      },
      {
        "id": "129-2",
        "html": "<ruby>強<rt>つよ</rt></ruby>いだ",
        "isCorrect": false
      },
      {
        "id": "129-3",
        "html": "<ruby>強<rt>つよ</rt></ruby>だ",
        "isCorrect": false
      },
      {
        "id": "129-4",
        "html": "<ruby>強<rt>つよ</rt></ruby>な",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>強<rt>つよ</rt></ruby>い: утвердительная форма настоящего/будущего времени. После い-прилагательного связка だ не ставится. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>強<rt>つよ</rt></ruby>い: hozirgi/kelasi zamon tasdiq shakli. I-sifatdan keyin だ bog‘lamasi qo‘yilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 130,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "lexeme": "弱い",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "このチームは____。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, отрицание",
      "uz": "I-sifat, hozirgi/kelasi zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>弱<rt>よわ</rt></ruby>い → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>弱<rt>よわ</rt></ruby>い → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "130-1",
        "html": "<ruby>弱<rt>よわ</rt></ruby>くない",
        "isCorrect": true
      },
      {
        "id": "130-2",
        "html": "<ruby>弱<rt>よわ</rt></ruby>いくない",
        "isCorrect": false
      },
      {
        "id": "130-3",
        "html": "<ruby>弱<rt>よわ</rt></ruby>ない",
        "isCorrect": false
      },
      {
        "id": "130-4",
        "html": "<ruby>弱<rt>よわ</rt></ruby>くないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>弱<rt>よわ</rt></ruby>い → <ruby>弱<rt>よわ</rt></ruby>くない: конечное い заменяется на くない. Связка だ не нужна.",
      "uz": "<ruby>弱<rt>よわ</rt></ruby>い → <ruby>弱<rt>よわ</rt></ruby>くない: oxirgi い o‘rniga くない keladi. だ bog‘lamasi qo‘shilmaydi."
    }
  },
  {
    "id": 131,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "lexeme": "明るい",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>部屋<rt>へや</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, отрицание",
      "uz": "I-sifat, hozirgi/kelasi zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>明<rt>あか</rt></ruby>るい → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>明<rt>あか</rt></ruby>るい → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "131-1",
        "html": "<ruby>明<rt>あか</rt></ruby>るくない",
        "isCorrect": true
      },
      {
        "id": "131-2",
        "html": "<ruby>明<rt>あか</rt></ruby>るいくない",
        "isCorrect": false
      },
      {
        "id": "131-3",
        "html": "<ruby>明<rt>あか</rt></ruby>るない",
        "isCorrect": false
      },
      {
        "id": "131-4",
        "html": "<ruby>明<rt>あか</rt></ruby>るくないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>明<rt>あか</rt></ruby>るい → <ruby>明<rt>あか</rt></ruby>るくない: конечное い заменяется на くない. Связка だ не нужна.",
      "uz": "<ruby>明<rt>あか</rt></ruby>るい → <ruby>明<rt>あか</rt></ruby>るくない: oxirgi い o‘rniga くない keladi. だ bog‘lamasi qo‘shilmaydi."
    }
  },
  {
    "id": 132,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "lexeme": "暗い",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>部屋<rt>へや</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "I-sifat, hozirgi/kelasi zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>暗<rt>くら</rt></ruby>い → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>暗<rt>くら</rt></ruby>い → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "132-1",
        "html": "<ruby>暗<rt>くら</rt></ruby>くない",
        "isCorrect": true
      },
      {
        "id": "132-2",
        "html": "<ruby>暗<rt>くら</rt></ruby>いくない",
        "isCorrect": false
      },
      {
        "id": "132-3",
        "html": "<ruby>暗<rt>くら</rt></ruby>ない",
        "isCorrect": false
      },
      {
        "id": "132-4",
        "html": "<ruby>暗<rt>くら</rt></ruby>くないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>暗<rt>くら</rt></ruby>い → <ruby>暗<rt>くら</rt></ruby>くない: конечное い заменяется на くない. Связка だ не нужна. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>暗<rt>くら</rt></ruby>い → <ruby>暗<rt>くら</rt></ruby>くない: oxirgi い o‘rniga くない keladi. だ bog‘lamasi qo‘shilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 133,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "lexeme": "早い",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "バスの<ruby>出発<rt>しゅっぱつ</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "I-sifat, hozirgi/kelasi zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>早<rt>はや</rt></ruby>い → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>早<rt>はや</rt></ruby>い → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "133-1",
        "html": "<ruby>早<rt>はや</rt></ruby>くない",
        "isCorrect": true
      },
      {
        "id": "133-2",
        "html": "<ruby>早<rt>はや</rt></ruby>いくない",
        "isCorrect": false
      },
      {
        "id": "133-3",
        "html": "<ruby>早<rt>はや</rt></ruby>ない",
        "isCorrect": false
      },
      {
        "id": "133-4",
        "html": "<ruby>早<rt>はや</rt></ruby>くないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>早<rt>はや</rt></ruby>い → <ruby>早<rt>はや</rt></ruby>くない: конечное い заменяется на くない. Связка だ не нужна. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>早<rt>はや</rt></ruby>い → <ruby>早<rt>はや</rt></ruby>くない: oxirgi い o‘rniga くない keladi. だ bog‘lamasi qo‘shilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 134,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "lexeme": "速い",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>電車<rt>でんしゃ</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "I-sifat, hozirgi/kelasi zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>速<rt>はや</rt></ruby>い → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>速<rt>はや</rt></ruby>い → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "134-1",
        "html": "<ruby>速<rt>はや</rt></ruby>くない",
        "isCorrect": true
      },
      {
        "id": "134-2",
        "html": "<ruby>速<rt>はや</rt></ruby>いくない",
        "isCorrect": false
      },
      {
        "id": "134-3",
        "html": "<ruby>速<rt>はや</rt></ruby>ない",
        "isCorrect": false
      },
      {
        "id": "134-4",
        "html": "<ruby>速<rt>はや</rt></ruby>くないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>速<rt>はや</rt></ruby>い → <ruby>速<rt>はや</rt></ruby>くない: конечное い заменяется на くない. Связка だ не нужна. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>速<rt>はや</rt></ruby>い → <ruby>速<rt>はや</rt></ruby>くない: oxirgi い o‘rniga くない keladi. だ bog‘lamasi qo‘shilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 135,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "lexeme": "遠い",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>学校<rt>がっこう</rt></ruby>は<ruby>駅<rt>えき</rt></ruby>から____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "I-sifat, hozirgi/kelasi zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>遠<rt>とお</rt></ruby>い → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>遠<rt>とお</rt></ruby>い → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "135-1",
        "html": "<ruby>遠<rt>とお</rt></ruby>くない",
        "isCorrect": true
      },
      {
        "id": "135-2",
        "html": "<ruby>遠<rt>とお</rt></ruby>いくない",
        "isCorrect": false
      },
      {
        "id": "135-3",
        "html": "<ruby>遠<rt>とお</rt></ruby>ない",
        "isCorrect": false
      },
      {
        "id": "135-4",
        "html": "<ruby>遠<rt>とお</rt></ruby>くないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>遠<rt>とお</rt></ruby>い → <ruby>遠<rt>とお</rt></ruby>くない: конечное い заменяется на くない. Связка だ не нужна. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>遠<rt>とお</rt></ruby>い → <ruby>遠<rt>とお</rt></ruby>くない: oxirgi い o‘rniga くない keladi. だ bog‘lamasi qo‘shilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 136,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "lexeme": "古い",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>建物<rt>たてもの</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "I-sifat, hozirgi/kelasi zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>古<rt>ふる</rt></ruby>い → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>古<rt>ふる</rt></ruby>い → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "136-1",
        "html": "<ruby>古<rt>ふる</rt></ruby>くない",
        "isCorrect": true
      },
      {
        "id": "136-2",
        "html": "<ruby>古<rt>ふる</rt></ruby>いくない",
        "isCorrect": false
      },
      {
        "id": "136-3",
        "html": "<ruby>古<rt>ふる</rt></ruby>ない",
        "isCorrect": false
      },
      {
        "id": "136-4",
        "html": "<ruby>古<rt>ふる</rt></ruby>くないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>古<rt>ふる</rt></ruby>い → <ruby>古<rt>ふる</rt></ruby>くない: конечное い заменяется на くない. Связка だ не нужна. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>古<rt>ふる</rt></ruby>い → <ruby>古<rt>ふる</rt></ruby>くない: oxirgi い o‘rniga くない keladi. だ bog‘lamasi qo‘shilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 137,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "lexeme": "小さい",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>箱<rt>はこ</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "I-sifat, hozirgi/kelasi zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>小<rt>ちい</rt></ruby>さい → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>小<rt>ちい</rt></ruby>さい → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "137-1",
        "html": "<ruby>小<rt>ちい</rt></ruby>さくない",
        "isCorrect": true
      },
      {
        "id": "137-2",
        "html": "<ruby>小<rt>ちい</rt></ruby>さいくない",
        "isCorrect": false
      },
      {
        "id": "137-3",
        "html": "<ruby>小<rt>ちい</rt></ruby>さない",
        "isCorrect": false
      },
      {
        "id": "137-4",
        "html": "<ruby>小<rt>ちい</rt></ruby>さくないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>小<rt>ちい</rt></ruby>さい → <ruby>小<rt>ちい</rt></ruby>さくない: конечное い заменяется на くない. Связка だ не нужна. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>小<rt>ちい</rt></ruby>さい → <ruby>小<rt>ちい</rt></ruby>さくない: oxirgi い o‘rniga くない keladi. だ bog‘lamasi qo‘shilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 138,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "lexeme": "少ない",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>町<rt>まち</rt></ruby>は<ruby>車<rt>くるま</rt></ruby>が____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "I-sifat, hozirgi/kelasi zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>少<rt>すく</rt></ruby>ない → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>少<rt>すく</rt></ruby>ない → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "138-1",
        "html": "<ruby>少<rt>すく</rt></ruby>なくない",
        "isCorrect": true
      },
      {
        "id": "138-2",
        "html": "<ruby>少<rt>すく</rt></ruby>ないくない",
        "isCorrect": false
      },
      {
        "id": "138-3",
        "html": "<ruby>少<rt>すく</rt></ruby>なない",
        "isCorrect": false
      },
      {
        "id": "138-4",
        "html": "<ruby>少<rt>すく</rt></ruby>なくないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>少<rt>すく</rt></ruby>ない → <ruby>少<rt>すく</rt></ruby>なくない: конечное い заменяется на くない. Связка だ не нужна. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>少<rt>すく</rt></ruby>ない → <ruby>少<rt>すく</rt></ruby>なくない: oxirgi い o‘rniga くない keladi. だ bog‘lamasi qo‘shilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 139,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "lexeme": "多い",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>町<rt>まち</rt></ruby>は<ruby>人<rt>ひと</rt></ruby>が____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "I-sifat, hozirgi/kelasi zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>多<rt>おお</rt></ruby>い → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>多<rt>おお</rt></ruby>い → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "139-1",
        "html": "<ruby>多<rt>おお</rt></ruby>くない",
        "isCorrect": true
      },
      {
        "id": "139-2",
        "html": "<ruby>多<rt>おお</rt></ruby>いくない",
        "isCorrect": false
      },
      {
        "id": "139-3",
        "html": "<ruby>多<rt>おお</rt></ruby>ない",
        "isCorrect": false
      },
      {
        "id": "139-4",
        "html": "<ruby>多<rt>おお</rt></ruby>くないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>多<rt>おお</rt></ruby>い → <ruby>多<rt>おお</rt></ruby>くない: конечное い заменяется на くない. Связка だ не нужна. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>多<rt>おお</rt></ruby>い → <ruby>多<rt>おお</rt></ruby>くない: oxirgi い o‘rniga くない keladi. だ bog‘lamasi qo‘shilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 140,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "lexeme": "甘い",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "このケーキは____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, настоящее/будущее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "I-sifat, hozirgi/kelasi zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>甘<rt>あま</rt></ruby>い → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>甘<rt>あま</rt></ruby>い → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "140-1",
        "html": "<ruby>甘<rt>あま</rt></ruby>くない",
        "isCorrect": true
      },
      {
        "id": "140-2",
        "html": "<ruby>甘<rt>あま</rt></ruby>いくない",
        "isCorrect": false
      },
      {
        "id": "140-3",
        "html": "<ruby>甘<rt>あま</rt></ruby>ない",
        "isCorrect": false
      },
      {
        "id": "140-4",
        "html": "<ruby>甘<rt>あま</rt></ruby>くないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>甘<rt>あま</rt></ruby>い → <ruby>甘<rt>あま</rt></ruby>くない: конечное い заменяется на くない. Связка だ не нужна. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>甘<rt>あま</rt></ruby>い → <ruby>甘<rt>あま</rt></ruby>くない: oxirgi い o‘rniga くない keladi. だ bog‘lamasi qo‘shilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 141,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "lexeme": "辛い",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "このカレーは____。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, прошедшее, утверждение",
      "uz": "I-sifat, o‘tgan zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>辛<rt>から</rt></ruby>い → Прошедшая Утвердительная Форма",
      "uz": "<ruby>辛<rt>から</rt></ruby>い → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "141-1",
        "html": "<ruby>辛<rt>から</rt></ruby>かった",
        "isCorrect": true
      },
      {
        "id": "141-2",
        "html": "<ruby>辛<rt>から</rt></ruby>いかった",
        "isCorrect": false
      },
      {
        "id": "141-3",
        "html": "<ruby>辛<rt>から</rt></ruby>いだった",
        "isCorrect": false
      },
      {
        "id": "141-4",
        "html": "<ruby>辛<rt>から</rt></ruby>くかった",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>辛<rt>から</rt></ruby>い → <ruby>辛<rt>から</rt></ruby>かった: конечное い заменяется на かった. Связка だ не нужна.",
      "uz": "<ruby>辛<rt>から</rt></ruby>い → <ruby>辛<rt>から</rt></ruby>かった: oxirgi い o‘rniga かった keladi. だ bog‘lamasi qo‘shilmaydi."
    }
  },
  {
    "id": 142,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "lexeme": "苦い",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>薬<rt>くすり</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, прошедшее, утверждение",
      "uz": "I-sifat, o‘tgan zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>苦<rt>にが</rt></ruby>い → Прошедшая Утвердительная Форма",
      "uz": "<ruby>苦<rt>にが</rt></ruby>い → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "142-1",
        "html": "<ruby>苦<rt>にが</rt></ruby>かった",
        "isCorrect": true
      },
      {
        "id": "142-2",
        "html": "<ruby>苦<rt>にが</rt></ruby>いかった",
        "isCorrect": false
      },
      {
        "id": "142-3",
        "html": "<ruby>苦<rt>にが</rt></ruby>いだった",
        "isCorrect": false
      },
      {
        "id": "142-4",
        "html": "<ruby>苦<rt>にが</rt></ruby>くかった",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>苦<rt>にが</rt></ruby>い → <ruby>苦<rt>にが</rt></ruby>かった: конечное い заменяется на かった. Связка だ не нужна.",
      "uz": "<ruby>苦<rt>にが</rt></ruby>い → <ruby>苦<rt>にが</rt></ruby>かった: oxirgi い o‘rniga かった keladi. だ bog‘lamasi qo‘shilmaydi."
    }
  },
  {
    "id": 143,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "lexeme": "冷たい",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>水<rt>みず</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, прошедшее, утверждение",
      "uz": "I-sifat, o‘tgan zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>冷<rt>つめ</rt></ruby>たい → Прошедшая Утвердительная Форма",
      "uz": "<ruby>冷<rt>つめ</rt></ruby>たい → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "143-1",
        "html": "<ruby>冷<rt>つめ</rt></ruby>たかった",
        "isCorrect": true
      },
      {
        "id": "143-2",
        "html": "<ruby>冷<rt>つめ</rt></ruby>たいかった",
        "isCorrect": false
      },
      {
        "id": "143-3",
        "html": "<ruby>冷<rt>つめ</rt></ruby>たいだった",
        "isCorrect": false
      },
      {
        "id": "143-4",
        "html": "<ruby>冷<rt>つめ</rt></ruby>たくかった",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>冷<rt>つめ</rt></ruby>たい → <ruby>冷<rt>つめ</rt></ruby>たかった: конечное い заменяется на かった. Связка だ не нужна.",
      "uz": "<ruby>冷<rt>つめ</rt></ruby>たい → <ruby>冷<rt>つめ</rt></ruby>たかった: oxirgi い o‘rniga かった keladi. だ bog‘lamasi qo‘shilmaydi."
    }
  },
  {
    "id": 144,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "lexeme": "熱い",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "このお<ruby>茶<rt>ちゃ</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, прошедшее, утверждение",
      "uz": "I-sifat, o‘tgan zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>熱<rt>あつ</rt></ruby>い → Прошедшая Утвердительная Форма",
      "uz": "<ruby>熱<rt>あつ</rt></ruby>い → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "144-1",
        "html": "<ruby>熱<rt>あつ</rt></ruby>かった",
        "isCorrect": true
      },
      {
        "id": "144-2",
        "html": "<ruby>熱<rt>あつ</rt></ruby>いかった",
        "isCorrect": false
      },
      {
        "id": "144-3",
        "html": "<ruby>熱<rt>あつ</rt></ruby>いだった",
        "isCorrect": false
      },
      {
        "id": "144-4",
        "html": "<ruby>熱<rt>あつ</rt></ruby>くかった",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>熱<rt>あつ</rt></ruby>い → <ruby>熱<rt>あつ</rt></ruby>かった: конечное い заменяется на かった. Связка だ не нужна.",
      "uz": "<ruby>熱<rt>あつ</rt></ruby>い → <ruby>熱<rt>あつ</rt></ruby>かった: oxirgi い o‘rniga かった keladi. だ bog‘lamasi qo‘shilmaydi."
    }
  },
  {
    "id": 145,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "lexeme": "暖かい",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>部屋<rt>へや</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, прошедшее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "I-sifat, o‘tgan zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>暖<rt>あたた</rt></ruby>かい → Прошедшая Утвердительная Форма",
      "uz": "<ruby>暖<rt>あたた</rt></ruby>かい → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "145-1",
        "html": "<ruby>暖<rt>あたた</rt></ruby>かかった",
        "isCorrect": true
      },
      {
        "id": "145-2",
        "html": "<ruby>暖<rt>あたた</rt></ruby>かいかった",
        "isCorrect": false
      },
      {
        "id": "145-3",
        "html": "<ruby>暖<rt>あたた</rt></ruby>かいだった",
        "isCorrect": false
      },
      {
        "id": "145-4",
        "html": "<ruby>暖<rt>あたた</rt></ruby>かくかった",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>暖<rt>あたた</rt></ruby>かい → <ruby>暖<rt>あたた</rt></ruby>かかった: конечное い заменяется на かった. Связка だ не нужна. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>暖<rt>あたた</rt></ruby>かい → <ruby>暖<rt>あたた</rt></ruby>かかった: oxirgi い o‘rniga かった keladi. だ bog‘lamasi qo‘shilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 146,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "lexeme": "涼しい",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>町<rt>まち</rt></ruby>の<ruby>夏<rt>なつ</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, прошедшее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "I-sifat, o‘tgan zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>涼<rt>すず</rt></ruby>しい → Прошедшая Утвердительная Форма",
      "uz": "<ruby>涼<rt>すず</rt></ruby>しい → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "146-1",
        "html": "<ruby>涼<rt>すず</rt></ruby>しかった",
        "isCorrect": true
      },
      {
        "id": "146-2",
        "html": "<ruby>涼<rt>すず</rt></ruby>しいかった",
        "isCorrect": false
      },
      {
        "id": "146-3",
        "html": "<ruby>涼<rt>すず</rt></ruby>しいだった",
        "isCorrect": false
      },
      {
        "id": "146-4",
        "html": "<ruby>涼<rt>すず</rt></ruby>しくかった",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>涼<rt>すず</rt></ruby>しい → <ruby>涼<rt>すず</rt></ruby>しかった: конечное い заменяется на かった. Связка だ не нужна. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>涼<rt>すず</rt></ruby>しい → <ruby>涼<rt>すず</rt></ruby>しかった: oxirgi い o‘rniga かった keladi. だ bog‘lamasi qo‘shilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 147,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "lexeme": "美しい",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>庭<rt>にわ</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, прошедшее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "I-sifat, o‘tgan zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>美<rt>うつく</rt></ruby>しい → Прошедшая Утвердительная Форма",
      "uz": "<ruby>美<rt>うつく</rt></ruby>しい → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "147-1",
        "html": "<ruby>美<rt>うつく</rt></ruby>しかった",
        "isCorrect": true
      },
      {
        "id": "147-2",
        "html": "<ruby>美<rt>うつく</rt></ruby>しいかった",
        "isCorrect": false
      },
      {
        "id": "147-3",
        "html": "<ruby>美<rt>うつく</rt></ruby>しいだった",
        "isCorrect": false
      },
      {
        "id": "147-4",
        "html": "<ruby>美<rt>うつく</rt></ruby>しくかった",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>美<rt>うつく</rt></ruby>しい → <ruby>美<rt>うつく</rt></ruby>しかった: конечное い заменяется на かった. Связка だ не нужна. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>美<rt>うつく</rt></ruby>しい → <ruby>美<rt>うつく</rt></ruby>しかった: oxirgi い o‘rniga かった keladi. だ bog‘lamasi qo‘shilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 148,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "lexeme": "優しい",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>先生<rt>せんせい</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, прошедшее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "I-sifat, o‘tgan zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>優<rt>やさ</rt></ruby>しい → Прошедшая Утвердительная Форма",
      "uz": "<ruby>優<rt>やさ</rt></ruby>しい → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "148-1",
        "html": "<ruby>優<rt>やさ</rt></ruby>しかった",
        "isCorrect": true
      },
      {
        "id": "148-2",
        "html": "<ruby>優<rt>やさ</rt></ruby>しいかった",
        "isCorrect": false
      },
      {
        "id": "148-3",
        "html": "<ruby>優<rt>やさ</rt></ruby>しいだった",
        "isCorrect": false
      },
      {
        "id": "148-4",
        "html": "<ruby>優<rt>やさ</rt></ruby>しくかった",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>優<rt>やさ</rt></ruby>しい → <ruby>優<rt>やさ</rt></ruby>しかった: конечное い заменяется на かった. Связка だ не нужна. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>優<rt>やさ</rt></ruby>しい → <ruby>優<rt>やさ</rt></ruby>しかった: oxirgi い o‘rniga かった keladi. だ bog‘lamasi qo‘shilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 149,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "lexeme": "厳しい",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>先生<rt>せんせい</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, прошедшее, отрицание",
      "uz": "I-sifat, o‘tgan zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>厳<rt>きび</rt></ruby>しい → Прошедшая Отрицательная Форма",
      "uz": "<ruby>厳<rt>きび</rt></ruby>しい → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "149-1",
        "html": "<ruby>厳<rt>きび</rt></ruby>しくなかった",
        "isCorrect": true
      },
      {
        "id": "149-2",
        "html": "<ruby>厳<rt>きび</rt></ruby>しいくなかった",
        "isCorrect": false
      },
      {
        "id": "149-3",
        "html": "<ruby>厳<rt>きび</rt></ruby>しくないだった",
        "isCorrect": false
      },
      {
        "id": "149-4",
        "html": "<ruby>厳<rt>きび</rt></ruby>しくなかっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>厳<rt>きび</rt></ruby>しい → <ruby>厳<rt>きび</rt></ruby>しくなかった: конечное い заменяется на くなかった. Связка だ не нужна.",
      "uz": "<ruby>厳<rt>きび</rt></ruby>しい → <ruby>厳<rt>きび</rt></ruby>しくなかった: oxirgi い o‘rniga くなかった keladi. だ bog‘lamasi qo‘shilmaydi."
    }
  },
  {
    "id": 150,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "lexeme": "眠い",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>私<rt>わたし</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, прошедшее, отрицание",
      "uz": "I-sifat, o‘tgan zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>眠<rt>ねむ</rt></ruby>い → Прошедшая Отрицательная Форма",
      "uz": "<ruby>眠<rt>ねむ</rt></ruby>い → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "150-1",
        "html": "<ruby>眠<rt>ねむ</rt></ruby>くなかった",
        "isCorrect": true
      },
      {
        "id": "150-2",
        "html": "<ruby>眠<rt>ねむ</rt></ruby>いくなかった",
        "isCorrect": false
      },
      {
        "id": "150-3",
        "html": "<ruby>眠<rt>ねむ</rt></ruby>くないだった",
        "isCorrect": false
      },
      {
        "id": "150-4",
        "html": "<ruby>眠<rt>ねむ</rt></ruby>くなかっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>眠<rt>ねむ</rt></ruby>い → <ruby>眠<rt>ねむ</rt></ruby>くなかった: конечное い заменяется на くなかった. Связка だ не нужна.",
      "uz": "<ruby>眠<rt>ねむ</rt></ruby>い → <ruby>眠<rt>ねむ</rt></ruby>くなかった: oxirgi い o‘rniga くなかった keladi. だ bog‘lamasi qo‘shilmaydi."
    }
  },
  {
    "id": 151,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "lexeme": "痛い",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>足<rt>あし</rt></ruby>が____。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, прошедшее, отрицание",
      "uz": "I-sifat, o‘tgan zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>痛<rt>いた</rt></ruby>い → Прошедшая Отрицательная Форма",
      "uz": "<ruby>痛<rt>いた</rt></ruby>い → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "151-1",
        "html": "<ruby>痛<rt>いた</rt></ruby>くなかった",
        "isCorrect": true
      },
      {
        "id": "151-2",
        "html": "<ruby>痛<rt>いた</rt></ruby>いくなかった",
        "isCorrect": false
      },
      {
        "id": "151-3",
        "html": "<ruby>痛<rt>いた</rt></ruby>くないだった",
        "isCorrect": false
      },
      {
        "id": "151-4",
        "html": "<ruby>痛<rt>いた</rt></ruby>くなかっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>痛<rt>いた</rt></ruby>い → <ruby>痛<rt>いた</rt></ruby>くなかった: конечное い заменяется на くなかった. Связка だ не нужна.",
      "uz": "<ruby>痛<rt>いた</rt></ruby>い → <ruby>痛<rt>いた</rt></ruby>くなかった: oxirgi い o‘rniga くなかった keladi. だ bog‘lamasi qo‘shilmaydi."
    }
  },
  {
    "id": 152,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "lexeme": "怖い",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>映画<rt>えいが</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, прошедшее, отрицание",
      "uz": "I-sifat, o‘tgan zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>怖<rt>こわ</rt></ruby>い → Прошедшая Отрицательная Форма",
      "uz": "<ruby>怖<rt>こわ</rt></ruby>い → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "152-1",
        "html": "<ruby>怖<rt>こわ</rt></ruby>くなかった",
        "isCorrect": true
      },
      {
        "id": "152-2",
        "html": "<ruby>怖<rt>こわ</rt></ruby>いくなかった",
        "isCorrect": false
      },
      {
        "id": "152-3",
        "html": "<ruby>怖<rt>こわ</rt></ruby>くないだった",
        "isCorrect": false
      },
      {
        "id": "152-4",
        "html": "<ruby>怖<rt>こわ</rt></ruby>くなかっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>怖<rt>こわ</rt></ruby>い → <ruby>怖<rt>こわ</rt></ruby>くなかった: конечное い заменяется на くなかった. Связка だ не нужна.",
      "uz": "<ruby>怖<rt>こわ</rt></ruby>い → <ruby>怖<rt>こわ</rt></ruby>くなかった: oxirgi い o‘rniga くなかった keladi. だ bog‘lamasi qo‘shilmaydi."
    }
  },
  {
    "id": 153,
    "partOfSpeech": "i-adj",
    "difficulty": "easy",
    "lexeme": "寂しい",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>一人<rt>ひとり</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, прошедшее, отрицание",
      "uz": "I-sifat, o‘tgan zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>寂<rt>さび</rt></ruby>しい → Прошедшая Отрицательная Форма",
      "uz": "<ruby>寂<rt>さび</rt></ruby>しい → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "153-1",
        "html": "<ruby>寂<rt>さび</rt></ruby>しくなかった",
        "isCorrect": true
      },
      {
        "id": "153-2",
        "html": "<ruby>寂<rt>さび</rt></ruby>しいくなかった",
        "isCorrect": false
      },
      {
        "id": "153-3",
        "html": "<ruby>寂<rt>さび</rt></ruby>しくないだった",
        "isCorrect": false
      },
      {
        "id": "153-4",
        "html": "<ruby>寂<rt>さび</rt></ruby>しくなかっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>寂<rt>さび</rt></ruby>しい → <ruby>寂<rt>さび</rt></ruby>しくなかった: конечное い заменяется на くなかった. Связка だ не нужна.",
      "uz": "<ruby>寂<rt>さび</rt></ruby>しい → <ruby>寂<rt>さび</rt></ruby>しくなかった: oxirgi い o‘rniga くなかった keladi. だ bog‘lamasi qo‘shilmaydi."
    }
  },
  {
    "id": 154,
    "partOfSpeech": "i-adj",
    "difficulty": "medium",
    "lexeme": "嬉しい",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>彼女<rt>かのじょ</rt></ruby>はあの<ruby>知<rt>し</rt></ruby>らせを<ruby>聞<rt>き</rt></ruby>いても____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, прошедшее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "I-sifat, o‘tgan zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>嬉<rt>うれ</rt></ruby>しい → Прошедшая Отрицательная Форма",
      "uz": "<ruby>嬉<rt>うれ</rt></ruby>しい → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "154-1",
        "html": "<ruby>嬉<rt>うれ</rt></ruby>しくなかった",
        "isCorrect": true
      },
      {
        "id": "154-2",
        "html": "<ruby>嬉<rt>うれ</rt></ruby>しいくなかった",
        "isCorrect": false
      },
      {
        "id": "154-3",
        "html": "<ruby>嬉<rt>うれ</rt></ruby>しくないだった",
        "isCorrect": false
      },
      {
        "id": "154-4",
        "html": "<ruby>嬉<rt>うれ</rt></ruby>しくなかっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>嬉<rt>うれ</rt></ruby>しい → <ruby>嬉<rt>うれ</rt></ruby>しくなかった: конечное い заменяется на くなかった. Связка だ не нужна. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>嬉<rt>うれ</rt></ruby>しい → <ruby>嬉<rt>うれ</rt></ruby>しくなかった: oxirgi い o‘rniga くなかった keladi. だ bog‘lamasi qo‘shilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 155,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "lexeme": "悲しい",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>話<rt>はなし</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, прошедшее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "I-sifat, o‘tgan zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>悲<rt>かな</rt></ruby>しい → Прошедшая Отрицательная Форма",
      "uz": "<ruby>悲<rt>かな</rt></ruby>しい → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "155-1",
        "html": "<ruby>悲<rt>かな</rt></ruby>しくなかった",
        "isCorrect": true
      },
      {
        "id": "155-2",
        "html": "<ruby>悲<rt>かな</rt></ruby>しいくなかった",
        "isCorrect": false
      },
      {
        "id": "155-3",
        "html": "<ruby>悲<rt>かな</rt></ruby>しくないだった",
        "isCorrect": false
      },
      {
        "id": "155-4",
        "html": "<ruby>悲<rt>かな</rt></ruby>しくなかっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>悲<rt>かな</rt></ruby>しい → <ruby>悲<rt>かな</rt></ruby>しくなかった: конечное い заменяется на くなかった. Связка だ не нужна. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>悲<rt>かな</rt></ruby>しい → <ruby>悲<rt>かな</rt></ruby>しくなかった: oxirgi い o‘rniga くなかった keladi. だ bog‘lamasi qo‘shilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 156,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "lexeme": "柔らかい",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "このパンは____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, прошедшее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "I-sifat, o‘tgan zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>柔<rt>やわ</rt></ruby>らかい → Прошедшая Отрицательная Форма",
      "uz": "<ruby>柔<rt>やわ</rt></ruby>らかい → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "156-1",
        "html": "<ruby>柔<rt>やわ</rt></ruby>らかくなかった",
        "isCorrect": true
      },
      {
        "id": "156-2",
        "html": "<ruby>柔<rt>やわ</rt></ruby>らかいくなかった",
        "isCorrect": false
      },
      {
        "id": "156-3",
        "html": "<ruby>柔<rt>やわ</rt></ruby>らかくないだった",
        "isCorrect": false
      },
      {
        "id": "156-4",
        "html": "<ruby>柔<rt>やわ</rt></ruby>らかくなかっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>柔<rt>やわ</rt></ruby>らかい → <ruby>柔<rt>やわ</rt></ruby>らかくなかった: конечное い заменяется на くなかった. Связка だ не нужна. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>柔<rt>やわ</rt></ruby>らかい → <ruby>柔<rt>やわ</rt></ruby>らかくなかった: oxirgi い o‘rniga くなかった keladi. だ bog‘lamasi qo‘shilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 157,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "lexeme": "硬い",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "このパンは____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, прошедшее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "I-sifat, o‘tgan zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>硬<rt>かた</rt></ruby>い → Прошедшая Отрицательная Форма",
      "uz": "<ruby>硬<rt>かた</rt></ruby>い → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "157-1",
        "html": "<ruby>硬<rt>かた</rt></ruby>くなかった",
        "isCorrect": true
      },
      {
        "id": "157-2",
        "html": "<ruby>硬<rt>かた</rt></ruby>いくなかった",
        "isCorrect": false
      },
      {
        "id": "157-3",
        "html": "<ruby>硬<rt>かた</rt></ruby>くないだった",
        "isCorrect": false
      },
      {
        "id": "157-4",
        "html": "<ruby>硬<rt>かた</rt></ruby>くなかっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>硬<rt>かた</rt></ruby>い → <ruby>硬<rt>かた</rt></ruby>くなかった: конечное い заменяется на くなかった. Связка だ не нужна. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>硬<rt>かた</rt></ruby>い → <ruby>硬<rt>かた</rt></ruby>くなかった: oxirgi い o‘rniga くなかった keladi. だ bog‘lamasi qo‘shilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 158,
    "partOfSpeech": "i-adj",
    "difficulty": "hard",
    "lexeme": "丸い",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "このテーブルは____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "い-прилагательное, прошедшее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "I-sifat, o‘tgan zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>丸<rt>まる</rt></ruby>い → Прошедшая Отрицательная Форма",
      "uz": "<ruby>丸<rt>まる</rt></ruby>い → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "158-1",
        "html": "<ruby>丸<rt>まる</rt></ruby>くなかった",
        "isCorrect": true
      },
      {
        "id": "158-2",
        "html": "<ruby>丸<rt>まる</rt></ruby>いくなかった",
        "isCorrect": false
      },
      {
        "id": "158-3",
        "html": "<ruby>丸<rt>まる</rt></ruby>くないだった",
        "isCorrect": false
      },
      {
        "id": "158-4",
        "html": "<ruby>丸<rt>まる</rt></ruby>くなかっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>丸<rt>まる</rt></ruby>い → <ruby>丸<rt>まる</rt></ruby>くなかった: конечное い заменяется на くなかった. Связка だ не нужна. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>丸<rt>まる</rt></ruby>い → <ruby>丸<rt>まる</rt></ruby>くなかった: oxirgi い o‘rniga くなかった keladi. だ bog‘lamasi qo‘shilmaydi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 159,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "lexeme": "丈夫",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>机<rt>つくえ</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, утверждение",
      "uz": "Na-sifat, hozirgi/kelasi zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>丈夫<rt>じょうぶ</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>丈夫<rt>じょうぶ</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "159-1",
        "html": "<ruby>丈夫<rt>じょうぶ</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "159-2",
        "html": "<ruby>丈夫<rt>じょうぶ</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "159-3",
        "html": "<ruby>丈夫<rt>じょうぶ</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "159-4",
        "html": "<ruby>丈夫<rt>じょうぶ</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>丈夫<rt>じょうぶ</rt></ruby> → <ruby>丈夫<rt>じょうぶ</rt></ruby>だ. な-прилагательное сохраняет основу; нужную форму выражает связка だ.",
      "uz": "<ruby>丈夫<rt>じょうぶ</rt></ruby> → <ruby>丈夫<rt>じょうぶ</rt></ruby>だ. Na-sifat asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi."
    }
  },
  {
    "id": 160,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "lexeme": "大変",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>仕事<rt>しごと</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, утверждение",
      "uz": "Na-sifat, hozirgi/kelasi zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>大変<rt>たいへん</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>大変<rt>たいへん</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "160-1",
        "html": "<ruby>大変<rt>たいへん</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "160-2",
        "html": "<ruby>大変<rt>たいへん</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "160-3",
        "html": "<ruby>大変<rt>たいへん</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "160-4",
        "html": "<ruby>大変<rt>たいへん</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>大変<rt>たいへん</rt></ruby> → <ruby>大変<rt>たいへん</rt></ruby>だ. な-прилагательное сохраняет основу; нужную форму выражает связка だ.",
      "uz": "<ruby>大変<rt>たいへん</rt></ruby> → <ruby>大変<rt>たいへん</rt></ruby>だ. Na-sifat asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi."
    }
  },
  {
    "id": 161,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "lexeme": "大事",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>書類<rt>しょるい</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>大事<rt>だいじ</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>大事<rt>だいじ</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "161-1",
        "html": "<ruby>大事<rt>だいじ</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "161-2",
        "html": "<ruby>大事<rt>だいじ</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "161-3",
        "html": "<ruby>大事<rt>だいじ</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "161-4",
        "html": "<ruby>大事<rt>だいじ</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>大事<rt>だいじ</rt></ruby> → <ruby>大事<rt>だいじ</rt></ruby>だ. な-прилагательное сохраняет основу; нужную форму выражает связка だ. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>大事<rt>だいじ</rt></ruby> → <ruby>大事<rt>だいじ</rt></ruby>だ. Na-sifat asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 162,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "lexeme": "丁寧",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>説明<rt>せつめい</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>丁寧<rt>ていねい</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>丁寧<rt>ていねい</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "162-1",
        "html": "<ruby>丁寧<rt>ていねい</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "162-2",
        "html": "<ruby>丁寧<rt>ていねい</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "162-3",
        "html": "<ruby>丁寧<rt>ていねい</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "162-4",
        "html": "<ruby>丁寧<rt>ていねい</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>丁寧<rt>ていねい</rt></ruby> → <ruby>丁寧<rt>ていねい</rt></ruby>だ. な-прилагательное сохраняет основу; нужную форму выражает связка だ. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>丁寧<rt>ていねい</rt></ruby> → <ruby>丁寧<rt>ていねい</rt></ruby>だ. Na-sifat asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 163,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "lexeme": "失礼",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>言<rt>い</rt></ruby>い<ruby>方<rt>かた</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>失礼<rt>しつれい</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>失礼<rt>しつれい</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "163-1",
        "html": "<ruby>失礼<rt>しつれい</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "163-2",
        "html": "<ruby>失礼<rt>しつれい</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "163-3",
        "html": "<ruby>失礼<rt>しつれい</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "163-4",
        "html": "<ruby>失礼<rt>しつれい</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>失礼<rt>しつれい</rt></ruby> → <ruby>失礼<rt>しつれい</rt></ruby>だ. な-прилагательное сохраняет основу; нужную форму выражает связка だ. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>失礼<rt>しつれい</rt></ruby> → <ruby>失礼<rt>しつれい</rt></ruby>だ. Na-sifat asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 164,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "lexeme": "複雑",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>駅<rt>えき</rt></ruby>の<ruby>構造<rt>こうぞう</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>複雑<rt>ふくざつ</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>複雑<rt>ふくざつ</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "164-1",
        "html": "<ruby>複雑<rt>ふくざつ</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "164-2",
        "html": "<ruby>複雑<rt>ふくざつ</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "164-3",
        "html": "<ruby>複雑<rt>ふくざつ</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "164-4",
        "html": "<ruby>複雑<rt>ふくざつ</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>複雑<rt>ふくざつ</rt></ruby> → <ruby>複雑<rt>ふくざつ</rt></ruby>だ. な-прилагательное сохраняет основу; нужную форму выражает связка だ. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>複雑<rt>ふくざつ</rt></ruby> → <ruby>複雑<rt>ふくざつ</rt></ruby>だ. Na-sifat asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 165,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "lexeme": "不便",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>場所<rt>ばしょ</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>不便<rt>ふべん</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>不便<rt>ふべん</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "165-1",
        "html": "<ruby>不便<rt>ふべん</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "165-2",
        "html": "<ruby>不便<rt>ふべん</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "165-3",
        "html": "<ruby>不便<rt>ふべん</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "165-4",
        "html": "<ruby>不便<rt>ふべん</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>不便<rt>ふべん</rt></ruby> → <ruby>不便<rt>ふべん</rt></ruby>だ. な-прилагательное сохраняет основу; нужную форму выражает связка だ. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>不便<rt>ふべん</rt></ruby> → <ruby>不便<rt>ふべん</rt></ruby>だ. Na-sifat asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 166,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "lexeme": "不安",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>初<rt>はじ</rt></ruby>めて<ruby>一人<rt>ひとり</rt></ruby>で<ruby>海外<rt>かいがい</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くのは____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>不安<rt>ふあん</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>不安<rt>ふあん</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "166-1",
        "html": "<ruby>不安<rt>ふあん</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "166-2",
        "html": "<ruby>不安<rt>ふあん</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "166-3",
        "html": "<ruby>不安<rt>ふあん</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "166-4",
        "html": "<ruby>不安<rt>ふあん</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>不安<rt>ふあん</rt></ruby> → <ruby>不安<rt>ふあん</rt></ruby>だ. な-прилагательное сохраняет основу; нужную форму выражает связка だ. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>不安<rt>ふあん</rt></ruby> → <ruby>不安<rt>ふあん</rt></ruby>だ. Na-sifat asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 167,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "lexeme": "残念",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>結果<rt>けっか</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>残念<rt>ざんねん</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>残念<rt>ざんねん</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "167-1",
        "html": "<ruby>残念<rt>ざんねん</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "167-2",
        "html": "<ruby>残念<rt>ざんねん</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "167-3",
        "html": "<ruby>残念<rt>ざんねん</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "167-4",
        "html": "<ruby>残念<rt>ざんねん</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>残念<rt>ざんねん</rt></ruby> → <ruby>残念<rt>ざんねん</rt></ruby>だ. な-прилагательное сохраняет основу; нужную форму выражает связка だ. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>残念<rt>ざんねん</rt></ruby> → <ruby>残念<rt>ざんねん</rt></ruby>だ. Na-sifat asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 168,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "lexeme": "心配",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>台風<rt>たいふう</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>づいているから、みんな<ruby>明日<rt>あした</rt></ruby>の<ruby>天気<rt>てんき</rt></ruby>が____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>心配<rt>しんぱい</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>心配<rt>しんぱい</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "168-1",
        "html": "<ruby>心配<rt>しんぱい</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "168-2",
        "html": "<ruby>心配<rt>しんぱい</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "168-3",
        "html": "<ruby>心配<rt>しんぱい</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "168-4",
        "html": "<ruby>心配<rt>しんぱい</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>心配<rt>しんぱい</rt></ruby> → <ruby>心配<rt>しんぱい</rt></ruby>だ. な-прилагательное сохраняет основу; нужную форму выражает связка だ. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>心配<rt>しんぱい</rt></ruby> → <ruby>心配<rt>しんぱい</rt></ruby>だ. Na-sifat asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 169,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "lexeme": "熱心",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>学生<rt>がくせい</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, отрицание",
      "uz": "Na-sifat, hozirgi/kelasi zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>熱心<rt>ねっしん</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>熱心<rt>ねっしん</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "169-1",
        "html": "<ruby>熱心<rt>ねっしん</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "169-2",
        "html": "<ruby>熱心<rt>ねっしん</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "169-3",
        "html": "<ruby>熱心<rt>ねっしん</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "169-4",
        "html": "<ruby>熱心<rt>ねっしん</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>熱心<rt>ねっしん</rt></ruby> → <ruby>熱心<rt>ねっしん</rt></ruby>じゃない. な-прилагательное сохраняет основу; нужную форму выражает связка じゃない.",
      "uz": "<ruby>熱心<rt>ねっしん</rt></ruby> → <ruby>熱心<rt>ねっしん</rt></ruby>じゃない. Na-sifat asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi."
    }
  },
  {
    "id": 170,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "lexeme": "得意",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>数学<rt>すうがく</rt></ruby>が____。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, отрицание",
      "uz": "Na-sifat, hozirgi/kelasi zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>得意<rt>とくい</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>得意<rt>とくい</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "170-1",
        "html": "<ruby>得意<rt>とくい</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "170-2",
        "html": "<ruby>得意<rt>とくい</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "170-3",
        "html": "<ruby>得意<rt>とくい</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "170-4",
        "html": "<ruby>得意<rt>とくい</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>得意<rt>とくい</rt></ruby> → <ruby>得意<rt>とくい</rt></ruby>じゃない. な-прилагательное сохраняет основу; нужную форму выражает связка じゃない.",
      "uz": "<ruby>得意<rt>とくい</rt></ruby> → <ruby>得意<rt>とくい</rt></ruby>じゃない. Na-sifat asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi."
    }
  },
  {
    "id": 171,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "lexeme": "苦手",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>私<rt>わたし</rt></ruby>は<ruby>漢字<rt>かんじ</rt></ruby>が____。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, отрицание",
      "uz": "Na-sifat, hozirgi/kelasi zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>苦手<rt>にがて</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>苦手<rt>にがて</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "171-1",
        "html": "<ruby>苦手<rt>にがて</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "171-2",
        "html": "<ruby>苦手<rt>にがて</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "171-3",
        "html": "<ruby>苦手<rt>にがて</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "171-4",
        "html": "<ruby>苦手<rt>にがて</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>苦手<rt>にがて</rt></ruby> → <ruby>苦手<rt>にがて</rt></ruby>じゃない. な-прилагательное сохраняет основу; нужную форму выражает связка じゃない.",
      "uz": "<ruby>苦手<rt>にがて</rt></ruby> → <ruby>苦手<rt>にがて</rt></ruby>じゃない. Na-sifat asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi."
    }
  },
  {
    "id": 172,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "lexeme": "健康",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>祖父<rt>そふ</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>健康<rt>けんこう</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>健康<rt>けんこう</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "172-1",
        "html": "<ruby>健康<rt>けんこう</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "172-2",
        "html": "<ruby>健康<rt>けんこう</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "172-3",
        "html": "<ruby>健康<rt>けんこう</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "172-4",
        "html": "<ruby>健康<rt>けんこう</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>健康<rt>けんこう</rt></ruby> → <ruby>健康<rt>けんこう</rt></ruby>じゃない. な-прилагательное сохраняет основу; нужную форму выражает связка じゃない. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>健康<rt>けんこう</rt></ruby> → <ruby>健康<rt>けんこう</rt></ruby>じゃない. Na-sifat asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 173,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "lexeme": "豊か",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>国<rt>くに</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>豊<rt>ゆた</rt></ruby>か → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>豊<rt>ゆた</rt></ruby>か → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "173-1",
        "html": "<ruby>豊<rt>ゆた</rt></ruby>かじゃない",
        "isCorrect": true
      },
      {
        "id": "173-2",
        "html": "<ruby>豊<rt>ゆた</rt></ruby>かくない",
        "isCorrect": false
      },
      {
        "id": "173-3",
        "html": "<ruby>豊<rt>ゆた</rt></ruby>かだない",
        "isCorrect": false
      },
      {
        "id": "173-4",
        "html": "<ruby>豊<rt>ゆた</rt></ruby>かじゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>豊<rt>ゆた</rt></ruby>か → <ruby>豊<rt>ゆた</rt></ruby>かじゃない. な-прилагательное сохраняет основу; нужную форму выражает связка じゃない. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>豊<rt>ゆた</rt></ruby>か → <ruby>豊<rt>ゆた</rt></ruby>かじゃない. Na-sifat asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 174,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "lexeme": "にぎやか",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>通<rt>とお</rt></ruby>りは____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "にぎやか → Настоящее/Будущее · Отрицание",
      "uz": "にぎやか → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "174-1",
        "html": "にぎやかじゃない",
        "isCorrect": true
      },
      {
        "id": "174-2",
        "html": "にぎやかくない",
        "isCorrect": false
      },
      {
        "id": "174-3",
        "html": "にぎやかだない",
        "isCorrect": false
      },
      {
        "id": "174-4",
        "html": "にぎやかじゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "にぎやか → にぎやかじゃない. な-прилагательное сохраняет основу; нужную форму выражает связка じゃない. Перед と сохраняется указанная простая форма.",
      "uz": "にぎやか → にぎやかじゃない. Na-sifat asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 175,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "lexeme": "穏やか",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>海<rt>うみ</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>穏<rt>おだ</rt></ruby>やか → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>穏<rt>おだ</rt></ruby>やか → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "175-1",
        "html": "<ruby>穏<rt>おだ</rt></ruby>やかじゃない",
        "isCorrect": true
      },
      {
        "id": "175-2",
        "html": "<ruby>穏<rt>おだ</rt></ruby>やかくない",
        "isCorrect": false
      },
      {
        "id": "175-3",
        "html": "<ruby>穏<rt>おだ</rt></ruby>やかだない",
        "isCorrect": false
      },
      {
        "id": "175-4",
        "html": "<ruby>穏<rt>おだ</rt></ruby>やかじゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>穏<rt>おだ</rt></ruby>やか → <ruby>穏<rt>おだ</rt></ruby>やかじゃない. な-прилагательное сохраняет основу; нужную форму выражает связка じゃない. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>穏<rt>おだ</rt></ruby>やか → <ruby>穏<rt>おだ</rt></ruby>やかじゃない. Na-sifat asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 176,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "lexeme": "新鮮",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>野菜<rt>やさい</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>新鮮<rt>しんせん</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>新鮮<rt>しんせん</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "176-1",
        "html": "<ruby>新鮮<rt>しんせん</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "176-2",
        "html": "<ruby>新鮮<rt>しんせん</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "176-3",
        "html": "<ruby>新鮮<rt>しんせん</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "176-4",
        "html": "<ruby>新鮮<rt>しんせん</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>新鮮<rt>しんせん</rt></ruby> → <ruby>新鮮<rt>しんせん</rt></ruby>じゃない. な-прилагательное сохраняет основу; нужную форму выражает связка じゃない. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>新鮮<rt>しんせん</rt></ruby> → <ruby>新鮮<rt>しんせん</rt></ruby>じゃない. Na-sifat asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 177,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "lexeme": "正確",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>時計<rt>とけい</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, настоящее/будущее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Na-sifat, hozirgi/kelasi zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>正確<rt>せいかく</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>正確<rt>せいかく</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "177-1",
        "html": "<ruby>正確<rt>せいかく</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "177-2",
        "html": "<ruby>正確<rt>せいかく</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "177-3",
        "html": "<ruby>正確<rt>せいかく</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "177-4",
        "html": "<ruby>正確<rt>せいかく</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>正確<rt>せいかく</rt></ruby> → <ruby>正確<rt>せいかく</rt></ruby>じゃない. な-прилагательное сохраняет основу; нужную форму выражает связка じゃない. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>正確<rt>せいかく</rt></ruby> → <ruby>正確<rt>せいかく</rt></ruby>じゃない. Na-sifat asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 178,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "lexeme": "特別",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>日<rt>ひ</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, утверждение",
      "uz": "Na-sifat, o‘tgan zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>特別<rt>とくべつ</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>特別<rt>とくべつ</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "178-1",
        "html": "<ruby>特別<rt>とくべつ</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "178-2",
        "html": "<ruby>特別<rt>とくべつ</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "178-3",
        "html": "<ruby>特別<rt>とくべつ</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "178-4",
        "html": "<ruby>特別<rt>とくべつ</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>特別<rt>とくべつ</rt></ruby> → <ruby>特別<rt>とくべつ</rt></ruby>だった. な-прилагательное сохраняет основу; нужную форму выражает связка だった.",
      "uz": "<ruby>特別<rt>とくべつ</rt></ruby> → <ruby>特別<rt>とくべつ</rt></ruby>だった. Na-sifat asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi."
    }
  },
  {
    "id": 179,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "lexeme": "平和",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>町<rt>まち</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, утверждение",
      "uz": "Na-sifat, o‘tgan zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>平和<rt>へいわ</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>平和<rt>へいわ</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "179-1",
        "html": "<ruby>平和<rt>へいわ</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "179-2",
        "html": "<ruby>平和<rt>へいわ</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "179-3",
        "html": "<ruby>平和<rt>へいわ</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "179-4",
        "html": "<ruby>平和<rt>へいわ</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>平和<rt>へいわ</rt></ruby> → <ruby>平和<rt>へいわ</rt></ruby>だった. な-прилагательное сохраняет основу; нужную форму выражает связка だった.",
      "uz": "<ruby>平和<rt>へいわ</rt></ruby> → <ruby>平和<rt>へいわ</rt></ruby>だった. Na-sifat asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi."
    }
  },
  {
    "id": 180,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "lexeme": "適切",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>答<rt>こた</rt></ruby>えは____。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, утверждение",
      "uz": "Na-sifat, o‘tgan zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>適切<rt>てきせつ</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>適切<rt>てきせつ</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "180-1",
        "html": "<ruby>適切<rt>てきせつ</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "180-2",
        "html": "<ruby>適切<rt>てきせつ</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "180-3",
        "html": "<ruby>適切<rt>てきせつ</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "180-4",
        "html": "<ruby>適切<rt>てきせつ</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>適切<rt>てきせつ</rt></ruby> → <ruby>適切<rt>てきせつ</rt></ruby>だった. な-прилагательное сохраняет основу; нужную форму выражает связка だった.",
      "uz": "<ruby>適切<rt>てきせつ</rt></ruby> → <ruby>適切<rt>てきせつ</rt></ruby>だった. Na-sifat asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi."
    }
  },
  {
    "id": 181,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "lexeme": "十分",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>量<rt>りょう</rt></ruby>で____。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, утверждение",
      "uz": "Na-sifat, o‘tgan zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>十分<rt>じゅうぶん</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>十分<rt>じゅうぶん</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "181-1",
        "html": "<ruby>十分<rt>じゅうぶん</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "181-2",
        "html": "<ruby>十分<rt>じゅうぶん</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "181-3",
        "html": "<ruby>十分<rt>じゅうぶん</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "181-4",
        "html": "<ruby>十分<rt>じゅうぶん</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>十分<rt>じゅうぶん</rt></ruby> → <ruby>十分<rt>じゅうぶん</rt></ruby>だった. な-прилагательное сохраняет основу; нужную форму выражает связка だった.",
      "uz": "<ruby>十分<rt>じゅうぶん</rt></ruby> → <ruby>十分<rt>じゅうぶん</rt></ruby>だった. Na-sifat asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi."
    }
  },
  {
    "id": 182,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "lexeme": "急",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>坂<rt>さか</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Na-sifat, o‘tgan zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>急<rt>きゅう</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>急<rt>きゅう</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "182-1",
        "html": "<ruby>急<rt>きゅう</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "182-2",
        "html": "<ruby>急<rt>きゅう</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "182-3",
        "html": "<ruby>急<rt>きゅう</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "182-4",
        "html": "<ruby>急<rt>きゅう</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>急<rt>きゅう</rt></ruby> → <ruby>急<rt>きゅう</rt></ruby>だった. な-прилагательное сохраняет основу; нужную форму выражает связка だった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>急<rt>きゅう</rt></ruby> → <ruby>急<rt>きゅう</rt></ruby>だった. Na-sifat asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 183,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "lexeme": "立派",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>建物<rt>たてもの</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Na-sifat, o‘tgan zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>立派<rt>りっぱ</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>立派<rt>りっぱ</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "183-1",
        "html": "<ruby>立派<rt>りっぱ</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "183-2",
        "html": "<ruby>立派<rt>りっぱ</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "183-3",
        "html": "<ruby>立派<rt>りっぱ</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "183-4",
        "html": "<ruby>立派<rt>りっぱ</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>立派<rt>りっぱ</rt></ruby> → <ruby>立派<rt>りっぱ</rt></ruby>だった. な-прилагательное сохраняет основу; нужную форму выражает связка だった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>立派<rt>りっぱ</rt></ruby> → <ruby>立派<rt>りっぱ</rt></ruby>だった. Na-sifat asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 184,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "lexeme": "正直",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>人<rt>ひと</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Na-sifat, o‘tgan zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>正直<rt>しょうじき</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>正直<rt>しょうじき</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "184-1",
        "html": "<ruby>正直<rt>しょうじき</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "184-2",
        "html": "<ruby>正直<rt>しょうじき</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "184-3",
        "html": "<ruby>正直<rt>しょうじき</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "184-4",
        "html": "<ruby>正直<rt>しょうじき</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>正直<rt>しょうじき</rt></ruby> → <ruby>正直<rt>しょうじき</rt></ruby>だった. な-прилагательное сохраняет основу; нужную форму выражает связка だった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>正直<rt>しょうじき</rt></ruby> → <ruby>正直<rt>しょうじき</rt></ruby>だった. Na-sifat asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 185,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "lexeme": "素直",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>子<rt>こ</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Na-sifat, o‘tgan zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>素直<rt>すなお</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>素直<rt>すなお</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "185-1",
        "html": "<ruby>素直<rt>すなお</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "185-2",
        "html": "<ruby>素直<rt>すなお</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "185-3",
        "html": "<ruby>素直<rt>すなお</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "185-4",
        "html": "<ruby>素直<rt>すなお</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>素直<rt>すなお</rt></ruby> → <ruby>素直<rt>すなお</rt></ruby>だった. な-прилагательное сохраняет основу; нужную форму выражает связка だった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>素直<rt>すなお</rt></ruby> → <ruby>素直<rt>すなお</rt></ruby>だった. Na-sifat asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 186,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "lexeme": "慎重",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>人<rt>ひと</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Na-sifat, o‘tgan zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>慎重<rt>しんちょう</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>慎重<rt>しんちょう</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "186-1",
        "html": "<ruby>慎重<rt>しんちょう</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "186-2",
        "html": "<ruby>慎重<rt>しんちょう</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "186-3",
        "html": "<ruby>慎重<rt>しんちょう</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "186-4",
        "html": "<ruby>慎重<rt>しんちょう</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>慎重<rt>しんちょう</rt></ruby> → <ruby>慎重<rt>しんちょう</rt></ruby>だった. な-прилагательное сохраняет основу; нужную форму выражает связка だった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>慎重<rt>しんちょう</rt></ruby> → <ruby>慎重<rt>しんちょう</rt></ruby>だった. Na-sifat asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 187,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "lexeme": "積極的",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>学生<rt>がくせい</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Na-sifat, o‘tgan zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>積極的<rt>せっきょくてき</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>積極的<rt>せっきょくてき</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "187-1",
        "html": "<ruby>積極的<rt>せっきょくてき</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "187-2",
        "html": "<ruby>積極的<rt>せっきょくてき</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "187-3",
        "html": "<ruby>積極的<rt>せっきょくてき</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "187-4",
        "html": "<ruby>積極的<rt>せっきょくてき</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>積極的<rt>せっきょくてき</rt></ruby> → <ruby>積極的<rt>せっきょくてき</rt></ruby>だった. な-прилагательное сохраняет основу; нужную форму выражает связка だった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>積極的<rt>せっきょくてき</rt></ruby> → <ruby>積極的<rt>せっきょくてき</rt></ruby>だった. Na-sifat asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 188,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "lexeme": "消極的",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>学生<rt>がくせい</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, отрицание",
      "uz": "Na-sifat, o‘tgan zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>消極的<rt>しょうきょくてき</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>消極的<rt>しょうきょくてき</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "188-1",
        "html": "<ruby>消極的<rt>しょうきょくてき</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "188-2",
        "html": "<ruby>消極的<rt>しょうきょくてき</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "188-3",
        "html": "<ruby>消極的<rt>しょうきょくてき</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "188-4",
        "html": "<ruby>消極的<rt>しょうきょくてき</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>消極的<rt>しょうきょくてき</rt></ruby> → <ruby>消極的<rt>しょうきょくてき</rt></ruby>じゃなかった. な-прилагательное сохраняет основу; нужную форму выражает связка じゃなかった.",
      "uz": "<ruby>消極的<rt>しょうきょくてき</rt></ruby> → <ruby>消極的<rt>しょうきょくてき</rt></ruby>じゃなかった. Na-sifat asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi."
    }
  },
  {
    "id": 189,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "lexeme": "合理的",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>方法<rt>ほうほう</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, отрицание",
      "uz": "Na-sifat, o‘tgan zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>合理的<rt>ごうりてき</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>合理的<rt>ごうりてき</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "189-1",
        "html": "<ruby>合理的<rt>ごうりてき</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "189-2",
        "html": "<ruby>合理的<rt>ごうりてき</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "189-3",
        "html": "<ruby>合理的<rt>ごうりてき</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "189-4",
        "html": "<ruby>合理的<rt>ごうりてき</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>合理的<rt>ごうりてき</rt></ruby> → <ruby>合理的<rt>ごうりてき</rt></ruby>じゃなかった. な-прилагательное сохраняет основу; нужную форму выражает связка じゃなかった.",
      "uz": "<ruby>合理的<rt>ごうりてき</rt></ruby> → <ruby>合理的<rt>ごうりてき</rt></ruby>じゃなかった. Na-sifat asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi."
    }
  },
  {
    "id": 190,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "lexeme": "具体的",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>説明<rt>せつめい</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, отрицание",
      "uz": "Na-sifat, o‘tgan zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>具体的<rt>ぐたいてき</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>具体的<rt>ぐたいてき</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "190-1",
        "html": "<ruby>具体的<rt>ぐたいてき</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "190-2",
        "html": "<ruby>具体的<rt>ぐたいてき</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "190-3",
        "html": "<ruby>具体的<rt>ぐたいてき</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "190-4",
        "html": "<ruby>具体的<rt>ぐたいてき</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>具体的<rt>ぐたいてき</rt></ruby> → <ruby>具体的<rt>ぐたいてき</rt></ruby>じゃなかった. な-прилагательное сохраняет основу; нужную форму выражает связка じゃなかった.",
      "uz": "<ruby>具体的<rt>ぐたいてき</rt></ruby> → <ruby>具体的<rt>ぐたいてき</rt></ruby>じゃなかった. Na-sifat asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi."
    }
  },
  {
    "id": 191,
    "partOfSpeech": "na-adj",
    "difficulty": "easy",
    "lexeme": "基本的",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>問題<rt>もんだい</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, отрицание",
      "uz": "Na-sifat, o‘tgan zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>基本的<rt>きほんてき</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>基本的<rt>きほんてき</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "191-1",
        "html": "<ruby>基本的<rt>きほんてき</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "191-2",
        "html": "<ruby>基本的<rt>きほんてき</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "191-3",
        "html": "<ruby>基本的<rt>きほんてき</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "191-4",
        "html": "<ruby>基本的<rt>きほんてき</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>基本的<rt>きほんてき</rt></ruby> → <ruby>基本的<rt>きほんてき</rt></ruby>じゃなかった. な-прилагательное сохраняет основу; нужную форму выражает связка じゃなかった.",
      "uz": "<ruby>基本的<rt>きほんてき</rt></ruby> → <ruby>基本的<rt>きほんてき</rt></ruby>じゃなかった. Na-sifat asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi."
    }
  },
  {
    "id": 192,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "lexeme": "重要",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>予定<rt>よてい</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Na-sifat, o‘tgan zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>重要<rt>じゅうよう</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>重要<rt>じゅうよう</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "192-1",
        "html": "<ruby>重要<rt>じゅうよう</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "192-2",
        "html": "<ruby>重要<rt>じゅうよう</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "192-3",
        "html": "<ruby>重要<rt>じゅうよう</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "192-4",
        "html": "<ruby>重要<rt>じゅうよう</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>重要<rt>じゅうよう</rt></ruby> → <ruby>重要<rt>じゅうよう</rt></ruby>じゃなかった. な-прилагательное сохраняет основу; нужную форму выражает связка じゃなかった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>重要<rt>じゅうよう</rt></ruby> → <ruby>重要<rt>じゅうよう</rt></ruby>じゃなかった. Na-sifat asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 193,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "lexeme": "退屈",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>映画<rt>えいが</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Na-sifat, o‘tgan zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>退屈<rt>たいくつ</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>退屈<rt>たいくつ</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "193-1",
        "html": "<ruby>退屈<rt>たいくつ</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "193-2",
        "html": "<ruby>退屈<rt>たいくつ</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "193-3",
        "html": "<ruby>退屈<rt>たいくつ</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "193-4",
        "html": "<ruby>退屈<rt>たいくつ</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>退屈<rt>たいくつ</rt></ruby> → <ruby>退屈<rt>たいくつ</rt></ruby>じゃなかった. な-прилагательное сохраняет основу; нужную форму выражает связка じゃなかった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>退屈<rt>たいくつ</rt></ruby> → <ruby>退屈<rt>たいくつ</rt></ruby>じゃなかった. Na-sifat asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 194,
    "partOfSpeech": "na-adj",
    "difficulty": "medium",
    "lexeme": "快適",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>部屋<rt>へや</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Na-sifat, o‘tgan zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>快適<rt>かいてき</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>快適<rt>かいてき</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "194-1",
        "html": "<ruby>快適<rt>かいてき</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "194-2",
        "html": "<ruby>快適<rt>かいてき</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "194-3",
        "html": "<ruby>快適<rt>かいてき</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "194-4",
        "html": "<ruby>快適<rt>かいてき</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>快適<rt>かいてき</rt></ruby> → <ruby>快適<rt>かいてき</rt></ruby>じゃなかった. な-прилагательное сохраняет основу; нужную форму выражает связка じゃなかった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>快適<rt>かいてき</rt></ruby> → <ruby>快適<rt>かいてき</rt></ruby>じゃなかった. Na-sifat asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 195,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "lexeme": "清潔",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>台所<rt>だいどころ</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Na-sifat, o‘tgan zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>清潔<rt>せいけつ</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>清潔<rt>せいけつ</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "195-1",
        "html": "<ruby>清潔<rt>せいけつ</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "195-2",
        "html": "<ruby>清潔<rt>せいけつ</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "195-3",
        "html": "<ruby>清潔<rt>せいけつ</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "195-4",
        "html": "<ruby>清潔<rt>せいけつ</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>清潔<rt>せいけつ</rt></ruby> → <ruby>清潔<rt>せいけつ</rt></ruby>じゃなかった. な-прилагательное сохраняет основу; нужную форму выражает связка じゃなかった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>清潔<rt>せいけつ</rt></ruby> → <ruby>清潔<rt>せいけつ</rt></ruby>じゃなかった. Na-sifat asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 196,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "lexeme": "公平",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>決<rt>き</rt></ruby>め<ruby>方<rt>かた</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Na-sifat, o‘tgan zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>公平<rt>こうへい</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>公平<rt>こうへい</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "196-1",
        "html": "<ruby>公平<rt>こうへい</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "196-2",
        "html": "<ruby>公平<rt>こうへい</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "196-3",
        "html": "<ruby>公平<rt>こうへい</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "196-4",
        "html": "<ruby>公平<rt>こうへい</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>公平<rt>こうへい</rt></ruby> → <ruby>公平<rt>こうへい</rt></ruby>じゃなかった. な-прилагательное сохраняет основу; нужную форму выражает связка じゃなかった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>公平<rt>こうへい</rt></ruby> → <ruby>公平<rt>こうへい</rt></ruby>じゃなかった. Na-sifat asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 197,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "lexeme": "独特",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>味<rt>あじ</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Na-sifat, o‘tgan zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>独特<rt>どくとく</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>独特<rt>どくとく</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "197-1",
        "html": "<ruby>独特<rt>どくとく</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "197-2",
        "html": "<ruby>独特<rt>どくとく</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "197-3",
        "html": "<ruby>独特<rt>どくとく</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "197-4",
        "html": "<ruby>独特<rt>どくとく</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>独特<rt>どくとく</rt></ruby> → <ruby>独特<rt>どくとく</rt></ruby>じゃなかった. な-прилагательное сохраняет основу; нужную форму выражает связка じゃなかった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>独特<rt>どくとく</rt></ruby> → <ruby>独特<rt>どくとく</rt></ruby>じゃなかった. Na-sifat asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 198,
    "partOfSpeech": "na-adj",
    "difficulty": "hard",
    "lexeme": "確実",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>方法<rt>ほうほう</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "な-прилагательное, прошедшее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Na-sifat, o‘tgan zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>確実<rt>かくじつ</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>確実<rt>かくじつ</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "198-1",
        "html": "<ruby>確実<rt>かくじつ</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "198-2",
        "html": "<ruby>確実<rt>かくじつ</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "198-3",
        "html": "<ruby>確実<rt>かくじつ</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "198-4",
        "html": "<ruby>確実<rt>かくじつ</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>確実<rt>かくじつ</rt></ruby> → <ruby>確実<rt>かくじつ</rt></ruby>じゃなかった. な-прилагательное сохраняет основу; нужную форму выражает связка じゃなかった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>確実<rt>かくじつ</rt></ruby> → <ruby>確実<rt>かくじつ</rt></ruby>じゃなかった. Na-sifat asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 199,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "lexeme": "会社員",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>兄<rt>あに</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, утверждение",
      "uz": "Ot, hozirgi/kelasi zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>会社員<rt>かいしゃいん</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>会社員<rt>かいしゃいん</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "199-1",
        "html": "<ruby>会社員<rt>かいしゃいん</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "199-2",
        "html": "<ruby>会社員<rt>かいしゃいん</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "199-3",
        "html": "<ruby>会社員<rt>かいしゃいん</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "199-4",
        "html": "<ruby>会社員<rt>かいしゃいん</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>会社員<rt>かいしゃいん</rt></ruby> → <ruby>会社員<rt>かいしゃいん</rt></ruby>だ. Существительное сохраняет основу; нужную форму выражает связка だ.",
      "uz": "<ruby>会社員<rt>かいしゃいん</rt></ruby> → <ruby>会社員<rt>かいしゃいん</rt></ruby>だ. Ot asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi."
    }
  },
  {
    "id": 200,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "lexeme": "教師",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>姉<rt>あね</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, утверждение",
      "uz": "Ot, hozirgi/kelasi zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>教師<rt>きょうし</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>教師<rt>きょうし</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "200-1",
        "html": "<ruby>教師<rt>きょうし</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "200-2",
        "html": "<ruby>教師<rt>きょうし</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "200-3",
        "html": "<ruby>教師<rt>きょうし</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "200-4",
        "html": "<ruby>教師<rt>きょうし</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>教師<rt>きょうし</rt></ruby> → <ruby>教師<rt>きょうし</rt></ruby>だ. Существительное сохраняет основу; нужную форму выражает связка だ.",
      "uz": "<ruby>教師<rt>きょうし</rt></ruby> → <ruby>教師<rt>きょうし</rt></ruby>だ. Ot asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi."
    }
  },
  {
    "id": 201,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "lexeme": "看護師",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>母<rt>はは</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, утверждение",
      "uz": "Ot, hozirgi/kelasi zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>看護師<rt>かんごし</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>看護師<rt>かんごし</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "201-1",
        "html": "<ruby>看護師<rt>かんごし</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "201-2",
        "html": "<ruby>看護師<rt>かんごし</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "201-3",
        "html": "<ruby>看護師<rt>かんごし</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "201-4",
        "html": "<ruby>看護師<rt>かんごし</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>看護師<rt>かんごし</rt></ruby> → <ruby>看護師<rt>かんごし</rt></ruby>だ. Существительное сохраняет основу; нужную форму выражает связка だ.",
      "uz": "<ruby>看護師<rt>かんごし</rt></ruby> → <ruby>看護師<rt>かんごし</rt></ruby>だ. Ot asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi."
    }
  },
  {
    "id": 202,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "lexeme": "研究者",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "あの<ruby>人<rt>ひと</rt></ruby>のお<ruby>父<rt>とう</rt></ruby>さんは____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Ot, hozirgi/kelasi zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>研究者<rt>けんきゅうしゃ</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>研究者<rt>けんきゅうしゃ</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "202-1",
        "html": "<ruby>研究者<rt>けんきゅうしゃ</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "202-2",
        "html": "<ruby>研究者<rt>けんきゅうしゃ</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "202-3",
        "html": "<ruby>研究者<rt>けんきゅうしゃ</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "202-4",
        "html": "<ruby>研究者<rt>けんきゅうしゃ</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>研究者<rt>けんきゅうしゃ</rt></ruby> → <ruby>研究者<rt>けんきゅうしゃ</rt></ruby>だ. Существительное сохраняет основу; нужную форму выражает связка だ. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>研究者<rt>けんきゅうしゃ</rt></ruby> → <ruby>研究者<rt>けんきゅうしゃ</rt></ruby>だ. Ot asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 203,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "lexeme": "歌手",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "あの<ruby>人<rt>ひと</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Ot, hozirgi/kelasi zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>歌手<rt>かしゅ</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>歌手<rt>かしゅ</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "203-1",
        "html": "<ruby>歌手<rt>かしゅ</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "203-2",
        "html": "<ruby>歌手<rt>かしゅ</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "203-3",
        "html": "<ruby>歌手<rt>かしゅ</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "203-4",
        "html": "<ruby>歌手<rt>かしゅ</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>歌手<rt>かしゅ</rt></ruby> → <ruby>歌手<rt>かしゅ</rt></ruby>だ. Существительное сохраняет основу; нужную форму выражает связка だ. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>歌手<rt>かしゅ</rt></ruby> → <ruby>歌手<rt>かしゅ</rt></ruby>だ. Ot asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 204,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "lexeme": "作家",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>人<rt>ひと</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Ot, hozirgi/kelasi zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>作家<rt>さっか</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>作家<rt>さっか</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "204-1",
        "html": "<ruby>作家<rt>さっか</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "204-2",
        "html": "<ruby>作家<rt>さっか</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "204-3",
        "html": "<ruby>作家<rt>さっか</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "204-4",
        "html": "<ruby>作家<rt>さっか</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>作家<rt>さっか</rt></ruby> → <ruby>作家<rt>さっか</rt></ruby>だ. Существительное сохраняет основу; нужную форму выражает связка だ. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>作家<rt>さっか</rt></ruby> → <ruby>作家<rt>さっか</rt></ruby>だ. Ot asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 205,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "lexeme": "料理人",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "あの<ruby>人<rt>ひと</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Ot, hozirgi/kelasi zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>料理人<rt>りょうりにん</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>料理人<rt>りょうりにん</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "205-1",
        "html": "<ruby>料理人<rt>りょうりにん</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "205-2",
        "html": "<ruby>料理人<rt>りょうりにん</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "205-3",
        "html": "<ruby>料理人<rt>りょうりにん</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "205-4",
        "html": "<ruby>料理人<rt>りょうりにん</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>料理人<rt>りょうりにん</rt></ruby> → <ruby>料理人<rt>りょうりにん</rt></ruby>だ. Существительное сохраняет основу; нужную форму выражает связка だ. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>料理人<rt>りょうりにん</rt></ruby> → <ruby>料理人<rt>りょうりにん</rt></ruby>だ. Ot asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 206,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "lexeme": "運転手",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "バスのそばにいる<ruby>人<rt>ひと</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Ot, hozirgi/kelasi zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>運転手<rt>うんてんしゅ</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>運転手<rt>うんてんしゅ</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "206-1",
        "html": "<ruby>運転手<rt>うんてんしゅ</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "206-2",
        "html": "<ruby>運転手<rt>うんてんしゅ</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "206-3",
        "html": "<ruby>運転手<rt>うんてんしゅ</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "206-4",
        "html": "<ruby>運転手<rt>うんてんしゅ</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>運転手<rt>うんてんしゅ</rt></ruby> → <ruby>運転手<rt>うんてんしゅ</rt></ruby>だ. Существительное сохраняет основу; нужную форму выражает связка だ. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>運転手<rt>うんてんしゅ</rt></ruby> → <ruby>運転手<rt>うんてんしゅ</rt></ruby>だ. Ot asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 207,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "lexeme": "店員",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "レジにいる<ruby>人<rt>ひと</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Ot, hozirgi/kelasi zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>店員<rt>てんいん</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>店員<rt>てんいん</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "207-1",
        "html": "<ruby>店員<rt>てんいん</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "207-2",
        "html": "<ruby>店員<rt>てんいん</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "207-3",
        "html": "<ruby>店員<rt>てんいん</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "207-4",
        "html": "<ruby>店員<rt>てんいん</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>店員<rt>てんいん</rt></ruby> → <ruby>店員<rt>てんいん</rt></ruby>だ. Существительное сохраняет основу; нужную форму выражает связка だ. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>店員<rt>てんいん</rt></ruby> → <ruby>店員<rt>てんいん</rt></ruby>だ. Ot asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 208,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "lexeme": "大学生",
    "tense": "present",
    "polarity": "affirmative",
    "tags": [
      "present",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "あの<ruby>人<rt>ひと</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Ot, hozirgi/kelasi zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>大学生<rt>だいがくせい</rt></ruby> → Настоящее/Будущее · Утверждение",
      "uz": "<ruby>大学生<rt>だいがくせい</rt></ruby> → Hozirgi/Kelasi · Tasdiq"
    },
    "options": [
      {
        "id": "208-1",
        "html": "<ruby>大学生<rt>だいがくせい</rt></ruby>だ",
        "isCorrect": true
      },
      {
        "id": "208-2",
        "html": "<ruby>大学生<rt>だいがくせい</rt></ruby>な",
        "isCorrect": false
      },
      {
        "id": "208-3",
        "html": "<ruby>大学生<rt>だいがくせい</rt></ruby>い",
        "isCorrect": false
      },
      {
        "id": "208-4",
        "html": "<ruby>大学生<rt>だいがくせい</rt></ruby>だだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>大学生<rt>だいがくせい</rt></ruby> → <ruby>大学生<rt>だいがくせい</rt></ruby>だ. Существительное сохраняет основу; нужную форму выражает связка だ. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>大学生<rt>だいがくせい</rt></ruby> → <ruby>大学生<rt>だいがくせい</rt></ruby>だ. Ot asosi o‘zgarmaydi; だ bog‘lamasi hozirgi/kelasi zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 209,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "lexeme": "高校生",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>妹<rt>いもうと</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, отрицание",
      "uz": "Ot, hozirgi/kelasi zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>高校生<rt>こうこうせい</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>高校生<rt>こうこうせい</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "209-1",
        "html": "<ruby>高校生<rt>こうこうせい</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "209-2",
        "html": "<ruby>高校生<rt>こうこうせい</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "209-3",
        "html": "<ruby>高校生<rt>こうこうせい</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "209-4",
        "html": "<ruby>高校生<rt>こうこうせい</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>高校生<rt>こうこうせい</rt></ruby> → <ruby>高校生<rt>こうこうせい</rt></ruby>じゃない. Существительное сохраняет основу; нужную форму выражает связка じゃない.",
      "uz": "<ruby>高校生<rt>こうこうせい</rt></ruby> → <ruby>高校生<rt>こうこうせい</rt></ruby>じゃない. Ot asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi."
    }
  },
  {
    "id": 210,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "lexeme": "友達",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>私<rt>わたし</rt></ruby>の____。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, отрицание",
      "uz": "Ot, hozirgi/kelasi zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>友達<rt>ともだち</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>友達<rt>ともだち</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "210-1",
        "html": "<ruby>友達<rt>ともだち</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "210-2",
        "html": "<ruby>友達<rt>ともだち</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "210-3",
        "html": "<ruby>友達<rt>ともだち</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "210-4",
        "html": "<ruby>友達<rt>ともだち</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>友達<rt>ともだち</rt></ruby> → <ruby>友達<rt>ともだち</rt></ruby>じゃない. Существительное сохраняет основу; нужную форму выражает связка じゃない.",
      "uz": "<ruby>友達<rt>ともだち</rt></ruby> → <ruby>友達<rt>ともだち</rt></ruby>じゃない. Ot asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi."
    }
  },
  {
    "id": 211,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "lexeme": "家族",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>人<rt>ひと</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>の____。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, отрицание",
      "uz": "Ot, hozirgi/kelasi zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>家族<rt>かぞく</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>家族<rt>かぞく</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "211-1",
        "html": "<ruby>家族<rt>かぞく</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "211-2",
        "html": "<ruby>家族<rt>かぞく</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "211-3",
        "html": "<ruby>家族<rt>かぞく</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "211-4",
        "html": "<ruby>家族<rt>かぞく</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>家族<rt>かぞく</rt></ruby> → <ruby>家族<rt>かぞく</rt></ruby>じゃない. Существительное сохраняет основу; нужную форму выражает связка じゃない.",
      "uz": "<ruby>家族<rt>かぞく</rt></ruby> → <ruby>家族<rt>かぞく</rt></ruby>じゃない. Ot asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi."
    }
  },
  {
    "id": 212,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "lexeme": "隣人",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>私<rt>わたし</rt></ruby>の____。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, отрицание",
      "uz": "Ot, hozirgi/kelasi zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>隣人<rt>りんじん</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>隣人<rt>りんじん</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "212-1",
        "html": "<ruby>隣人<rt>りんじん</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "212-2",
        "html": "<ruby>隣人<rt>りんじん</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "212-3",
        "html": "<ruby>隣人<rt>りんじん</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "212-4",
        "html": "<ruby>隣人<rt>りんじん</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>隣人<rt>りんじん</rt></ruby> → <ruby>隣人<rt>りんじん</rt></ruby>じゃない. Существительное сохраняет основу; нужную форму выражает связка じゃない.",
      "uz": "<ruby>隣人<rt>りんじん</rt></ruby> → <ruby>隣人<rt>りんじん</rt></ruby>じゃない. Ot asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi."
    }
  },
  {
    "id": 213,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "lexeme": "客",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "あの<ruby>人<rt>ひと</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Ot, hozirgi/kelasi zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>客<rt>きゃく</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>客<rt>きゃく</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "213-1",
        "html": "<ruby>客<rt>きゃく</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "213-2",
        "html": "<ruby>客<rt>きゃく</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "213-3",
        "html": "<ruby>客<rt>きゃく</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "213-4",
        "html": "<ruby>客<rt>きゃく</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>客<rt>きゃく</rt></ruby> → <ruby>客<rt>きゃく</rt></ruby>じゃない. Существительное сохраняет основу; нужную форму выражает связка じゃない. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>客<rt>きゃく</rt></ruby> → <ruby>客<rt>きゃく</rt></ruby>じゃない. Ot asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 214,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "lexeme": "受付",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "ここは____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Ot, hozirgi/kelasi zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>受付<rt>うけつけ</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>受付<rt>うけつけ</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "214-1",
        "html": "<ruby>受付<rt>うけつけ</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "214-2",
        "html": "<ruby>受付<rt>うけつけ</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "214-3",
        "html": "<ruby>受付<rt>うけつけ</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "214-4",
        "html": "<ruby>受付<rt>うけつけ</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>受付<rt>うけつけ</rt></ruby> → <ruby>受付<rt>うけつけ</rt></ruby>じゃない. Существительное сохраняет основу; нужную форму выражает связка じゃない. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>受付<rt>うけつけ</rt></ruby> → <ruby>受付<rt>うけつけ</rt></ruby>じゃない. Ot asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 215,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "lexeme": "図書館",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "あの<ruby>建物<rt>たてもの</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Ot, hozirgi/kelasi zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>図書館<rt>としょかん</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>図書館<rt>としょかん</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "215-1",
        "html": "<ruby>図書館<rt>としょかん</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "215-2",
        "html": "<ruby>図書館<rt>としょかん</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "215-3",
        "html": "<ruby>図書館<rt>としょかん</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "215-4",
        "html": "<ruby>図書館<rt>としょかん</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>図書館<rt>としょかん</rt></ruby> → <ruby>図書館<rt>としょかん</rt></ruby>じゃない. Существительное сохраняет основу; нужную форму выражает связка じゃない. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>図書館<rt>としょかん</rt></ruby> → <ruby>図書館<rt>としょかん</rt></ruby>じゃない. Ot asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 216,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "lexeme": "病院",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "あの<ruby>建物<rt>たてもの</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Ot, hozirgi/kelasi zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>病院<rt>びょういん</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>病院<rt>びょういん</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "216-1",
        "html": "<ruby>病院<rt>びょういん</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "216-2",
        "html": "<ruby>病院<rt>びょういん</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "216-3",
        "html": "<ruby>病院<rt>びょういん</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "216-4",
        "html": "<ruby>病院<rt>びょういん</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>病院<rt>びょういん</rt></ruby> → <ruby>病院<rt>びょういん</rt></ruby>じゃない. Существительное сохраняет основу; нужную форму выражает связка じゃない. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>病院<rt>びょういん</rt></ruby> → <ruby>病院<rt>びょういん</rt></ruby>じゃない. Ot asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 217,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "lexeme": "銀行",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "あの<ruby>建物<rt>たてもの</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Ot, hozirgi/kelasi zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>銀行<rt>ぎんこう</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>銀行<rt>ぎんこう</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "217-1",
        "html": "<ruby>銀行<rt>ぎんこう</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "217-2",
        "html": "<ruby>銀行<rt>ぎんこう</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "217-3",
        "html": "<ruby>銀行<rt>ぎんこう</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "217-4",
        "html": "<ruby>銀行<rt>ぎんこう</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>銀行<rt>ぎんこう</rt></ruby> → <ruby>銀行<rt>ぎんこう</rt></ruby>じゃない. Существительное сохраняет основу; нужную форму выражает связка じゃない. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>銀行<rt>ぎんこう</rt></ruby> → <ruby>銀行<rt>ぎんこう</rt></ruby>じゃない. Ot asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 218,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "lexeme": "郵便局",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "ここは____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Ot, hozirgi/kelasi zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "218-1",
        "html": "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "218-2",
        "html": "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "218-3",
        "html": "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "218-4",
        "html": "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby> → <ruby>郵便局<rt>ゆうびんきょく</rt></ruby>じゃない. Существительное сохраняет основу; нужную форму выражает связка じゃない. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby> → <ruby>郵便局<rt>ゆうびんきょく</rt></ruby>じゃない. Ot asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 219,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "lexeme": "教室",
    "tense": "present",
    "polarity": "negative",
    "tags": [
      "present",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>部屋<rt>へや</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "Существительное, настоящее/будущее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Ot, hozirgi/kelasi zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>教室<rt>きょうしつ</rt></ruby> → Настоящее/Будущее · Отрицание",
      "uz": "<ruby>教室<rt>きょうしつ</rt></ruby> → Hozirgi/Kelasi · Inkor"
    },
    "options": [
      {
        "id": "219-1",
        "html": "<ruby>教室<rt>きょうしつ</rt></ruby>じゃない",
        "isCorrect": true
      },
      {
        "id": "219-2",
        "html": "<ruby>教室<rt>きょうしつ</rt></ruby>くない",
        "isCorrect": false
      },
      {
        "id": "219-3",
        "html": "<ruby>教室<rt>きょうしつ</rt></ruby>だない",
        "isCorrect": false
      },
      {
        "id": "219-4",
        "html": "<ruby>教室<rt>きょうしつ</rt></ruby>じゃないだ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>教室<rt>きょうしつ</rt></ruby> → <ruby>教室<rt>きょうしつ</rt></ruby>じゃない. Существительное сохраняет основу; нужную форму выражает связка じゃない. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>教室<rt>きょうしつ</rt></ruby> → <ruby>教室<rt>きょうしつ</rt></ruby>じゃない. Ot asosi o‘zgarmaydi; じゃない bog‘lamasi hozirgi/kelasi zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 220,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "lexeme": "事務所",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "この<ruby>部屋<rt>へや</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, утверждение",
      "uz": "Ot, o‘tgan zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>事務所<rt>じむしょ</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>事務所<rt>じむしょ</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "220-1",
        "html": "<ruby>事務所<rt>じむしょ</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "220-2",
        "html": "<ruby>事務所<rt>じむしょ</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "220-3",
        "html": "<ruby>事務所<rt>じむしょ</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "220-4",
        "html": "<ruby>事務所<rt>じむしょ</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>事務所<rt>じむしょ</rt></ruby> → <ruby>事務所<rt>じむしょ</rt></ruby>だった. Существительное сохраняет основу; нужную форму выражает связка だった.",
      "uz": "<ruby>事務所<rt>じむしょ</rt></ruby> → <ruby>事務所<rt>じむしょ</rt></ruby>だった. Ot asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi."
    }
  },
  {
    "id": 221,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "lexeme": "食堂",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "ここは____。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, утверждение",
      "uz": "Ot, o‘tgan zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>食堂<rt>しょくどう</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>食堂<rt>しょくどう</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "221-1",
        "html": "<ruby>食堂<rt>しょくどう</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "221-2",
        "html": "<ruby>食堂<rt>しょくどう</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "221-3",
        "html": "<ruby>食堂<rt>しょくどう</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "221-4",
        "html": "<ruby>食堂<rt>しょくどう</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>食堂<rt>しょくどう</rt></ruby> → <ruby>食堂<rt>しょくどう</rt></ruby>だった. Существительное сохраняет основу; нужную форму выражает связка だった.",
      "uz": "<ruby>食堂<rt>しょくどう</rt></ruby> → <ruby>食堂<rt>しょくどう</rt></ruby>だった. Ot asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi."
    }
  },
  {
    "id": 222,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "lexeme": "入口",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "ここは____。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, утверждение",
      "uz": "Ot, o‘tgan zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>入口<rt>いりぐち</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>入口<rt>いりぐち</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "222-1",
        "html": "<ruby>入口<rt>いりぐち</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "222-2",
        "html": "<ruby>入口<rt>いりぐち</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "222-3",
        "html": "<ruby>入口<rt>いりぐち</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "222-4",
        "html": "<ruby>入口<rt>いりぐち</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>入口<rt>いりぐち</rt></ruby> → <ruby>入口<rt>いりぐち</rt></ruby>だった. Существительное сохраняет основу; нужную форму выражает связка だった.",
      "uz": "<ruby>入口<rt>いりぐち</rt></ruby> → <ruby>入口<rt>いりぐち</rt></ruby>だった. Ot asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi."
    }
  },
  {
    "id": 223,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "lexeme": "出口",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "ここは____。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, утверждение",
      "uz": "Ot, o‘tgan zamon, tasdiq"
    },
    "prompt": {
      "ru": "<ruby>出口<rt>でぐち</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>出口<rt>でぐち</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "223-1",
        "html": "<ruby>出口<rt>でぐち</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "223-2",
        "html": "<ruby>出口<rt>でぐち</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "223-3",
        "html": "<ruby>出口<rt>でぐち</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "223-4",
        "html": "<ruby>出口<rt>でぐち</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>出口<rt>でぐち</rt></ruby> → <ruby>出口<rt>でぐち</rt></ruby>だった. Существительное сохраняет основу; нужную форму выражает связка だった.",
      "uz": "<ruby>出口<rt>でぐち</rt></ruby> → <ruby>出口<rt>でぐち</rt></ruby>だった. Ot asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi."
    }
  },
  {
    "id": 224,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "lexeme": "春",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>彼<rt>かれ</rt></ruby>が<ruby>日本<rt>にほん</rt></ruby>に<ruby>来<rt>き</rt></ruby>たのは____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Ot, o‘tgan zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>春<rt>はる</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>春<rt>はる</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "224-1",
        "html": "<ruby>春<rt>はる</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "224-2",
        "html": "<ruby>春<rt>はる</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "224-3",
        "html": "<ruby>春<rt>はる</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "224-4",
        "html": "<ruby>春<rt>はる</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>春<rt>はる</rt></ruby> → <ruby>春<rt>はる</rt></ruby>だった. Существительное сохраняет основу; нужную форму выражает связка だった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>春<rt>はる</rt></ruby> → <ruby>春<rt>はる</rt></ruby>だった. Ot asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 225,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "lexeme": "夏",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>初<rt>はじ</rt></ruby>めて<ruby>海<rt>うみ</rt></ruby>に<ruby>行<rt>い</rt></ruby>ったのは____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, утверждение (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Ot, o‘tgan zamon, tasdiq (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>夏<rt>なつ</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>夏<rt>なつ</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "225-1",
        "html": "<ruby>夏<rt>なつ</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "225-2",
        "html": "<ruby>夏<rt>なつ</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "225-3",
        "html": "<ruby>夏<rt>なつ</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "225-4",
        "html": "<ruby>夏<rt>なつ</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>夏<rt>なつ</rt></ruby> → <ruby>夏<rt>なつ</rt></ruby>だった. Существительное сохраняет основу; нужную форму выражает связка だった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>夏<rt>なつ</rt></ruby> → <ruby>夏<rt>なつ</rt></ruby>だった. Ot asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 226,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "lexeme": "秋",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>京都<rt>きょうと</rt></ruby>を<ruby>旅行<rt>りょこう</rt></ruby>したのは____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Ot, o‘tgan zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>秋<rt>あき</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>秋<rt>あき</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "226-1",
        "html": "<ruby>秋<rt>あき</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "226-2",
        "html": "<ruby>秋<rt>あき</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "226-3",
        "html": "<ruby>秋<rt>あき</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "226-4",
        "html": "<ruby>秋<rt>あき</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>秋<rt>あき</rt></ruby> → <ruby>秋<rt>あき</rt></ruby>だった. Существительное сохраняет основу; нужную форму выражает связка だった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>秋<rt>あき</rt></ruby> → <ruby>秋<rt>あき</rt></ruby>だった. Ot asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 227,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "lexeme": "雪",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "あの<ruby>日<rt>ひ</rt></ruby>の<ruby>天気<rt>てんき</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Ot, o‘tgan zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>雪<rt>ゆき</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>雪<rt>ゆき</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "227-1",
        "html": "<ruby>雪<rt>ゆき</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "227-2",
        "html": "<ruby>雪<rt>ゆき</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "227-3",
        "html": "<ruby>雪<rt>ゆき</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "227-4",
        "html": "<ruby>雪<rt>ゆき</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>雪<rt>ゆき</rt></ruby> → <ruby>雪<rt>ゆき</rt></ruby>だった. Существительное сохраняет основу; нужную форму выражает связка だった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>雪<rt>ゆき</rt></ruby> → <ruby>雪<rt>ゆき</rt></ruby>だった. Ot asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 228,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "lexeme": "曇り",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>山<rt>やま</rt></ruby>の<ruby>天気<rt>てんき</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Ot, o‘tgan zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>曇<rt>くも</rt></ruby>り → Прошедшая Утвердительная Форма",
      "uz": "<ruby>曇<rt>くも</rt></ruby>り → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "228-1",
        "html": "<ruby>曇<rt>くも</rt></ruby>りだった",
        "isCorrect": true
      },
      {
        "id": "228-2",
        "html": "<ruby>曇<rt>くも</rt></ruby>りかった",
        "isCorrect": false
      },
      {
        "id": "228-3",
        "html": "<ruby>曇<rt>くも</rt></ruby>りだた",
        "isCorrect": false
      },
      {
        "id": "228-4",
        "html": "<ruby>曇<rt>くも</rt></ruby>りだっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>曇<rt>くも</rt></ruby>り → <ruby>曇<rt>くも</rt></ruby>りだった. Существительное сохраняет основу; нужную форму выражает связка だった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>曇<rt>くも</rt></ruby>り → <ruby>曇<rt>くも</rt></ruby>りだった. Ot asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 229,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "lexeme": "月曜日",
    "tense": "past",
    "polarity": "affirmative",
    "tags": [
      "past",
      "affirmative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>試験<rt>しけん</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, утверждение (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Ot, o‘tgan zamon, tasdiq (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>月曜日<rt>げつようび</rt></ruby> → Прошедшая Утвердительная Форма",
      "uz": "<ruby>月曜日<rt>げつようび</rt></ruby> → O‘tgan Zamon Tasdiq Shakli"
    },
    "options": [
      {
        "id": "229-1",
        "html": "<ruby>月曜日<rt>げつようび</rt></ruby>だった",
        "isCorrect": true
      },
      {
        "id": "229-2",
        "html": "<ruby>月曜日<rt>げつようび</rt></ruby>かった",
        "isCorrect": false
      },
      {
        "id": "229-3",
        "html": "<ruby>月曜日<rt>げつようび</rt></ruby>だた",
        "isCorrect": false
      },
      {
        "id": "229-4",
        "html": "<ruby>月曜日<rt>げつようび</rt></ruby>だっただ",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>月曜日<rt>げつようび</rt></ruby> → <ruby>月曜日<rt>げつようび</rt></ruby>だった. Существительное сохраняет основу; нужную форму выражает связка だった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>月曜日<rt>げつようび</rt></ruby> → <ruby>月曜日<rt>げつようび</rt></ruby>だった. Ot asosi o‘zgarmaydi; だった bog‘lamasi o‘tgan zamon, tasdiq shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 230,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "lexeme": "火曜日",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, отрицание",
      "uz": "Ot, o‘tgan zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>火曜日<rt>かようび</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>火曜日<rt>かようび</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "230-1",
        "html": "<ruby>火曜日<rt>かようび</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "230-2",
        "html": "<ruby>火曜日<rt>かようび</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "230-3",
        "html": "<ruby>火曜日<rt>かようび</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "230-4",
        "html": "<ruby>火曜日<rt>かようび</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>火曜日<rt>かようび</rt></ruby> → <ruby>火曜日<rt>かようび</rt></ruby>じゃなかった. Существительное сохраняет основу; нужную форму выражает связка じゃなかった.",
      "uz": "<ruby>火曜日<rt>かようび</rt></ruby> → <ruby>火曜日<rt>かようび</rt></ruby>じゃなかった. Ot asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi."
    }
  },
  {
    "id": 231,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "lexeme": "水曜日",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>会議<rt>かいぎ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, отрицание",
      "uz": "Ot, o‘tgan zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>水曜日<rt>すいようび</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>水曜日<rt>すいようび</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "231-1",
        "html": "<ruby>水曜日<rt>すいようび</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "231-2",
        "html": "<ruby>水曜日<rt>すいようび</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "231-3",
        "html": "<ruby>水曜日<rt>すいようび</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "231-4",
        "html": "<ruby>水曜日<rt>すいようび</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>水曜日<rt>すいようび</rt></ruby> → <ruby>水曜日<rt>すいようび</rt></ruby>じゃなかった. Существительное сохраняет основу; нужную форму выражает связка じゃなかった.",
      "uz": "<ruby>水曜日<rt>すいようび</rt></ruby> → <ruby>水曜日<rt>すいようび</rt></ruby>じゃなかった. Ot asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi."
    }
  },
  {
    "id": 232,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "lexeme": "木曜日",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>出発<rt>しゅっぱつ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, отрицание",
      "uz": "Ot, o‘tgan zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>木曜日<rt>もくようび</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>木曜日<rt>もくようび</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "232-1",
        "html": "<ruby>木曜日<rt>もくようび</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "232-2",
        "html": "<ruby>木曜日<rt>もくようび</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "232-3",
        "html": "<ruby>木曜日<rt>もくようび</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "232-4",
        "html": "<ruby>木曜日<rt>もくようび</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>木曜日<rt>もくようび</rt></ruby> → <ruby>木曜日<rt>もくようび</rt></ruby>じゃなかった. Существительное сохраняет основу; нужную форму выражает связка じゃなかった.",
      "uz": "<ruby>木曜日<rt>もくようび</rt></ruby> → <ruby>木曜日<rt>もくようび</rt></ruby>じゃなかった. Ot asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi."
    }
  },
  {
    "id": 233,
    "partOfSpeech": "noun",
    "difficulty": "easy",
    "lexeme": "土曜日",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>授業<rt>じゅぎょう</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>は____。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, отрицание",
      "uz": "Ot, o‘tgan zamon, inkor"
    },
    "prompt": {
      "ru": "<ruby>土曜日<rt>どようび</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>土曜日<rt>どようび</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "233-1",
        "html": "<ruby>土曜日<rt>どようび</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "233-2",
        "html": "<ruby>土曜日<rt>どようび</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "233-3",
        "html": "<ruby>土曜日<rt>どようび</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "233-4",
        "html": "<ruby>土曜日<rt>どようび</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>土曜日<rt>どようび</rt></ruby> → <ruby>土曜日<rt>どようび</rt></ruby>じゃなかった. Существительное сохраняет основу; нужную форму выражает связка じゃなかった.",
      "uz": "<ruby>土曜日<rt>どようび</rt></ruby> → <ruby>土曜日<rt>どようび</rt></ruby>じゃなかった. Ot asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi."
    }
  },
  {
    "id": 234,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "lexeme": "日曜日",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>試合<rt>しあい</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Ot, o‘tgan zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>日曜日<rt>にちようび</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>日曜日<rt>にちようび</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "234-1",
        "html": "<ruby>日曜日<rt>にちようび</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "234-2",
        "html": "<ruby>日曜日<rt>にちようび</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "234-3",
        "html": "<ruby>日曜日<rt>にちようび</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "234-4",
        "html": "<ruby>日曜日<rt>にちようび</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>日曜日<rt>にちようび</rt></ruby> → <ruby>日曜日<rt>にちようび</rt></ruby>じゃなかった. Существительное сохраняет основу; нужную форму выражает связка じゃなかった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>日曜日<rt>にちようび</rt></ruby> → <ruby>日曜日<rt>にちようび</rt></ruby>じゃなかった. Ot asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 235,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "lexeme": "祝日",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Ot, o‘tgan zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>祝日<rt>しゅくじつ</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>祝日<rt>しゅくじつ</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "235-1",
        "html": "<ruby>祝日<rt>しゅくじつ</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "235-2",
        "html": "<ruby>祝日<rt>しゅくじつ</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "235-3",
        "html": "<ruby>祝日<rt>しゅくじつ</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "235-4",
        "html": "<ruby>祝日<rt>しゅくじつ</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>祝日<rt>しゅくじつ</rt></ruby> → <ruby>祝日<rt>しゅくじつ</rt></ruby>じゃなかった. Существительное сохраняет основу; нужную форму выражает связка じゃなかった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>祝日<rt>しゅくじつ</rt></ruby> → <ruby>祝日<rt>しゅくじつ</rt></ruby>じゃなかった. Ot asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 236,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "lexeme": "試験",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>昨日<rt>きのう</rt></ruby>の<ruby>予定<rt>よてい</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Ot, o‘tgan zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>試験<rt>しけん</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>試験<rt>しけん</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "236-1",
        "html": "<ruby>試験<rt>しけん</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "236-2",
        "html": "<ruby>試験<rt>しけん</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "236-3",
        "html": "<ruby>試験<rt>しけん</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "236-4",
        "html": "<ruby>試験<rt>しけん</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>試験<rt>しけん</rt></ruby> → <ruby>試験<rt>しけん</rt></ruby>じゃなかった. Существительное сохраняет основу; нужную форму выражает связка じゃなかった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>試験<rt>しけん</rt></ruby> → <ruby>試験<rt>しけん</rt></ruby>じゃなかった. Ot asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 237,
    "partOfSpeech": "noun",
    "difficulty": "medium",
    "lexeme": "授業",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>午後<rt>ごご</rt></ruby>の<ruby>予定<rt>よてい</rt></ruby>は____と<ruby>聞<rt>き</rt></ruby>いた。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, отрицание (косвенная речь с と <ruby>聞<rt>き</rt></ruby>いた)",
      "uz": "Ot, o‘tgan zamon, inkor (と <ruby>聞<rt>き</rt></ruby>いた bilan o‘zlashtirma gap)"
    },
    "prompt": {
      "ru": "<ruby>授業<rt>じゅぎょう</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>授業<rt>じゅぎょう</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "237-1",
        "html": "<ruby>授業<rt>じゅぎょう</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "237-2",
        "html": "<ruby>授業<rt>じゅぎょう</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "237-3",
        "html": "<ruby>授業<rt>じゅぎょう</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "237-4",
        "html": "<ruby>授業<rt>じゅぎょう</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>授業<rt>じゅぎょう</rt></ruby> → <ruby>授業<rt>じゅぎょう</rt></ruby>じゃなかった. Существительное сохраняет основу; нужную форму выражает связка じゃなかった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>授業<rt>じゅぎょう</rt></ruby> → <ruby>授業<rt>じゅぎょう</rt></ruby>じゃなかった. Ot asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 238,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "lexeme": "旅行",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>先月<rt>せんげつ</rt></ruby>の<ruby>予定<rt>よてい</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Ot, o‘tgan zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>旅行<rt>りょこう</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>旅行<rt>りょこう</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "238-1",
        "html": "<ruby>旅行<rt>りょこう</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "238-2",
        "html": "<ruby>旅行<rt>りょこう</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "238-3",
        "html": "<ruby>旅行<rt>りょこう</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "238-4",
        "html": "<ruby>旅行<rt>りょこう</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>旅行<rt>りょこう</rt></ruby> → <ruby>旅行<rt>りょこう</rt></ruby>じゃなかった. Существительное сохраняет основу; нужную форму выражает связка じゃなかった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>旅行<rt>りょこう</rt></ruby> → <ruby>旅行<rt>りょこう</rt></ruby>じゃなかった. Ot asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 239,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "lexeme": "出張",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>大阪<rt>おおさか</rt></ruby>へ<ruby>行<rt>い</rt></ruby>く<ruby>理由<rt>りゆう</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Ot, o‘tgan zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>出張<rt>しゅっちょう</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>出張<rt>しゅっちょう</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "239-1",
        "html": "<ruby>出張<rt>しゅっちょう</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "239-2",
        "html": "<ruby>出張<rt>しゅっちょう</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "239-3",
        "html": "<ruby>出張<rt>しゅっちょう</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "239-4",
        "html": "<ruby>出張<rt>しゅっちょう</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>出張<rt>しゅっちょう</rt></ruby> → <ruby>出張<rt>しゅっちょう</rt></ruby>じゃなかった. Существительное сохраняет основу; нужную форму выражает связка じゃなかった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>出張<rt>しゅっちょう</rt></ruby> → <ruby>出張<rt>しゅっちょう</rt></ruby>じゃなかった. Ot asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  },
  {
    "id": 240,
    "partOfSpeech": "noun",
    "difficulty": "hard",
    "lexeme": "研修",
    "tense": "past",
    "polarity": "negative",
    "tags": [
      "past",
      "negative",
      "quotation"
    ],
    "dialogue": [
      {
        "speaker": "",
        "text": "<ruby>午後<rt>ごご</rt></ruby>の<ruby>予定<rt>よてい</rt></ruby>は____と<ruby>思<rt>おも</rt></ruby>う。"
      }
    ],
    "context": {
      "ru": "Существительное, прошедшее, отрицание (конструкция с と <ruby>思<rt>おも</rt></ruby>う)",
      "uz": "Ot, o‘tgan zamon, inkor (と <ruby>思<rt>おも</rt></ruby>う birikmasi)"
    },
    "prompt": {
      "ru": "<ruby>研修<rt>けんしゅう</rt></ruby> → Прошедшая Отрицательная Форма",
      "uz": "<ruby>研修<rt>けんしゅう</rt></ruby> → O‘tgan Zamon Inkor Shakli"
    },
    "options": [
      {
        "id": "240-1",
        "html": "<ruby>研修<rt>けんしゅう</rt></ruby>じゃなかった",
        "isCorrect": true
      },
      {
        "id": "240-2",
        "html": "<ruby>研修<rt>けんしゅう</rt></ruby>くなかった",
        "isCorrect": false
      },
      {
        "id": "240-3",
        "html": "<ruby>研修<rt>けんしゅう</rt></ruby>じゃないだった",
        "isCorrect": false
      },
      {
        "id": "240-4",
        "html": "<ruby>研修<rt>けんしゅう</rt></ruby>だったない",
        "isCorrect": false
      }
    ],
    "explanation": {
      "ru": "<ruby>研修<rt>けんしゅう</rt></ruby> → <ruby>研修<rt>けんしゅう</rt></ruby>じゃなかった. Существительное сохраняет основу; нужную форму выражает связка じゃなかった. Перед と сохраняется указанная простая форма.",
      "uz": "<ruby>研修<rt>けんしゅう</rt></ruby> → <ruby>研修<rt>けんしゅう</rt></ruby>じゃなかった. Ot asosi o‘zgarmaydi; じゃなかった bog‘lamasi o‘tgan zamon, inkor shaklini bildiradi. と dan oldin shu oddiy shakl saqlanadi."
    }
  }
];

const verbData = typeof module !== 'undefined' ? require('./verbs.js') : TrainerVerbs;
const allQuestions = questionSpecs.map(q => q.partOfSpeech === 'verb' ? verbData.question(q) : q);
if (typeof module !== 'undefined') module.exports = allQuestions;
