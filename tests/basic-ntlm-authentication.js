// @ts-check

// This script uses Puppeteer to authenticate and take a screenshot of the page

/**
 * @param {import("@playwright/test").Page} page 
 */
export async function testPage(page) {
  const browser = page.context().browser();
  const context = await browser.newContext({
    httpCredentials: {
      username: 'user',
      password: 'pass'
    }
  });
  page = await context.newPage();
  await page.goto('https://user:pass@authenticationtest.com/HTTPAuth/');

  // take a screenshot
  await page.screenshot({ path: 'screenshot.jpg' });
}
