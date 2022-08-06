import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lrngmaterials1Component } from './lrngmaterials1.component';

describe('Lrngmaterials1Component', () => {
  let component: Lrngmaterials1Component;
  let fixture: ComponentFixture<Lrngmaterials1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lrngmaterials1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lrngmaterials1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
