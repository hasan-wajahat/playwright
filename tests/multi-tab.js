// @ts-check

/**
 * @param {import("@playwright/test").Page} page 
 */
export async function testPage(page) {
  // Set the screen resolution, as things render differently on different screen widths
  await page.setViewportSize({ width: 1280, height: 720 });

  await page.goto('https://www.w3schools.com/', { waitUntil: 'domcontentloaded' });
  await page.screenshot({ path: 'firstTab.png' });

  const browserContext = page.context();
  await page.getByRole('link', { name: 'W3Schools Certificates' }).click();
  // Wait for the new page to open
  const newPage = await browserContext.waitForEvent('page');

  await newPage.waitForLoadState('domcontentloaded');
  await newPage.screenshot({ path: 'secondTab.png' });

}
