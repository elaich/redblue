describe('A user', function() {
  it('can visit the website and vote', function() {
    // A user visits our Red Or Blue voting site
    cy.visit('/');

    // He notices the title mentions Red Or Blue
    cy.title().should('equal', 'Red Or Blue');

    // He is right away invited to vote between red and blue
    cy.contains('Red').should('be.visible');
    cy.contains('Blue').should('be.visible');
  });
});
