// @ts-check

// This script uses Puppeteer to authenticate and take a screenshot of the page

/**
 * @param {import("@playwright/test").Page} page 
 */
export async function testPage(page) {

  // Default authentication in playwright is done using browser since that is
  // not available in this context we use url approach to authenticate
  await page.goto('https://user:pass@authenticationtest.com/HTTPAuth/');

  // take a screenshot
  await page.screenshot({ path: 'screenshot.jpg' });
}
