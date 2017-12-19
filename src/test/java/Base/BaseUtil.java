package Base;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class BaseUtil {

   public WebDriver driver = null;

    public void navigateToPage(String url) {
        driver.navigate().to(url);
        driver.manage().window().maximize();
    }

    public void javascriptExecutorSetAttributeValue(String getElementId, String setAttributeName, String setAttributeValue) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("document.getElementById("+getElementId+").setAttribute("+setAttributeName+", "+setAttributeValue+");");
    }

    public void implicitWait(long timeSeconds)
    {
        driver.manage().timeouts().implicitlyWait(timeSeconds, TimeUnit.SECONDS);
    }
    public void explicitWait(String idName, long timeSeconds) {
        WebDriverWait wait = new WebDriverWait(driver, timeSeconds);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(idName)));
    }
}
