/// <reference types="cypress" />
describe('page', () => {
  it('should say back of card is not visible', () => {
    cy.visit('index.html');
    cy.get('.card-front').should('be.visible');
    cy.get('.card-back').should('not.be.visible');
  });
});
