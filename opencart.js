var assert = require('chai').assert;
var webdriver = require("selenium-webdriver");
var assert = require("chai").assert;    

    describe("Demonstrating webdriver promises", function() {
        this.timeout(30000);
        var driver;

        before(function() {
            driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        });

        after(function() {
            driver.quit();
        });

        it("I open the open cart website", async function() {
           await driver.get("https://www.opencart.com/");
            await driver.manage().window().maximize();
        });

        it("The title is 'OpenCart - Open Source Shopping Cart Solution'", async function() {             
             assert.equal(await driver.getTitle(),
             'OpenCart - Open Source Shopping Cart Solution',
             'Title not matches!!!'
             );
             //clicking on login link
             await driver.findElement(webdriver.By.xpath('//a[text()=\'Login\' and contains(@class,\'btn\')]'))
             .click();
             //sending email id
             await driver.findElement(webdriver.By.id('input-email'))
             .sendKeys('Smdfghkiiii');
             //sending Password
             await driver.findElement(webdriver.By.id('input-password'))
             .sendKeys('1234');
             //Clicking on login button
             await driver.findElement(webdriver.By.className('btn btn-primary btn-lg hidden-xs'))
             .click();
        });

        it("The login error message is ' No match for E-Mail and/or Password.'", async function() {
            //Validate the error message when email id and password is incorrect
            assert.equal(
                ((await driver.findElement(webdriver.By.css('.alert-danger')).getText()).split(/[\n\r]/))[0],
                'No match for E-Mail and/or Password.',
                'Error message not matched'
                );
        });     
    });