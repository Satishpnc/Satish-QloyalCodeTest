package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PhpTravelsPage {

    public PhpTravelsPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    @FindBy(name = "username")
    WebElement usernameField;

    @FindBy(name = "password")
    WebElement passwordField;

    @FindBy(xpath = "//*[@id=\"loginfrm\"]/div[1]/div[5]/button")
    WebElement submitButton;

    @FindBy(name = "email")
    WebElement adminusernameField;

    @FindBy(name = "password")
    WebElement adminpasswordField;

    @FindBy(xpath = "/html/body/div[2]/div[2]/form[1]/button")
    WebElement adminLoginButton;

    @FindBy(xpath = "/html/body/nav[1]/div/div/div/ul/li[1]/a")
    WebElement homeLink;

    @FindBy(xpath = "/html/body/nav[1]/div/div/div/ul/li[1]/a")
    WebElement hotelTab;

    @FindBy(xpath = "//*[@id=\"body-section\"]/div[2]/div[2]/div/ul/li[2]/a")
    WebElement flightTab;

    @FindBy(xpath = "//*[@id=\"body-section\"]/div[2]/div[2]/div/ul/li[3]/a")
    WebElement toursTab;

    @FindBy(xpath = "//*[@id=\"social-sidebar-menu\"]/li[11]/a")
    WebElement coupon;

    @FindBy(xpath = "//*[@id=\"content\"]/div[1]/div[2]/div[1]/button")
    WebElement addCoupon;

    @FindBy(xpath = "//*[@id=\"addcoupon\"]/div[2]/div[1]/div[2]/div/div[1]/ins")
    WebElement selectAddToursonly;

    @FindBy(id = "rate")
    WebElement percentage;

    @FindBy(id = "add")
    WebElement generateCouponCodeText;

    @FindBy(xpath = "//*[@id='codeadd']")
    WebElement generatedCouponText;

    @FindBy(xpath = "//*[@id=\"#\"]")
    WebElement generateCoupon;

    @FindBy(xpath = "//*[@id=\"content\"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/table/tbody/tr[1]/td[4]")
    WebElement loggedCouponText;


    public void Login(String username, String password) {
        usernameField.sendKeys(username);
        passwordField.sendKeys(password);
        submitButton.click();
    }

    public void LoginAdmin(String username, String password) {
        adminusernameField.sendKeys(username);
        adminpasswordField.sendKeys(password);
        adminLoginButton.click();
    }

    public void ClickHome() {
        homeLink.click();
    }

    public void CouponButton() {
        coupon.click();
    }

    public void ClickAddCoupon() {
        addCoupon.click();
    }

    public void ValidateTabs() {

        if (hotelTab.isDisplayed()) {
            System.out.println("Hotel tab displayed for booking");
        }
        if (flightTab.isDisplayed()){
            System.out.println("Flight tab displayed for booking");
        }
        if (toursTab.isDisplayed()){
            System.out.println("Tours tab displayed for booking");
        }
    }

    public void EnterDetailsOfCouponOnlyAllTours() {
        percentage.sendKeys("10");
        selectAddToursonly.click();
        generateCouponCodeText.click();
    }



}