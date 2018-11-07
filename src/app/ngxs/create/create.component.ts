import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddUser } from '../_actions/user.action';
import * as faker from 'faker/locale/en_US';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.createForm();
    // for (let i = 0; i < 90; i++) {
    //   console.log(i);
    //   this.addUser(`${faker.name.firstName()} ${faker.name.lastName()}`, faker.internet.email());
    // }
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.newPerson();
  }

  addUser(name, email) {
    this.store.dispatch(new AddUser({name, email})).subscribe(() => {
      this.newPerson();
    });
  }

  ngOnInit() {
  }

  newPerson() {
    this.angForm.patchValue({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email()
    });
  }

}
