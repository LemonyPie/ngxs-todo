export interface ITodo {
  name: string;
  completed: boolean;
}
export namespace Todo {
  export class Add {
    static readonly type = '[Todo] Add';
    constructor(public name: string) { }
  }

  export class Delete {
    static readonly type = '[Todo] Delete';
    constructor(public id: number) { }
  }

  export class ToggleStatus {
    static readonly type = '[Todo] Toggle Status';
    constructor(public id: number) { }
  }

  export class Rename {
    static readonly type = '[Todo] Rename';
    constructor(public id: number, name: string) { }
  }

  export class FetchAll {
    static readonly type = '[Todo] Fetch All';
  }
}
