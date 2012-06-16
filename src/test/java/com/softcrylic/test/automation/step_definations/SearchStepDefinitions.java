package com.softcrylic.test.automation.step_definations;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;

import com.softcrylic.test.automation.pages.*;

public class SearchStepDefinitions {
    private WebDriver driver;
    private smHomePage sm_home;
    private smSearchResultPage sm_searchResult;
    private String entered_search_keyword;
    

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
    	
    	/// REMOTE DRIVER CONFIG FOR RUNNING TESTS IN SAUCE LABS 
    	//String url = "http://mayur_softcrylic:1034911c-db71-4c8e-8e12-7831abf6adf7@ondemand.saucelabs.com:80/wd/hub";
    	//capabillities.setCapability("platform", Platform.MAC);
    	//capabillities.setCapability("name", "Running via Jenkins. Testing on Sauce");
    	//capabillities.setCapability("record-video", false);
    	//if(url.contains("saucelabs")) 
        // capabillities.setCapability("version", "11");
    	// else
    	// capabillities.setCapability("version", "12.0");
    	
    	
    }

    @After
    public void cleanUp() {
    	System.out.println("Count is: @cleanUp " + ++count);
        driver.close();
        try{
        	if(driver!=null) driver.quit();
        }catch(Exception ignore){}
    }

    
    // search feature
    @Given("^User is on home page$")
    public void prepareHomePage1() {
    	System.out.println("Count is: @prepareHomePage " + ++count);
        sm_home = new smHomePage(driver);
    }

    @When("^Enter \"([^\"]*)\" in search box field$")
    public void search1(String search_keyword) {
    	entered_search_keyword = search_keyword;
    	System.out.println("Count is: @search " + ++count);
        sm_searchResult = sm_home.BNsearchFor(entered_search_keyword);
    }
    
    @When("^Click Go button$")
    public void Click_Go_button(){
    	// home page class has the implementation of Search Go Button
    }

    @Then("^Page loads with results for search keyword$")
    public void assertTheSearchResult1() throws Throwable {
    	System.out.println("Count is: @assertTheSearchResult " + ++count);
    	boolean contains_keyword = sm_searchResult.SearchResults().contains(entered_search_keyword);
    	junit.framework.Assert.assertTrue(contains_keyword);
    	//assertEquals(search_keyword_result,searchResult.InterpretationCheck());
    }
    
    @Given("^Select a \"([^\"]*)\" to search$")
    public void Department_Selection(String department) throws Throwable {
    	System.out.println("Count is: select_searchdepartment " + ++count);
    	sm_home.BNselectDepartment(department);
    }
    
    private static int count =0;
}