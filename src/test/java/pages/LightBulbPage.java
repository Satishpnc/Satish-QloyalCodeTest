package pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import steps.Hook;

import java.util.concurrent.TimeUnit;

public class LightBulbPage {

    public LightBulbPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "switch")
    WebElement switchButton;

    @FindBy(id = "lightbulb")
    WebElement isLightOn;

    @FindBy(xpath = "//input[@type='submit']")
    WebElement submitButton;

    public void PerformActionOnButton() {
        switchButton.click();
    }
    public void verifyLight(String action) {

        if(action.contentEquals("ON"))
            Assert.assertEquals(isLightOn.getAttribute("aria-disabled"),"false");

        else if (action.contentEquals("OFF"))
            Assert.assertEquals(isLightOn.getAttribute("aria-disabled"),"true");
    }

}
