Feature: Dress Search

  As a user, I want to be able to search for dresses on https://magento.softwaretestingboard.com by type so I can purchase one

  Background:
    Given the browser is at the "Home" page

  Scenario: Search for a type that does not exist
    When the user searches for "floral"
    Then no products are listed
    And a no results error message is shown

  Scenario: Search for a type that exists
    When the user searches for "striped"
    Then products are listed
    And search results show products related to "striped"