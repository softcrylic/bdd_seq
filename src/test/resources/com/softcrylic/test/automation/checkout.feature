Feature: Checkout
In order to Place Orders
As Guest and Registered User
I want Checkout Feature

Scenario: Checkout as Registered User

	Given User added products to shopping bag
	And User is in shopping bag page
	When User click continue checkout button 
	Then Sign in page should load
	When User entered
	|	Key	|	value	|
	|	username	|	testautomationdemo@gmail.com	|
	|	password	|	automation	|
	And Click on SignIn button
	Then Shipping Address page should be displayed