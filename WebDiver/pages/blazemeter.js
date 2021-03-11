const { default: $ } = require("webdriverio/build/commands/element/$");

class BlazePage
{
    get mainHeader()
    {
        return $('h2.home_title')
    }

    get prductLink()
    {
        return $('ul.list-nav-links li:nth-child(1) a')
    }

    clickOnProduct()
    {
        if(this.prductLink.isDisplayed()===true)
        {
            this.prductLink.click();
        }
    }

    get JmeterLink()
    {
        return $("//a[text()='JMeter']")
    }

    get parent()
    {
        return $('ul.list-nav-links');
    }

    get childElements()
    {
        return this.parent.$$('li');
    }

    get getTextForLi()
    {
        return this.childElements.filter(element=>
            {
                console.log(element.getText());
            }
        )
    }

    get userCasesElements()
    {
        return $$('div#main_b_footer_second_block>ul>li')
    }

    get userCasesElementsText()
    {
        return this.userCasesElements.filter(item=>
            {
                console.log(item.getText());
            }
        )
    }

    specificChildElement(indexx)
    {
        return this.parent.$(`li:nth-child(${index})`)
    }

    specificChildElementText(indexx)
    {
        console.log(this.specificChildElement(index).getText());
    }
}
module.exports=new BlazePage();