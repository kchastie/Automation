/// <reference types= 'Cypress'/>
import { makeid } from "./nameRandomize";
import { makePhone } from "./phoneRandomize";
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
describe("BoomTown lead creation", function () {
  it("BoomTown test lead creation", function () {
    cy.visit(
      "https://leads.boomtownroi.com/Leads.aspx#/?caIDs=0,3,5,4,2&ssid=150"
    );
    cy.get("#ctlLogin_UserName").type("dev@realsynch.com");
    cy.get("#ctlLogin_Password").type(";!e/WY0&");
    cy.get("#ctlLogin_LoginButton").invoke("removeAttr", "target").click();
    cy.get(":nth-child(8) > .q46Wt0u4H3CcVakFpODM").click();
    const firstName = makeid();
    cy.get("#ctl00_SampleContent_CreateContact1_txtFirstName").type(firstName);
    cy.get("#ctl00_SampleContent_CreateContact1_txtLastName").type("Cypress");
    cy.get(".required > .btn-group > .btn").click();
    cy.get(
      '.required > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a > .text'
    ).click();
    cy.get("#ctl00_SampleContent_CreateContact1_btnSaveProfile").click();
    cy.get(
      ".t3JSDP9217_xS0uYrMlq > .q46Wt0u4H3CcVakFpODM > .bP89roTm5wRUnbDkJzLw"
    ).click();
    const emailRandom = `${makeid()}@${makeid()}.com`;
    cy.get("#newemail").type(emailRandom);
    cy.get("#submitButton").click();
  });
});
