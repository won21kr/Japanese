interface String {
  addMasu(): string;
  addMashita(): string;
  addMasendeshita(): string;
  addMasen(): string;
  destemRu(): string;
  destemU(): string;
}

String.prototype.addMasu = function() {
  return this + 'ます';
};

String.prototype.addMashita = function () {
  return this + 'ました';
};
String.prototype.addMasendeshita = function () {
  return this + 'ませんでした';
};

String.prototype.addMasen = function () {
  return this + 'ません';
};

String.prototype.destemRu = function () {
  return this.replace(/る$/, '');
};
String.prototype.destemU = function () {
  const lastChar = this.substring(this.length, this.length - 1);
  let replacementChar;
  switch (lastChar) {
    case 'く':
      replacementChar = 'き';
      break;
    case 'る':
      replacementChar = 'り';
      break;
    case 'む':
      replacementChar = 'み';
      break;
    case 'す':
      replacementChar = 'し';
      break;
    case 'つ':
      replacementChar = 'ち';
      break;
    case 'ぬ':
      replacementChar = 'に';
      break;
    case 'ふ':
      replacementChar = 'ひ';
      break;
    case 'う':
      replacementChar = 'い';
      break;
    default: // Used for kanji characters, like in kuru
      replacementChar = lastChar;
  }
  return this.replace(lastChar, replacementChar);
};
