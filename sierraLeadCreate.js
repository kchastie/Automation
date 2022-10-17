/// <reference types= 'Cypress'/>
import { makeid } from "./nameRandomize";
import { makePhone } from "./phoneRandomize";
describe("Sierra lead creation", function () {
  it("Sierra test lead creation", function () {
    cy.visit("https://client.sierrainteractivedev.com/");
    cy.get("#txtSiteName").type("sierrasamplesite.com");
    cy.get("#txtUserName").type("realsynch");
    cy.get("#txtPassword").type("mcan0592");
    cy.get("#btnLoginSubmit").click();
    cy.get('[data-menu="leads"]').click();
    cy.get(
      ":nth-child(1) > .header__new-sub-menu > .header__new-sub-menu-container > :nth-child(3) > a"
    ).click();
    const firstName = makeid();
    cy.get("#txtLeadFirstName").type(firstName);
    cy.get("#txtLeadLastName").type("Cypress");
    const emailRandom = `${makeid()}@${makeid()}.com`;
    cy.get("#txtLeadEmail").type(emailRandom);
    cy.get("#selSource").select("A");
    cy.get("#acceptableUsePolicyCheckbox").click();
    cy.get("#btnSaveExit").click();
    cy.get("#lead-detail-actions-pane-10 > .form-group > .form-control").type(
      "abcdefg"
    );
    cy.get(
      "#lead-detail-actions-pane-10 > :nth-child(3) > .ld-add-event-footer > .btn"
    ).click();
  });
});
