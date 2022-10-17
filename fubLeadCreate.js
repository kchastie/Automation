/// <reference types= 'Cypress'/>
import { makeid } from "./nameRandomize";
import { makePhone } from "./phoneRandomize";
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
describe("FUB lead creation", function () {
  it("FUB test lead creation", function () {
    cy.visit("https://www.followupboss.com/");
    cy.get("#nav_login").click();
    cy.get("#email").type("support@realsynch.com");
    cy.get("#Password").type("mac2112X");
    cy.get(".u-bigBlueButton").click();
    cy.get(".sc-clIzBv > .sc-ieecCq > svg").click();
    const firstName = makeid();
    cy.get(".sc-bTfYFJ > :nth-child(1) > .sc-dkPtRN > input").type(firstName);
    cy.get(".sc-bTfYFJ > :nth-child(2) > .sc-dkPtRN > input").type("Cypress");
    const emailRandom = `${makeid()}@${makeid()}.com`;
    cy.get(":nth-child(2) > :nth-child(1) > .sc-dkPtRN > input").type(
      emailRandom
    );
    cy.get(":nth-child(3) > .sc-fKVqWL > .sc-furwcr").click().type("33 Touch");
    cy.get(".sc-jRQBWg").click();
    const phoneRandom = `${makePhone()}`;
    cy.get(
      ".sc-zjkyB > .sc-kszsFN > .sc-cBIieI > .sc-kMyqmI > .sc-dpAhYB > .sc-kqnjJL"
    ).type(phoneRandom);
    cy.get(".Modal-footer > .sc-jRQBWg").click();
    cy.get(".sc-ksHpcM").click();
    cy.get(".sc-jlsrNB > .sc-jIkXHa > .sc-dkPtRN > input").type(
      " (B) APPT SET"
    );
    cy.get(".sc-iWBNLc > .sc-clIzBv > .sc-ieecCq > svg > path").click();
    cy.get(".sc-gsDKAQ > :nth-child(2) > .sc-jRQBWg").click();
  });
});
