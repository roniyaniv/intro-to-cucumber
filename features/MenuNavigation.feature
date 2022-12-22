Feature: Menu Navigation

  As a user, I want to be able to navigate throughout the website using the menu links to get to various pages

  Scenario Outline: Navigating through the main menu options from the home page
    Given the browser is at the "Home" page
    When the user clicks on the "<menuOption>" menu option in the menu
    Then the title of the page should include "<pageTitle>"

    Examples:
      | menuOption | pageTitle           |
      | What's New | What's New    |
      | Women    | Women  |
      | Watches   | Watches |