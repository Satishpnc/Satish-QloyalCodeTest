Feature: Php Travel TestCases

  Scenario Outline: Login and check for PhpTravel booking
    Given I am on PhpTravels signin page
    When I enter PhpTravels valid "<username>" and "<password>" and click on login button
    Then I should able to see the Hotel, Flights and Tours tabs
    Examples:
      | username          | password |
      |  user@phptravels.com | demouser |

  Scenario Outline: Login and check for PhpAdmin for Cupons Management
    Given I am on PhpAdmin signin page
    When I enter PhpAdmin valid "<username>" and "<password>" and click on login button
    Then I should able to click coupon
    And I provide coupon details for only All Tours
    Examples:
      | username          | password |
      |  admin@phptravels.com | demoadmin |

