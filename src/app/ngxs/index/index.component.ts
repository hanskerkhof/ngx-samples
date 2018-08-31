import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { User } from '../../_models/user';
import { Observable } from 'rxjs';
import { RemoveUser, RemoveUserAll } from '../_actions/user.action';

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

  remove(index) {
    this.store.dispatch(new RemoveUser(index)).subscribe(() => {
    });
  }

  removeAll(index) {
    this.store.dispatch(new RemoveUserAll()).subscribe(() => {
    });
  }

  ngOnInit() {
  }

}
