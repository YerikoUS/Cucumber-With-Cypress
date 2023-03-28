Feature: AmazonSearch

  Scenario: Look for an Item and save the result
    Given I navigate to Amazon website
      | Macbook air        |
      | Iphone 14 pro max  |
      | Samsung Galaxy S23 |
    When I make a search and open the first result
    Then I can see the item and store the name and price
