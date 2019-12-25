import {Component, OnInit, ChangeDetectionStrategy, Input, HostListener, EventEmitter, Output} from '@angular/core';
import {ITodo} from '../../stores/todo/todo.actions';
import {faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';
import {faTimesCircle, faExternalLinkSquareAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input() todo: ITodo;
  @Output() toggle = new EventEmitter<ITodo['id']>();
  @Output() delete = new EventEmitter<ITodo['id']>();
  @Output() opened = new EventEmitter<ITodo['id']>();

  completeIcon = faCheckSquare;
  incompleteIcon = faSquare;
  deleteIcon = faTimesCircle;
  openIcon = faExternalLinkSquareAlt;

  handleToggle() {
    this.toggle.emit(this.todo.id);
  }

  handleDelete() {
    this.delete.emit(this.todo.id);
  }

  handleOpenTodo() {
    this.opened.emit(this.todo.id);
  }
}
