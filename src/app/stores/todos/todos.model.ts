import {ITodo} from './todos.actions';

export interface ITodoStateModel {
  todos: { [key: number]: ITodo }[];
}
