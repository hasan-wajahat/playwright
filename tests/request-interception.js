// @ts-check

// Block requests to certain URLs
const blockList = [
    'google-analytics',
    'googleadservices.com',
    'googlesyndication',
];

/**
 * @param {import("@playwright/test").Page} page 
 */
export async function testPage(page) {
    await page.route('**/*', (route) => {
        if (blockList.some(resource => route.request().url().includes(resource))) {
            // Remove this log statement once you verify that the requests are being blocked
            console.log("Blocked:", route.request().url());
            route.abort();
        }
        else route.continue();
    });
    await page.goto('https://sematext.com/');
    await page.screenshot({ path: 'screenshot.jpg' });
}
