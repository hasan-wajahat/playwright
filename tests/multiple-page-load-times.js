// @ts-check
/**
 * @param {import("@playwright/test").Page} page 
 */

// This script loads multiple pages and records their individual page load times as custom metrics
export async function testPage(page, context) {
  // Setup work - set viewport and define a helper function to calculate load time
  await page.setViewportSize({ width: 1400, height: 800 })
  const calculateLoadTimeInSeconds = (startTime, endTime) => 
    Number(((endTime.getTime() - startTime.getTime()) / 1000).toFixed(2));

  // Go to the Sematext homepage and record the page load time
	let startTime = new Date();
  await page.goto("https://www.sematext.com/");
  let endTime = new Date();
	let sematextHomePageLoadTime = calculateLoadTimeInSeconds(startTime, endTime);
  console.log('Home Page Load Time:', sematextHomePageLoadTime);
  context.setMetric('sematextHomePageLoadTime', sematextHomePageLoadTime);

  const browserContext = page.context();

  await page.getByTitle('See Demos').click();
  await page.getByRole('link', { name: 'Interactive Demo' }).first().click();
  // Get the new page that opens up
  const newPage = await browserContext.waitForEvent('page');
  startTime = new Date();
  // Wait for the new page to load
  await newPage.getByText('apps-demo@sematext.com').waitFor();
  endTime = new Date();
  let sematextDemoPageLoadTime = calculateLoadTimeInSeconds(startTime, endTime);
  console.log('Demo Page Load Time:', sematextDemoPageLoadTime);
  context.setMetric('sematextDemoPageLoadTime', sematextDemoPageLoadTime);
  await newPage.screenshot({ path: '2_demoPage.png' });
}
