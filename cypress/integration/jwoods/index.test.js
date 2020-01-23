describe('Index page tests', function() {
  it('Can visit the index page', () => {
    cy.visit('/');
    cy.contains("Hi, I'm James Woods.");
  });
  it('Can load links all the pages in navigation', () => {
    cy.visit('/');
    cy.contains('Projects').click();
    // check all links work
  });
});
