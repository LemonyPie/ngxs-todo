import {Component, OnInit, ChangeDetectionStrategy, Input, HostListener, EventEmitter, Output} from '@angular/core';
import {ITodo} from '../../stores/todo/todo.actions';
import {uuid} from '../app.utils';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodo;
  @Output() toggle = new EventEmitter<ITodo['id']>();
  @HostListener('click') handleClick() {
    this.toggle.emit(this.todo.id);
  }
  constructor() { }

  ngOnInit() {
  }

}
