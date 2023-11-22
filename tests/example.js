// @ts-check
import { expect } from '@playwright/test';

/**
 * 
 * @param {import("@playwright/test").Page} page 
 * @param {import("@playwright/test").BrowserContext} context 
 */
export async function test(page, context) {
  await page.goto('https://playwright.dev/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/bla/);
}
