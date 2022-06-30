describe("Windows handle", async () => {

    it('Switch To Window',async () => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise')
        await $('.blinkingText').click();
        let windows = await browser.getWindowHandles();
        await browser.switchToWindow(windows[1]);
        console.log(await $('.inner-box h1').getText());
        await browser.closeWindow();//Close the current window
        await browser.switchToWindow(windows[0]);
        console.log(await $('.blinkingText').getText())
    });

    it('Open new Window',async () => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise')
        await $('.blinkingText').click();
        let windows = await browser.getWindowHandles();
        await browser.switchToWindow(windows[1]);
        console.log(await $('.inner-box h1').getText());
        await browser.switchToWindow(windows[0]);
        console.log(await $('.blinkingText').getText());
        await browser.newWindow("https://google.com");// Open new Window and switch to it
        console.log(await browser.getTitle());
        await browser.switchWindow('https://rahulshettyacademy.com/loginpagePractise')// switch to window which is open, for given url
        console.log(await browser.getTitle());
    });
});