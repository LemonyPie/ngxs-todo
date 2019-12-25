import {ITodoStateModel, TodoItem} from './todo.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {ITodo, Todo} from './todo.actions';
import Add = Todo.Add;
import ToggleStatus = Todo.ToggleStatus;
import {Injectable} from '@angular/core';
import {patch, removeItem, updateItem} from '@ngxs/store/operators';
import Delete = Todo.Delete;

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

  @Selector() static todo(state: ITodoStateModel) {
    return (id: ITodo['id']) => {
      return state.todoList.find(todo => id === todo.id);
    };
  }

  @Action(Add) add(ctx: StateContext<ITodoStateModel>, action: Add) {
    const state = ctx.getState();
    const todo = new TodoItem(action.name);

    ctx.patchState({
      todoList: [
        ...state.todoList,
        todo
      ]
    });
  }

  @Action(ToggleStatus) toggleStatus(ctx: StateContext<ITodoStateModel>, action: ToggleStatus) {
    ctx.setState(
      patch({
        todoList: updateItem<ITodo>(({id}) => id === action.id, item => ({...item, completed: !item.completed}))
      })
    );
  }

  @Action(Delete) delete(ctx: StateContext<ITodoStateModel>, action: Delete) {
    ctx.setState(
      patch({
        todoList: removeItem<ITodo>(({id}) => id === action.id)
      })
    )
  }
}
