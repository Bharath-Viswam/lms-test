import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exams1Component } from './exams1.component';

describe('Exams1Component', () => {
  let component: Exams1Component;
  let fixture: ComponentFixture<Exams1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exams1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exams1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
