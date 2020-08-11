import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPromotionComponent } from './sales-promotion.component';

describe('SalesPromotionComponent', () => {
  let component: SalesPromotionComponent;
  let fixture: ComponentFixture<SalesPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
