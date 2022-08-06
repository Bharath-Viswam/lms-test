import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feedbacks3Component } from './feedbacks3.component';

describe('Feedbacks3Component', () => {
  let component: Feedbacks3Component;
  let fixture: ComponentFixture<Feedbacks3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feedbacks3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Feedbacks3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
