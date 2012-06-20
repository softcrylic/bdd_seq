$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('/Users/sundarsritharan/git/bdd_seq/src/test/resources/com/softcrylic/test/automation/checkout.feature');
formatter.feature({
  "id": "checkout",
  "tags": [
    {
      "name": "@checkout",
      "line": 1
    }
  ],
  "description": "In order to Place Orders\nAs Guest and Registered User\nI want Checkout Feature",
  "name": "Checkout",
  "keyword": "Feature",
  "line": 2
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 7,
  "type": "background"
});
formatter.step({
  "name": "User added products to shopping bag",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "User is in shopping bag page",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "User click continue checkout button",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "Sign in page should load",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "location": "CheckoutStepDefinitions.addProductsToShoppingBag()"
});
formatter.result({
  "duration": 42385385000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStepDefinitions.userInShoppingBag()"
});
formatter.result({
  "duration": 31000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStepDefinitions.continueToCheckout()"
});
formatter.result({
  "duration": 3838892000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStepDefinitions.userInSignInPage()"
});
formatter.result({
  "duration": 58000,
  "status": "passed"
});
formatter.scenario({
  "id": "checkout;checkout-as-guest-user",
  "description": "",
  "name": "Checkout as Guest User",
  "keyword": "Scenario",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "User entered email \"ssta123@gmail.com\"",
  "keyword": "When ",
  "line": 15
});
formatter.step({
  "name": "Click Begin Checkout",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "Checkout page should be displayed",
  "keyword": "Then ",
  "line": 17
});
formatter.step({
  "name": "User entered mandatory Shipping Details",
  "keyword": "Given ",
  "line": 18,
  "rows": [
    {
      "cells": [
        "Key",
        "value"
      ],
      "line": 19
    },
    {
      "cells": [
        "userflag",
        "Guest"
      ],
      "line": 20
    },
    {
      "cells": [
        "firstname",
        "Xavier"
      ],
      "line": 21
    },
    {
      "cells": [
        "lastname",
        "Zion"
      ],
      "line": 22
    },
    {
      "cells": [
        "address",
        "600 Alexander Rd Ste 9"
      ],
      "line": 23
    },
    {
      "cells": [
        "city",
        "Princeton"
      ],
      "line": 24
    },
    {
      "cells": [
        "state",
        "New Jersey"
      ],
      "line": 25
    },
    {
      "cells": [
        "zip",
        "08540"
      ],
      "line": 26
    },
    {
      "cells": [
        "country",
        "United States"
      ],
      "line": 27
    },
    {
      "cells": [
        "phonenumber",
        "(609) 662 4040"
      ],
      "line": 28
    },
    {
      "cells": [
        "email",
        "ssta123@gmail.com"
      ],
      "line": 29
    }
  ]
});
formatter.step({
  "name": "Select Pay By Phone and Use my shipping address as my billing address options",
  "keyword": "And ",
  "line": 30
});
formatter.step({
  "name": "Continue checkout without entering an account",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "Check limited changes options should load",
  "keyword": "Then ",
  "line": 32
});
formatter.match({
  "arguments": [
    {
      "val": "ssta123@gmail.com",
      "offset": 20
    }
  ],
  "location": "CheckoutStepDefinitions.User_entered_email(String)"
});
formatter.result({
  "duration": 227061000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStepDefinitions.Click_Begin_Checkout()"
});
formatter.result({
  "duration": 3844336000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStepDefinitions.userInCheckoutPage()"
});
formatter.result({
  "duration": 35000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStepDefinitions.User_entered_mandatory_Shipping_Details(CheckoutStepDefinitions$DataItem\u003e)"
});
formatter.result({
  "duration": 4610089000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStepDefinitions.payByPhone()"
});
formatter.result({
  "duration": 7104341000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStepDefinitions.Continue_checkout_without_entering_an_account()"
});
formatter.result({
  "duration": 3275397000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStepDefinitions.Check_limited_changes_options_should_load()"
});
formatter.result({
  "duration": 2835353000,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 7,
  "type": "background"
});
formatter.step({
  "name": "User added products to shopping bag",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "User is in shopping bag page",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "User click continue checkout button",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "Sign in page should load",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "location": "CheckoutStepDefinitions.addProductsToShoppingBag()"
});
formatter.result({
  "duration": 27001185000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStepDefinitions.userInShoppingBag()"
});
formatter.result({
  "duration": 36000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStepDefinitions.continueToCheckout()"
});
formatter.result({
  "duration": 3004287000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStepDefinitions.userInSignInPage()"
});
formatter.result({
  "duration": 26000,
  "status": "passed"
});
formatter.scenario({
  "id": "checkout;checkout-as-registered-user",
  "description": "",
  "name": "Checkout as Registered User",
  "keyword": "Scenario",
  "line": 34,
  "type": "scenario"
});
formatter.step({
  "name": "User entered",
  "keyword": "When ",
  "line": 36,
  "rows": [
    {
      "cells": [
        "Key",
        "value"
      ],
      "line": 37
    },
    {
      "cells": [
        "userflag",
        "Registered"
      ],
      "line": 38
    },
    {
      "cells": [
        "username",
        "testautomationdemo@gmail.com"
      ],
      "line": 39
    },
    {
      "cells": [
        "password",
        "automation"
      ],
      "line": 40
    }
  ]
});
formatter.step({
  "name": "Click on SignIn button",
  "keyword": "And ",
  "line": 41
});
formatter.step({
  "name": "Checkout page should be displayed",
  "keyword": "Then ",
  "line": 42
});
formatter.step({
  "name": "User entered mandatory Shipping Details",
  "keyword": "Given ",
  "line": 43,
  "rows": [
    {
      "cells": [
        "Key",
        "value"
      ],
      "line": 44
    },
    {
      "cells": [
        "firstname",
        "Xavier"
      ],
      "line": 45
    },
    {
      "cells": [
        "lastname",
        "Zion"
      ],
      "line": 46
    },
    {
      "cells": [
        "address",
        "600 Alexander Rd Ste 9"
      ],
      "line": 47
    },
    {
      "cells": [
        "city",
        "Princeton"
      ],
      "line": 48
    },
    {
      "cells": [
        "state",
        "New Jersey"
      ],
      "line": 49
    },
    {
      "cells": [
        "zip",
        "08540"
      ],
      "line": 50
    },
    {
      "cells": [
        "country",
        "United States"
      ],
      "line": 51
    },
    {
      "cells": [
        "phonenumber",
        "(609) 662 4040"
      ],
      "line": 52
    }
  ]
});
formatter.step({
  "name": "Check limited changes options should load",
  "keyword": "Then ",
  "line": 53
});
formatter.match({
  "location": "CheckoutStepDefinitions.User_entered(CheckoutStepDefinitions$DataItem\u003e)"
});
formatter.result({
  "duration": 1063000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStepDefinitions.SignIn()"
});
formatter.result({
  "duration": 587815000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStepDefinitions.userInCheckoutPage()"
});
formatter.result({
  "duration": 34000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStepDefinitions.User_entered_mandatory_Shipping_Details(CheckoutStepDefinitions$DataItem\u003e)"
});
formatter.result({
  "duration": 10301067000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStepDefinitions.Check_limited_changes_options_should_load()"
});
formatter.result({
  "duration": 2792296000,
  "status": "passed"
});
});