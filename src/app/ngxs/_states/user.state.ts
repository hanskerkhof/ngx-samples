import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User } from '../../_models/user';
import { AddUser, RemoveUser, RemoveUserAll } from '../_actions/user.action';

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
      // users: [...state.users, payload]
      users: [payload, ...state.users]
    });
  }

  @Action(RemoveUser)
  remove({getState, patchState}: StateContext<UserStateModel>, action: RemoveUser) {
    const state = getState();
    state.users.splice(action.index, 1);
    patchState({
      users: [...state.users]
    });
  }

  @Action(RemoveUserAll)
  removeAll({getState, setState}: any) {
    // const state = getState();
    setState({users: []});
  }

}
