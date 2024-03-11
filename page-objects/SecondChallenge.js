const { expect } = require("@playwright/test");

class SecondChallenge{

    constructor(page) {
        this.page = page;
        this.leftButtons = page.locator('.large-2 .button');
        this.gridButtons = page.locator('table td:last-child a');
    }

    async navigateToSecondChallengeUrl() {
        await this.page.goto('https://the-internet.herokuapp.com/challenging_dom');
    }

    async clickAllElements(locatorArray) {
        for(let i=0; i < locatorArray.length; i++) {
            await locatorArray[i].click();
        }
    }

    async clickAllButtonsOnTheLeft() {
        await expect(this.leftButtons.first()).toBeVisible();
        const buttons = await this.leftButtons.all();
        await this.clickAllElements(buttons);
    }

    async clickAllGridButtons() {
        const gridButtons = await this.gridButtons.all();
        await this.clickAllElements(gridButtons);
    }
}

module.exports = {SecondChallenge};
