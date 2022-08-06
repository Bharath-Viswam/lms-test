import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStuDsa02Component } from './admin-stu-dsa02.component';

describe('AdminStuDsa02Component', () => {
  let component: AdminStuDsa02Component;
  let fixture: ComponentFixture<AdminStuDsa02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStuDsa02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStuDsa02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
