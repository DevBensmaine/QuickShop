import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TailleFilterComponent } from './taille-filter.component';

describe('TailleFilterComponent', () => {
  let component: TailleFilterComponent;
  let fixture: ComponentFixture<TailleFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailleFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
