import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { StudyKanaComponent } from 'app/study-kana/study-kana.component';
import { HomeComponent } from 'app/home/home.component';
import { StudyVocabComponent } from 'app/study-vocab/study-vocab.component';
import { GridComponent } from 'app/grid/grid.component';

const routes: Route[] = [
  { path: 'studyKana', component: StudyKanaComponent },
  { path: 'studyVocab', component: StudyVocabComponent },
  { path: 'grid', component: GridComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
