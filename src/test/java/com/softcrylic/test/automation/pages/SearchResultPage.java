package com.softcrylic.test.automation.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class smSearchResultPage {
    private WebDriver driver; 

    public smSearchResultPage(WebDriver driver) {
        this.driver = driver;
        if (!driver.getTitle().contains("BARNES & NOBLE")) {
            throw new IllegalStateException("This is not barnesandnoble.com" + driver.getCurrentUrl());
        }
    }

    public String SearchResults(){
    	
    	WebElement SearchResult = driver.findElement(By.id("search-result0")); 
    	String html = (String)((JavascriptExecutor)driver).executeScript("return arguments[0].innerHTML;", SearchResult); 
    	return html;
    }
  
}