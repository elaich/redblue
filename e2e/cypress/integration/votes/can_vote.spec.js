describe('A user', function() {
  it('can vote and persist his vote', function() {
    // A user visits our Red Or Blue voting site
    cy.visit('http://localhost:3000/');
    cy.server();

    cy.route('POST', '/api/vote').as('vote');
    // He notices the title mentions Red Or Blue
    cy.title().should('equal', 'Red Or Blue');

    // He is right away invited to vote between red and blue
    cy.contains('Red').should('be.visible');
    cy.contains('Blue').should('be.visible');

    // He clicks on Red
    cy.get('[data-cy=red-button]').click();

    // This should send a request to the backend
    cy.wait('@vote');

    // When the request resolves the browser updates
    // and show You have voted
    cy
      .get('[data-cy=red-button]')
      .find('i')
      .should('be.visible');

    // The user refreshes to vote again
    cy.reload();

    // His vote is still there
    cy
      .get('[data-cy=red-button]')
      .find('i')
      .should('be.visible');

    // He can change his vote so he clicks on Blue
    cy.get('[data-cy=blue-button]').click();

    // His vote is updated
    cy
      .get('[data-cy=blue-button]')
      .find('i')
      .should('be.visible');
    cy.get('[data-cy=red-button] i').should('not.exist');

    // He refreshes
    cy.reload();

    // His vote is still there
    cy
      .get('[data-cy=blue-button]')
      .find('i')
      .should('be.visible');
    // Satisfied he goes back to sleep
  });
});
