import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GITHUB, INSTAGRAM, ANGULAR } from 'app/menu/menu.items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  github = GITHUB;
  instagram = INSTAGRAM;
  angular = ANGULAR;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  about() {
    this.router.navigate(['/']);
  }
  grid() {
    this.router.navigate(['/grid']);
  }

  kana() {
    this.router.navigate(['/studyKana']);
  }

  vocab() {
    this.router.navigate(['/studyVocab']);
  }
  verb() {
    this.router.navigate(['/verb']);
  }

}
