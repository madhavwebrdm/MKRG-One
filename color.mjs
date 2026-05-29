import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(3000);

const heroColor = await page.evaluate(() => {
  const h1 = document.querySelector('h1');
  if (!h1) return null;
  const firstChar = h1.querySelector('.hero-char');
  return {
    h1Color: getComputedStyle(h1).color,
    h1Classes: h1.className,
    charColor: firstChar ? getComputedStyle(firstChar).color : null,
    charOpacity: firstChar ? getComputedStyle(firstChar).opacity : null,
  };
});
console.log(JSON.stringify(heroColor, null, 2));

await browser.close();
