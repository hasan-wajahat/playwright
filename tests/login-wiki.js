
// @ts-check

import { expect } from '@playwright/test';

/**
 * @param {import("@playwright/test").Page} page 
 */
export async function testPage(page) {
    await page.goto('https://en.wikipedia.org/');

    await page.locator('#pt-login-2').click();
    await page.waitForURL('**/w/index.php?**');
    const userName = 'Sematext-wiki';
    await page.locator('#wpName1').fill(userName);
    await page.locator('#wpPassword1').fill('semapassword');
    await page.locator('#wpLoginAttempt').click();
    await page.waitForURL('**/wiki/Main_Page');
    await page.locator('#pt-userpage-2').click();
    const userNameFromPage = await page.locator('#firstHeading').textContent();
    expect(userNameFromPage.split(',')[1].toLowerCase()).toContain(userName.toLowerCase());
}
