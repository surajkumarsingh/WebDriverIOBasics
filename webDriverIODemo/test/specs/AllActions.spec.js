const expectChai = require('chai').expect;

describe('AllActions', () => {
    beforeEach(async () => {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        await browser.maximizeWindow()
    });
    it('Mouse Hover', async () => {
        await $('#mousehover').scrollIntoView();
        await $('#mousehover').moveTo();
        await $('=Top').click();
        await browser.pause(5000)
    });

    it.only('Alert', async () => {
        await browser.url('http://only-testing-blog.blogspot.com/');
        await $("//button[text()='Double-Click Me To See Alert']").doubleClick();
        await browser.isAlertOpen()
        await browser.pause(5000)
        expectChai(await browser.isAlertOpen()).to.be.true;
        expectChai(await browser.getAlertText()).to.be.equals("Press 'OK' or 'Cancel' button!");
        await browser.acceptAlert();
        await browser.pause(5000)
    });

});