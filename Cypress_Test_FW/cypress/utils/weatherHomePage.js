import { HOMEPAGE } from "../locators/weatherHomePage";

export const assert_WeatherHomePage = () => {
  cy.url().should("eq", Cypress.config().baseUrl);
  cy.xpath(HOMEPAGE.HEADLINE).should("be.visible");
  cy.xpath(HOMEPAGE.SUB_HEADLINE).should("be.visible");
};