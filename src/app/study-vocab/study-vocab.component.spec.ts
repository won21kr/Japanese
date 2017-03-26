import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyVocabComponent } from './study-vocab.component';

describe('StudyVocabComponent', () => {
  let component: StudyVocabComponent;
  let fixture: ComponentFixture<StudyVocabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyVocabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyVocabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
