import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStuCsa1Component } from './admin-stu-csa1.component';

describe('AdminStuCsa1Component', () => {
  let component: AdminStuCsa1Component;
  let fixture: ComponentFixture<AdminStuCsa1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStuCsa1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStuCsa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
