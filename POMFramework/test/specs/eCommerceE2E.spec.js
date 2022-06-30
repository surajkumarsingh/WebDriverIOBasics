const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/HomePage');
const checkout = require('../pageobjects/CheckOutPage');
const Purchase = require('../pageobjects/PurchasePage');
const expectChai = require('chai').expect;
const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync('test/testData/LoginData.json'));
let products = JSON.parse(fs.readFileSync('test/testData/Products.json'))

describe('Login Test', async () => {  
  credentials.forEach(({ UserName, password }) => {
    it('Shop Phone', async () => {
      await browser.maximizeWindow();
      await LoginPage.open();
      await LoginPage.UserName.setValue(UserName);
      await LoginPage.password.setValue(password);
      await LoginPage.selectType.selectByVisibleText('Teacher');
      await LoginPage.terms.click();
      await LoginPage.signInBtn.click();
      await browser.pause(5000)
      //wait until checkout button is displayed
      await HomePage.checkOut.waitForDisplayed();
    });
  });

  products.forEach(({products})=>{
      it.only('Shop Phone', async () => {
        await browser.maximizeWindow();
        await LoginPage.open();
        await LoginPage.UserName.setValue(credentials[0].UserName);
        await LoginPage.password.setValue(credentials[0].password);
        await LoginPage.selectType.selectByVisibleText('Teacher');
        await LoginPage.terms.click();
        await LoginPage.signInBtn.click();
        await browser.pause(5000)
        //wait until checkout button is displayed
        await HomePage.checkOut.waitForDisplayed();
        let cards = await HomePage.cards;
        for (let i = 0; i < cards.length; i++) {
          let card = await cards[i].$('h4 a')
          if (products.includes(await card.getText())) {
            await cards[i].$('button').click();
          }
        }
        await HomePage.checkOut.click();
        let price = await checkout.prices;
        var sumtotal = (await Promise.all(await price.map(async (price) =>
          parseInt((await price.getText()).split('.')[1].trim())))).reduce((sum, val) => sum + val, 0);
        console.log(sumtotal);
        var toatl = (await checkout.total.getText()).split('.')[1].trim();
        console.log(toatl);
        expectChai(sumtotal).to.equals(parseInt(toatl));
       // await browser.pause(3000);
        await checkout.checkout.click();
        await Purchase.setCountry.setValue('Ind')
        await Purchase.countryLoad.waitForExist({ reverse: true });
        await Purchase.selectCountry('India').click();
        await Purchase.termsCheck.click();
        await Purchase.purchaseBtn.click();
        expect(await Purchase.successMsg).toHaveTextContaining('Success! Thank you! Your order will be delivered in next few weeks :-).');
        //await browser.pause(5000);
      });
    });
  });