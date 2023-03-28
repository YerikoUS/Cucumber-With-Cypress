Feature: AmazonSearch

  Scenario: Look for an Item and save the result
    Given I navigate to Amazon website
    When I make a search and open the first result
    Then I can see the item and store the name and price
