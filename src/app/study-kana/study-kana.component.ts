import { Component, OnInit, HostListener } from '@angular/core';
import { CharacterModel } from 'app/characters/character.model';
import { LanguageSelectService } from 'app/language-select/language-select.service';
import { LanguageSelectComponent } from 'app/language-select/language-select.component';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-study-kana',
  templateUrl: './study-kana.component.html',
  styleUrls: ['./study-kana.component.scss']
})
export class StudyKanaComponent implements OnInit {
  private currentIndex = 0;
  private showAnswer = false;
  private characters: CharacterModel[] = [];
  private _subscription;

  constructor(private languageSelectService: LanguageSelectService, private dialog: MdDialog) {
    this._subscription = languageSelectService.characters$.subscribe((value) => {
      this.characters = value;
      this.shuffle(this.characters);
    });
  }

  ngOnInit() {
    this.configure();
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'n') {
      this.click();
    }
  }

  configure() {
    this.dialog.closeAll();
    this.dialog.open(LanguageSelectComponent);
  }

  click() {
    if (this.showAnswer) {
      this.characters.splice(this.currentIndex, 1);
      this.currentIndex = Math.floor(Math.random() * (this.characters.length - 0) + 0);
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
}
