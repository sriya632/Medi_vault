describe('Layout Functionality', () => {
    beforeEach(() => {
        cy.visit('/');
    }); 
  
    it('Navigates to Home page', () => {
        cy.get('a.nav-link').contains('Home').click();
        cy.url().should('eq', 'http://localhost:3000/'); 
    });

    it('Navigates to About page', () => {
        cy.get('a.nav-link').contains('About').click();
        cy.url().should('eq', 'http://localhost:3000/about'); 
    });

    it('Navigates to Services page', () => {
        cy.get('a.nav-link').contains('Services').click();
        cy.url().should('eq', 'http://localhost:3000/services'); 
    });

    it('Navigates to Doctors page', () => {
        cy.get('a.nav-link').contains('Doctors').click();
        cy.url().should('eq', 'http://localhost:3000/doctor');
    });

    it('Navigates to Book Appointment page', () => {
        cy.get('#appointment-dropdown').realHover().then($el=>{
            cy.wrap($el).invoke('show')
            cy.wrap($el).contains('Book Appointment').click()
        })
        cy.url().should('eq', 'http://localhost:3000/appointment');
    });

    it('Navigates to Upcoming Appointment page', () => {
        cy.get('#appointment-dropdown').realHover().then($el=>{
            cy.wrap($el).invoke('show')
            cy.wrap($el).contains('Upcoming Appointment').click()
        })
        cy.url().should('eq', 'http://localhost:3000/upcoming-appointments');
    });

    it('Navigates to Past Appointment page', () => {
        cy.get('#appointment-dropdown').realHover().then($el=>{
            cy.wrap($el).invoke('show')
            cy.wrap($el).contains('Past Appointment').click()
        })
        cy.url().should('eq', 'http://localhost:3000/past-appointments');
    });
});