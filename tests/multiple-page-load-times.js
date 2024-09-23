// @ts-check
/**
 * @param {import("@playwright/test").Page} page 
 */

// This script loads multiple pages and records their individual page load times as custom metrics
export async function testPage(page, context) {
  const calculateLoadTimeInSeconds = (startTime, endTime) =>
    Number(((endTime.getTime() - startTime.getTime()) / 1000).toFixed(2));

  // Go to the Sematext homepage and record the page load time
  let startTime = new Date();
  await page.goto("https://www.w3schools.com/");
  let endTime = new Date();
  let sematextHomePageLoadTime = calculateLoadTimeInSeconds(startTime, endTime);
  console.log('Home Page Load Time:', sematextHomePageLoadTime);
  context.setMetric('sematextHomePageLoadTime', sematextHomePageLoadTime);

  const browserContext = page.context();

  const [newPage] = await Promise.all([
    browserContext.waitForEvent('page'),
    page.getByRole('link', { name: 'W3Schools Certificates' }).click()
  ]);
  startTime = new Date();
  // Wait for the new page to load
  await newPage.waitForLoadState();
  endTime = new Date();
  let pageLoadTime = calculateLoadTimeInSeconds(startTime, endTime);
  console.log('Demo Page Load Time:', pageLoadTime);
  context.setMetric('pageLoadTime', pageLoadTime);
  await newPage.screenshot({ path: '2_demoPage.png' })
}
