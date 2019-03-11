import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebversionComponent } from './webversion.component';

describe('WebversionComponent', () => {
  let component: WebversionComponent;
  let fixture: ComponentFixture<WebversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
