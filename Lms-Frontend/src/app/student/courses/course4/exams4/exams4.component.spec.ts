import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exams4Component } from './exams4.component';

describe('Exams4Component', () => {
  let component: Exams4Component;
  let fixture: ComponentFixture<Exams4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exams4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exams4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
