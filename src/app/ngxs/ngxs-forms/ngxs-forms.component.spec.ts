import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsFormsComponent } from './ngxs-forms.component';

describe('NgxsFormsComponent', () => {
  let component: NgxsFormsComponent;
  let fixture: ComponentFixture<NgxsFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxsFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
