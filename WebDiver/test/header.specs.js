const homePage=require("../pages/homepage")
describe("interaction with web element",function()
{
    it("Enter value in the field",function()
    {
        browser.url('https://www.freshworks.com/');
        const hearer=$('h1');
        let text=hearer.getText();
        console.log(text);
    });

    it("Verify Home Page Elements",function()
    {
        browser.url("https://www.freshworks.com/");
        console.log(homePage.pageHeader.getText());
        console.log(homePage.subHeading.getText());
        homePage.supportLink.click();
        browser.pause(5000);
    });
})