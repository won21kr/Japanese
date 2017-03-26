import { Component, OnInit } from '@angular/core';
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
  constructor(private languageSelectService: LanguageSelectService, private dialog: MdDialog) { }

  ngOnInit() {
    this.configure();
  }

  configure() {
    this.dialog.closeAll();
    this.dialog.open(LanguageSelectComponent);
  }

  click() {
    if (this.showAnswer) {
      this.currentIndex++;
      this.showAnswer = false;
    } else {
      this.showAnswer = true;
    }
  }
}
