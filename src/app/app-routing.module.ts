import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from './todos/todos.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TodosComponent
  },
  {
    path: 'todos/:id',
    component: TodosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
