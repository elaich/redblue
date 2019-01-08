describe('A user', function() {
  it('can visit the voting website and vote', function() {
    // A user visits our Red Or Blue voting site
    cy.visit('http://localhost:3000/');
    cy.server();

    cy.route('POST', '/vote').as('vote');
    // He notices the title mentions Red Or Blue
    cy.title().should('equal', 'Red Or Blue');

    // He is right away invited to vote between red and blue
    cy.contains('Red').should('be.visible');
    cy.contains('Blue').should('be.visible');

    // He clicks on Red
    cy.contains('Red').click();

    // This should send a request to the backend
    cy.wait('@vote');

    // When the request resolves the browser updates
    // and show You have voted

    // The user refreshes to vote again
    //
    // His vote is still there
    //
    // He can change his vote
    //
    // He clicks on Blue
    //
    // His vote is updated
    //
    // He refreshes
    //
    // His vote is still there
    //
    // Satisfied he goes back to sleep
  });
});
