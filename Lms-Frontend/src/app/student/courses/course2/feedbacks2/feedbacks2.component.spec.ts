import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feedbacks2Component } from './feedbacks2.component';

describe('Feedbacks2Component', () => {
  let component: Feedbacks2Component;
  let fixture: ComponentFixture<Feedbacks2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feedbacks2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Feedbacks2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
