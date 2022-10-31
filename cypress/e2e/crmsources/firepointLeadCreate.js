/// <reference types= 'Cypress'/>
import { makeid } from "./nameRandomize";
import { makePhone } from "./phoneRandomize";
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
describe("Firepoint lead creation", function () {
    it("Firepoint test lead creation", function () {
        cy.visit('https://www.firepoint.net/');
        cy.get('.mobile-icon > div > .closed > span').click();
        cy.get(':nth-child(1) > .nav-login-button > a').click();
        cy.get('#username').type('support@realsynch.com');
        cy.get('#password').type('xavt!48Y3A73KBi');
        cy.get('.btn').click();
        cy.get('.sm-add-lead-icon > .material-icons').click();
        cy.visit('https://manage.firepoint.net/leads/new');
        const firstName = makeid();
        cy.get('#lead_lead_first_name').type(firstName);
        cy.get('#lead_lead_last_name').type('Cypress');
        const emailRandom = `${makeid()}@${makeid()}.com`;
        cy.get('#lead_username').type(emailRandom);
        cy.get('#lead_password').type('123456');
        cy.get('#lead_lead_source_id').select('Aol');
        cy.get('#save').click();
        cy.get('.edit-tags').click();
        cy.get('.search-filter').type('(b) appt set');
        cy.get('[data-item-id="285306"] > .tag > .tag-name').click();




    })})
