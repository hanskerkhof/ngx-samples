import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User } from '../_models/User';
import { AddUser, RemoveUser } from '../_actions/user.action';

export class UserStateModel {
  users: User[];
}

@State<UserStateModel>({
  name: 'users',
  defaults: {
    users: []
  }
})
export class UserState {

  @Selector()
  static getUsers(state: UserStateModel) {
    return state.users;
  }

  @Action(AddUser)
  add({getState, patchState}: StateContext<UserStateModel>, {payload}: AddUser) {
    const state = getState();
    patchState({
      users: [...state.users, payload]
    });
  }

  @Action(RemoveUser)
  remove({getState, patchState}: StateContext<UserStateModel>, {payload}: RemoveUser) {
    const state = getState();
    patchState({
      users: [...state.users, payload]
    });
  }

}
