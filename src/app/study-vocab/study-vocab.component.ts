import { Component, OnInit } from '@angular/core';
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
  private showFurigana = false;
  private forceShowAnswer = false;

  constructor() {
    this.vocabulary = vocab;
    this.shuffle(this.vocabulary);
  }

  ngOnInit() {
  }

  click() {
    if (this.showAnswer || this.forceShowAnswer) {
      this.currentIndex++;
      this.showAnswer = false;
    } else {
      this.showAnswer = true;
    }
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
}
