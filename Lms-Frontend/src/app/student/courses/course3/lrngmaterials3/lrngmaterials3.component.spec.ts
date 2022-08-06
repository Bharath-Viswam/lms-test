import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lrngmaterials3Component } from './lrngmaterials3.component';

describe('Lrngmaterials3Component', () => {
  let component: Lrngmaterials3Component;
  let fixture: ComponentFixture<Lrngmaterials3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lrngmaterials3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lrngmaterials3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
