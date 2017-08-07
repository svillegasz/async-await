describe('Verify control flow is off', () => {
    it('Should not wait on one command before starting another', async () => {
        await browser.driver.get('https://angular.io/')
        expect(browser.driver.getTitle()).toEqual('Angular');
    });
});