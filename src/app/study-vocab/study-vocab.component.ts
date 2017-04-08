import { Component, OnInit, HostListener } from '@angular/core';
import { Vocabulary, vocab } from 'app/characters/vocabulary';
import { tags as Tags } from 'app/characters/tags';
import { MdCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-study-vocab',
  templateUrl: './study-vocab.component.html',
  styleUrls: ['./study-vocab.component.scss']
})
export class StudyVocabComponent implements OnInit {
  private vocabulary: Vocabulary[];
  private originalVocabulary: Vocabulary[];
  private tags: {};
  private tagArray: string[];
  private currentIndex = 0;
  private _minLesson = 0;
  private _maxLesson = 2;
  private showAnswer = false;
  private showRomaji = false;
  private showFurigana = true;
  private forceShowAnswer = false;
  private toEnglish = true;
  private lessons: number[] = [];
  private selectedTags: string[] = [];
  private availableTags: any[];

  get minLesson() {
    return this._minLesson;
  }
  set minLesson(val: number) {
    this._minLesson = val;
    if (val > this._maxLesson) { this._maxLesson = val; }
  }

  get maxLesson() {
    return this._maxLesson;
  }
  set maxLesson(val: number) {
    this._maxLesson = val;
    if (val < this._minLesson) { this._minLesson = val; }
  }

  constructor() {
    this.vocabulary = vocab;
    this.tags = Tags;
    this.originalVocabulary = vocab;
    this.filterLesson();
    this.shuffle(this.vocabulary);
  }

  ngOnInit() {
    const min = -1;
    const max = 6;
    for (let i = min; i <= max; i++) {
      this.lessons.push(i);
    }
  }

  checkBox(event: MdCheckboxChange, val: string) {
    if (event.checked) {
      this.selectedTags.push(val);
    } else {
      this.removeFromSelectedTags(val);
    }

    this.filterByTags();
  }

  removeFromSelectedTags(val: string) {
    let removeIndex: number;
    this.selectedTags.forEach((v, i) => {
      if (v === val) { removeIndex = i; }
    });
    this.selectedTags.splice(removeIndex, 1);
  }

  filterByTags() {
    if (this.selectedTags.length === 0) {
      this.filterLesson();
      return;
    }
    const selectedVocab: Vocabulary[] = [];
    this.originalVocabulary.forEach(vocab => {
      vocab.tags.forEach(tag => {
        this.selectedTags.forEach(st => {
          if (tag === st) {
            selectedVocab.push(vocab);
          }
        });
      });
    });
    this.filterLesson(selectedVocab);
  }

  filterLesson(vocab: Vocabulary[] = this.originalVocabulary) {
    this.vocabulary = vocab.filter((v) => {
      return parseInt(v.lesson, 10) >= this.minLesson && parseInt(v.lesson, 10) <= this.maxLesson;
    });
    this.availableTags = [];
    this.vocabulary.forEach(v => {
      v.tags.forEach((tag, index) => {
        this.availableTags.push(tag);
      });
    });
    this.availableTags = this.uniq(this.availableTags);
    this.tagArray = this.availableTags;
    this.showAnswer = false;
    this.currentIndex = 0;
  }

  uniq(a: any[]) {
    return a.sort().filter((item, pos, ary) => {
      return !pos || item !== ary[pos - 1];
    });
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

  shuffle(a: any[]) {
    for (let i = a.length; i; i--) {
      const j = Math.floor(Math.random() * i);
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
    return this.showRomaji && (this.toEnglish || this.showAnswer || this.forceShowAnswer);
  }

  shouldShowFurigana(): boolean {
    return this.showFurigana && (this.toEnglish || this.showAnswer || this.forceShowAnswer);
  }

  shouldShowJapanese(): boolean {
    return ((this.showAnswer || this.forceShowAnswer) && !this.toEnglish) || this.toEnglish;
  }

  notShowAnswer(): boolean {
    return !this.showAnswer && !this.forceShowAnswer;
  }
}
