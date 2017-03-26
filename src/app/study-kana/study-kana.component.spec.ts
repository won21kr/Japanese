import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyKanaComponent } from './study-kana.component';

describe('StudyKanaComponent', () => {
  let component: StudyKanaComponent;
  let fixture: ComponentFixture<StudyKanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyKanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyKanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
