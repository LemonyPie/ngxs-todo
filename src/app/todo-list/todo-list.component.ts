import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {TodoState} from '../../stores/todo/todo.state';
import {Observable} from 'rxjs';
import {ITodo, Todo} from '../../stores/todo/todo.actions';
import ToggleStatus = Todo.ToggleStatus;
import Delete = Todo.Delete;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  @Select(TodoState.todoList) todos$: Observable<ITodo[]>;
  constructor(private store: Store) { }

  ngOnInit() {
  }

  handleTodoToggle(id: ITodo['id']) {
    this.store.dispatch(new ToggleStatus(id));
  }

  handleTodoDelete(id: ITodo['id']) {
    this.store.dispatch(new Delete(id));
  }

  trackById(index: number, item: ITodo): ITodo['id']{
    return item.id;
  }

}
