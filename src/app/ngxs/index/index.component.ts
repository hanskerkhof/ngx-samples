import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { User } from '../../_models/user';
import { Observable } from 'rxjs';
import { AddUser, RemoveUser } from '../../_actions/user.action';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  users: Observable<User>;

  constructor(private store: Store) {
    this.users = this.store.select(state => state.users.users);
  }

  ngOnInit() {
  }

  delete(name) {
    console.log(name);
    this.store.dispatch(new RemoveUser({name}));
  }

}
