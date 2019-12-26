export const createTodo = (todoName) => {
  cy.get('input').type(todoName);
  cy.get('button').click();
};
