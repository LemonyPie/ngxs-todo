import {ITodoStateModel, TodoItem} from './todo.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {ITodo, Todo} from './todo.actions';
import Add = Todo.Add;

const defaultTodoState: ITodoStateModel = {
  todoList: []
};

@State<ITodoStateModel>({
  name: 'todo',
  defaults: defaultTodoState
})
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
}
