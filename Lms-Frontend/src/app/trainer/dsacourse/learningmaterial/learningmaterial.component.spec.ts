import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningmaterialComponent } from './learningmaterial.component';

describe('LearningmaterialComponent', () => {
  let component: LearningmaterialComponent;
  let fixture: ComponentFixture<LearningmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningmaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
