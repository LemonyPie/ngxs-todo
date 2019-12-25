import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from './todos/todos.component';
import {TodoComponent} from './todo/todo.component';
import {TodoDetailsResolver} from './todo-details.resolver';
import {TodoDetailsComponent} from './todo-details/todo-details.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TodosComponent
  },
  {
    path: 'todos/:id',
    component: TodoDetailsComponent,
    resolve: {
      todo: TodoDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
