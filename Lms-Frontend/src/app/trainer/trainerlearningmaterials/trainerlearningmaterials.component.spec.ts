import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerlearningmaterialsComponent } from './trainerlearningmaterials.component';

describe('TrainerlearningmaterialsComponent', () => {
  let component: TrainerlearningmaterialsComponent;
  let fixture: ComponentFixture<TrainerlearningmaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerlearningmaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerlearningmaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
