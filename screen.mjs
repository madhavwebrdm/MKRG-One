import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 60000 });

// Capture in-progress hero animation
await page.waitForTimeout(50);
await page.screenshot({ path: 's1-hero-50ms.png' });
await page.waitForTimeout(450);
await page.screenshot({ path: 's2-hero-500ms.png' });
await page.waitForTimeout(2000);
await page.screenshot({ path: 's3-hero-settled.png' });

// Scroll to mission section + capture mid-animation
await page.evaluate(() => window.scrollTo({ top: 1100, behavior: 'instant' }));
await page.waitForTimeout(50);
await page.screenshot({ path: 's4-mission-mid.png' });
await page.waitForTimeout(1500);
await page.screenshot({ path: 's5-mission-settled.png' });

// Scroll to sustainability + mid-animation
await page.evaluate(() => window.scrollTo({ top: 2300, behavior: 'instant' }));
await page.waitForTimeout(50);
await page.screenshot({ path: 's6-sus-mid.png' });
await page.waitForTimeout(1500);
await page.screenshot({ path: 's7-sus-settled.png' });

await browser.close();
console.log('done');
