import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerfeedbackComponent } from './trainerfeedback.component';

describe('TrainerfeedbackComponent', () => {
  let component: TrainerfeedbackComponent;
  let fixture: ComponentFixture<TrainerfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerfeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
