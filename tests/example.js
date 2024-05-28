// @ts-check
import { expect } from '@playwright/test';

/**
 * 
 * @param {import("@playwright/test").Page} page 
 * @param {import("@playwright/test").BrowserContext} context 
 */
export async function test(page, context) {
  await page.goto('https://apps.eu.sematext.com/ui/login');

  await page.locator('[data-tid="login-email"]').fill('synthetics+robot@sematext.com')
  await page.locator('[data-tid="login-password"]').fill('@AGU9xp#NEQA3Z3');

  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.locator('[data-tid="main-content"]').waitFor();
  console.log('done');
}
