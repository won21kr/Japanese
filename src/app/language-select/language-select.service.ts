import { Injectable } from '@angular/core';
import { CharacterModel } from 'app/characters/character.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LanguageSelectService {
  // Observable sources
  private characters = new Subject<CharacterModel[]>();

  // Observable streams
  characters$ = this.characters.asObservable();

  // Service message commands
  updateCharacters(characters: CharacterModel[]) {
    this.characters.next(characters);
  }
}
