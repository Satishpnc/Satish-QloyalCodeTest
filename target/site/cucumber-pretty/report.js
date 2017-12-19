$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LightBulbTestCases.feature");
formatter.feature({
  "line": 1,
  "name": "LightBulb TestCase",
  "description": "This feature deals with the LightBulb page functionality",
  "id": "lightbulb-testcase",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4807056330,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Turn ON/OFF Light",
  "description": "",
  "id": "lightbulb-testcase;turn-on/off-light",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on LightBulb page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click switch OFF button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see light is OFF",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click switch ON button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see light is ON",
  "keyword": "Then "
});
formatter.match({
  "location": "LightBulbTestCasesStepDef.iAmOnLightBulbPage()"
});
formatter.result({
  "duration": 27309805961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OFF",
      "offset": 15
    }
  ],
  "location": "LightBulbTestCasesStepDef.iClickButton(String)"
});
formatter.result({
  "duration": 5457035206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OFF",
      "offset": 22
    }
  ],
  "location": "LightBulbTestCasesStepDef.iShouldSeeLightIsAction(String)"
});
formatter.result({
  "duration": 59894052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ON",
      "offset": 15
    }
  ],
  "location": "LightBulbTestCasesStepDef.iClickButton(String)"
});
formatter.result({
  "duration": 5159033413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ON",
      "offset": 22
    }
  ],
  "location": "LightBulbTestCasesStepDef.iShouldSeeLightIsAction(String)"
});
formatter.result({
  "duration": 113743620,
  "status": "passed"
});
formatter.after({
  "duration": 928533126,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Set Light to 60 percentage only",
  "description": "",
  "id": "lightbulb-testcase;set-light-to-60-percentage-only",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on LightBulb page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I should able to set the power \"\u003cpercent\u003e\" of the light",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "lightbulb-testcase;set-light-to-60-percentage-only;",
  "rows": [
    {
      "cells": [
        "percent"
      ],
      "line": 15,
      "id": "lightbulb-testcase;set-light-to-60-percentage-only;;1"
    },
    {
      "cells": [
        "60%"
      ],
      "line": 16,
      "id": "lightbulb-testcase;set-light-to-60-percentage-only;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3811134165,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Set Light to 60 percentage only",
  "description": "",
  "id": "lightbulb-testcase;set-light-to-60-percentage-only;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on LightBulb page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I should able to set the power \"60%\" of the light",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LightBulbTestCasesStepDef.iAmOnLightBulbPage()"
});
formatter.result({
  "duration": 16005601891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60%",
      "offset": 32
    }
  ],
  "location": "LightBulbTestCasesStepDef.iShouldAbleToSetThePowerOfTheLight(String)"
});
formatter.result({
  "duration": 5083189367,
  "status": "passed"
});
formatter.after({
  "duration": 1164435603,
  "status": "passed"
});
formatter.uri("PhpTravels.feature");
formatter.feature({
  "line": 1,
  "name": "Php Travel TestCases",
  "description": "",
  "id": "php-travel-testcases",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login and check for PhpTravel booking",
  "description": "",
  "id": "php-travel-testcases;login-and-check-for-phptravel-booking",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on PhpTravels signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter PhpTravels valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should able to see the Hotel, Flights and Tours tabs",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "php-travel-testcases;login-and-check-for-phptravel-booking;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8,
      "id": "php-travel-testcases;login-and-check-for-phptravel-booking;;1"
    },
    {
      "cells": [
        "user@phptravels.com",
        "demouser"
      ],
      "line": 9,
      "id": "php-travel-testcases;login-and-check-for-phptravel-booking;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3662706287,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login and check for PhpTravel booking",
  "description": "",
  "id": "php-travel-testcases;login-and-check-for-phptravel-booking;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on PhpTravels signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter PhpTravels valid \"user@phptravels.com\" and \"demouser\" and click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should able to see the Hotel, Flights and Tours tabs",
  "keyword": "Then "
});
formatter.match({
  "location": "PhpTravelsStepDef.iAmOnPhpTravels()"
});
formatter.result({
  "duration": 17316977665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user@phptravels.com",
      "offset": 26
    },
    {
      "val": "demouser",
      "offset": 52
    }
  ],
  "location": "PhpTravelsStepDef.iEnterValidAndAndClickOnLoginButton(String,String)"
});
formatter.result({
  "duration": 1435210494,
  "status": "passed"
});
formatter.match({
  "location": "PhpTravelsStepDef.iShouldAbleToSeeTheHotelFlightsAndToursTabs()"
});
formatter.result({
  "duration": 18877886471,
  "status": "passed"
});
formatter.after({
  "duration": 1067750811,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Login and check for PhpAdmin for Cupons Management",
  "description": "",
  "id": "php-travel-testcases;login-and-check-for-phpadmin-for-cupons-management",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on PhpAdmin signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter PhpAdmin valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should able to click coupon",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I provide coupon details for only All Tours",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "php-travel-testcases;login-and-check-for-phpadmin-for-cupons-management;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "php-travel-testcases;login-and-check-for-phpadmin-for-cupons-management;;1"
    },
    {
      "cells": [
        "admin@phptravels.com",
        "demoadmin"
      ],
      "line": 18,
      "id": "php-travel-testcases;login-and-check-for-phpadmin-for-cupons-management;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4604990558,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login and check for PhpAdmin for Cupons Management",
  "description": "",
  "id": "php-travel-testcases;login-and-check-for-phpadmin-for-cupons-management;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on PhpAdmin signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter PhpAdmin valid \"admin@phptravels.com\" and \"demoadmin\" and click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should able to click coupon",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I provide coupon details for only All Tours",
  "keyword": "And "
});
formatter.match({
  "location": "PhpTravelsStepDef.iAmOnPhpAdmin()"
});
formatter.result({
  "duration": 10814503853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@phptravels.com",
      "offset": 24
    },
    {
      "val": "demoadmin",
      "offset": 51
    }
  ],
  "location": "PhpTravelsStepDef.iEnterValidAdminDetailsAndAndClickOnLoginButton(String,String)"
});
formatter.result({
  "duration": 701046313,
  "status": "passed"
});
formatter.match({
  "location": "PhpTravelsStepDef.iShouldAbleToClickCoupon()"
});
formatter.result({
  "duration": 11804434560,
  "status": "passed"
});
formatter.match({
  "location": "PhpTravelsStepDef.iShouldAbleToAddCouponAndSeeTheEntryOfNewCouponCreated()"
});
formatter.result({
  "duration": 10562916935,
  "status": "passed"
});
formatter.after({
  "duration": 1618332039,
  "status": "passed"
});
});