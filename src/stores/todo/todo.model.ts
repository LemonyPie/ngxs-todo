import {ITodo} from './todo.actions';
import {uuid, uuidv4} from '../../app/app.utils';

export interface ITodoStateModel {
  todoList: ITodo[];
}

export class TodoItem implements ITodo {
  id: uuid;

  constructor(public readonly name, public readonly completed = false) {
    this.id = uuidv4();
  }
}
