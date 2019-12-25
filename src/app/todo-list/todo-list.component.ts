import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {TodoState} from '../../stores/todo/todo.state';
import {Observable} from 'rxjs';
import {ITodo} from '../../stores/todo/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  @Select(TodoState.todoList) todos$: Observable<ITodo[]>;
  constructor() { }

  ngOnInit() {
  }

}
