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

import com.softcrylic.test.automation.pages.*;

public class SearchStepDefinitions {
    private WebDriver driver;
    private HomePage home;
    private SearchResultPage searchResult;

    @Before
    public void prepare() throws MalformedURLException {
    	
    	String url = "";
    	//DesiredCapabilities capabillities = DesiredCapabilities.chrome(); 
    	DesiredCapabilities capabillities = DesiredCapabilities.firefox();
    	capabillities.setCapability("version", "11");
    	
    	// run in mac machine gird
    	url = "http://localhost:4444/wd/hub";
    	capabillities.setCapability("platform", Platform.MAC);
    
    	
    	//run in sauce labs grid
    	//String url = "http://mayur_softcrylic:1034911c-db71-4c8e-8e12-7831abf6adf7@ondemand.saucelabs.com:80/wd/hub";
    	//capabillities.setCapability("platform", Platform.MAC);
    	//capabillities.setCapability("name", "Running via Jenkins. Testing on Sauce");
    	//capabillities.setCapability("record-video", false);
    	
    	System.out.println("Count is:  @prepare" + ++count);
    	System.out.println("Running at: "+url);
    	 
    	
    	
    	
    	//if(url.contains("saucelabs")) 
        // capabillities.setCapability("version", "11");
    	// else
    	// capabillities.setCapability("version", "12.0");
    	
         this.driver = new RemoteWebDriver(
        		 new URL(url),
            capabillities);
         driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    	
    }

    @After
    public void cleanUp() {
    	System.out.println("Count is: @cleanUp " + ++count);
        driver.close();
        try{
        	if(driver!=null) driver.quit();
        }catch(Exception ignore){}
    }

    @Given("^I want to know the weather forecast for coming days$")
    public void prepareHomePage() {
    	System.out.println("Count is: @prepareHomePage " + ++count);
        home = new HomePage(driver);
    }

    @When("^I search for (.*)$")
    //@When("^I search for nothing$") 
    public void search(String location) {
    	System.out.println("Count is: @search " + ++count);
        searchResult = home.searchFor(location);
    }

    @Then("^I should be able to get a weather forecast for (.*)$")
    public void assertTheSearchResult(String locationName) {
    	System.out.println("Count is: @assertTheSearchResult " + ++count);
        LocationPage location = searchResult.clickOnTopSearchResultLink();
        @SuppressWarnings("unused")
		String actualHeadLine = location.getHeadLine();

        //assertTrue(actualHeadLine.contains(locationName));
    }
    private static int count =0;
}