import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSAcourseComponent } from './csacourse.component';

describe('CSAcourseComponent', () => {
  let component: CSAcourseComponent;
  let fixture: ComponentFixture<CSAcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSAcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSAcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
