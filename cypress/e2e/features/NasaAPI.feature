Feature: API Testing

  Scenario: Get 2 request with a response code = 200
    Given I navigate to NASA.gov page
    When I make 2 request GET
    Then I can confirm the response is 200
