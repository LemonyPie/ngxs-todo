import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {ITodo} from '../stores/todo/todo.actions';
import {NEVER, Observable} from 'rxjs';
import {Store} from '@ngxs/store';
import {TodoState} from '../stores/todo/todo.state';
import {map} from 'rxjs/operators';

@Injectable()
export class TodoDetailsResolver implements Resolve<ITodo> {
  constructor(private store: Store, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): ITodo | null {
    const todo = this.store.selectSnapshot(TodoState.todo)(route.params.id)

    if (!todo) {
      this.router.navigate(['/']);
      return null;
    }

    return todo;
  }
}
