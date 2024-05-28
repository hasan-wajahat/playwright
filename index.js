// @ts-check
import { chromium } from "playwright";
import { test } from "./tests/example.js";

export const handler = async () => {
  console.log("Starting browser");
  // Setup
  const browser = await chromium.launch({ headless: false});
  const context = await browser.newContext();
  const page = await context.newPage();

  await test(page, context);

  // Teardown
  await context.close();
  await browser.close();
}

handler();