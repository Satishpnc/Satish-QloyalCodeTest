Feature: LightBulb TestCase
  This feature deals with the LightBulb page functionality

  Scenario: Turn ON/OFF Light
    Given I am on LightBulb page
    When I click switch OFF button
    Then I should see light is OFF
    When I click switch ON button
    Then I should see light is ON

  Scenario Outline: Set Light to 60 percentage only
    Given I am on LightBulb page
    Then I should able to set the power "<percent>" of the light
    Examples:
      | percent          |
      | 60% |