import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImagesProductsComponent } from './slider-images-products.component';

describe('SliderImagesProductsComponent', () => {
  let component: SliderImagesProductsComponent;
  let fixture: ComponentFixture<SliderImagesProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderImagesProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderImagesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
