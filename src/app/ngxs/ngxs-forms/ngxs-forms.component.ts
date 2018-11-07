import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { SetFormDisabled, SetFormEnabled } from '@ngxs/form-plugin';

@Component({
  selector: 'app-ngxs-forms',
  templateUrl: './ngxs-forms.component.html',
  styleUrls: ['./ngxs-forms.component.scss'],
})
export class NgxsFormsComponent implements OnInit {
  pizzaForm = this.formBuilder.group({
    toppings: ['default', Validators.required],
    size: ['12', Validators.required]
  });

  @Select(state => state.todo) private todo$: Observable<any>;

  constructor(private formBuilder: FormBuilder,
              private store: Store) {
    this.todo$.subscribe((todo) => {
      console.log('********** ', todo);
      console.log('********** ', this.pizzaForm);
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    //
  }

  setDisabled() {
    this.store.dispatch(
      new SetFormDisabled('todo.pizzaForm')
    );
  }

  setEnabled() {
    this.store.dispatch(
      new SetFormEnabled('todo.pizzaForm')
    );
  }

}
