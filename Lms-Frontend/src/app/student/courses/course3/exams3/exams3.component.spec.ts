import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exams3Component } from './exams3.component';

describe('Exams3Component', () => {
  let component: Exams3Component;
  let fixture: ComponentFixture<Exams3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exams3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exams3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
