const LoginPage = require('../pageobjects/LoginPage')
const expectChai = require('chai').expect;
describe('E2E Shop', async () => {
    it('Shop Phone', async () => {
      let phones =['Nokia Edge', 'iphone X']
        await browser.maximizeWindow();
        await LoginPage.open();
        await LoginPage.UserName.setValue('rahulshettyacademy');
        await LoginPage.password.setValue('learning');
        await LoginPage.selectType.selectByVisibleText('Teacher');
        await LoginPage.terms.click();
        await LoginPage.signInBtn.click();
        await browser.pause(5000)
        //wait until checkout button is displayed
        await $('a.nav-link.btn.btn-primary').waitForDisplayed();
        let cards = await $$('app-card');
        for (let i = 0; i < cards.length; i++) {
          let card= await cards[i].$('h4 a')
          if(phones.includes(await card.getText())){
            await cards[i].$('button').click();
          }
        }
        await $('a.nav-link.btn.btn-primary').click();
        let price = await $$('tr td:nth-child(4) strong');
       var sumtotal= (await Promise.all(await price.map(async (price)=>
        parseInt((await price.getText()).split('.')[1].trim())))).reduce((sum, val)=> sum+val,0);
       console.log(sumtotal);
     var toatl = (await $('tbody tr:nth-last-of-type(2) td:nth-last-of-type(1) h3').getText()).split('.')[1].trim();
     console.log(toatl);
     expectChai(sumtotal).to.equals(parseInt(toatl));
     await $('.btn.btn-success').click();
     await $('#country').setValue('Ind'
     )
     await $('.lds-ellipsis').waitForExist({reverse:true});
     await $("//li/a[text()='India']").click();
     await $("label[for='checkbox2']").click();
     await $("input[value='Purchase']").click();
     expect(await $('.alert alert-success alert-dismissible')).toHaveTextContaining('Success! Thank you! Your order will be delivered in next few weeks :-).');
     await browser.pause(5000);
    });
});