import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ITodo} from '../../stores/todo/todo.actions';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDetailsComponent implements OnInit {
  todo: ITodo;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.todo = this.route.snapshot.data.todo;
  }

}
