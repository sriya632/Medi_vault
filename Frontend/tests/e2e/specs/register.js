describe('Register functionality', () => {
  beforeEach(() => {
    cy.visit('/register');
    
    // Intercept the window.alert function
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub');
    });
  });

  it('should not have an alert to install metamask', () => {
    cy.get('@alertStub').should('not.have.been.called');
  });

  it('should display all form fields', () => {
    cy.get('#FirstName').should('exist');
    cy.get('#LastName').should('exist');
    cy.get('#PhoneNumber').should('exist');
    cy.get('#email').should('exist');
    cy.get('#password').should('exist');
    cy.get('#confirmPassword').should('exist');
  });

  it('should not allow form submission if passwords do not match', () => {
    cy.get('#password').type('password123');
    cy.get('#confirmPassword').type('password1234'); // Different confirmation password
    cy.contains('Register').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contain('Passwords do not match');
    });
  });
  
  it('should not display password as plain text by default', () => {
    cy.get('#password').type('password123');
    cy.get('#confirmPassword').type('password123');
    cy.get('#password').should('have.attr', 'type', 'password'); 
    cy.get('#confirmPassword').should('have.attr', 'type', 'password');
  });

  it('should display password in plain text when "Show Password" is clicked', () => {
    cy.get('#password').type('password123');
    cy.get('#confirmPassword').type('password123');
    cy.get('#showPassword').click();
    cy.get('#password').should('have.attr', 'type', 'text'); 
    cy.get('#confirmPassword').should('have.attr', 'type', 'text');
  });
})
