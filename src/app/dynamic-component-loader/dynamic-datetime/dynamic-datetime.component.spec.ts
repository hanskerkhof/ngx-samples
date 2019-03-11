import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDatetimeComponent } from './dynamic-datetime.component';

describe('DynamicDatetimeComponent', () => {
  let component: DynamicDatetimeComponent;
  let fixture: ComponentFixture<DynamicDatetimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDatetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
