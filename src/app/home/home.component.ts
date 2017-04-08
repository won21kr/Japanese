import { Component, OnInit } from '@angular/core';
import { GITHUB, ANGULAR, ANGULAR_MATERIAL, INSTAGRAM } from 'app/menu/menu.items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  github = GITHUB;
  angular = ANGULAR;
  angularMaterial = ANGULAR_MATERIAL;
  instagram = INSTAGRAM;
  constructor() { }

  ngOnInit() {
  }

}
