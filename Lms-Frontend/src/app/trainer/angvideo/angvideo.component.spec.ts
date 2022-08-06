import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngvideoComponent } from './angvideo.component';

describe('AngvideoComponent', () => {
  let component: AngvideoComponent;
  let fixture: ComponentFixture<AngvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
