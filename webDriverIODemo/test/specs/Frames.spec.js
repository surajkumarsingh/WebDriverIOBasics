describe('Frames',async () => {
    it('Switch Frames', async () => {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        await browser.switchToFrame(await $('#courses-iframe'));
        await $('a[href="learning-path"]').click();
        console.log(await $('a[href="learning-path"]').getText());
        await browser.switchToFrame(null);//will switch back to default window
        await $('#mousehover').scrollIntoView();
        await $('#mousehover').moveTo();
        await $('=Top').click();
    });
});