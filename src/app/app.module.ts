import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudyKanaComponent } from './study-kana/study-kana.component';
import { StudyVocabComponent } from './study-vocab/study-vocab.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LanguageSelectComponent } from './language-select/language-select.component';
import { LanguageSelectService } from 'app/language-select/language-select.service';
import { MaterialModule, MdDialog } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GridComponent } from './grid/grid.component';
import { VerbConjugationComponent } from './verb-conjugation/verb-conjugation.component';

@NgModule({
  declarations: [
    AppComponent,
    StudyKanaComponent,
    StudyVocabComponent,
    MenuComponent,
    HomeComponent,
    LanguageSelectComponent,
    GridComponent,
    VerbConjugationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [LanguageSelectService],
  bootstrap: [AppComponent],
  entryComponents: [LanguageSelectComponent]
})
export class AppModule { }
