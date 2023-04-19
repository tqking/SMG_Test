import { WEATHER_IN_YOUR_CITY_PAGE } from "../locators/weatherInYourCityPage";

export const assert_WeatherInYourCityPage = () => {
  cy.url().should("include", Cypress.config().baseUrl + WEATHER_IN_YOUR_CITY_PAGE.SEARCH_URL);
  cy.xpath(WEATHER_IN_YOUR_CITY_PAGE.HEADLINE).should("be.visible");
  cy.xpath(WEATHER_IN_YOUR_CITY_PAGE.SEARCH_BOX).should("be.visible");
  cy.xpath(WEATHER_IN_YOUR_CITY_PAGE.SEARCH_BUTTON).should("be.visible");
};


export const searchFromWeatherInYourCityPage = $searchText => {
  cy.xpath(WEATHER_IN_YOUR_CITY_PAGE.SEARCH_BOX)
    .should("be.visible")
    .then($searchBox => {
      cy.wrap($searchBox).clear();
      cy.wrap($searchBox).type($searchText);
    });

  cy.xpath(WEATHER_IN_YOUR_CITY_PAGE.SEARCH_BUTTON)
    .should("be.visible")
    .click();
};

export const assert_SearchResults = $searchText => {
  cy.xpath(WEATHER_IN_YOUR_CITY_PAGE.SEARCH_RESULTS_LIST)
    .should("be.visible")
    .find('tbody > tr')
    .should("have.length.greaterThan", 0)
    .eq(0)
    .contains($searchText);
};

export const assert_SearchResults_NotFound = () => {
  cy.xpath(WEATHER_IN_YOUR_CITY_PAGE.SEARCH_RESULTS_NOT_FOUND).should("be.visible");
};

