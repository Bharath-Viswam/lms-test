import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcome1dsComponent } from './welcome1ds.component';

describe('Welcome1dsComponent', () => {
  let component: Welcome1dsComponent;
  let fixture: ComponentFixture<Welcome1dsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Welcome1dsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Welcome1dsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
