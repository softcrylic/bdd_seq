Feature: Search
In order to Find Right Products
As a Guest User
I want Search Functionality


Scenario: Basic Search

    Given User is on home page
    When Enter "Acceptance Testing" in search box field and Search
    Then Page loads with results for search keyword
    
Scenario Outline: Department Search

    Given User is on home page
    And Select a <department> to search
    When Enter <keyword> in search box field
    And Click Go button 
    Then Page loads with results for search keyword
    
	Examples:
	|department	|keyword	|
	|"Books"		|"Agile"	|
	|"DVDs"		|"The Blind Side"	|