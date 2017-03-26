import { CharacterModel } from './character.model';

export const Hiragana: CharacterModel[] = [
  { r: 'a', c: 'あ' },
  { r: 'i', c: 'い' },
  { r: 'u', c: 'う' },
  { r: 'e', c: 'え' },
  { r: 'o', c: 'お' },

  { r: 'ka', c: 'か' },
  { r: 'ki', c: 'き' },
  { r: 'ku', c: 'く' },
  { r: 'ke', c: 'け' },
  { r: 'ko', c: 'こ' },

  { r: 'sa', c: 'さ' },
  { r: 'shi', c: 'し' },
  { r: 'su', c: 'す' },
  { r: 'se', c: 'せ' },
  { r: 'so', c: 'そ' },

  { r: 'ta', c: 'た' },
  { r: 'chi', c: 'ち' },
  { r: 'tsu', c: 'つ' },
  { r: 'te', c: 'て' },
  { r: 'to', c: 'と' },

  { r: 'na', c: 'な' },
  { r: 'ni', c: 'に' },
  { r: 'nu', c: 'ぬ' },
  { r: 'ne', c: 'ね' },
  { r: 'no', c: 'の' },

  { r: 'ha', c: 'は' },
  { r: 'hi', c: 'ひ' },
  { r: 'fu', c: 'ふ' },
  { r: 'he', c: 'へ' },
  { r: 'ho', c: 'ほ' },

  { r: 'ma', c: 'ま' },
  { r: 'mi', c: 'み' },
  { r: 'mu', c: 'む' },
  { r: 'me', c: 'め' },
  { r: 'mo', c: 'も' },

  { r: 'ya', c: 'や' },
  { r: 'yu', c: 'ゆ' },
  { r: 'yo', c: 'よ' },

  { r: 'ra', c: 'ら' },
  { r: 'ri', c: 'り' },
  { r: 'ru', c: 'る' },
  { r: 're', c: 'れ' },
  { r: 'ro', c: 'ろ' },

  { r: 'wa', c: 'わ' },
  { r: 'o', c: 'を' },
  { r: 'n', c: 'ん' },
];

export const HiraganaDiacritics: CharacterModel[] = [
  { r: 'ga', c: 'が' },
  { r: 'gi', c: 'ぎ' },
  { r: 'gu', c: 'ぐ' },
  { r: 'ge', c: 'げ' },
  { r: 'go', c: 'ご' },

  { r: 'za', c: 'ざ' },
  { r: 'ji', c: 'じ' },
  { r: 'zu', c: 'ず' },
  { r: 'ze', c: 'ぜ' },
  { r: 'zo', c: 'ぞ' },

  { r: 'da', c: 'だ' },
  { r: 'ji', c: 'ぢ' },
  { r: 'zu', c: 'づ' },
  { r: 'de', c: 'で' },
  { r: 'do', c: 'ど' },

  { r: 'ba', c: 'ば' },
  { r: 'bi', c: 'び' },
  { r: 'bu', c: 'ぶ' },
  { r: 'be', c: 'べ' },
  { r: 'bo', c: 'ぼ' },

  { r: 'pa', c: 'ぱ' },
  { r: 'pi', c: 'ぴ' },
  { r: 'pu', c: 'ぷ' },
  { r: 'pe', c: 'ぺ' },
  { r: 'po', c: 'ぽ' },
];

export const HiraganaContracted: CharacterModel[] = [
  { r: 'kya', c: 'きゃ' },
  { r: 'kyu', c: 'きゅ' },
  { r: 'kyo', c: 'きょ' },

  { r: 'sha', c: 'しゃ' },
  { r: 'shu', c: 'しゅ' },
  { r: 'sho', c: 'しょ' },

  { r: 'cha', c: 'ちゃ' },
  { r: 'chu', c: 'ちゅ' },
  { r: 'cho', c: 'ちょ' },

  { r: 'nya', c: 'にゃ' },
  { r: 'nyu', c: 'にゅ' },
  { r: 'nyo', c: 'にょ' },

  { r: 'hya', c: 'ひゃ' },
  { r: 'hyu', c: 'ひゅ' },
  { r: 'hyo', c: 'ひょ' },

  { r: 'mya', c: 'みゃ' },
  { r: 'myu', c: 'みゅ' },
  { r: 'myo', c: 'みょ' },

  { r: 'rya', c: 'りゃ' },
  { r: 'ryu', c: 'りゅ' },
  { r: 'ryo', c: 'りょ' },
];

export const HiraganaDiacriticsContracted: CharacterModel[] = [
  { r: 'gya', c: 'ぎゃ' },
  { r: 'gyu', c: 'ぎゅ' },
  { r: 'gyo', c: 'ぎょ' },

  { r: 'ja', c: 'じゃ' },
  { r: 'ju', c: 'じゅ' },
  { r: 'jo', c: 'じょ' },

  { r: 'bya', c: 'びゃ' },
  { r: 'byu', c: 'びゅ' },
  { r: 'byo', c: 'びょ' },

  { r: 'pya', c: 'ぴゃ' },
  { r: 'pyu', c: 'ぴゅ' },
  { r: 'pyo', c: 'ぴょ' },
];

export const HiraganaExtras = [
  { c: 'ゃ' },
  { c: 'ゅ' },
  { c: 'ょ' },
  { c: '〜' },
  { c: 'っ' }
];
