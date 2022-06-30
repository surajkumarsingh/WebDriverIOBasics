const LoginPage = require('../pageobjects/LoginPage');
const expectChai = require('chai').expect;
describe(' ', async () => {
    it('With Valid Credentials ', async () => {
        await LoginPage.open();
        await LoginPage.UserName.setValue('rahulshettyacademy');
        await LoginPage.password.setValue('learning');
        await LoginPage.selectType.selectByVisibleText('Teacher');
        await LoginPage.terms.click();
        await LoginPage.signInBtn.click();
        await browser.pause(5000)
        //Only work on same page;
        await browser.waitUntil(async () => await (browser.getTitle()) === 'ProtoCommerce',
            {
                timeout: 6000,
                timeoutMsg: 'Title not matched',
                interval:2000
            });
        await expect(browser).toHaveTitle('ProtoCommerce');
    });
//**  $$('.alert.alert-danger.col-md-12') "$$" used to get multiple mathching element return an array*/
    it('With Invalid Credentials ', async () => {
        await LoginPage.open();
        await LoginPage.UserName.setValue('rahulshettyaca');
        await LoginPage.password.setValue('learning');
        await LoginPage.selectType.selectByVisibleText('Teacher');
        await LoginPage.terms.click();
        await LoginPage.signInBtn.click(); 
        await browser.waitUntil(async()=> await LoginPage.signInBtn.getAttribute('value')==='Sign In',
       { timeout:4000,
        timeoutMsg:'Waiting for Singing..'});
        await expect($('.alert.alert-danger.col-md-12')).toHaveText('Incorrect username/password.')
    });

    it.only('With Invalid Credentials ', async () => {
        await LoginPage.open();
        await LoginPage.UserName.setValue('rahulshettyaca');
        await LoginPage.password.setValue('learning');
        await LoginPage.selectType.selectByVisibleText('Teacher');
        await LoginPage.userType[1].click();  
        await LoginPage.okayBtn.waitForDisplayed();
        await LoginPage.okayBtn.click();
        await browser.pause(5000);
    //     await LoginPage.terms.click();
    //     await LoginPage.signInBtn.click(); 
    //     await browser.waitUntil(async()=> await LoginPage.signInBtn.getAttribute('value')==='Sign In',
    //    { timeout:4000,
    //     timeoutMsg:'Waiting for Singing..'});
    //     await expect($('.alert.alert-danger.col-md-12')).toHaveText('Incorrect username/password.');
    });


});


