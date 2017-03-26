import { Component, OnInit } from '@angular/core';
import { LanguageSelectComponent } from 'app/language-select/language-select.component';
import { LanguageSelectService } from 'app/language-select/language-select.service';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor(private languageSelectService: LanguageSelectService, private dialog: MdDialog) { }

  ngOnInit() {
    this.configure();
  }
  configure() {
    this.dialog.closeAll();
    this.dialog.open(LanguageSelectComponent);
  }

}
