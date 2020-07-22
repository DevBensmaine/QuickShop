import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSiderComponent } from './header-sider.component';

describe('HeaderSiderComponent', () => {
  let component: HeaderSiderComponent;
  let fixture: ComponentFixture<HeaderSiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
