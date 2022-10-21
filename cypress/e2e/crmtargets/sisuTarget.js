/// <reference types= 'Cypress'/>

//import { makeid } from "../crmsources/nameRandomize";
//import { makePhone } from "../crmsources/phoneRandomize";
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
describe("Sisu lead validation", function () {
  it("Sisu lead validation", function () {
    cy.visit("https://my.sisu.co/auth/login");
    cy.get("#email").type("support@realsynch.com");
    cy.get("#password").type("mac2112X!");
    cy.get("#submit").click();
    cy.visit("https://my.sisu.co/transactions/records?reset_filters=True");
    cy.get('[tabindex="1"] > [data-col="agent_name"]').click();
    let today = new Date().toLocaleDateString();
    cy.get(":nth-child(2) > .text-field").should("have.text", today);
    cy.get('.nav > :nth-child(2) > ul > :nth-child(9) > a').click();
   cy.get(':nth-child(11) > :nth-child(5)').should('have.text','API: RealSynch');
    cy.get('.sidenav > ul > :nth-child(7) > a').click();
    cy.get(':nth-child(1) > :nth-child(2) > .text-field').should('contain','Cypress');

  });
});
