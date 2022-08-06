import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTraCsaComponent } from './admin-tra-csa.component';

describe('AdminTraCsaComponent', () => {
  let component: AdminTraCsaComponent;
  let fixture: ComponentFixture<AdminTraCsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTraCsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTraCsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
