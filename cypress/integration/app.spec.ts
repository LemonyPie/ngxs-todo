import {getMainHeading} from '../support/app.po';

it('Should display main heading', () => {
  cy.visit('/');
  getMainHeading().contains('NGXS');
});
