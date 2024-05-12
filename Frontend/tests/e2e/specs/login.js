describe('Login functionality', () => {
  beforeEach(() => {
    cy.visit('/login');

    // Intercept the window.alert function
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub');
    });
  });

  it('should not have an alert to install metamask', () => {
    cy.get('@alertStub').should('not.have.been.called');
  });

  it('should display all form fields', () => {
    cy.get('#email').should('exist');
    cy.get('#password').should('exist');
  });
  
  it('should not display password as plain text by default', () => {
    cy.get('#password').type('password123');
    cy.get('#password').should('have.attr', 'type', 'password'); 
  });

  it('should display password in plain text when "Show Password" is clicked', () => {
    cy.get('#password').type('password123');
    cy.get('#showPassword').click();
    cy.get('#password').should('have.attr', 'type', 'text'); 
  });
})

describe('Link Functionality', () => {
  beforeEach(() => {
    cy.visit('/login');

    // Intercept the window.alert function
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub');
    });
  }); 

  it('should navigate to register page', () => {
    cy.get('a').contains("Register").click();
    cy.url().should('include', 'http://localhost:3000/register');
    cy.go('back');
    cy.url().should('include', 'http://localhost:3000/login');
  });

  it('should navigate to register page', () => {
    cy.get('a').contains("Are you an admin?").click();
    cy.url().should('include', 'http://localhost:3000/doctorlogin');
    cy.go('back');
    cy.url().should('include', 'http://localhost:3000/login');
  });
});
