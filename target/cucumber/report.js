$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('com/softcrylic/test/automation/search.feature');
formatter.feature({
  "id": "search",
  "description": "",
  "name": "Search",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "search;basic-search",
  "description": "",
  "name": "Basic Search",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "Enter \"Acceptance Testing\" in search box field",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "Click Go button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "Page loads with results for search keyword",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "SearchStepDefinitions.prepareHomePage1()"
});
formatter.result({
  "duration": 5139680000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acceptance Testing",
      "offset": 7
    }
  ],
  "location": "SearchStepDefinitions.search1(String)"
});
formatter.result({
  "duration": 5697096000,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinitions.Click_Go_button()"
});
formatter.result({
  "duration": 31000,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinitions.assertTheSearchResult1()"
});
formatter.result({
  "duration": 199014000,
  "status": "passed"
});
formatter.scenario({
  "id": "search;department-search;;2",
  "description": "",
  "name": "Department Search",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given ",
  "line": 12
});
formatter.step({
  "name": "Select a \"Books\" to search",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Enter \"Agile\" in search box field",
  "keyword": "When ",
  "line": 14,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "Click Go button",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "Page loads with results for search keyword",
  "keyword": "Then ",
  "line": 16
});
formatter.match({
  "location": "SearchStepDefinitions.prepareHomePage1()"
});
formatter.result({
  "duration": 4938338000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 10
    }
  ],
  "location": "SearchStepDefinitions.Department_Selection(String)"
});
formatter.result({
  "duration": 619801000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Agile",
      "offset": 7
    }
  ],
  "location": "SearchStepDefinitions.search1(String)"
});
formatter.result({
  "duration": 13930101000,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinitions.Click_Go_button()"
});
formatter.result({
  "duration": 31000,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinitions.assertTheSearchResult1()"
});
formatter.result({
  "duration": 64457000,
  "status": "passed"
});
formatter.scenario({
  "id": "search;department-search;;3",
  "description": "",
  "name": "Department Search",
  "keyword": "Scenario Outline",
  "line": 21,
  "type": "scenario"
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given ",
  "line": 12
});
formatter.step({
  "name": "Select a \"DVDs\" to search",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Enter \"The Blind Side\" in search box field",
  "keyword": "When ",
  "line": 14,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "Click Go button",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "Page loads with results for search keyword",
  "keyword": "Then ",
  "line": 16
});
formatter.match({
  "location": "SearchStepDefinitions.prepareHomePage1()"
});
formatter.result({
  "duration": 4405570000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DVDs",
      "offset": 10
    }
  ],
  "location": "SearchStepDefinitions.Department_Selection(String)"
});
formatter.result({
  "duration": 1463643000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Blind Side",
      "offset": 7
    }
  ],
  "location": "SearchStepDefinitions.search1(String)"
});
formatter.result({
  "duration": 8424376000,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinitions.Click_Go_button()"
});
formatter.result({
  "duration": 22000,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinitions.assertTheSearchResult1()"
});
formatter.result({
  "duration": 346222000,
  "status": "passed"
});
});