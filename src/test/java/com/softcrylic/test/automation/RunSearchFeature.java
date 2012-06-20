package com.softcrylic.test.automation;

import cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class) 
//@Cucumber.Options(features = "src/test/resources/com/softcrylic/test/automation/search.feature",format = {"pretty", "html:target/cucumber","json:target/newyork.json" })
@Cucumber.Options(tags="@search") 
public class RunSearchFeature  {
}
