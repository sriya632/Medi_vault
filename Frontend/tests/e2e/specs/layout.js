describe('Layout Functionality', () => {
    beforeEach(() => {
        cy.visit('/');
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
});