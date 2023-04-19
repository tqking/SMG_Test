import { searchFromNavBar } from "../utils/commonActions";
import { assert_WeatherHomePage } from "../utils/weatherHomePage";
import { searchFromWeatherInYourCityPage, 
          assert_SearchResults, 
          assert_SearchResults_NotFound, 
          assert_WeatherInYourCityPage 
        } from "../utils/weatherInYourCityPage";

describe('Test Search Weather In Your City', () => {
  it('Passed Case: Nav bar - Searching by Enter key from keyboard', () => {
    cy.visit("/");
    assert_WeatherHomePage();
    const SEARCH_TEXT = "Ho Chi Minh, VN";
    searchFromNavBar(SEARCH_TEXT);
    assert_WeatherInYourCityPage();
    assert_SearchResults(SEARCH_TEXT);
  });

  it('Passed Case: Searching with no results - Case 2: Only enter invalid city name', () => {
    cy.visit('/');
    assert_WeatherHomePage();
    const SEARCH_TEXT_1 = "999x";
    const SEARCH_TEXT_2 = "000z";
    searchFromNavBar(SEARCH_TEXT_1);
    assert_WeatherInYourCityPage();
    assert_SearchResults_NotFound();
    searchFromWeatherInYourCityPage(SEARCH_TEXT_2);
    assert_SearchResults_NotFound();
  });

  it('Failed Case: Searching with special characters', () => {
    cy.visit('/');
    assert_WeatherHomePage();
    const SEARCH_TEXT = "@#$";
    searchFromNavBar(SEARCH_TEXT);
    assert_WeatherInYourCityPage();
    assert_SearchResults_NotFound();
  });
})