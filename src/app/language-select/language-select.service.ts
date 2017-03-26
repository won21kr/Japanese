import { Injectable } from '@angular/core';
import { CharacterModel } from 'app/characters/character.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LanguageSelectService {
  // Observable sources
  private hiragana = new Subject<CharacterModel[]>();
  private katakana = new Subject<CharacterModel[]>();

  // Observable streams
  hiragana$ = this.hiragana.asObservable();
  katakana$ = this.katakana.asObservable();

  // Service message commands
  updateHiragana(characters: CharacterModel[]) {
    this.hiragana.next(characters);
  }
  updateKatakana(characters: CharacterModel[]) {
    this.katakana.next(characters);
  }
}
