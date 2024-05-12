describe('Login functionality', () => {
    beforeEach(() => {
      cy.visit('/doctorlogin');
  
      // Intercept the window.alert function
      cy.window().then((win) => {
        cy.stub(win, 'alert').as('alertStub');
      });
    });

    it('should not have an alert to install metamask', () => {
        cy.get('@alertStub').should('not.have.been.called');
    });
  
    it('should display all login buttons', () => {
        cy.get('#google-login').should('exist');
        cy.get('#metamask-login').should('exist');
    });

    it('should login and redirect on metamask button', () => {
        cy.get('#metamask-login').click();
        cy.url().should('eq', 'http://localhost:3000/doctorView');
    });
  })