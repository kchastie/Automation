/// <reference types= 'Cypress'/>
Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  describe("Sisu lead validation", function () {
    it("Sisu lead validation", function () {
        cy.visit('https://client6.sierrainteractivedev.com/default.aspx');
        cy.get('#txtSiteName').type('sierrasamplesite.com');
        cy.get('#txtUserName').type('realsynch');
        cy.get('#txtPassword').type('mcan0592');
        cy.get('#btnLoginSubmit').click();
        cy.get('#dashboard-new-leads > .ticket__list-items > :nth-child(1) > .info > .clearfix > .username > :nth-child(1) > .name').click();
        cy.get('.username').should('contain', 'Cypress');
        cy.get('.card-top > .user').should('contain','Real Synch');
        cy.get('.source > span').should('have.text', 'A');
        
    })})
