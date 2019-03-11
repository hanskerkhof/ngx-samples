import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicQuoteComponent } from './dynamic-quote.component';

describe('DynamicQuoteComponent', () => {
  let component: DynamicQuoteComponent;
  let fixture: ComponentFixture<DynamicQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
