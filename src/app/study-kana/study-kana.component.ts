import { Component, OnInit } from '@angular/core';
import { CharacterModel } from 'app/characters/character.model';
import { LanguageSelectService } from 'app/language-select/language-select.service';
import { LanguageSelectComponent } from "app/language-select/language-select.component";
import { MdDialog } from "@angular/material";

@Component({
  selector: 'app-study-kana',
  templateUrl: './study-kana.component.html',
  styleUrls: ['./study-kana.component.scss']
})
export class StudyKanaComponent implements OnInit {
  private katakana: CharacterModel[];

  constructor(private languageSelectService: LanguageSelectService, private dialog: MdDialog ) { }

  ngOnInit() {

  }
  configure() {
    this.dialog.open(LanguageSelectComponent);
  }

}
