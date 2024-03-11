const { expect } = require("@playwright/test");

class FirstChallenge {

    constructor(page) {
        this.page = page;
        this.startButton = page.locator('.example #start button');
        this.finalText = page.locator('#finish h4');
    }

    async navigateToFirstChallengeUrl() {
        await this.page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    }

    async clickStartBtn() {
        await this.startButton.click();
    }

    async getFinalText() {
        await expect(this.finalText).toBeVisible();
        return await this.finalText.textContent();
    }
}

module.exports = {FirstChallenge};
