import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feedbacks1Component } from './feedbacks1.component';

describe('Feedbacks1Component', () => {
  let component: Feedbacks1Component;
  let fixture: ComponentFixture<Feedbacks1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feedbacks1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Feedbacks1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
