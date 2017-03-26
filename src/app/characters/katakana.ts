import { CharacterModel } from './character.model';

export const Katakana: CharacterModel[] = [
  { r: 'a', c: 'ア' },
  { r: 'i', c: 'イ' },
  { r: 'u', c: 'ウ' },
  { r: 'e', c: 'エ' },
  { r: 'o', c: 'オ' },

  { r: 'ka', c: 'カ' },
  { r: 'ki', c: 'キ' },
  { r: 'ku', c: 'ク' },
  { r: 'ke', c: 'ケ' },
  { r: 'ko', c: 'コ' },

  { r: 'sa', c: 'サ' },
  { r: 'shi', c: 'シ' },
  { r: 'su', c: 'ス' },
  { r: 'se', c: 'セ' },
  { r: 'so', c: 'ソ' },

  { r: 'ta', c: 'タ' },
  { r: 'chi', c: 'チ' },
  { r: 'tsu', c: 'ツ' },
  { r: 'te', c: 'テ' },
  { r: 'to', c: 'ト' },

  { r: 'na', c: 'ナ' },
  { r: 'ni', c: 'ニ' },
  { r: 'nu', c: 'ヌ' },
  { r: 'ne', c: 'ネ' },
  { r: 'no', c: 'ノ' },

  { r: 'ha', c: 'ハ' },
  { r: 'hi', c: 'ヒ' },
  { r: 'fu', c: 'フ' },
  { r: 'he', c: 'ヘ' },
  { r: 'ho', c: 'ホ' },

  { r: 'ma', c: 'マ' },
  { r: 'mi', c: 'ミ' },
  { r: 'mu', c: 'ム' },
  { r: 'me', c: 'メ' },
  { r: 'mo', c: 'モ' },

  { r: 'ya', c: 'ヤ' },
  { r: 'yu', c: 'ユ' },
  { r: 'yo', c: 'ヨ' },

  { r: 'ra', c: 'ラ' },
  { r: 'ri', c: 'リ' },
  { r: 'ru', c: 'ル' },
  { r: 're', c: 'レ' },
  { r: 'ro', c: 'ロ' },

  { r: 'wa', c: 'ワ' },
  { r: 'o', c: 'ヲ' },
  { r: 'n', c: 'ン' },
];

export const KatakanaDiacritics: CharacterModel[] = [
  { r: 'ga', c: 'ガ' },
  { r: 'gi', c: 'ギ' },
  { r: 'gu', c: 'グ' },
  { r: 'ge', c: 'ゲ' },
  { r: 'go', c: 'ゴ' },

  { r: 'za', c: 'ザ' },
  { r: 'ji', c: 'ジ' },
  { r: 'zu', c: 'ズ' },
  { r: 'ze', c: 'ゼ' },
  { r: 'zo', c: 'ゾ' },

  { r: 'da', c: 'ダ' },
  { r: 'ji', c: 'ヂ' },
  { r: 'zu', c: 'ヅ' },
  { r: 'de', c: 'デ' },
  { r: 'do', c: 'ド' },

  { r: 'ba', c: 'バ' },
  { r: 'bi', c: 'ビ' },
  { r: 'bu', c: 'ブ' },
  { r: 'be', c: 'ベ' },
  { r: 'bo', c: 'ボ' },

  { r: 'pa', c: 'パ' },
  { r: 'pi', c: 'ピ' },
  { r: 'pu', c: 'プ' },
  { r: 'pe', c: 'ペ' },
  { r: 'po', c: 'ポ' },
];

export const KatakanaContracted: CharacterModel[] = [
  { r: 'kya', c: 'キャ' },
  { r: 'kyu', c: 'キュ' },
  { r: 'kyo', c: 'キョ' },

  { r: 'sha', c: 'シャ' },
  { r: 'shu', c: 'シュ' },
  { r: 'sho', c: 'ショ' },

  { r: 'cha', c: 'チャ' },
  { r: 'chu', c: 'チュ' },
  { r: 'cho', c: 'チョ' },

  { r: 'nya', c: 'ニャ' },
  { r: 'nyu', c: 'ニュ' },
  { r: 'nyo', c: 'ニョ' },

  { r: 'hya', c: 'ヒャ' },
  { r: 'hyu', c: 'ヒュ' },
  { r: 'hyo', c: 'ヒョ' },

  { r: 'mya', c: 'ミャ' },
  { r: 'myu', c: 'ミュ' },
  { r: 'myo', c: 'ミョ' },

  { r: 'rya', c: 'リャ' },
  { r: 'ryu', c: 'リュ' },
  { r: 'ryo', c: 'リョ' },
];

export const KatakanaDiacriticsContracted: CharacterModel[] = [
  { r: 'gya', c: 'ギャ' },
  { r: 'gyu', c: 'ギュ' },
  { r: 'gyo', c: 'ギョ' },

  { r: 'ja', c: 'ジャ' },
  { r: 'ju', c: 'ジュ' },
  { r: 'jo', c: 'ジョ' },

  { r: 'bya', c: 'ビャ' },
  { r: 'byu', c: 'ビュ' },
  { r: 'byo', c: 'ビョ' },

  { r: 'pya', c: 'ピャ' },
  { r: 'pyu', c: 'ピュ' },
  { r: 'pyo', c: 'ピョ' },
];

export const KatakanaExtras = [
  { c: 'ャ' },
  { c: 'ュ' },
  { c: 'ョ' },
  { c: 'ー' },
  { c: 'ッ' }
];
