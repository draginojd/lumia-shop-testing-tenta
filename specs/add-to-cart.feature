Feature: Cart

  Background:
    Given that Im on the start page
    And  entered the letter "t"
    When I click on buy button of the first product

  Scenario: Add a product to cart
    Then "1" item should be added to cart

  #Scenario: Go to checkout
  #  Then "1" item should be added to cart
  #  And I click on go to Cart

  Scenario: User fills in credentials
    Given That "1" should be added to cart
    Given I click on checkout
    When I enter "Peterpan Gustavsson" as my name
    And I enter "Fifth Avenue" as my home adress
    And I enter "402 25" as my postal code
    And I enter "New York City" as my state
    And I enter "403 1525 3525 2535" Card Number as my card Number
    And I enter "03/26" Date of validation
    And I enter "979" as my CCV code
    And I click on purchase
    Then alert "paying" should be shown

  
  Scenario: User fills in invalid credentials
    Given That "1" should be added to cart
    Given I click on checkout
  # Try som negative scenarios>
  # What should the system do it the users fills in a field in the wrong



