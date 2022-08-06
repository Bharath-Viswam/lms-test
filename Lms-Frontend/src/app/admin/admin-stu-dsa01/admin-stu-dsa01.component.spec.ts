import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStuDsa01Component } from './admin-stu-dsa01.component';

describe('AdminStuDsa01Component', () => {
  let component: AdminStuDsa01Component;
  let fixture: ComponentFixture<AdminStuDsa01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStuDsa01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStuDsa01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
