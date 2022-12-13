Feature: google search

  Scenario: searching for "cucumber"
    Given I am on the google homepage
    When I search for "cucumber"
    Then I get results with "cucumber"


    