import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlcssvideosComponent } from './htmlcssvideos.component';

describe('HtmlcssvideosComponent', () => {
  let component: HtmlcssvideosComponent;
  let fixture: ComponentFixture<HtmlcssvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlcssvideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlcssvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
