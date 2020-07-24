import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProductsComponent } from './info-products.component';

describe('InfoProductsComponent', () => {
  let component: InfoProductsComponent;
  let fixture: ComponentFixture<InfoProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
