import { Component, OnInit } from '@angular/core';
import { CharacterModel } from 'app/characters/character.model';
import { Hiragana, HiraganaDiacritics, HiraganaContracted, HiraganaDiacriticsContracted } from 'app/characters/hiragana';
import { Katakana, KatakanaDiacritics, KatakanaContracted, KatakanaDiacriticsContracted } from 'app/characters/katakana';
import { LanguageSelectService } from 'app/language-select/language-select.service';
import { MdDialog } from "@angular/material";

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent implements OnInit {

  private isCheckAllHiragana = false;
  private isCheckAllKatakana = false;

  private hiraganaBase = true;
  private hiraganaDiacritics = false;
  private hiraganaContracted = false;
  private hiraganaDiacriticsContracted = false;

  private katakanaBase = true;
  private katakanaDiacritics = false;
  private katakanaContracted = false;
  private katakanaDiacriticsContracted = false;

  constructor(private languageSelectService: LanguageSelectService, private dialog: MdDialog) { }

  ngOnInit() {
  }

  checkAllHiragana() {
    this.isCheckAllHiragana = !this.isCheckAllHiragana;
    this.hiraganaBase = this.isCheckAllHiragana;
    this.hiraganaDiacritics = this.isCheckAllHiragana;
    this.hiraganaContracted = this.isCheckAllHiragana;
    this.hiraganaDiacriticsContracted = this.isCheckAllHiragana;
  }

  checkAllKatakana() {
    this.isCheckAllKatakana = !this.isCheckAllKatakana;
    this.katakanaBase = this.isCheckAllKatakana;
    this.katakanaDiacritics = this.isCheckAllKatakana;
    this.katakanaContracted = this.isCheckAllKatakana;
    this.katakanaDiacriticsContracted = this.isCheckAllKatakana;
  }

  isAllKatakanaChecked() {
    const allChecked = this.katakanaBase && this.katakanaDiacritics && this.katakanaContracted && this.katakanaDiacriticsContracted;
    this.isCheckAllKatakana = allChecked;
    return allChecked;
  }

   isAllHiraganaChecked() {
    const allChecked = this.hiraganaBase && this.hiraganaDiacritics && this.hiraganaContracted && this.hiraganaDiacriticsContracted;
    this.isCheckAllHiragana = allChecked;
    return allChecked;
  }

  setHiragana() {
    let hiragana: CharacterModel[] = [];
    if (this.hiraganaBase) {
      hiragana = [...hiragana, ...Hiragana];
    }
    if (this.hiraganaDiacritics) {
      hiragana = [...hiragana, ...HiraganaDiacritics];
    }
    if (this.hiraganaContracted) {
      hiragana = [...hiragana, ...HiraganaContracted];
    }
    if (this.hiraganaDiacriticsContracted) {
      hiragana = [...hiragana, ...HiraganaDiacriticsContracted];
    }
    let katakana: CharacterModel[] = [];
    if (this.katakanaBase) {
      katakana = [...katakana, ...Katakana];
    }
    if (this.katakanaDiacritics) {
      katakana = [...katakana, ...KatakanaDiacritics];
    }
    if (this.katakanaContracted) {
      katakana = [...katakana, ...KatakanaContracted];
    }
    if (this.katakanaDiacriticsContracted) {
      katakana = [...katakana, ...KatakanaDiacriticsContracted];
    }
    this.languageSelectService.updateCharacters(hiragana.concat(katakana));
  }
  updateCharacters() {
    this.setHiragana();
  }
}
