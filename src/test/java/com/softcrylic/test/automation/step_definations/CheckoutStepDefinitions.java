package com.softcrylic.test.automation.step_definations;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;
import java.util.List;

import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.util.HashMap;

import com.softcrylic.test.automation.pages.*;


public class CheckoutStepDefinitions {
	
	private WebDriver driver;
    private HomePage hp;
    private DepartmentPage departmentPage;
    private ShoppingBagPage shoppingbagPage;
    private SignInPage signinPage;
    private CheckoutPage checkoutPage;
    private MyHashMap myMap = new MyHashMap();
    
    @Before
    public void prepare() throws MalformedURLException {
    	
    	String url = "";
    	/* REMOTE DRIVER CONFIG FOR RUNNING TESTS IN LOCAL GRID AND JENKINS */
    	url = "http://localhost:4444/wd/hub";
    	DesiredCapabilities capabillities = DesiredCapabilities.firefox();
    	capabillities.setCapability("platform", Platform.MAC);
    	capabillities.setCapability("version", "11");
    	this.driver = new RemoteWebDriver(new URL(url), capabillities);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }
    
    @After
    public void cleanUp() {
        driver.close();
        try{
        	if(driver!=null) driver.quit();
        }catch(Exception ignore){}
    }
    
    @Given("^User added products to shopping bag$")
    public void addProductsToShoppingBag() throws Throwable {
    	hp = new HomePage(driver);
    	departmentPage = hp.SelectADepartment("Books");
    	driver = departmentPage.SelectDeptSubCategory(driver,"Featured New Arrivals");
    	shoppingbagPage = departmentPage.AddProductToShoppingBag();
    }
    
    @Given("^User is in shopping bag page$")
    public void userInShoppingBag() throws Throwable {
    	shoppingbagPage.isShoppingBagPage();
    }
    
    @When("^User click continue checkout button$")
    public void continueToCheckout() throws Throwable {
    	signinPage = shoppingbagPage.ContinueCheckout();
    }

    @Then("^Sign in page should load$")
    public void userInSignInPage() throws Throwable {
    	signinPage.isSignInPage();
    }
    
    @When("^User entered$")
    public void User_entered(List<DataItem> items) throws Throwable {
    	for (DataItem item : items) {
    		myMap.addItem(item.key, item.value);
        }
    }
    
    @When("^Click on SignIn button$")
    public void SignIn() throws Throwable {
    	checkoutPage = signinPage.SignIn(myMap.getValue("username"),myMap.getValue("password"));
    }

    @Then("^Checkout page should be displayed$")
    public void userInCheckoutPage() throws Throwable {
    	checkoutPage.isCheckoutPage();
    }
    
    @Given("^User entered mandatory Shipping Details$")
    public void User_entered_mandatory_Shipping_Details(List<DataItem> items) throws Throwable {
    	for (DataItem item : items) {
    		myMap.addItem(item.key, item.value);
        }
    	checkoutPage.EditShippingAddress(myMap);
    }
    
    public static class DataItem {
        private String key;
        private String value;
    }
    
    // Guest checkout definitions
    @When("^User entered email \"([^\"]*)\"$")
    public void User_entered_email(String email) throws Throwable {
    	signinPage.EnterEmail(email);
    }
    
    @When("^Click Begin Checkout$")
    public void Click_Begin_Checkout() throws Throwable {
    	checkoutPage = signinPage.clickBeginGuestCheckout();
    }
    
	@Given("^Select Pay By Phone and Use my shipping address as my billing address options$")
    public void payByPhone() throws Throwable {
	   	checkoutPage.continueCheckout();
		checkoutPage.payByPhoneAndBilling();
    }
	
	@Given("^Continue checkout without entering an account$")
	public void Continue_checkout_without_entering_an_account() throws Throwable {
		checkoutPage.continueWithoutAccount();
	}
    
	@Then("^Check limited changes options should load$")
	public void Check_limited_changes_options_should_load() throws Throwable {
		checkoutPage.checkLimitedChangesOptions();
	}
    
}
