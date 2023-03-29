Feature: AmazonSearch

  Scenario: Look for an Item and save the result
    Given I navigate to Amazon website
    When I make a search and open the first result
      | article            |
      | Iphone 14 pro max  |
      | Samsung Galaxy S23 |
      | Macbook Air M1     |
    Then I can see the item and store the name and price
