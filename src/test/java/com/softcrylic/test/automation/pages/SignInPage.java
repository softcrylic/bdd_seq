package com.softcrylic.test.automation.pages;

import org.openqa.selenium.*;

public class SignInPage {
	
	private WebDriver driver;
	private String pageHeader;
	private boolean isSignInBagPage = false;
	
	public SignInPage(WebDriver driver) {
        this.driver = driver;
        try {
			this.driver = driver;
			pageHeader = SignInPage.PageHeader(driver).findElement(By.tagName("p")).toString();
			if (pageHeader.toLowerCase().contains("Sign in or Proceed as Guest")){
				isSignInBagPage = true;
			}
        } catch (RuntimeException e) {
        	throw new IllegalStateException("This is not barnesandnoble.com" + driver.getCurrentUrl());
        }
    }

	//Properties
	public static WebElement PageHeader(WebDriver driver){
		return driver.findElement(By.id("opSignInHeader"));
	}
	public boolean isShoppingBagPage(){
		return isSignInBagPage;
	}
	
	
}
