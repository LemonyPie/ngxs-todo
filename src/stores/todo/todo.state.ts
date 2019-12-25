import {ITodoStateModel, TodoItem} from './todo.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {ITodo, Todo} from './todo.actions';
import Add = Todo.Add;
import ToggleStatus = Todo.ToggleStatus;
import {Injectable} from '@angular/core';
import {patch, updateItem} from '@ngxs/store/operators';

const defaultTodoState: ITodoStateModel = {
  todoList: []
};

@State<ITodoStateModel>({
  name: 'todo',
  defaults: defaultTodoState
})
@Injectable()
export class TodoState {

  @Selector() static todoList(state: ITodoStateModel): ITodo[] {
    return state.todoList;
  }

  @Action(Add) add(ctx: StateContext<ITodoStateModel>, action: Add) {
    const state = ctx.getState();
    const todo = new TodoItem(action.name);

    ctx.setState({
      ...state,
      todoList: [
        ...state.todoList,
        todo
      ]
    });
  }

  @Action(ToggleStatus) toggleStatus(ctx: StateContext<ITodoStateModel>, action: ToggleStatus) {
    ctx.setState(
      patch({
        todoList: updateItem<ITodo>(item => item.id === action.id, item => ({...item, completed: !item.completed}))
      })
    );
  }

}
