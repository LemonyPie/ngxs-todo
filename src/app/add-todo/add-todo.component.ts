import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngxs/store';
import {Todo} from '../../stores/todo/todo.actions';
import Add = Todo.Add;

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent implements OnInit {
  addTodoForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(private store: Store) { }

  ngOnInit() {
  }

  handleSubmit() {
    this.store.dispatch(new Add(this.addTodoForm.value.name)).subscribe(() => this.addTodoForm.reset());
  }
}
