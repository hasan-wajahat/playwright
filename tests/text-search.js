// @ts-check


/**
 * @param {import("@playwright/test").Page} page 
 */
export async function testPage(page) {
    await page.goto('https://sematext.com/');
    await page.getByText('Sematext provides Monitoring & Alerting').isVisible();
    await page.screenshot({ path: 'screenshot.jpg' });
}
