Feature: ReqRes Page Activity

  Scenario: Do a POST request
    Given I navigate to ReqRes page
    When I make a POST request
    Then I can confirm the POST request

  Scenario: Do a DELETE Request
    Given I navigate to ReqRes page
    When I make a DELETE request
    Then I can confirm the DELETE request

  Scenario: Do a PUT Request
    Given I navigate to ReqRes page
    When I make a PUT request
    Then I can confirm the PUT request
