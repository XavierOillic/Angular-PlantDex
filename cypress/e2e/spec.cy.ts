describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Plantdex');
  });
});

describe('should display active nev-link active ?', () => {
  it('visits the page home', () => {
    cy.visit('/');
    cy.get('.navbar-nav .nav-link')
      .contains('Accueil')
      .should('have.class', 'active');
  });
});
