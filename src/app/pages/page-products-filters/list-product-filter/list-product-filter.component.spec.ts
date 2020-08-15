import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductFilterComponent } from './list-product-filter.component';

describe('ListProductFilterComponent', () => {
  let component: ListProductFilterComponent;
  let fixture: ComponentFixture<ListProductFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
