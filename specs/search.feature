Feature: Search
  As a user I want to able to search for products
  using the search field.

  Scenario: Searching for products including "t"
    Given that I am on the start page
    When I enter the letter "t" in the search field
    Then I should see the product "Taklampa"
    And I should see the product "Lampett"

  Scenario: Searching for products including "s"
    Given that I am on the start page
    When I enter the letter "s" in the search field
    Then I should see the product "Bordslampa"
    And I should see the product "Spotlight"

  Scenario: Searching for products including "b"
    Given that I am on the start page
    When I enter the letter "b" in the search field
    Then I should see the product "Bordslampa"

  Scenario: Searching for products including "g"
    Given that I am on the start page
    When I enter the letter "g" in the search field
    Then I should see the product "Golvlampa"

  Scenario: Searching for products including "l"
    Given that I am on the start page
    When I enter the letter "l" in the search field
    Then I should see the product "Lampett"
    And I should see the product "Taklampa"
    And I should see the product "Golvlampa"
    And I should see the product "Bordslampa"
    And I should see the product "Spotlight"

  Scenario: Searching for products including empty or " "
    Given that I am on the start page
    When I enter the letter " " in the search field
    Then I should see no products
