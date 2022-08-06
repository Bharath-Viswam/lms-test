import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnigmaterialComponent } from './learnigmaterial.component';

describe('LearnigmaterialComponent', () => {
  let component: LearnigmaterialComponent;
  let fixture: ComponentFixture<LearnigmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnigmaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnigmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
