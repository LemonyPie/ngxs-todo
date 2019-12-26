import {createTodo} from '../support/todos.po';

describe('todos managing', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add new todos', () => {
    const todoName = 'add first todo';
    createTodo(todoName);
    expect(cy.get('.todo-name').should('contain', todoName));
  });

  it('should remove todos', () => {
    const listSelector = 'app-todo-list';
    cy.get(listSelector).children().should('have.length', 0);
    createTodo('remove todo');
    cy.get(listSelector).children().should('have.length', 1);
    cy.get('.todo-name').get('.delete').click();
    cy.get(listSelector).children().should('have.length', 0);
  });
});
