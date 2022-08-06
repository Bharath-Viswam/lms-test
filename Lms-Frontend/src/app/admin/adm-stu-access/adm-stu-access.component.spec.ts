import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmStuAccessComponent } from './adm-stu-access.component';

describe('AdmStuAccessComponent', () => {
  let component: AdmStuAccessComponent;
  let fixture: ComponentFixture<AdmStuAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmStuAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmStuAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
