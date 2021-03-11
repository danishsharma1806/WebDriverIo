const blazePage=require("../pages/blazemeter")
describe("Blaze Page Elements Handle",function()
{
    it("Get text of all main links",function()
    {
        browser.url('https://www.blazemeter.com/');
        blazePage.getTextForLi;
        blazePage.userCasesElements;
        console.log('third link is : ',blazePage.specificChildElement(3).getText());
        blazePage.specificChildElementText(4);
    });

    it("Main heading Displayed",function()
    {
        console.log(blazePage.mainHeader.isDisplayed());
    });

    it("Main heading Enabled",function()
    {
        console.log(blazePage.mainHeader.isEnabled());
    });

    it("Main heading Exits",function()
    {
        console.log(blazePage.mainHeader.isExisting());
    });

    it("Main heading displayed in view port",function()
    {
        console.log(blazePage.mainHeader.isDisplayedInViewPort());
    });

    it("JMeter is displayed in view port",function()
    {
        console.log(blazePage.mainHeader.isDisplayedInViewPort());
    });

    it(" If isDisplayed click on Link",function()
    {
        blazePage.clickOnProduct();
        browser.pause(5000);
    });

});