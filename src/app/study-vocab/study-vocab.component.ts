import { Component, OnInit, HostListener } from '@angular/core';
import { Vocabulary, vocab } from 'app/characters/vocabulary';

@Component({
  selector: 'app-study-vocab',
  templateUrl: './study-vocab.component.html',
  styleUrls: ['./study-vocab.component.scss']
})
export class StudyVocabComponent implements OnInit {
  private vocabulary: Vocabulary[];
  private currentIndex = 0;
  private showAnswer = false;
  private showRomaji = false;
  private forceShowAnswer = false;
  private toEnglish = true;

  constructor() {
    this.vocabulary = vocab;
    this.shuffle(this.vocabulary);
  }

  // TODO Tag and lesson filters

  ngOnInit() {
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'n') {
      this.click();
    }
  }

  click() {
    if (this.currentIndex >= this.vocabulary.length) { return; }
    if (this.showAnswer || this.forceShowAnswer) {
      this.currentIndex++;
      this.showAnswer = false;
    } else {
      this.showAnswer = true;
    }
  }

  wrong() {
    this.vocabulary.push(this.vocabulary[this.currentIndex]);
    this.click();
  }

  shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }
  pickWord(vocab: Vocabulary): string {
    return vocab.kanji || vocab.katakana || vocab.hiragana;
  }

  furigana(vocab: Vocabulary): string {
    return vocab.katakana || vocab.kanji ? vocab.hiragana : '';
  }

  changeTranslate() {
    this.toEnglish = !this.toEnglish;
  }

  shouldShowEnglish(): boolean {
    return ((this.showAnswer || this.forceShowAnswer) && this.toEnglish) || !this.toEnglish;
  }

  shouldShowRomaji(): boolean {
    return this.showRomaji && (this.toEnglish || this.showAnswer);
  }

  shouldShowJapanese(): boolean {
    return ((this.showAnswer || this.forceShowAnswer) && !this.toEnglish) || this.toEnglish;
  }

  notShowAnswer(): boolean {
    return !this.showAnswer && !this.forceShowAnswer;
  }
}
