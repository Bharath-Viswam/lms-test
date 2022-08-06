import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmStudentComponent } from './adm-student.component';

describe('AdmStudentComponent', () => {
  let component: AdmStudentComponent;
  let fixture: ComponentFixture<AdmStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
