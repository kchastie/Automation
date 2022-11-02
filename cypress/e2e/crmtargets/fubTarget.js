/// <reference types= 'Cypress'/>
Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;})
    describe("Sisu lead validation", function () {
        it("Sisu lead validation", function () {
            cy.visit('https://www.followupboss.com/');
            cy.get('#nav_login').click();
            cy.get('#email').type('support@realsynch.com');
            cy.get('#Password').type('mac2112X');
            cy.get('.u-bigBlueButton').click();
            cy.get('.sc-dkPtRN > .sc-gsDKAQ > .sc-hKwDye > svg > path').click();
            cy.get(':nth-child(1) > .sc-eSJyHI > [style="min-width: 100px; height: auto;"]').click();
            cy.get('h3 > .sc-gIBqdA > .sc-kmQMED > .sc-djWRfJ').should('contain', 'Cypress');
            cy.get('.assignedUserIdPersonInput-FSSelector > .sc-kmQMED > .sc-djWRfJ').should('have.text', 'RS Support');
            cy.get('.sc-djWRfJ > .fs-exclude').should('contain', 'TheSmartHomeSearch.com');
     
        })})
