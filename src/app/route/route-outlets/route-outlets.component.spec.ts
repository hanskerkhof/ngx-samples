import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteOutletsComponent } from './route-outlets.component';

describe('RouteOutletsComponent', () => {
  let component: RouteOutletsComponent;
  let fixture: ComponentFixture<RouteOutletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteOutletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteOutletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
