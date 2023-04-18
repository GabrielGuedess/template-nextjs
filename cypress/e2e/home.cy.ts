/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should home page correctly', () => {
    cy.getByDataCy('home').should('exist');
  });
});
