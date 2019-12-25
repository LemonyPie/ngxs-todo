import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  addTodoForm = this.fb.group({
    name: ['', Validators.required]
  });

  constructor(private store: Store, private fb: FormBuilder) { }

  ngOnInit() {
  }

  handleSubmit() {
    if (this.addTodoForm.valid) {
      this.store.dispatch(new Add(this.addTodoForm.value.name)).subscribe(() => this.addTodoForm.reset());
    }
  }
}
