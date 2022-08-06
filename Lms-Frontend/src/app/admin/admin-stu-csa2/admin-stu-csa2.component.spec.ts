import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStuCsa2Component } from './admin-stu-csa2.component';

describe('AdminStuCsa2Component', () => {
  let component: AdminStuCsa2Component;
  let fixture: ComponentFixture<AdminStuCsa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStuCsa2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStuCsa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
