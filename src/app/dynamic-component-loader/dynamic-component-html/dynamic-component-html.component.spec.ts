import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentHtmlComponent } from './dynamic-component-html.component';

describe('DynamicComponentHtmlComponent', () => {
  let component: DynamicComponentHtmlComponent;
  let fixture: ComponentFixture<DynamicComponentHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicComponentHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponentHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
