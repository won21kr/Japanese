import { Injectable } from '@angular/core';
import { CharacterModel } from 'app/characters/character.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LanguageSelectService {
  // Observable sources
  private hiragana = new Subject<CharacterModel[]>();
  private katakana = new Subject<CharacterModel[]>();
  private characters = new Subject<CharacterModel[]>();

  // Observable streams
  hiragana$ = this.hiragana.asObservable();
  katakana$ = this.katakana.asObservable();
  characters$ = this.characters.asObservable();

  // Service message commands
  updateHiragana(characters: CharacterModel[]) {
    this.hiragana.next(characters);
    this.characters.next(characters);
  }
  updateKatakana(characters: CharacterModel[]) {
    this.katakana.next(characters);
    this.characters.next(characters);
  }
}
