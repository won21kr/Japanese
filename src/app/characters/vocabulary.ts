import { tags } from 'app/characters/tags';

export interface Vocabulary {
  hiragana?: string;
  romaji?: string;
  definition: string[] | string;
  kanji?: string;
  katakana?: string;
  lesson: string;
  tags: string[];
  conjugateTo?: string;
}

export const vocab: Vocabulary[] = [
    // Lesson -1 - Extras
    {
        hiragana: 'かた',
        romaji: 'kata',
        definition: 'shoulder',
        lesson: '-1',
        tags: [tags.noun]
    },
    {
        hiragana: 'かった',
        romaji: 'katta',
        definition: 'won',
        lesson: '-1',
        tags: []
    },
    {
        hiragana: 'さっか',
        romaji: 'sakka',
        definition: 'writer',
        lesson: '-1',
        tags: [tags.noun, tags.occupation]
    },
    {
        hiragana: 'はっぱ',
        romaji: 'happa',
        definition: 'leaf',
        lesson: '-1',
        tags: [tags.noun, tags.thing]
    },
    {
        hiragana: 'あんない',
        romaji: 'annai',
        definition: 'guide',
        lesson: '-1',
        tags: [tags.noun]
    },
    {
        hiragana: 'おばあさん',
        romaji: 'obaasan',
        definition: 'grandmother',
        lesson: '-1',
        tags: [tags.family, tags.noun, tags.person]
    },
    {
        hiragana: 'おじいさん',
        romaji: 'ojiisan',
        definition: 'grandfather',
        lesson: '-1',
        tags: [tags.family, tags.noun, tags.person]
    },
    {
        hiragana: 'すうじ',
        romaji: 'suuji',
        definition: tags.number,
        lesson: '-1',
        tags: [tags.noun]
    },
    {
        hiragana: 'おじさん',
        romaji: 'ojisan',
        definition: 'uncle',
        lesson: '-1',
        tags: [tags.family, tags.noun, tags.person]
    },
    {
        hiragana: 'おばさん',
        romaji: 'obasan',
        definition: 'aunt',
        lesson: '-1',
        tags: [tags.family, tags.noun, tags.person]
    },
    {
        hiragana: 'ほうりつ',
        romaji: 'houritsu',
        definition: 'law',
        lesson: '-1',
        tags: [tags.noun]
    },
    {
        hiragana: 'とお',
        romaji: 'too',
        definition: 'ten',
        lesson: '-1',
        tags: [tags.noun, tags.number]
    },
    {
        hiragana: 'すきです。',
        romaji: 'sukidesu',
        definition: 'I like it',
        lesson: '-1',
        tags: [tags.phrase]
    },
    {
        hiragana: 'れんあい',
        romaji: 'renai',
        definition: 'romance',
        lesson: '-1',
        tags: []
    },
    {
        hiragana: 'おんな',
        romaji: 'onna',
        definition: 'woman',
        lesson: '-1',
        tags: [tags.noun, tags.person]
    },
    {
        hiragana: 'さんぽ',
        romaji: 'sanpo',
        definition: 'stroll',
        lesson: '-1',
        tags: []
    },
    {
        hiragana: 'まんが',
        romaji: 'manga',
        definition: 'comics',
        lesson: '-1',
        tags: [tags.noun, tags.thing]
    },
    {
        hiragana: 'たかい',
        romaji: 'takai',
        definition: 'high',
        lesson: '-1',
        tags: []
    },
    {
        katakana: 'カー',
        hiragana: 'かあ',
        romaji: 'kaa',
        definition: 'car',
        lesson: '-1',
        tags: [tags.noun, tags.thing]
    },
    {
        katakana: 'スキー',
        hiragana: 'すきい',
        romaji: 'sukii',
        definition: 'ski',
        lesson: '-1',
        tags: [tags.noun, tags.thing]
    },
    {
        katakana: 'スーツ',
        hiragana: 'すうつ',
        romaji: 'suutsu',
        definition: 'suit',
        lesson: '-1',
        tags: [tags.noun, tags.clothing, tags.thing]
    },
    {
        katakana: 'ケーキ',
        hiragana: 'けえき',
        romaji: 'keeki',
        definition: 'cake',
        lesson: '-1',
        tags: [tags.noun, tags.thing]
    },
    {
        katakana: 'ボール',
        hiragana: 'ぼおる',
        romaji: 'booru',
        definition: 'ball',
        lesson: '-1',
        tags: [tags.noun, tags.thing]
    },
    {
        katakana: 'ハロウィーン',
        hiragana: 'はろうぃいん',
        romaji: 'harowiin',
        definition: 'Halloween',
        lesson: '-1',
        tags: []
    },
    {
        katakana: 'ハイウェイ',
        hiragana: 'はいうぇえ',
        romaji: 'haiwee',
        definition: 'highway',
        lesson: '-1',
        tags: [tags.noun]
    },
    {
        katakana: 'ミネラルウォーター',
        hiragana: 'みねらるをおたあ',
        romaji: 'mineraruwootaa',
        definition: 'mineral water',
        lesson: '-1',
        tags: [tags.noun, tags.food]
    },
    {
        katakana: 'シェフ',
        hiragana: 'しぇふ',
        romaji: 'shefu',
        definition: 'chef',
        lesson: '-1',
        tags: [tags.noun, tags.food, tags.occupation]
    },
    {
        katakana: 'チェック',
        hiragana: 'ちぇっく',
        romaji: 'chekku',
        definition: 'check',
        lesson: '-1',
        tags: [tags.noun, tags.food, tags.thing]
    },
    {
        katakana: 'ファッション',
        hiragana: 'ふぁっしょん',
        romaji: 'fasshon',
        definition: 'fashion',
        lesson: '-1',
        tags: []
    },
    {
        katakana: 'フィリピン',
        hiragana: 'ふぃりぴん',
        romaji: 'firipin',
        definition: 'Philippine',
        lesson: '-1',
        tags: [tags.country]
    },
    {
        katakana: 'カフェ',
        hiragana: 'かふぇ',
        romaji: 'kafe',
        definition: 'cafe',
        lesson: '-1',
        tags: [tags.noun, tags.food, tags.place]
    },
    {
        katakana: 'フォーク',
        hiragana: 'ふぉおく',
        romaji: 'fooku',
        definition: 'fork',
        lesson: '-1',
        tags: [tags.noun, tags.food, tags.thing]
    },
    {
        katakana: 'パーティー',
        hiragana: 'ぱあちい',
        romaji: 'paatii',
        definition: 'party',
        lesson: '-1',
        tags: []
    },
    {
        katakana: 'ヂィズ二ーランド',
        hiragana: 'ぢずにいらんど',
        romaji: 'Dizuniirando',
        definition: 'Disneyland',
        lesson: '-1',
        tags: [tags.place]
    },
    {
        katakana: 'ヂュエット',
        hiragana: 'ぢゅえっと',
        romaji: 'dyuetto',
        definition: 'duet',
        lesson: '-1',
        tags: []
    },
    {
        hiragana: 'でんしゃ',
        romaji: 'densha',
        definition: 'train',
        lesson: '-1',
        tags: [tags.noun, tags.thing]
    },
    {
        hiragana: 'あかちゃん',
        romaji: 'akachan',
        definition: 'baby',
        lesson: '-1',
        tags: [tags.noun, tags.person]
    },
    {
        hiragana: 'しゅくだい',
        romaji: 'shukudai',
        definition: 'homework',
        lesson: '-1',
        tags: [tags.noun, tags.thing]
    },
    {
        hiragana: 'ぎゅうにゅう',
        romaji: 'gyuunyuu',
        definition: 'milk',
        lesson: '-1',
        tags: [tags.noun, tags.food, tags.thing]
    },
    {
        hiragana: 'じゅうしょ',
        romaji: 'juusho',
        definition: 'home address',
        lesson: '-1',
        tags: [tags.noun, tags.thing]
    },
    {
        hiragana: 'がっこう',
        romaji: 'gakkou',
        definition: 'school',
        lesson: '-1',
        tags: [tags.noun, tags.place]
    },
    {
        hiragana: 'にっき',
        romaji: 'nikki',
        definition: 'diary',
        lesson: '-1',
        tags: [tags.noun, tags.thing]
    },
    {
        hiragana: 'みんあ',
        romaji: 'minna', // mina ?
        definition: 'everyone',
        lesson: '-1',
        tags: [tags.noun, tags.person]
    },
    {
        hiragana: 'まだ',
        romaji: 'mada',
        definition: 'still/not yet',
        lesson: '-1',
        tags: [tags.phrase]
    },
    {
        hiragana: 'まだ決めていません',
        romaji: 'madakimeteimasen',
        definition: 'not decided yet',
        lesson: '-1',
        tags: [tags.phrase]
    },
    {
        hiragana: 'きめてい。',
        romaji: 'kimetei',
        definition: 'I have decided',
        lesson: '-1',
        tags: [tags.phrase]
    },
    {
        hiragana: 'おおき',
        romaji: 'ooki',
        definition: 'big',
        lesson: '-1',
        tags: [tags.size]
    },

    // Lesson 0 - Greetings

    {
        hiragana: 'おはよう。',
        romaji: 'Ohayou',
        definition: 'Good morning',
        lesson: '0',
        tags: [tags.greeting, tags.phrase, tags.pg35]
    },
    {
        hiragana: 'おはよう ございます。',
        romaji: 'Ohayou gozaimasu',
        definition: 'Good morning (polite)',
        lesson: '0',
        tags: [tags.greeting, tags.phrase, tags.pg35]
    },
    {
        hiragana: 'こんにちは。',
        romaji: 'Konnichiwa',
        definition: 'Good afternoon',
        lesson: '0',
        tags: [tags.greeting, tags.phrase, tags.pg35]
    },
    {
        hiragana: 'こんばんは。',
        romaji: 'Konbanwa',
        definition: 'Good evening',
        lesson: '0',
        tags: [tags.greeting, tags.phrase, tags.pg35]
    },
    {
        hiragana: 'さようなら。',
        romaji: 'Sayounara',
        definition: 'Good-bye',
        lesson: '0',
        tags: [tags.greeting, tags.phrase, tags.pg35]
    },
    {
        hiragana: 'おやすみ(なさい)。',
        romaji: 'Oyasumi(nasai)',
        definition: 'Good night',
        lesson: '0',
        tags: [tags.greeting, tags.phrase, tags.pg35]
    },
    {
        hiragana: 'ありがとう。',
        romaji: 'Arigatou',
        definition: 'Thank you',
        lesson: '0',
        tags: [tags.greeting, tags.phrase, tags.pg35]
    },
    {
        hiragana: 'ありがとう ございます。',
        romaji: 'Arigatou gozaimasu',
        definition: 'Thank you (polite)',
        lesson: '0',
        tags: [tags.greeting, tags.phrase, tags.pg35]
    },
    {
        hiragana: 'すみません。',
        romaji: 'Sumimasen',
        definition: ['Excuse me', 'I\'m sorry'],
        lesson: '0',
        tags: [tags.greeting, tags.phrase, tags.pg35]
    },
    {
        hiragana: 'いいえ。',
        romaji: 'Iie',
        definition: ['No', 'Not at all'],
        lesson: '0',
        tags: [tags.greeting, tags.phrase, tags.pg35]
    },
    {
        hiragana: 'いってきます。',
        romaji: 'Ittekimasu',
        definition: 'I\'ll go and come back',
        lesson: '0',
        tags: [tags.greeting, tags.phrase, tags.pg35]
    },
    {
        hiragana: 'いってらっしゃい。',
        romaji: 'Itterasshai',
        definition: 'Please go and come back',
        lesson: '0',
        tags: [tags.greeting, tags.phrase, tags.pg35]
    },
    {
        hiragana: 'ただいま。',
        romaji: 'Tadaima',
        definition: 'I\'m home',
        lesson: '0',
        tags: [tags.greeting, tags.phrase, tags.pg35]
    },
    {
        hiragana: 'おかえり(なさい)。',
        romaji: 'Okaeri(nasai)',
        definition: 'Welcome home',
        lesson: '0',
        tags: [tags.greeting, tags.phrase, tags.pg35]
    },
    {
        hiragana: 'いただきます。',
        romaji: 'Itadakimasu',
        definition: 'Thank you for the meal (before eating)',
        lesson: '0',
        tags: [tags.greeting, tags.phrase, tags.pg35]
    },
    {
        hiragana: 'ごちそうさま(でした)。',
        romaji: 'Gochisousama(deshita)',
        definition: 'Thank you for the meal (after eating)',
        lesson: '0',
        tags: [tags.greeting, tags.phrase, tags.pg35]
    },
    {
        hiragana: 'はじめまして。',
        romaji: 'Hajimemashite',
        definition: 'How do you do?',
        lesson: '0',
        tags: [tags.greeting, tags.phrase, tags.pg35]
    },
    {
        hiragana: 'よろしく おねがいします。',
        romaji: 'Yoroshiku onegaishimasu',
        definition: 'Nice to meet you',
        lesson: '0',
        tags: [tags.greeting, tags.phrase, tags.pg35]
    },


    // Lesson 1

    {
        hiragana: 'あの',
        romaji: 'ano',
        definition: 'um',
        lesson: '1',
        tags: [tags.vocab, tags.pg40]
    },
    {
        hiragana: 'いま',
        romaji: 'ima',
        definition: 'now',
        lesson: '1',
        tags: [tags.vocab, tags.pg40]
    },
    {
        hiragana: 'えいご',
        romaji: 'eigo',
        definition: 'English (language)',
        lesson: '1',
        tags: [tags.vocab, tags.pg40]
    },
    {
        hiragana: 'ええ',
        romaji: 'ee',
        definition: 'yes',
        lesson: '1',
        tags: [tags.vocab, tags.pg40]
    },
    {
        hiragana: 'がくせい',
        romaji: 'gakusei',
        definition: 'student',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.occupation]
    },
    {
        hiragana: '〜ご',
        romaji: '...go',
        definition: '...language',
        lesson: '1',
        tags: [tags.vocab, tags.pg40]
    },
    {
        hiragana: 'にほんご',
        romaji: 'nihongo',
        definition: 'Japanese language',
        lesson: '1',
        tags: [tags.vocab, tags.pg40]
    },
    {
        hiragana: 'こうこう',
        romaji: 'koukou',
        definition: 'high school',
        lesson: '1',
        tags: [tags.vocab, tags.pg40]
    },
    {
        hiragana: 'ごご',
        romaji: 'gogo',
        definition: 'P.M.',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.time]
    },
    {
        hiragana: 'ごぜん',
        romaji: 'gozen',
        definition: 'A.M.',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.time]
    },
    {
        hiragana: '〜さい',
        romaji: '..sai',
        definition: '...years old',
        lesson: '1',
        tags: [tags.vocab, tags.pg40]
    },
    {
        hiragana: '〜さん',
        romaji: '..san',
        definition: 'Mr./Ms. ...',
        lesson: '1',
        tags: [tags.vocab, tags.pg40]
    },
    {
        hiragana: '〜じ',
        romaji: '..ji',
        definition: 'o\'clock',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.time]
    },
    {
        hiragana: 'いちじ',
        romaji: 'ichiji',
        definition: 'one o\'clock',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.time]
    },
    {
        hiragana: '〜じん',
        romaji: '...jin',
        definition: '...people',
        lesson: '1',
        tags: [tags.vocab, tags.pg40]
    },
    {
        hiragana: 'にほんじん',
        romaji: 'nihonjin',
        definition: 'Japanese people',
        lesson: '1',
        tags: [tags.vocab, tags.pg40]
    },
    {
        hiragana: 'せんこう',
        romaji: 'senkou',
        definition: 'major',
        lesson: '1',
        tags: [tags.vocab, tags.pg40]
    },
    {
        hiragana: 'せんせい',
        romaji: 'sensei',
        definition: ['teacher', 'professor'],
        lesson: '1',
        tags: [tags.vocab, tags.pg40]
    },
    {
        hiragana: 'そうです',
        romaji: 'sou desu',
        definition: 'That\'s right',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.phrase]
    },
    {
        hiragana: 'そうですか',
        romaji: 'sou desu ka',
        definition: ['I see', 'Is that so?'],
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.phrase]
    },
    {
        hiragana: 'だいがく',
        romaji: 'daigaku',
        definition: ['college', 'university'],
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.noun, tags.place]
    },
    {
        hiragana: 'でんわ',
        romaji: 'denwa',
        definition: 'telephone',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.noun, tags.thing]
    },
    {
        hiragana: 'ともだち',
        romaji: 'tomodachi',
        definition: 'friend',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.noun, tags.person]
    },
    {
        hiragana: 'なまえ',
        romaji: 'namae',
        definition: 'name',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.noun]
    },
    {
        hiragana: 'なん/なに',
        romaji: 'nan/nani',
        definition: 'what',
        lesson: '1',
        tags: [tags.vocab, tags.pg40]
    },
    {
        hiragana: 'にほん',
        romaji: 'Nihon',
        definition: 'Japan',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.country]
    },
    {
        hiragana: '〜ねんせい',
        romaji: '...nensei',
        definition: '...year student',
        lesson: '1',
        tags: [tags.vocab, tags.pg40]
    },
    {
        hiragana: 'いちねんせい',
        romaji: 'ichinensei',
        definition: 'first-year student',
        lesson: '1',
        tags: []
    },
    {
        hiragana: 'はい',
        romaji: 'hai',
        definition: 'yes',
        lesson: '1',
        tags: [tags.vocab, tags.pg40]
    },
    {
        hiragana: 'はん',
        romaji: 'han',
        definition: 'half',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.time]
    },
    {
        hiragana: 'にじはん',
        romaji: 'niji han',
        definition: 'half past two',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.time]
    },
    {
        hiragana: 'ばんごう',
        romaji: 'bangou',
        definition: 'number',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.number]
    },
    {
        hiragana: 'りゅうがくせい',
        romaji: 'ryuugakusei',
        definition: 'international student',
        lesson: '1',
        tags: [tags.vocab, tags.pg40]
    },
    {
        hiragana: 'わたし',
        romaji: 'watashi',
        definition: 'I',
        lesson: '1',
        tags: [tags.vocab, tags.pg40]
    },
    {
        hiragana: 'あめりか',
        katakana: 'アメリカ',
        romaji: 'Amerika',
        definition: 'U.S.A.',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.country]
    },
    {
        hiragana: 'いぎりす',
        katakana: 'イギリス',
        romaji: 'Igirisu',
        definition: 'Britain',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.country]
    },
    {
        hiragana: 'おおすとらりあ',
        katakana: 'オーストラリア',
        romaji: 'Oosutoraria',
        definition: 'Australia',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.country]
    },
    {
        hiragana: 'かんこく',
        romaji: 'Kankoku',
        definition: 'Korea',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.country]
    },
    {
        hiragana: 'すうぇぇでん',
        katakana: 'スウエーデン',
        romaji: 'Suueeden',
        definition: 'Sweden',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.country]
    },
    {
        hiragana: 'ちゅうごく',
        romaji: 'Chuugoku',
        definition: 'China',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.country]
    },
    {
        hiragana: 'かがく',
        romaji: 'kagaku',
        definition: 'science',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.major]
    },
    {
        hiragana: 'あじあけんきゅう',
        katakana: 'アジアけんきゅう',
        romaji: 'ajia kenkyuu',
        definition: 'Asian studies',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.major]
    },
    {
        hiragana: 'けいざい',
        romaji: 'keizai',
        definition: 'economics',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.major]
    },
    {
        hiragana: 'こくさいかんけい',
        romaji: 'kokusaikankei',
        definition: 'international studies',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.major]
    },
    {
        hiragana: 'こんぴゅうたあ',
        katakana: 'コンピューター',
        romaji: 'konpyuutaa',
        definition: 'computer',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.major]
    },
    {
        hiragana: 'じんるいがく',
        romaji: 'jinruigaku',
        definition: 'anthropology',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.major]
    },
    {
        hiragana: 'せいじ',
        romaji: 'seiji',
        definition: 'politics',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.major]
    },
    {
        hiragana: 'びじねす',
        katakana: 'ビジネス',
        romaji: 'bijinesu',
        definition: 'business',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.major]
    },
    {
        hiragana: 'ぶんがく',
        romaji: 'bungaku',
        definition: 'literature',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.major]
    },
    {
        hiragana: 'れきし',
        romaji: 'rekishi',
        definition: 'history',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.major]
    },
    {
        hiragana: 'しごと',
        romaji: 'shigoto',
        definition: ['job', 'work', 'occupation'],
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.occupation]
    },
    {
        hiragana: 'いしゃ',
        romaji: 'isha',
        definition: 'doctor',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.occupation]
    },
    {
        hiragana: 'かいしゃいん',
        romaji: 'kaishain',
        definition: 'office worker',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.occupation]
    },
    {
        hiragana: 'こうこうせい',
        romaji: 'koukousei',
        definition: 'high school student',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.occupation]
    },
    {
        hiragana: 'しゅふ',
        romaji: 'shufu',
        definition: 'housewife',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.occupation]
    },
    {
        hiragana: 'だいがくいんせい',
        romaji: 'daigakuinsei',
        definition: 'graduate student',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.occupation]
    },
    {
        hiragana: 'だいがくせい',
        romaji: 'daigakusei',
        definition: 'college student',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.occupation]
    },
    {
        hiragana: 'べんごし',
        romaji: 'bengoshi',
        definition: 'lawyer',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.occupation]
    },
    {
        hiragana: 'おかあさん',
        romaji: 'okaasan',
        definition: 'mother',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.family, tags.person]
    },
    {
        hiragana: 'おとうさん',
        romaji: 'otousan',
        definition: 'father',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.family, tags.person]
    },
    {
        hiragana: 'おねえさん',
        romaji: 'oneesan',
        definition: 'older sister',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.family, tags.person]
    },
    {
        hiragana: 'おにいさん',
        romaji: 'oniisan',
        definition: 'older brother',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.family, tags.person]
    },
    {
        hiragana: 'いもうと',
        romaji: 'imouto',
        definition: 'younger sister',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.family, tags.person]
    },
    {
        hiragana: 'おとうと',
        romaji: 'otouto',
        definition: 'younger brother',
        lesson: '1',
        tags: [tags.vocab, tags.pg40, tags.family, tags.person]
    },

    // Page 48 - 49 / 57
    {
        hiragana: 'いちじ',
        romaji: 'ichiji',
        definition: 'one o\'clock',
        lesson: '1',
        tags: [tags.time]
    },
    {
        hiragana: 'にじ',
        romaji: 'niji',
        definition: 'two o\'clock',
        lesson: '1',
        tags: [tags.time]
    },
    {
        hiragana: 'さんじ',
        romaji: 'sanji',
        definition: 'three o\'clock',
        lesson: '1',
        tags: [tags.time]
    },
    {
        hiragana: 'よじ',
        romaji: 'yoji',
        definition: 'four o\'clock',
        lesson: '1',
        tags: [tags.time]
    },
    {
        hiragana: 'しちじ',
        romaji: 'shichiji',
        definition: 'seven o\'clock',
        lesson: '1',
        tags: [tags.time]
    },
    {
        hiragana: 'いっぷん',
        romaji: 'ippun',
        definition: 'one minute',
        lesson: '1',
        tags: [tags.time]
    },
    {
        hiragana: 'にふん',
        romaji: 'nifun',
        definition: 'two minutes',
        lesson: '1',
        tags: [tags.time]
    },
    {
        hiragana: 'さんぷん',
        romaji: 'sanpun',
        definition: 'three minutes',
        lesson: '1',
        tags: [tags.time]
    },
    {
        hiragana: 'よんぷん',
        romaji: 'yonpun',
        definition: 'four minutes',
        lesson: '1',
        tags: [tags.time]
    },
    {
        hiragana: 'ごふん',
        romaji: 'gofun',
        definition: 'five minutes',
        lesson: '1',
        tags: [tags.time]
    },
    {
        hiragana: 'ろっぷん',
        romaji: 'roppun',
        definition: 'six minutes',
        lesson: '1',
        tags: [tags.time]
    },
    {
        hiragana: 'ななふん',
        romaji: 'nanafun',
        definition: 'seven minutes',
        lesson: '1',
        tags: [tags.time]
    },
    {
        hiragana: 'はっぷん/はちふん',
        romaji: 'happun/hachifun',
        definition: 'eight minutes',
        lesson: '1',
        tags: [tags.time]
    },
    {
        hiragana: 'きゅうふん',
        romaji: 'kyuufun',
        definition: 'nine minutes',
        lesson: '1',
        tags: [tags.time]
    },
    {
        hiragana: 'じゅっぷん/じっぷん',
        romaji: 'juppun/jippun',
        definition: 'ten minutes',
        lesson: '1',
        tags: [tags.time]
    },
    {
        hiragana: 'いっさい',
        romaji: 'issai',
        definition: 'one-year-old',
        lesson: '1',
        tags: [tags.counter]
    },
    {
        hiragana: 'よんさい',
        romaji: 'yonsai',
        definition: 'four-year-old',
        lesson: '1',
        tags: [tags.counter]
    },
    {
        hiragana: 'ななさい',
        romaji: 'nanasai',
        definition: 'seven-year-old',
        lesson: '1',
        tags: [tags.counter]
    },
    {
        hiragana: 'はっさい',
        romaji: 'hassai',
        definition: 'eight-year-old',
        lesson: '1',
        tags: [tags.counter]
    },
    {
        hiragana: 'はたち',
        romaji: 'hatachi',
        definition: 'twenty-year-old',
        lesson: '1',
        tags: [tags.counter]
    },
    {
        hiragana: 'ひゃく',
        romaji: 'hyaku',
        definition: 'hundred',
        lesson: '1',
        tags: [tags.counter, tags.number]
    },
    {
        hiragana: 'に',
        romaji: 'ni',
        definition: 'two',
        lesson: '1',
        tags: [tags.counter, tags.number]
    },
    {
        hiragana: 'じゅうご',
        romaji: 'juugo',
        definition: 'fifteen',
        lesson: '1',
        tags: [tags.counter, tags.number]
    },
    {
        hiragana: 'ななじゅう',
        romaji: 'nanajuu',
        definition: 'seventy',
        lesson: '1',
        tags: [tags.counter, tags.number]
    },


    // Lesson 2

    {
        hiragana: 'これ',
        romaji: 'kore',
        definition: 'this one',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.phrase]
    },
    {
        hiragana: 'それ',
        romaji: 'sore',
        definition: 'that one',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.phrase]
    },
    {
        hiragana: 'あれ',
        romaji: 'are',
        definition: 'that one (over there)',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.phrase]
    },
    {
        hiragana: 'どれ',
        romaji: 'dore',
        definition: 'which one',
        lesson: '2',
        tags: [tags.vocab, tags.pg60]
    },
    {
        hiragana: 'この',
        romaji: 'kono',
        definition: 'this...',
        lesson: '2',
        tags: [tags.vocab, tags.pg60]
    },
    {
        hiragana: 'その',
        romaji: 'sono',
        definition: 'that...',
        lesson: '2',
        tags: [tags.vocab, tags.pg60]
    },
    {
        hiragana: 'あの',
        romaji: 'ano',
        definition: 'that... (over there)',
        lesson: '2',
        tags: [tags.vocab, tags.pg60]
    },
    {
        hiragana: 'どの',
        romaji: 'dono',
        definition: 'which...',
        lesson: '2',
        tags: [tags.vocab, tags.pg60]
    },
    {
        hiragana: 'ここ',
        romaji: 'koko',
        definition: 'here',
        lesson: '2',
        tags: [tags.vocab, tags.pg60]
    },
    {
        hiragana: 'そこ',
        romaji: 'soko',
        definition: 'there',
        lesson: '2',
        tags: [tags.vocab, tags.pg60]
    },
    {
        hiragana: 'あそこ',
        romaji: 'asoko',
        definition: 'over there',
        lesson: '2',
        tags: [tags.vocab, tags.pg60]
    },
    {
        hiragana: 'どこ',
        romaji: 'doko',
        definition: 'where',
        lesson: '2',
        tags: [tags.vocab, tags.pg60]
    },
    {
        hiragana: 'だれ',
        romaji: 'dare',
        definition: 'who',
        lesson: '2',
        tags: [tags.vocab, tags.pg60]
    },
    {
        hiragana: 'おいしいい',
        romaji: 'oishii',
        definition: 'delicious',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.food]
    },
    {
        hiragana: 'さかな',
        romaji: 'sakana',
        definition: 'fish',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.food]
    },
    {
        hiragana: 'とんかつ',
        romaji: 'tonkatsu',
        definition: 'pork cutlet',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.food]
    },
    {
        hiragana: 'にく',
        romaji: 'niku',
        definition: 'meat',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.food]
    },
    {
        katakana: 'メニュー',
        hiragana: 'めにゅう',
        romaji: 'menyuu',
        definition: 'menu',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.food, tags.noun, tags.thing]
    },
    {
        hiragana: 'やさい',
        romaji: 'yasai',
        definition: 'vegetable',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.food]
    },
    {
        hiragana: 'えんぴつ',
        romaji: 'enpitsu',
        definition: 'pencil',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun, tags.thing]
    },
    {
        hiragana: 'かさ',
        romaji: 'kasa',
        definition: 'umbrella',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun, tags.thing]
    },
    {
        hiragana: 'かばん',
        romaji: 'kaban',
        definition: 'bag',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun, tags.thing]
    },
    {
        hiragana: 'くつ',
        romaji: 'kutsu',
        definition: 'shoes',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun, tags.thing]
    },
    {
        hiragana: 'さいふ',
        romaji: 'saifu',
        definition: 'wallet',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun]
    },
    {
        katakana: 'ジーンズ',
        hiragana: 'じいんず',
        romaji: 'jiinzu',
        definition: 'jeans',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun, tags.thing, tags.clothing]
    },
    {
        hiragana: 'じしょ',
        romaji: 'jisho',
        definition: 'dictionary',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun, tags.thing]
    },
    {
        hiragana: 'じてんしゃ',
        romaji: 'jitensha',
        definition: 'bicycle',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun]
    },
    {
        hiragana: 'しんぶん',
        romaji: 'shinbun',
        definition: 'newspaper',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun, tags.thing]
    },
    {
        katakana: 'Tシャツ',
        hiragana: 'ていいしゃつ',
        romaji: 'tiishatsu',
        definition: 'T-shirt',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun, tags.thing, tags.clothing]
    },
    {
        hiragana: 'とけい',
        romaji: 'tokei',
        definition: ['watch', 'clock'],
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun, tags.thing]
    },
    {
        katakana: 'ノート',
        hiragana: 'のおと',
        romaji: 'nooto',
        definition: 'notebook',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun, tags.thing]
    },
    {
        katakana: 'ペン',
        hiragana: 'ぺん',
        romaji: 'pen',
        definition: 'pen',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun, tags.thing]
    },
    {
        hiragana: 'ぼうし',
        romaji: 'boushi',
        definition: ['hat', 'cap'],
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun, tags.thing]
    },
    {
        hiragana: 'ほん',
        romaji: 'hon',
        definition: 'book',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun, tags.thing]
    },
    {
        hiragana: 'きっさてん',
        romaji: 'kissaten',
        definition: 'cafe',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun, tags.place, tags.food]
    },
    {
        hiragana: 'ぎんこう',
        romaji: 'ginkou',
        definition: 'bank',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun, tags.place]
    },
    {
        katakana: 'トイレ',
        hiragana: 'といれ',
        romaji: 'toire',
        definition: ['toilet', 'restroom'],
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun, tags.place]
    },
    {
        hiragana: 'としょかん',
        romaji: 'toshokan',
        definition: 'library',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun, tags.place]
    },
    {
        hiragana: 'ゆうびんきょく',
        romaji: 'yuubinkyoku',
        definition: 'post office',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.noun, tags.place]
    },
    {
        hiragana: 'いくら',
        romaji: 'ikura',
        definition: 'how much',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.money]
    },
    {
        hiragana: '〜えん',
        romaji: '... en',
        definition: '... yen',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.money]
    },
    {
        hiragana: 'たかい',
        romaji: 'takai',
        definition: 'expensive',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.money]
    },
    {
        hiragana: 'いらっしゃいませ。',
        romaji: 'irasshaimase',
        definition: 'welcome (to our store)',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.phrase]
    },
    {
        hiragana: '(〜を)おねがいします。',
        romaji: '(... o) onegaishimasu',
        definition: '..., please.',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.phrase]
    },
    {
        hiragana: '(〜を)ください。',
        romaji: '(... o) kudasai',
        definition: 'Please give me...',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.phrase]
    },
    {
        hiragana: 'じゃあ',
        romaji: 'jaa',
        definition: ['then...', 'if that is the case,...'],
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.phrase]
    },
    {
        hiragana: 'どうぞ',
        romaji: 'douzo',
        definition: ['Please.', 'Here it is.'],
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.phrase]
    },
    {
        hiragana: 'どうも',
        romaji: 'doumo',
        definition: 'Thank you.',
        lesson: '2',
        tags: [tags.vocab, tags.pg60, tags.phrase]
    },

    // Page 69
    {
        hiragana: 'さんびゃく',
        romaji: 'sanbyaku',
        definition: '300',
        lesson: '2',
        tags: [tags.pg69, tags.number]
    },
    {
        hiragana: 'ろっぴゃく',
        romaji: 'roppyaku',
        definition: '600',
        lesson: '2',
        tags: [tags.pg69, tags.number]
    },
    {
        hiragana: 'はっぴゃく',
        romaji: 'happyaku',
        definition: '800',
        lesson: '2',
        tags: [tags.pg69, tags.number]
    },
    {
        hiragana: 'せん',
        romaji: 'sen',
        definition: '1000',
        lesson: '2',
        tags: [tags.pg69, tags.number]
    },
    {
        hiragana: 'さんぜん',
        romaji: 'sanzen',
        definition: '3000',
        lesson: '2',
        tags: [tags.pg69, tags.number]
    },
    {
        hiragana: 'はっせん',
        romaji: 'hassen',
        definition: '8000',
        lesson: '2',
        tags: [tags.pg69, tags.number]
    },
    {
        hiragana: 'いちまん',
        romaji: 'ichiman',
        definition: '10000',
        lesson: '2',
        tags: [tags.pg69, tags.number]
    },
    // Page 83
    {
        katakana: 'ドア',
        hiragana: 'どあ',
        romaji: 'doa',
        definition: 'door',
        lesson: '2',
        tags: [tags.pg83, tags.noun, tags.thing]
    },
    {
        hiragana: 'つくえ',
        romaji: 'tsukue',
        definition: 'desk',
        lesson: '2',
        tags: [tags.pg83, tags.noun, tags.thing]
    },
    {
        hiragana: 'いす',
        romaji: 'isu',
        definition: 'chair',
        lesson: '2',
        tags: [tags.pg83, tags.noun, tags.thing]
    },
    {
        katakana: 'カーテン',
        hiragana: 'かあてん',
        romaji: 'kaaten',
        definition: 'curtain',
        lesson: '2',
        tags: [tags.pg83, tags.noun, tags.thing]
    },
    {
        hiragana: 'まど',
        romaji: 'mado',
        definition: 'window',
        lesson: '2',
        tags: [tags.pg83, tags.noun, tags.thing]
    },
    {
        hiragana: 'こくばん',
        romaji: 'kokuban',
        definition: 'blackboard',
        lesson: '2',
        tags: [tags.pg83, tags.noun, tags.thing]
    },
    {
        katakana: 'けしゴム',
        hiragana: 'けしごむ',
        romaji: 'keshigomu',
        definition: 'eraser',
        lesson: '2',
        tags: [tags.pg83, tags.noun, tags.thing]
    },
    {
        hiragana: 'でんき',
        romaji: 'denki',
        definition: 'electric light',
        lesson: '2',
        tags: [tags.pg83, tags.noun, tags.thing]
    },
    {
        hiragana: 'わかりましたか。',
        romaji: 'Wakarimashita ka',
        definition: 'Do you understand?',
        lesson: '2',
        tags: [tags.pg83, tags.phrase]
    },
    {
        hiragana: 'わかりました。',
        romaji: 'Wakarimashita',
        definition: 'I understand/understood',
        lesson: '2',
        tags: [tags.pg83, tags.phrase]
    },
    {
        hiragana: 'わかりません。',
        romaji: 'Wakarimasen',
        definition: 'I don\'t understand/ I don\'t know',
        lesson: '2',
        tags: [tags.pg83, tags.phrase]
    },
    {
        hiragana: 'ゆっくりいってください。',
        romaji: 'Yukkuri itte kudasai',
        definition: 'Please say it slowly.',
        lesson: '2',
        tags: [tags.pg83, tags.phrase]
    },
    {
        hiragana: 'もういちどいってください。',
        romaji: 'Mou ichido itte kudasai',
        definition: 'Please say it slowly.',
        lesson: '2',
        tags: [tags.pg83, tags.phrase]
    },
    {
        hiragana: 'ちょっとまってください。',
        romaji: 'Chotto matte kudasai',
        definition: 'Please wait.',
        lesson: '2',
        tags: [tags.pg83, tags.phrase]
    },
    {
        hiragana: 'きいてください。',
        romaji: 'Kiite kudasai',
        definition: 'Please listen / please ask',
        lesson: '2',
        tags: [tags.pg83, tags.phrase]
    },
    {
        katakana: '10ページをみてください。',
        hiragana: '10っぺえじをみてください。',
        romaji: 'Juppeeji o mite kudasai',
        definition: 'Please look at page 10.',
        lesson: '2',
        tags: [tags.pg83, tags.phrase]
    },


    // Lesson 3

    // Page 86
    {
        kanji: '映画',
        hiragana: 'えいが',
        romaji: 'eiga',
        definition: 'movie',
        lesson: '3',
        tags: [tags.pg86, tags.noun, tags.thing, tags.vocab]
    },
    {
        kanji: '音楽',
        hiragana: 'おんがく',
        romaji: 'ongaku',
        definition: 'music',
        lesson: '3',
        tags: [tags.pg86, tags.noun, tags.vocab]
    },
    {
        kanji: '雑誌',
        hiragana: 'ざっし',
        romaji: 'zasshi',
        definition: 'magazine',
        lesson: '3',
        tags: [tags.pg86, tags.noun, tags.thing, tags.vocab]
    },
    {
        katakana: 'スポーツ',
        hiragana: 'すぽおつ',
        romaji: 'supootsu',
        definition: 'sports',
        lesson: '3',
        tags: [tags.pg86, tags.noun, tags.vocab]
    },
    {
        katakana: 'デート',
        hiragana: '',
        romaji: 'deeto',
        definition: 'date (romantic)',
        lesson: '3',
        tags: [tags.pg86, tags.noun, tags.vocab]
    },
    {
        katakana: 'テニス',
        hiragana: '',
        romaji: 'tenisu',
        definition: 'tennis',
        lesson: '3',
        tags: [tags.pg86, tags.noun, tags.vocab]
    },
    {
        katakana: 'テレビ',
        hiragana: '',
        romaji: 'terebi',
        definition: 'TV',
        lesson: '3',
        tags: [tags.pg86, tags.noun, tags.vocab]
    },
    {
        katakana: 'アイスクリーム',
        hiragana: 'あいすくりいむ',
        romaji: 'aisukuriimu',
        definition: 'ice cream',
        lesson: '3',
        tags: [tags.pg86, tags.noun, tags.vocab]
    },
    {
        kanji: '朝ご飯',
        hiragana: 'あさごはん',
        romaji: 'asagohan',
        definition: 'breakfast',
        lesson: '3',
        tags: [tags.pg86, tags.food, tags.vocab]
    },
    {
        kanji: 'お酒',
        hiragana: 'おさけ',
        romaji: 'osake',
        definition: ['sake', 'alcohol'],
        lesson: '3',
        tags: [tags.pg86, tags.noun, tags.thing, tags.food, tags.vocab]
    },
    {
        kanji: 'お茶',
        hiragana: 'おちゃ',
        romaji: 'ocha',
        definition: 'green tea',
        lesson: '3',
        tags: [tags.pg86, tags.noun, tags.thing, tags.food, tags.vocab]
    },
    {
        katakana: 'コー​​ヒー',
        hiragana: '',
        romaji: '',
        definition: 'coffee',
        lesson: '3',
        tags: [tags.pg86, tags.noun, tags.thing, tags.food, tags.vocab]
    },
    {
        kanji: '晩ご飯',
        hiragana: 'ばんごはん',
        romaji: '',
        definition: 'dinner',
        lesson: '3',
        tags: [tags.pg86, tags.food, tags.vocab]
    },
    {
        katakana: 'ハンバーがー',
        hiragana: '',
        romaji: '',
        definition: 'hamburger',
        lesson: '3',
        tags: [tags.pg86, tags.noun, tags.thing, tags.food, tags.vocab]
    },
    {
        kanji: '昼ご飯',
        hiragana: 'ひるごはん',
        romaji: '',
        definition: 'lunch',
        lesson: '3',
        tags: [tags.pg86, tags.food, tags.vocab]
    },
    {
        katakana: '水',
        hiragana: 'みず',
        romaji: 'mizu',
        definition: 'water',
        lesson: '3',
        tags: [tags.pg86, tags.noun, tags.thing, tags.food, tags.vocab]
    },
    {
        kanji: '家',
        hiragana: 'いえ',
        romaji: 'ie',
        definition: ['home', 'house'],
        lesson: '3',
        tags: [tags.pg86, tags.noun, tags.place, tags.vocab]
    },
    {
        hiragana: 'うち',
        romaji: 'uchi',
        definition: ['home', 'house', 'my place'],
        lesson: '3',
        tags: [tags.pg86, tags.noun, tags.place, tags.vocab]
    },
    {
        kanji: '学校',
        hiragana: 'がっこう',
        romaji: 'gakkou',
        definition: 'school',
        lesson: '3',
        tags: [tags.pg86, tags.noun, tags.place, tags.vocab]
    },
    {
        kanji: '朝',
        hiragana: 'あさ',
        romaji: 'asa',
        definition: 'morning',
        lesson: '3',
        tags: [tags.pg86, tags.time, tags.vocab]
    },
    {
        kanji: '明日',
        hiragana: 'あした',
        romaji: 'ashita',
        definition: 'tomorrow',
        lesson: '3',
        tags: [tags.pg86, tags.time, tags.vocab]
    },
    {
        hiragana: 'いつ',
        romaji: 'itsu',
        definition: 'when',
        lesson: '3',
        tags: [tags.pg86, tags.time, tags.vocab]
    },
    {
        kanji: '今日',
        hiragana: 'きょう',
        romaji: 'kyou',
        definition: 'today',
        lesson: '3',
        tags: [tags.pg86, tags.time, tags.vocab]
    },
    {
        hiragana: '〜ごろ',
        romaji: '~goro',
        definition: 'at about...',
        lesson: '3',
        tags: [tags.pg86, tags.time, tags.vocab]
    },
    {
        kanji: '今晩',
        hiragana: 'こんばん',
        romaji: 'konban',
        definition: 'tonight',
        lesson: '3',
        tags: [tags.pg86, tags.time, tags.vocab]
    },
    {
        kanji: '週末',
        hiragana: 'しゅうまつ',
        romaji: 'shuumatsu',
        definition: 'weekend',
        lesson: '3',
        tags: [tags.pg86, tags.time, tags.vocab]
    },
    {
        kanji: '土曜日',
        hiragana: 'どようび',
        romaji: 'doyoubi',
        definition: 'Saturday',
        lesson: '3',
        tags: [tags.pg86, tags.time, tags.vocab, tags.day]
    },
    {
        kanji: '日曜日',
        hiragana: 'にちようび',
        romaji: 'nichiyoubi',
        definition: 'Sunday',
        lesson: '3',
        tags: [tags.pg86, tags.time, tags.vocab, tags.day]
    },
    {
        kanji: '毎日',
        hiragana: 'まいにち',
        romaji: 'mainichi',
        definition: 'every day',
        lesson: '3',
        tags: [tags.pg86, tags.time, tags.vocab]
    },
    {
        kanji: '毎晩',
        hiragana: 'まいばん',
        romaji: 'maiban',
        definition: 'every night',
        lesson: '3',
        tags: [tags.pg86, tags.time, tags.vocab]
    },
    {
        kanji: '行く',
        hiragana: 'いく',
        romaji: 'iku',
        definition: 'to go',
        lesson: '3',
        tags: [tags.pg86, tags.verb, tags.uVerb, tags.vocab]
    },
    {
        kanji: '帰る',
        hiragana: 'かえる',
        romaji: 'kaeru',
        definition: ['to go back', 'to return'],
        lesson: '3',
        tags: [tags.pg86, tags.verb, tags.uVerb, tags.vocab]
    },
    {
        kanji: '聞く',
        hiragana: 'きく',
        romaji: 'kiku',
        definition: ['to listen', 'to hear'],
        lesson: '3',
        tags: [tags.pg86, tags.verb, tags.uVerb, tags.vocab]
    },
    {
        kanji: '飲む',
        hiragana: 'のむ',
        romaji: 'nomu',
        definition: 'to drink',
        lesson: '3',
        tags: [tags.pg86, tags.verb, tags.uVerb, tags.vocab]
    },
    {
        kanji: '話す',
        hiragana: 'はなす',
        romaji: 'hanasu',
        definition: ['to speak', 'to talk'],
        lesson: '3',
        tags: [tags.pg86, tags.verb, tags.uVerb, tags.vocab]
    },
    {
        kanji: '読む',
        hiragana: 'よむ',
        romaji: 'yomu',
        definition: 'to read',
        lesson: '3',
        tags: [tags.pg86, tags.verb, tags.uVerb, tags.vocab]
    },
    {
        kanji: '起こる',
        hiragana: 'おきる',
        romaji: 'okiru',
        definition: 'to get up',
        lesson: '3',
        tags: [tags.pg86, tags.verb, tags.ruVerb, tags.vocab]
    },
    {
        kanji: '食べる',
        hiragana: 'たべる',
        romaji: 'taberu',
        definition: 'to eat',
        lesson: '3',
        tags: [tags.pg86, tags.verb, tags.ruVerb, tags.vocab]
    },
    {
        kanji: '寝る',
        hiragana: 'ねる',
        romaji: 'neru',
        definition: ['to sleep', 'to go to sleep'],
        lesson: '3',
        tags: [tags.pg86, tags.verb, tags.ruVerb, tags.vocab]
    },
    {
        kanji: '見る',
        hiragana: 'みる',
        romaji: 'miru',
        definition: ['to see', 'to look at', 'to watch'],
        lesson: '3',
        tags: [tags.pg86, tags.verb, tags.ruVerb, tags.vocab]
    },
    {
        kanji: '来る',
        hiragana: 'くる',
        romaji: 'kuru',
        definition: 'to come',
        lesson: '3',
        tags: [tags.pg86, tags.verb, tags.irregularVerb, tags.vocab],
        conjugateTo: 'ru-u'
    },
    {
        hiragana: 'する',
        romaji: 'suru',
        definition: 'to do',
        lesson: '3',
        tags: [tags.pg86, tags.verb, tags.irregularVerb, tags.vocab],
        conjugateTo: 'ru-u'
    },
    {
        kanji: '勉強する',
        hiragana: 'べんきょうする',
        romaji: 'benkyousuru',
        definition: 'to study',
        lesson: '3',
        tags: [tags.pg86, tags.verb, tags.irregularVerb, tags.vocab],
        conjugateTo: 'ru-u'
    },
    {
        hiragana: 'いい',
        romaji: 'ii',
        definition: 'good',
        lesson: '3',
        tags: [tags.pg86, tags.adjective, tags.vocab]
    },
    {
        kanji: '早い',
        hiragana: 'はやい',
        romaji: 'hayai',
        definition: 'early',
        lesson: '3',
        tags: [tags.pg86, tags.adjective, tags.vocab]
    },
    {
        hiragana: 'あまり + negative',
        romaji: 'amari',
        definition: ['not much', 'not often'],
        lesson: '3',
        tags: [tags.pg86, tags.adverb, tags.vocab]
    },
    {
        kanji: '全然',
        hiragana: 'ぜんぜん + negative',
        romaji: 'zenzen',
        definition: 'not at all',
        lesson: '3',
        tags: [tags.pg86, tags.adverb, tags.vocab]
    },
    {
        hiragana: 'たいてい',
        romaji: 'taitei',
        definition: 'usually',
        lesson: '3',
        tags: [tags.pg86, tags.adverb, tags.vocab]
    },
    {
        hiragana: 'ちょっと',
        romaji: 'chotto',
        definition: 'a little',
        lesson: '3',
        tags: [tags.pg86, tags.adverb, tags.vocab]
    },
    {
        kanji: '時々',
        hiragana: 'ときどき',
        romaji: 'tokidoki',
        definition: 'sometimes',
        lesson: '3',
        tags: [tags.pg86, tags.adverb, tags.vocab]
    },
    {
        hiragana: 'よく',
        romaji: 'yoku',
        definition: ['often', 'much'],
        lesson: '3',
        tags: [tags.pg86, tags.adverb, tags.vocab]
    },
    {
        hiragana: 'そうですね',
        romaji: 'soudesune',
        definition: ['That\'s right', 'Let me see'],
        lesson: '3',
        tags: [tags.pg86, tags.phrase, tags.vocab]
    },
    {
        hiragana: 'でも',
        romaji: 'demo',
        definition: 'but',
        lesson: '3',
        tags: [tags.pg86, tags.phrase, tags.vocab]
    },
    {
        hiragana: 'どうですか',
        romaji: 'doudesuka',
        definition: ['How about...?', 'How is...?'],
        lesson: '3',
        tags: [tags.pg86, tags.phrase, tags.vocab]
    },

    // Lesson 4

    // Page 104
    {
        katakana: 'アリバイト',
        romaji: 'aribaito',
        definition: 'part-time job',
        lesson: '4',
        tags: [tags.noun, tags.activity, tags.vocab, tags.pg104]
    },
    {
        kanji: '買い物',
        hiragana: 'かいもの',
        romaji: 'kaimono',
        definition: 'shopping',
        lesson: '4',
        tags: [tags.noun, tags.activity, tags.vocab, tags.pg104]
    },
    {
        katakana: 'クラス',
        romaji: 'kurasu',
        definition: 'class',
        lesson: '4',
        tags: [tags.noun, tags.activity, tags.vocab, tags.pg104]
    },
    {
        hiragana: 'あなた',
        romaji: 'anata',
        definition: 'you',
        lesson: '4',
        tags: [tags.noun, tags.person, tags.vocab, tags.pg104]
    },
    {
        kanji: '犬',
        hiragana: 'いぬ',
        romaji: 'inu',
        definition: 'dog',
        lesson: '4',
        tags: [tags.noun, tags.animal, tags.thing, tags.vocab, tags.pg104]
    },
    {
        kanji: 'お土産',
        hiragana: 'おみやぎ',
        romaji: 'omiyagi',
        definition: 'souvenir',
        lesson: '4',
        tags: [tags.noun, tags.thing, tags.vocab, tags.pg104]
    },
    {
        kanji: '子供',
        hiragana: 'こども',
        romaji: 'kodomo',
        definition: 'child',
        lesson: '4',
        tags: [tags.noun, tags.person, tags.vocab, tags.pg104]
    },
    {
        kanji: 'ご飯',
        hiragana: 'ごはん',
        romaji: 'gohan',
        definition: ['rice', 'meal'],
        lesson: '4',
        tags: [tags.noun, tags.food, tags.vocab, tags.pg104]
    },
    {
        kanji: '写真',
        hiragana: 'しゃしん',
        romaji: 'shashin',
        definition: ['picture', 'photograph'],
        lesson: '4',
        tags: [tags.noun, tags.thing, tags.vocab, tags.pg104]
    },
    {
        kanji: '手紙',
        hiragana: 'てがみ',
        romaji: 'tegami',
        definition: 'letter (writing)',
        lesson: '4',
        tags: [tags.noun, tags.thing, tags.vocab, tags.pg104]
    },
    {
        kanji: '猫',
        hiragana: 'ねこ',
        romaji: 'neko',
        definition: 'cat',
        lesson: '4',
        tags: [tags.noun, tags.animal, tags.thing, tags.pg104]
    },
    {
        katakana: 'パン',
        romaji: 'pan',
        definition: 'bread',
        lesson: '4',
        tags: [tags.noun, tags.thing, tags.vocab, tags.pg104]
    },
    {
        kanji: '人',
        hiragana: 'ひと',
        romaji: 'hito',
        definition: 'person',
        lesson: '4',
        tags: [tags.noun, tags.person, tags.vocab, tags.pg104]
    },
    {
        katakana: 'メｰル',
        romaji: 'meeru',
        definition: 'e-mail',
        lesson: '4',
        tags: [tags.noun, tags.thing, tags.vocab, tags.pg104]
    },
    {
        kanji: 'お寺',
        hiragana: 'おてら',
        romaji: 'otera',
        definition: 'temple',
        lesson: '4',
        tags: [tags.noun, tags.place, tags.vocab, tags.pg104]
    },
    {
        kanji: '公園',
        hiragana: 'こうえん',
        romaji: 'kouen',
        definition: 'park',
        lesson: '4',
        tags: [tags.noun, tags.place, tags.vocab, tags.pg104]
    },
    {
        katakana: 'スーパー',
        romaji: 'suupaa',
        definition: 'supermarket',
        lesson: '4',
        tags: [tags.noun, tags.place, tags.vocab, tags.pg104]
    },
    {
        katakana: 'デパート',
        romaji: 'depaato',
        definition: 'department store',
        lesson: '4',
        tags: [tags.noun, tags.place, tags.vocab, tags.pg104]
    },
    {
        kanji: 'バス停',
        hiragana: 'バスてい',
        romaji: 'basutei',
        definition: 'bus stop',
        lesson: '4',
        tags: [tags.noun, tags.place, tags.vocab, tags.pg104]
    },
    {
        kanji: '病院',
        hiragana: 'びょういん',
        romaji: 'byouin',
        definition: 'hospital',
        lesson: '4',
        tags: [tags.noun, tags.place, tags.vocab, tags.pg104]
    },
    {
        hiragana: 'ホテル',
        romaji: 'hoteru',
        definition: 'hotel',
        lesson: '4',
        tags: [tags.noun, tags.place, tags.vocab, tags.pg104]
    },
    {
        kanji: '本屋',
        hiragana: 'ほんや',
        romaji: 'honya',
        definition: 'bookstore',
        lesson: '4',
        tags: [tags.noun, tags.place, tags.vocab, tags.pg104]
    },
    {
        kanji: '町',
        hiragana: 'まち',
        romaji: 'machi',
        definition: ['town', 'city'],
        lesson: '4',
        tags: [tags.noun, tags.place, tags.vocab, tags.pg104]
    },
    {
        katakana: 'レストラン',
        romaji: 'resutoran',
        definition: 'restaurant',
        lesson: '4',
        tags: [tags.noun, tags.place, tags.vocab, tags.pg104]
    },
    {
        kanji: '昨日',
        hiragana: 'きのう',
        romaji: 'kinou',
        definition: 'yesterday',
        lesson: '4',
        tags: [tags.time, tags.noun, tags.vocab, tags.pg104]
    },
    {
        kanji: '〜時間',
        hiragana: '〜じかん',
        romaji: 'jikan',
        definition: '...hours',
        lesson: '4',
        tags: [tags.time, tags.noun, tags.vocab, tags.pg104]
    },
    {
        kanji: '一時間',
        hiragana: 'いちじかん',
        romaji: 'ichijikan',
        definition: 'one hour',
        lesson: '4',
        tags: [tags.time, tags.noun, tags.vocab, tags.pg104]
    },
    {
        kanji: '先週',
        hiragana: 'せんしゅう',
        romaji: 'senshuu',
        definition: 'last week',
        lesson: '4',
        tags: [tags.time, tags.vocab, tags.noun, tags.pg104]
    },
    {
        kanji: '時',
        hiragana: 'とき',
        romaji: 'toki',
        definition: ['when...', 'at the time of...'],
        lesson: '4',
        tags: [tags.time, tags.vocab, tags.noun, tags.pg104]
    },
    {
        kanji: '月曜日',
        hiragana: 'げつようび',
        romaji: 'getsuyoubi',
        definition: 'Monday',
        lesson: '4',
        tags: [tags.time, tags.day, tags.vocab, tags.pg104]
    },
    {
        kanji: '火曜日',
        hiragana: 'かようび',
        romaji: 'kayoubi',
        definition: 'Tuesday',
        lesson: '4',
        tags: [tags.time, tags.day, tags.vocab, tags.pg104]
    },
    {
        kanji: '水曜日',
        hiragana: 'すいようび',
        romaji: 'suiyoubi',
        definition: 'Wednesday',
        lesson: '4',
        tags: [tags.time, tags.day, tags.vocab, tags.pg104]
    },
    {
        kanji: '木曜日',
        hiragana: 'もくようび',
        romaji: 'mokuyoubi',
        definition: 'Thursday',
        lesson: '4',
        tags: [tags.time, tags.day, tags.vocab, tags.pg104]
    },
    {
        kanji: '金曜日',
        hiragana: 'きにょうび',
        romaji: 'kinyoubi',
        definition: 'Friday',
        lesson: '4',
        tags: [tags.time, tags.day, tags.vocab, tags.pg104]
    },
    {
        kanji: '会う',
        hiragana: 'あう',
        romaji: 'au',
        definition: ['to meet', 'to see (a person)'],
        lesson: '4',
        tags: [tags.verb, tags.uVerb, tags.vocab, tags.pg104]
    },
    {
        hiragana: 'ある',
        romaji: 'aru',
        definition: 'there is...',
        lesson: '4',
        tags: [tags.verb, tags.uVerb, tags.vocab, tags.pg104]
    },
    {
        kanji: '買う',
        hiragana: 'かう',
        romaji: 'kau',
        definition: 'to buy',
        lesson: '4',
        tags: [tags.verb, tags.uVerb, tags.vocab, tags.pg104]
    },
    {
        kanji: '書く',
        hiragana: 'かく',
        romaji: 'kaku',
        definition: 'to write',
        lesson: '4',
        tags: [tags.verb, tags.uVerb, tags.vocab, tags.pg104]
    },
    {
        kanji: '撮る',
        hiragana: 'とる',
        romaji: 'toru',
        definition: 'to take (a picture)',
        lesson: '4',
        tags: [tags.verb, tags.uVerb, tags.vocab, tags.pg104]
    },
    {
        kanji: '持つ',
        hiragana: 'もつ',
        romaji: 'motsu',
        definition: 'to wait',
        lesson: '4',
        tags: [tags.verb, tags.uVerb, tags.vocab, tags.pg104]
    },
    {
        hiragana: 'わかる',
        romaji: 'wakaru',
        definition: 'to understand',
        lesson: '4',
        tags: [tags.verb, tags.uVerb, tags.vocab, tags.pg104]
    },
    {
        hiragana: 'いる',
        romaji: 'iru',
        definition: ['(a person) is in...', 'stays at...'],
        lesson: '4',
        tags: [tags.verb, tags.ruVerb, tags.vocab, tags.pg104]
    },
    {
        hiragana: '〜ぐらい',
        romaji: 'gurai',
        definition: 'about (approx. measurement)',
        lesson: '4',
        tags: [tags.adverb, tags.vocab, tags.pg104]
    },
    {
        hiragana: 'ごめんなさい',
        romaji: 'gomennasai',
        definition: 'I\'m sorry',
        lesson: '4',
        tags: [tags.phrase, tags.vocab, tags.pg104]
    },
    {
        hiragana: 'だから',
        romaji: 'dakara',
        definition: ['so', 'therefore'],
        lesson: '4',
        tags: [tags.adverb, tags.vocab, tags.pg104]
    },
    {
        hiragana: 'たくさん',
        romaji: 'takusan',
        definition: ['many', 'a lot'],
        lesson: '4',
        tags: [tags.adverb, tags.vocab, tags.pg104]
    },
    {
        hiragana: '〜と',
        romaji: 'to',
        definition: 'together with (a person)',
        lesson: '4',
        tags: [tags.phrase, tags.vocab, tags.pg104]
    },
    {
        hiragana: 'どうして',
        romaji: 'doushite',
        definition: 'why',
        lesson: '4',
        tags: [tags.adverb, tags.vocab, tags.pg104]
    },
    {
        kanji: '一人で',
        hiragana: 'ひとりで',
        romaji: 'hitoride',
        definition: 'alone',
        lesson: '4',
        tags: [tags.adverb, tags.vocab, tags.pg104]
    },

    // Page 106
    {
        kanji: '右',
        hiragana: 'みぎ',
        romaji: 'migi',
        definition: 'right',
        lesson: '4',
        tags: [tags.preposition, tags.pg106]
    },
    {
        kanji: '左',
        hiragana: 'ひだり',
        romaji: 'hidari',
        definition: 'left',
        lesson: '4',
        tags: [tags.preposition, tags.pg106]
    },
    {
        kanji: '前',
        hiragana: 'まえ',
        romaji: 'mae',
        definition: 'front',
        lesson: '4',
        tags: [tags.preposition, tags.pg106]
    },
    {
        kanji: '後ろ',
        hiragana: 'うしろ',
        romaji: 'ushiro',
        definition: 'back',
        lesson: '4',
        tags: [tags.preposition, tags.pg106]
    },
    {
        kanji: '中',
        hiragana: 'なか',
        romaji: 'naka',
        definition: 'inside',
        lesson: '4',
        tags: [tags.preposition, tags.pg106]
    },
    {
        kanji: '上',
        hiragana: 'うえ',
        romaji: 'ue',
        definition: 'on',
        lesson: '4',
        tags: [tags.preposition, tags.pg106]
    },
    {
        kanji: '下',
        hiragana: 'した',
        romaji: 'shita',
        definition: 'under',
        lesson: '4',
        tags: [tags.preposition, tags.pg106]
    },
    {
        kanji: '近く',
        hiragana: 'ちかく',
        romaji: 'chikaku',
        definition: ['near', 'nearby'],
        lesson: '4',
        tags: [tags.preposition, tags.pg106]
    },
    {
        kanji: '隣',
        hiragana: 'となり',
        romaji: 'tonari',
        definition: 'next',
        lesson: '4',
        tags: [tags.preposition, tags.pg106]
    },
    {
        kanji: '間',
        hiragana: 'あいだ',
        romaji: 'aida',
        definition: 'between',
        lesson: '4',
        tags: [tags.preposition, tags.pg106]
    },

    // Page 127
    {
        kanji: '一月',
        hiragana: 'いちがつ',
        romaji: 'ichigatsu',
        definition: 'January',
        lesson: '4',
        tags: [tags.time, tags.noun, tags.month]
    },
    {
        kanji: '二月',
        hiragana: 'にがつ',
        romaji: 'nigatsu',
        definition: 'February',
        lesson: '4',
        tags: [tags.time, tags.noun, tags.month]
    },
    {
        hiragana: 'おととい',
        romaji: 'ototoi',
        definition: 'day before yesterday',
        lesson: '4',
        tags: [tags.time]
    },
    {
        hiragana: 'あさって',
        romaji: 'asatte',
        definition: 'the day after tomorrow',
        lesson: '4',
        tags: [tags.time]
    },
    {
        kanji: '二週間前',
        hiragana: 'にしゅうかんまえ',
        romaji: 'nishuukanmae',
        definition: 'two weeks ago',
        lesson: '4',
        tags: [tags.time]
    },
    {
        kanji: '今週',
        hiragana: 'こんしゅう',
        romaji: 'konshuu',
        definition: 'this week',
        lesson: '4',
        tags: [tags.time]
    },
    {
        kanji: '来週',
        hiragana: 'らいしゅう',
        romaji: 'raishuu',
        definition: 'next week',
        lesson: '4',
        tags: [tags.time]
    },
    {
        kanji: '再来週',
        hiragana: 'さらいしゅう',
        romaji: 'saraishuu',
        definition: 'the week after next',
        lesson: '4',
        tags: [tags.time]
    },
    {
        kanji: '二ヶ月前',
        hiragana: 'にかげつまえ',
        romaji: 'nikagetsumae',
        definition: 'two months ago',
        lesson: '4',
        tags: [tags.time]
    },
    {
        kanji: '先月',
        hiragana: 'せんげつ',
        romaji: 'sengetsu',
        definition: 'last month',
        lesson: '4',
        tags: [tags.time]
    },
    {
        kanji: '今月',
        hiragana: 'こんげつ',
        romaji: 'kongetsu',
        definition: 'this month',
        lesson: '4',
        tags: [tags.time]
    },
    {
        kanji: '来月',
        hiragana: 'らいげつ',
        romaji: 'raigetsu',
        definition: 'next month',
        lesson: '4',
        tags: [tags.time]
    },
    {
        kanji: '再来月',
        hiragana: 'さらいげつ',
        romaji: 'saraigetsu',
        definition: 'the month after next',
        lesson: '4',
        tags: [tags.time]
    },
    {
        hiragana: 'おととし',
        romaji: 'ototoshi',
        definition: 'the year before last',
        lesson: '4',
        tags: [tags.time]
    },
    {
        kanji: '去年',
        hiragana: 'きょねん',
        romaji: 'kyonen',
        definition: 'last year',
        lesson: '4',
        tags: [tags.time]
    },
    {
        kanji: '今年',
        hiragana: 'ことし',
        romaji: 'kotoshi',
        definition: 'this year',
        lesson: '4',
        tags: [tags.time]
    },
    {
        kanji: '来年',
        hiragana: 'らいねん',
        romaji: 'rainen',
        definition: 'next year',
        lesson: '4',
        tags: [tags.time]
    },
    {
        kanji: '再来年',
        hiragana: 'さらいねん',
        romaji: 'sarainen',
        definition: 'the year after next',
        lesson: '4',
        tags: [tags.time]
    },
    // NEED TO ADD MORE FROM PAGE 127 (DAYS OF MONTH)


    // PAGE 130
    {
        kanji: '海',
        hiragana: 'うみ',
        romaji: 'umi',
        definition: 'sea',
        lesson: '5',
        tags: [tags.vocab, tags.noun, tags.pg130]
    },
    {
        kanji: '切手',
        hiragana: 'きって',
        romaji: 'kitte',
        definition: 'postal stamps',
        lesson: '5',
        tags: [tags.vocab, tags.noun, tags.pg130]
    },
    {
        kanji: '切符',
        hiragana: 'きっぷ',
        romaji: 'kippu',
        definition: 'ticket',
        lesson: '5',
        tags: [tags.vocab, tags.noun, tags.pg130]
    },
    {
        katakana: 'サーフィン',
        romaji: 'saafin',
        definition: 'surfing',
        lesson: '5',
        tags: [tags.vocab, tags.noun, tags.activity, tags.pg130]
    },
    {
        kanji: '宿題',
        hiragana: 'しゅくだい',
        romaji: 'shukudai',
        definition: 'homework',
        lesson: '5',
        tags: [tags.vocab, tags.noun, tags.pg130]
    },
    {
        kanji: '食べ物',
        hiragana: 'たべもの',
        romaji: 'tabemono',
        definition: 'food',
        lesson: '5',
        tags: [tags.vocab, tags.noun, tags.pg130]
    },
    {
        kanji: '誕生日',
        hiragana: 'たんじょうび',
        romaji: 'tanjoubi',
        definition: 'birthday',
        lesson: '5',
        tags: [tags.vocab, tags.noun, tags.pg130]
    },
    {
        katakana: 'テスト',
        romaji: 'tesuto',
        definition: 'test',
        lesson: '5',
        tags: [tags.vocab, tags.noun, tags.pg130]
    },
    {
        kanji: '天気',
        hiragana: 'てんき',
        romaji: 'tenki',
        definition: 'weather',
        lesson: '5',
        tags: [tags.vocab, tags.noun, tags.pg130]
    },
    {
        kanji: '飲み物',
        hiragana: 'のみもの',
        romaji: 'nomimono',
        definition: 'drink',
        lesson: '5',
        tags: [tags.vocab, tags.noun, tags.pg130]
    },
    {
        kanji: '葉書',
        hiragana: 'はがき',
        romaji: 'hagaki',
        definition: 'postcard',
        lesson: '5',
        tags: [tags.vocab, tags.noun, tags.pg130]
    },
    {
        katakana: 'バス',
        romaji: 'basu',
        definition: 'bus',
        lesson: '5',
        tags: [tags.vocab, tags.noun, tags.pg130]
    },
    {
        kanji: '飛行機',
        hiragana: 'ひこうき',
        romaji: 'hikouki',
        definition: 'airplane',
        lesson: '5',
        tags: [tags.vocab, tags.noun, tags.pg130]
    },
    {
        kanji: '部屋',
        hiragana: 'へや',
        romaji: 'heya',
        definition: 'room',
        lesson: '5',
        tags: [tags.vocab, tags.noun, tags.pg130]
    },
    {
        kanji: '爆',
        hiragana: 'ばく',
        romaji: 'baku',
        definition: 'I (used by men)',
        lesson: '5',
        tags: [tags.vocab, tags.noun, tags.pg130]
    },
    {
        kanji: '休み',
        hiragana: 'やすみ',
        romaji: 'yasumi',
        definition: ['holiday', 'day off', 'absence'],
        lesson: '5',
        tags: [tags.vocab, tags.noun, tags.pg130]
    },
    {
        kanji: '旅行',
        hiragana: 'りょこう',
        romaji: 'ryokou',
        definition: 'travel',
        lesson: '5',
        tags: [tags.vocab, tags.noun, tags.pg130]
    },
    {
        kanji: '新しい',
        hiragana: 'あたらしい',
        romaji: 'atarashii',
        definition: 'new',
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.iAdjective]
    },
    {
        kanji: '暑い',
        hiragana: 'あつい',
        romaji: 'atsui',
        definition: 'hot (weather)',
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.iAdjective]
    },
    {
        kanji: '熱い',
        hiragana: 'あつい',
        romaji: 'atsui',
        definition: 'hot (thing)',
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.iAdjective]
    },
    {
        kanji: '忙しい',
        hiragana: 'いそがしい',
        romaji: 'isogashii',
        definition: 'busy (people/days)',
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.iAdjective]
    },
    {
        kanji: '大きい',
        hiragana: 'おおきい',
        romaji: 'ookii',
        definition: 'large',
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.iAdjective]
    },
    {
        kanji: '面白い',
        hiragana: 'おもしろい',
        romaji: 'omoshiroi',
        definition: ['interesting', 'funny'],
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.iAdjective]
    },
    {
        hiragana: 'かっこいい',
        romaji: 'kakkoii',
        definition: 'good-looking',
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.iAdjective]
    },
    {
        kanji: '怖い',
        hiragana: 'こわい',
        romaji: 'kowai',
        definition: 'frightening',
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.iAdjective]
    },
    {
        kanji: '寒い',
        hiragana: 'さむい',
        romaji: 'samui',
        definition: 'cold (weather)',
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.iAdjective]
    },
    {
        kanji: '楽しい',
        hiragana: 'たのしい',
        romaji: 'tanoshi',
        definition: 'fun',
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.iAdjective]
    },
    {
        kanji: '小さい',
        hiragana: 'ちいさい',
        romaji: 'chiisai',
        definition: 'small',
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.iAdjective]
    },
    {
        hiragana: 'つまらない',
        romaji: 'tsumaranai',
        definition: 'boring',
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.iAdjective]
    },
    {
        kanji: '古い',
        hiragana: 'ふるい',
        romaji: 'furui',
        definition: 'old (thing)',
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.iAdjective]
    },
    {
        kanji: '難しい',
        hiragana: 'むずかしい',
        romaji: 'muzukashii',
        definition: 'difficult',
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.iAdjective]
    },
    {
        hiragana: 'やさしい',
        romaji: 'yasashii',
        definition: ['easy (problem)', 'kind (person)'],
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.iAdjective]
    },
    {
        kanji: '安い',
        hiragana: 'やすい',
        romaji: 'yasui',
        definition: ['inexpensive', 'cheap (thing)'],
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.iAdjective, tags.pg130]
    },
    {
        kanji: '嫌い',
        hiragana: 'きらい',
        romaji: 'kirai',
        definition: ['disgusted with', 'to dislike'],
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.naAdjective]
    },
    {
        hiragana: 'きれい',
        romaji: 'kirei',
        definition: ['beautiful', 'clean'],
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.naAdjective]
    },
    {
        kanji: '元気',
        hiragana: 'げんき',
        romaji: '',
        definition: ['healthy', 'energetic'],
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.naAdjective]
    },
    {
        kanji: '静か',
        hiragana: 'しずか',
        romaji: 'shizuka',
        definition: 'quiet',
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.naAdjective]
    },
    {
        kanji: '好き',
        hiragana: 'すき',
        romaji: 'suki',
        definition: ['fond of', 'to like'],
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.naAdjective]
    },
    {
        kanji: '大嫌い',
        hiragana: 'だいきらい',
        romaji: 'daikirai',
        definition: 'to hate',
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.naAdjective]
    },
    {
        kanji: '大好き',
        hiragana: 'だいすき',
        romaji: 'daisuki',
        definition: ['very fond of', 'to love'],
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.naAdjective]
    },
    {
        hiragana: 'にぎやか',
        romaji: 'nigiyaka',
        definition: 'lively',
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.naAdjective]
    },
    {
        kanji: '暇',
        hiragana: 'ひま',
        romaji: 'hima',
        definition: ['not busy', 'to have a lot of free time'],
        lesson: '5',
        tags: [tags.vocab, tags.adjective, tags.pg130, tags.naAdjective]
    },
    {
        kanji: '泳ぐ',
        hiragana: 'およぐ',
        romaji: 'oyogu',
        definition: 'to swim',
        lesson: '5',
        tags: [tags.vocab, tags.verb, tags.pg130, tags.uVerb]
    },
    {
        kanji: '聞く',
        hiragana: 'きく',
        romaji: 'kiku',
        definition: 'to ask',
        lesson: '5',
        tags: [tags.vocab, tags.verb, tags.pg130, tags.uVerb]
    },
    {
        kanji: '乗る',
        hiragana: 'のる',
        romaji: 'noru',
        definition: ['to ride', 'to board'],
        lesson: '5',
        tags: [tags.vocab, tags.verb, tags.pg130, tags.uVerb]
    },
    {
        hiragana: 'やる',
        romaji: 'yaru',
        definition: ['to do', 'to perform'],
        lesson: '5',
        tags: [tags.vocab, tags.verb, tags.pg130, tags.uVerb]
    },
    {
        kanji: '出かける',
        hiragana: 'でかける',
        romaji: 'dekakeru',
        definition: 'to go out',
        lesson: '5',
        tags: [tags.vocab, tags.verb, tags.pg130, tags.ruVerb]
    },
    {
        kanji: '一緒に',
        hiragana: 'いっしょに',
        romaji: 'isshoni',
        definition: 'together',
        lesson: '5',
        tags: [tags.vocab, tags.adverb, tags.pg130]
    },
    {
        hiragana: 'すごく',
        romaji: 'sugoku',
        definition: 'extremely',
        lesson: '5',
        tags: [tags.vocab, tags.adverb, tags.pg130]
    },
    {
        hiragana: 'それから',
        romaji: 'sorekara',
        definition: 'and then',
        lesson: '5',
        tags: [tags.vocab, tags.pg130]
    },
    {
        kanji: '大丈夫',
        hiragana: 'だいじょうぶ',
        romaji: 'daijoubu',
        definition: ['It\'s okay.', 'Not to worry.'],
        lesson: '5',
        tags: [tags.vocab, tags.pg130, tags.phrase]
    },
    {
        hiragana: 'とでも',
        romaji: 'todemo',
        definition: 'very',
        lesson: '5',
        tags: [tags.vocab, tags.adverb, tags.pg130]
    },
    {
        hiragana: 'どんな',
        romaji: 'donna',
        definition: 'what kind of...',
        lesson: '5',
        tags: [tags.vocab, tags.phrase, tags.pg130]
    },
    {
        kanji: '〜枚',
        hiragana: '〜まい',
        romaji: '~mai',
        definition: '[counter for flat objects]',
        lesson: '5',
        tags: [tags.vocab, tags.pg130]
    },
    {
        hiragana: 'まで',
        romaji: 'made',
        definition: ['to (a place)', 'as far as (a place)', 'till (a time)'],
        lesson: '5',
        tags: [tags.vocab, tags.adverb, tags.pg130]
    },
    // MORE FROM PAGE 131

    // MORE FROM PAGE 145 (LESSON 5)

    {
        kanji: 'お金',
        hiragana: 'おかね',
        romaji: 'okane',
        definition: 'money',
        lesson: '6',
        tags: [tags.vocab, tags.noun, tags.pg148, tags.thing]
    },
    {
        kanji: 'お風呂',
        hiragana: 'おふろ',
        definition: 'bath',
        lesson: '6',
        tags: [tags.vocab, tags.noun, tags.pg148]
    },
    {
        kanji: '漢字',
        hiragana: 'かんじ',
        definition: ['kanji', 'Chinese character'],
        lesson: '6',
        tags: [tags.vocab, tags.noun, tags.pg148]
    },
    {
        kanji: '教科書',
        hiragana: 'きょうかしょ',
        definition: 'textbook',
        lesson: '6',
        tags: [tags.vocab, tags.noun, tags.pg148, tags.thing]
    },
    {
        kanji: '今週',
        hiragana: 'こんしゅう',
        definition: 'this week',
        lesson: '6',
        tags: [tags.vocab, tags.noun, tags.pg148, tags.thing]
    },
    {
        katakana: 'シーでィー',
        definition: ['CD'],
        lesson: '6',
        tags: [tags.vocab, tags.noun, tags.pg148, tags.thing]
    },
    {
        kanji: '市民病院',
        hiragana: 'しみんびょういん',
        definition: [
            'municipal hospital'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.noun, tags.pg148, tags.thing]
    },
    {
        kanji: 'シャワー',
        definition: [
            'shower'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.noun, tags.pg148]

    },
    {
        hiragana: 'つぎ',
        kanji: '次',
        definition: [
            'next'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.noun, tags.pg148]
    },
    {
        hiragana: 'でんき',
        kanji: '電気',
        definition: [
            'electricity'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.noun, tags.pg148]
    },
    {
        hiragana: 'でんしゃ',
        kanji: '電車',
        definition: [
            'train'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.noun, tags.pg148]
    },
    {
        hiragana: 'にもつ',
        kanji: '荷物',
        definition: [
            'baggage'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.noun, tags.pg148]
    },
    {
        'katakana': 'パソコン',
        definition: [
            'personal computer'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.noun, tags.pg148]
    },
    {
        kanji: 'ページ',
        definition: [
            'page'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.noun, tags.pg148]
    },
    {
        hiragana: 'まど',
        kanji: '窓',
        definition: [
            'window'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.noun, tags.pg148]
    },
    {
        hiragana: 'よる',
        kanji: '夜',
        definition: [
            'night'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.noun, tags.pg148]
    },
    {
        hiragana: 'らいしゅう',
        kanji: '来週',
        definition: [
            'next week'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.noun, tags.pg148]
    },
    {
        hiragana: 'らいねん',
        kanji: '来年',
        definition: [
            'next year'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.noun, tags.pg148]
    },
    {
        hiragana: 'たいへん(な)',
        kanji: '大変',
        definition: [
            'tough (situation)'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.adjective, tags.naAdjective, tags.pg148]
    },
    {
        hiragana: 'あそぶ',
        kanji: '遊ぶ',
        definition: [
            'to play',
            'to spend time pleasantly'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.verb, tags.uVerb, tags.pg148]
    },
    {
        hiragana: 'いそぐ',
        kanji: '急ぐ',
        definition: [
            'to hurry'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.verb, tags.uVerb, tags.pg148]
    },
    {
        hiragana: 'おふろにはいる',
        kanji: 'お風呂に入る',
        definition: [
            'to take a bath'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.verb, tags.uVerb, tags.pg148]
    },
    {
        hiragana: 'かえす',
        kanji: '返す',
        definition: [
            'to return (a thing)'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.verb, tags.uVerb, tags.pg148]
    },
    {
        hiragana: 'けす',
        kanji: '消す',
        definition: [
            'to turn off',
            'to erase'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.verb, tags.uVerb, tags.pg148]
    },
    {
        hiragana: 'しぬ',
        kanji: '死ぬ',
        definition: [
            'to die'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.verb, tags.uVerb, tags.pg148]
    },
    {
        hiragana: 'すわる',
        kanji: '座る',
        definition: [
            'to sit down'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.verb, tags.uVerb, tags.pg148]
    },
    {
        hiragana: 'たつ',
        kanji: '立つ',
        definition: [
            'to stand up'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.verb, tags.uVerb, tags.pg148]
    },
    {
        hiragana: 'たばこをすう',
        kanji: 'たばこを吸う',
        definition: [
            'to smoke'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.verb, tags.uVerb, tags.pg148]
    },
    {
        hiragana: 'つかう',
        kanji: '使う',
        definition: [
            'to use'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.verb, tags.uVerb, tags.pg148]
    },
    {
        hiragana: 'てつだう',
        kanji: '手伝う',
        definition: [
            'to help'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.verb, tags.uVerb, tags.pg148]
    },
    {
        hiragana: 'はいる',
        kanji: '入る',
        definition: [
            'to enter'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.verb, tags.uVerb, tags.pg148]
    },
    {
        hiragana: 'もつ',
        kanji: '持つ',
        definition: [
            'to carry',
            'to hold'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.verb, tags.uVerb, tags.pg148]
    },
    {
        hiragana: 'やすむ',
        kanji: '休む',
        definition: [
            'to be absent (from...)',
            'to rest'
        ],
        lesson: '6',
        tags: [tags.vocab, tags.verb, tags.uVerb, tags.pg148]
    },
    {
        hiragana: 'あける',
        lesson: '6',
        kanji: '開ける',
        definition: [
            'to open (something)'
        ],
        tags: [tags.vocab, tags.verb, tags.ruVerb, tags.pg148]
    },
    {
        hiragana: 'おしえる',
        lesson: '6',
        kanji: '教える',
        definition: [
            'to teach',
            'to instruct'
        ],
        tags: [tags.vocab, tags.verb, tags.ruVerb, tags.pg148]
    },
    {
        hiragana: 'おりる',
        lesson: '6',
        kanji: '降りる',
        definition: [
            'to get off'
        ],
        tags: [tags.vocab, tags.verb, tags.ruVerb, tags.pg148]
    },
    {
        hiragana: 'かりる',
        lesson: '6',
        kanji: '借りる',
        definition: [
            'to borrow'
        ],
        tags: [tags.vocab, tags.verb, tags.ruVerb, tags.pg148]
    },
    {
        hiragana: 'しめる',
        lesson: '6',
        kanji: '閉める',
        definition: [
            'to close (something)'
        ],
        tags: [tags.vocab, tags.verb, tags.ruVerb, tags.pg148]
    },
    {
        katakana: 'シャワーをあびる',
        lesson: '6',
        kanji: 'シャワーを浴びる',
        definition: [
            'to take a shower'
        ],
        tags: [tags.vocab, tags.verb, tags.ruVerb, tags.pg148]
    },
    {
        hiragana: 'つける',
        lesson: '6',
        definition: [
            'to turn on'
        ],
        tags: [tags.vocab, tags.verb, tags.ruVerb, tags.pg148]
    },
    {
        hiragana: 'でんわをかける',
        lesson: '6',
        kanji: '電話をかける',
        definition: [
            'to make a phone call'
        ],
        tags: [tags.vocab, tags.verb, tags.ruVerb, tags.pg148]
    },
    {
        hiragana: 'わすれる',
        lesson: '6',
        kanji: '忘れる',
        definition: [
            'to forget',
            'to leave behind'
        ],
        tags: [tags.vocab, tags.verb, tags.ruVerb, tags.pg148]
    },
    {
        hiragana: 'つれてくる',
        lesson: '6',
        kanji: '連れてくる',
        definition: [
            'to bring (a person)'
        ],
        tags: [tags.vocab, tags.verb, tags.irregularVerb, tags.pg148],
        conjugateTo: 'ru-u'
    },
    {
        hiragana: 'もってくる',
        lesson: '6',
        kanji: '持ってくる',
        definition: [
            'to bring (a thing)'
        ],
        tags: [tags.vocab, tags.verb, tags.irregularVerb, tags.pg148],
        conjugateTo: 'ru-u'
    },
    {
        hiragana: 'あとで',
        lesson: '6',
        kanji: '後で',
        definition: [
            'later on'
        ],
        tags: [tags.vocab, tags.pg148]
    },
    {
        hiragana: 'おそく',
        lesson: '6',
        kanji: '遅く',
        definition: [
            '(do something) late'
        ],
        tags: [tags.vocab, tags.pg148]
    },
    {
        hiragana: '〜から',
        lesson: '6',
        definition: [
            'because...'
        ],
        tags: [tags.vocab, tags.pg148]
    },
    {
        hiragana: 'けっこうです',
        lesson: '6',
        kanji: '結構です',
        definition: [
            'That would be fine.',
            'That wouldn\'t be necessary.'
        ],
        tags: [tags.vocab, tags.phrase, tags.pg148]
    },
    {
        hiragana: 'すぐ',
        lesson: '6',
        definition: [
            'right away'
        ],
        tags: [tags.vocab, tags.pg148]
    },
    {
        hiragana: 'ほんとうですか',
        lesson: '6',
        kanji: '本当ですか',
        definition: [
            'Really?'
        ],
        tags: [tags.vocab, tags.phrase, tags.pg148]
    },
    {
        hiragana: 'ゆっくり',
        lesson: '6',
        definition: [
            'Slowly',
            'leisurely',
            'unhurriedly'
        ],
        tags: [tags.vocab, tags.adverb, tags.pg148]
    }
    // MORE FROM PAGE 148 (LESSON 6)
];
