describe('Fliter operation in Table', () => {

    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/');
        await $('div.cart a:nth-child(2)').click();
       let windows =  await browser.getWindowHandles();
       await browser.switchToWindow(windows[1]);
    });

    it('', async () => {  
        await $('#search-field').setValue('Wheat');
        let veggie =  await $$('tr td:nth-child(1)');
        expect(veggie).toHaveLength(1);
        expect(veggie[0]).toHaveText('Wheat');
    });
});