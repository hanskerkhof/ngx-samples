import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteOutletsDetailComponent } from './route-outlets-detail.component';

describe('RouteOutletsDetailComponent', () => {
  let component: RouteOutletsDetailComponent;
  let fixture: ComponentFixture<RouteOutletsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteOutletsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteOutletsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
