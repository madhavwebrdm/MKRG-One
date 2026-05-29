import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(2000);

// Check stuck-at-opacity-0 before any scrolling
const initialState = await page.evaluate(() => {
  const elements = Array.from(document.querySelectorAll(
    'section [data-cursor="grow"], section article, section li, section figure'
  ));
  const above = elements.filter(el => {
    const r = el.getBoundingClientRect();
    return r.bottom > 0 && r.top < window.innerHeight;
  });
  const below = elements.filter(el => {
    const r = el.getBoundingClientRect();
    return r.top >= window.innerHeight;
  });

  function info(el) {
    return {
      tag: el.tagName.toLowerCase(),
      classes: el.className.slice(0, 50),
      opacity: getComputedStyle(el).opacity,
      transform: getComputedStyle(el).transform.slice(0, 60),
    };
  }

  return {
    above: above.length,
    below: below.length,
    aboveSample: above.slice(0, 3).map(info),
    belowSample: below.slice(0, 3).map(info),
  };
});

console.log('=== AT PAGE LOAD ===');
console.log(JSON.stringify(initialState, null, 2));

// Scroll like a user
for (let i = 0; i < 12; i++) {
  await page.mouse.wheel(0, 700);
  await page.waitForTimeout(400);
}
await page.waitForTimeout(2500);

const after = await page.evaluate(() => {
  const elements = Array.from(document.querySelectorAll(
    'section [data-cursor="grow"], section article, section li, section figure'
  ));
  const stuck = elements.filter(el => parseFloat(getComputedStyle(el).opacity) < 0.5);
  return {
    total: elements.length,
    stuck: stuck.length,
    stuckSamples: stuck.slice(0, 5).map(el => ({
      tag: el.tagName.toLowerCase(),
      classes: el.className.slice(0, 60),
      opacity: getComputedStyle(el).opacity,
      transform: getComputedStyle(el).transform.slice(0, 60),
    })),
  };
});
console.log('\n=== AFTER FULL SCROLL ===');
console.log(JSON.stringify(after, null, 2));

await browser.close();
