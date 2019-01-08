describe('Our voting app', function() {
  it('Uses react', function() {
    cy.visit('http://localhost:3000/');

    cy.title().should('contain', 'React');
  });
});
