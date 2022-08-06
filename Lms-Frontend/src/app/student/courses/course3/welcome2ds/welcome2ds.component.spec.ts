import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcome2dsComponent } from './welcome2ds.component';

describe('Welcome2dsComponent', () => {
  let component: Welcome2dsComponent;
  let fixture: ComponentFixture<Welcome2dsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Welcome2dsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Welcome2dsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
