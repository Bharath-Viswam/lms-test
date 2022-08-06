import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exams2Component } from './exams2.component';

describe('Exams2Component', () => {
  let component: Exams2Component;
  let fixture: ComponentFixture<Exams2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exams2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exams2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
