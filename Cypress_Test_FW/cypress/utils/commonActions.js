import { NAV_BAR } from "../locators/commonElements";

export const searchFromNavBar = $searchText => {
  cy.xpath(NAV_BAR.WEATHER_IN_YOUR_CITY_SEARCHBOX)
    .eq(0)
    .should("be.visible")
    .then($searchBox => {
      cy.wrap($searchBox).clear();
      cy.wrap($searchBox)
        .type($searchText)
        .type('{enter}');
    });
};