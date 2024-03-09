// @ts-check
const { test, expect, request } = require('@playwright/test');

test('Wait for Hello World text to Appear', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
  await page.locator('.example #start button').click();
  expect(await page.locator('#finish h4').textContent()).toEqual('Hello World!');
});

test('Click on all buttons in the page', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/challenging_dom');

  // click all buttons on the left side
  page.locator('.large-2 .button').first().waitFor;
  const buttons = await page.locator('.large-2 .button').all();
  for(let i=0; i < buttons.length; i++) {
    await buttons[i].click();
  }

  // click all buttons inside the grid
  const gridButtons = await page.locator('table td:last-child a').all();
  for(let i=0; i < gridButtons.length; i++) {
    await gridButtons[i].click();
  }

});