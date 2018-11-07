import { State } from '@ngxs/store';
​
@State({
  name: 'todo',
  defaults: {
    pizzaForm: {
      model: undefined,
      dirty: false,
      status: '',
      errors: {}
    }
  }
})
export class PizzaState {}
