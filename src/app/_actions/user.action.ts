// user.action.ts

import { User } from '../_models/user';

export class AddUser {
  static readonly type = '[User] Add';

  constructor(public payload: User) {}
}

export class RemoveUser {
  static readonly type = '[User] Remove';

  constructor(public payload: User) {}
}
