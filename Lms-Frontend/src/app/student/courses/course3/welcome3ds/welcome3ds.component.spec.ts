import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcome3dsComponent } from './welcome3ds.component';

describe('Welcome3dsComponent', () => {
  let component: Welcome3dsComponent;
  let fixture: ComponentFixture<Welcome3dsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Welcome3dsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Welcome3dsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
