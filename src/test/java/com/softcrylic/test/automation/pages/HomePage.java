package com.softcrylic.test.automation.pages;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.internal.Locatable;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class smHomePage {
    private WebDriver driver; 

    public smHomePage(WebDriver driver) {
        this.driver = driver;
        String baseUrl = "http://www.barnesandnoble.com";
        driver.get(baseUrl + "/");
    }

    public smSearchResultPage BNsearchFor(String search_keyword) {
        try {
            WebElement searchField = driver.findElement(By.id("search-input"));
            searchField.clear();
            searchField.sendKeys(search_keyword);
            searchField.submit();
        } catch (RuntimeException e) {
            takeScreenShot(e, "searchError");
        }

        return new smSearchResultPage(driver);
    }
    
    public void BNselectDepartment(String department_input) throws InterruptedException {
        try {
            WebElement selectMenu = driver.findElement(By.id("bn-nav-global"));
        	List<WebElement> li_options = selectMenu.findElements(By.tagName("li"));
			for (WebElement li : li_options) {
				if (li.getText().equals(department_input)) {
					WebElement anchor = li.findElement(By.tagName("a"));
					anchor.click();	
				    break;
			    } 
			}
            
        } catch (RuntimeException e) {
            takeScreenShot(e, "searchError");
        }
    }

        
    public void Click_Go_button() {
    	
    	try {
    		
    		WebElement SearchGoButton = driver.findElement(By.id("quick-search-button"));
    		SearchGoButton.click();
           
        } catch (RuntimeException e) {
            takeScreenShot(e, "ClickGoButtonError");
        }

    }

    private void takeScreenShot(RuntimeException e, String fileName) {
        File screenShot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(screenShot, new File(fileName + ".png"));
        } catch (IOException ioe) {
            throw new RuntimeException(ioe.getMessage(), ioe);
        }
        throw e;
    }
}