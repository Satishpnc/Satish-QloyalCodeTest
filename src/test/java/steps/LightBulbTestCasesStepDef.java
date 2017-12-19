package steps;

import Base.BaseUtil;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.Transform;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import pages.LightBulbPage;
import transformation.EmailTransform;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class LightBulbTestCasesStepDef extends BaseUtil {

    /**
     * Steps which are reproduced from 'LightBulbTestCases.feature'.
     */

    private BaseUtil base;
    private String lightBulbSite = "https://qa-challenges-lightbulb.atlassian.io/";

    public LightBulbTestCasesStepDef(BaseUtil base) {
        this.base = base;
    }

    @Given("^I am on LightBulb page$")
    public void iAmOnLightBulbPage() throws InterruptedException {
        base.navigateToPage(lightBulbSite);
        Thread.sleep(5000);
    }

    @When("^I click switch (.*) button$")
    public void iClickButton(String btnAction) throws InterruptedException {

        LightBulbPage page = new LightBulbPage(base.driver);
        System.out.println("Performing Switch" +btnAction+ "action");
        page.PerformActionOnButton();
        Thread.sleep(5000);
    }

    @Then("^I should see light is (.*)$")
    public void iShouldSeeLightIsAction(String lightStatus) {

        LightBulbPage page = new LightBulbPage(base.driver);
        page.verifyLight(lightStatus);
    }


    @Then("^I should able to set the power \"([^\"]*)\" of the light$")
    public void iShouldAbleToSetThePowerOfTheLight(String powerPercentage) throws InterruptedException {
        String setPower = "'background: radial-gradient(circle at 937.891px 213.5px, rgba(211, 160, 40, 0.25) 0%, rgba(99, 67, 20, 0.5) 10%, rgba(0, 0, 0, 0.75) 50%, rgb(0, 0, 0) "+powerPercentage+");'";
        base.javascriptExecutorSetAttributeValue("'lightrays'","'style'",setPower);
        System.out.println("Power set as: " + powerPercentage);
        Thread.sleep(5000);
    }
}
