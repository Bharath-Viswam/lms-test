import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTraNavComponent } from './admin-tra-nav.component';

describe('AdminTraNavComponent', () => {
  let component: AdminTraNavComponent;
  let fixture: ComponentFixture<AdminTraNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTraNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTraNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
