package steps;

import Base.BaseUtil;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.PhpTravelsPage;

public class PhpTravelsStepDef extends BaseUtil {

    private BaseUtil base;
    private String phpTravelSite = "http://www.phptravels.net/login";
    private String phpAdminSite = "http://www.phptravels.net/admin";

    public PhpTravelsStepDef(BaseUtil base) {
        this.base = base;
    }

    @Given("^I am on PhpTravels signin page$")
    public void iAmOnPhpTravels() throws InterruptedException {
        base.navigateToPage(phpTravelSite);
        Thread.sleep(2000);
    }

    @Given("^I am on PhpAdmin signin page$")
    public void iAmOnPhpAdmin() throws InterruptedException {
        base.navigateToPage(phpAdminSite);
        Thread.sleep(2000);
    }

    @When("^I enter PhpTravels valid \"([^\"]*)\" and \"([^\"]*)\" and click on login button$")
    public void iEnterValidAndAndClickOnLoginButton(String userName, String password) {
        PhpTravelsPage page = new PhpTravelsPage(base.driver);
        page.Login(userName,password);
    }

    @When("^I enter PhpAdmin valid \"([^\"]*)\" and \"([^\"]*)\" and click on login button$")
    public void iEnterValidAdminDetailsAndAndClickOnLoginButton(String userName, String password) {
        PhpTravelsPage page = new PhpTravelsPage(base.driver);
        page.LoginAdmin(userName,password);
    }

    @Then("^I should able to see the Hotel, Flights and Tours tabs$")
    public void iShouldAbleToSeeTheHotelFlightsAndToursTabs() throws InterruptedException {
        PhpTravelsPage page = new PhpTravelsPage(base.driver);
        Thread.sleep(5000);
        page.ClickHome();
        page.ValidateTabs();
    }

    @Then("^I should able to click coupon$")
    public void iShouldAbleToClickCoupon() throws Throwable {
        Thread.sleep(5000);
        PhpTravelsPage page = new PhpTravelsPage(base.driver);
        page.CouponButton();
    }

    @And("^I provide coupon details for only All Tours$")
    public void iShouldAbleToAddCouponAndSeeTheEntryOfNewCouponCreated() throws Throwable {
        Thread.sleep(5000);
        PhpTravelsPage page = new PhpTravelsPage(base.driver);
        page.ClickAddCoupon();
        Thread.sleep(2000);
        page.EnterDetailsOfCouponOnlyAllTours();
        Thread.sleep(2000);
    }

}
