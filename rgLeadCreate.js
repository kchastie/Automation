/// <reference types= 'Cypress'/>
import { makeid } from "./nameRandomize";
import { makePhone } from "./phoneRandomize";
describe("RG lead creation", function () {
  it("RG test lead creation", function () {
    cy.visit(
      "https://www.realgeeks.com/?keyword=realgeeks&campaign=917703298&utm_term=realgeeks&utm_campaign=917703298&utm_source=adwords&utm_medium=ppc&hsa_acc=1000348427&hsa_cam=917703298&hsa_grp=48648299271&hsa_ad=515137864465&hsa_src=g&hsa_tgt=kwd-314486405476&hsa_kw=realgeeks&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwkaSaBhA4EiwALBgQaD1s2c8SF1Q44RxnTK3NNnDoBG5nblmAmBwuB9h81tKO5Ue-PIJ6sRoCJ6gQAvD_BwE"
    );
    cy.get(".header__cta > .inline-btn").click();
    cy.get("#si-email").type("themac@realsynch.com");
    cy.get("#si-password").type("xyt5cDvinXm");
    cy.get(".log-in").click();
    cy.get(
      '[href="https://leads.realgeeks.com"] > .w-full > .inline-block'
    ).click();
    cy.get(".button-group > .plus").click();
    const firstName = makeid();
    cy.get("#lead_first_name").type(firstName);
    cy.get("#lead_last_name").type("Cypress");
    const emailRandom = `${makeid()}@${makeid()}.com`;
    cy.get("#lead_email").type(emailRandom);
    cy.get("#lead_source").select("CPC");
    cy.get(".button--save").click();
    const phoneRandom = `${makePhone()}`;
    cy.get(".lead-information__phone > #lead_phone").type(phoneRandom);
    cy.get(
      ".lead-details-container > .lead-status > :nth-child(6) > #lead_assign_to_agent"
    ).select("RS Support");
    cy.get(".activity-form > .buttons > .button--save").click();
  });
});
