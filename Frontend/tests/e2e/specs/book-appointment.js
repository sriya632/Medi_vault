describe('Login functionality', () => {
    beforeEach(() => {
      cy.visit('/appointment');
  
      // Intercept the window.alert function
      cy.window().then((win) => {
        cy.stub(win, 'alert').as('alertStub');
      });
    });
  
    it('should not have an alert to install metamask', () => {
      cy.get('@alertStub').should('not.have.been.called');
    });
  
    it('should display all form fields', () => {
      cy.get('#department-select').should('exist');
      cy.get('#doctor-select').should('exist');
      cy.get('#date').should('exist');
      cy.get('#time').should('exist');
      cy.get('#name').should('exist');
      cy.get('#phone').should('exist');
      cy.get('#message').should('exist');
    });
})
  
 