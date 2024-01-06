import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionConsoleComponent } from './question-console.component';

describe('QuestionConsoleComponent', () => {
  let component: QuestionConsoleComponent;
  let fixture: ComponentFixture<QuestionConsoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionConsoleComponent]
    });
    fixture = TestBed.createComponent(QuestionConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
