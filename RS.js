/// <reference types="Cypress" />

describe("Real Synch testing", function () {
  it("My FirstTest case", function () {
    cy.visit("https://app-int.realsynch.com/login");
    cy.get(":nth-child(1) > :nth-child(1) > .ui-inputtext").type(
      "qa@realsynch.com"
    );
    cy.get(":nth-child(2) > :nth-child(1) > .ui-inputtext").type("3Mq5mN=j!!");
    cy.get(".primary-button").click();
    cy.get("#startJoyRide").click();
    cy.get(
      ":nth-child(2) > .ml-10 > .ui-g > .ui-g-12 > .image-application"
    ).click();
    cy.get(
      ":nth-child(11) > .ml-10 > .ui-g > .ui-g-12 > .image-application"
    ).click();
    cy.get("#source-box-btn").click();
 
  });
});
