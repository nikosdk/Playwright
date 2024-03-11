const { test, expect } = require('@playwright/test');
const {FirstChallenge} = require('../page-objects/FirstChallenge');
const {SecondChallenge} = require('../page-objects/SecondChallenge');

test('Wait for Hello World text to Appear', async ({ page }) => {
  const firstChallenge = new FirstChallenge(page);
  await firstChallenge.navigateToFirstChallengeUrl();
  await firstChallenge.clickStartBtn();
  expect(await firstChallenge.getFinalText()).toEqual('Hello World!');
});

test('Click on all buttons in the page', async ({ page }) => {
  const secondChallenge = new SecondChallenge(page);
  await secondChallenge.navigateToSecondChallengeUrl();
  await secondChallenge.clickAllButtonsOnTheLeft();
  await secondChallenge.clickAllGridButtons();
});