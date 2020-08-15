import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductsFiltersComponent } from './page-products-filters.component';

describe('PageProductsFiltersComponent', () => {
  let component: PageProductsFiltersComponent;
  let fixture: ComponentFixture<PageProductsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductsFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
