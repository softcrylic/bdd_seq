$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('com/softcrylic/test/automation/newyork.feature');
formatter.feature({
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-meteorological-institute,-http://www.yr.no",
  "description": "",
  "name": "It should be possible to search for places at the Norwegian Meteorological Institute, http://www.yr.no",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-meteorological-institute,-http://www.yr.no;locate-new-york",
  "description": "",
  "name": "Locate New York",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I want to know the weather forecast for coming days",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I search for New York",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I should be able to get a weather forecast for New York",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "SearchStepDefinitions.prepareHomePage()"
});
formatter.result({
  "duration": 11382200000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 13
    }
  ],
  "location": "SearchStepDefinitions.search(String)"
});
formatter.result({
  "duration": 5294272000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 47
    }
  ],
  "location": "SearchStepDefinitions.assertTheSearchResult(String)"
});
formatter.result({
  "duration": 3984405000,
  "status": "passed"
});
formatter.uri('com/softcrylic/test/automation/stock.feature');
formatter.feature({
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-meteorological-institute,-http://www.yr.no",
  "description": "",
  "name": "It should be possible to search for places at the Norwegian Meteorological Institute, http://www.yr.no",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-meteorological-institute,-http://www.yr.no;locate-stockholm",
  "description": "",
  "name": "Locate Stockholm",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I want to know the weather forecast for coming days",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I search for Stockholm",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I should be able to get a weather forecast for Stockholm",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "SearchStepDefinitions.prepareHomePage()"
});
formatter.result({
  "duration": 8348027000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stockholm",
      "offset": 13
    }
  ],
  "location": "SearchStepDefinitions.search(String)"
});
formatter.result({
  "duration": 4770579000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stockholm",
      "offset": 47
    }
  ],
  "location": "SearchStepDefinitions.assertTheSearchResult(String)"
});
formatter.result({
  "duration": 2243149000,
  "status": "failed",
  "error_message": "cucumber.runtime.CucumberException: Can\u0027t invoke com.softcrylic.test.automation.step_definations.SearchStepDefinitions.assertTheSearchResult(String) in file:/Users/sundarsritharan/git/bdd_seq/target/test-classes/\n\tat cucumber.runtime.Utils.invoke(Utils.java:38)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:30)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:45)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:248)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\n\tat cucumber.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:76)\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:65)\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:20)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\n\tat cucumber.junit.FeatureRunner.run(FeatureRunner.java:72)\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:76)\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:36)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\n\tat cucumber.junit.Cucumber.run(Cucumber.java:81)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:234)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:133)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:114)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:188)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:166)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:86)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:101)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:74)\nCaused by: java.lang.IllegalStateException: This is not yr.no: http://www.yr.no/place/Sweden/Stockholm/Stockholm/\n\tat com.softcrylic.test.automation.pages.LocationPage.\u003cinit\u003e(LocationPage.java:14)\n\tat com.softcrylic.test.automation.pages.SearchResultPage.clickOnTopSearchResultLink(SearchResultPage.java:22)\n\tat com.softcrylic.test.automation.step_definations.SearchStepDefinitions.assertTheSearchResult(SearchStepDefinitions.java:86)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\t... 37 more\n"
});
});