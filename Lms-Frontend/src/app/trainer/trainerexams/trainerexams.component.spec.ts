import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerexamsComponent } from './trainerexams.component';

describe('TrainerexamsComponent', () => {
  let component: TrainerexamsComponent;
  let fixture: ComponentFixture<TrainerexamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerexamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerexamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
