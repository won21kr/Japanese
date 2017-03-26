import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { StudyKanaComponent } from 'app/study-kana/study-kana.component';
import { HomeComponent } from 'app/home/home.component';
import { StudyVocabComponent } from 'app/study-vocab/study-vocab.component';

const routes: Route[] = [
  { path: 'studyKana', component: StudyKanaComponent },
  { path: 'studyVocab', component: StudyVocabComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
