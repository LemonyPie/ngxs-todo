import {uuid} from '../../app/app.utils';

export interface ITodo {
  id: uuid;
  name: string;
  completed: boolean;
}

export namespace Todo {
  export class Add {
    static readonly type = '[Todo] Add';
    constructor(public readonly name: ITodo['name']) { }
  }

  export class Delete {
    static readonly type = '[Todo] Delete';
    constructor(public readonly id: ITodo['id']) { }
  }

  export class ToggleStatus {
    static readonly type = '[Todo] Toggle Status';
    constructor(public readonly id: ITodo['id']) { }
  }

  export class Rename {
    static readonly type = '[Todo] Rename';
    constructor(public readonly id: ITodo['id'], public readonly name: ITodo['name']) { }
  }

  export class FetchAll {
    static readonly type = '[Todo] Fetch All';
  }
}
