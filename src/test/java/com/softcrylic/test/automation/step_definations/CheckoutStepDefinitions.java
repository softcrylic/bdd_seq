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

import com.softcrylic.test.automation.pages.*;


public class CheckoutStepDefinitions {
	
	private WebDriver driver;
    private HomePage hp;
    private DepartmentPage departmentPage;
    private ShoppingBagPage shoppingbagPage;
    private SignInPage signinPage;
    private final DataTable dataTable = new DataTable();
    private StringBuilder printedList;
    private MyHashMap myMap = new MyHashMap();
    private String keyValue;
    
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
    	signinPage.isShoppingBagPage();
    }
    
    @When("^User entered$")
    public void User_entered(List<DataItem> items) throws Throwable {
    	for (DataItem item : items) {
    		//dataTable.addItem(item.username, item.password);
    		myMap.addItem(item.key, item.value);
        }
    }
    
    @When("^Click on SignIn button$")
    public void SignIn() throws Throwable {
    	//printedList = new StringBuilder();
    	//dataTable.print(printedList);
    	keyValue = myMap.getValue("username");
    }

    @Then("^Shipping Address page should be displayed$")
    public void Shipping_Address_page_should_be_displayed() throws Throwable {
    	//System.out.println(printedList.toString());
    }
    
    
    public static class DataItem {
        private String key;
        private String value;
    }

}
