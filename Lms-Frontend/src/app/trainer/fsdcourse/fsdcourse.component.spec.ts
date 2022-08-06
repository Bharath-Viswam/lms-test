import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsdcourseComponent } from './fsdcourse.component';

describe('FsdcourseComponent', () => {
  let component: FsdcourseComponent;
  let fixture: ComponentFixture<FsdcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsdcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsdcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
