import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feedbacks4Component } from './feedbacks4.component';

describe('Feedbacks4Component', () => {
  let component: Feedbacks4Component;
  let fixture: ComponentFixture<Feedbacks4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feedbacks4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Feedbacks4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
