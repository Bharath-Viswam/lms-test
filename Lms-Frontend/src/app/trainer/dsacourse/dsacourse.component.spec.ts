import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSAcourseComponent } from './dsacourse.component';

describe('DSAcourseComponent', () => {
  let component: DSAcourseComponent;
  let fixture: ComponentFixture<DSAcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSAcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DSAcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
