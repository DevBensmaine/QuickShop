import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixFilterComponent } from './prix-filter.component';

describe('PrixFilterComponent', () => {
  let component: PrixFilterComponent;
  let fixture: ComponentFixture<PrixFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrixFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrixFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
