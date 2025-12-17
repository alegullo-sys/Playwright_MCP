import { Page } from '@playwright/test';

export async function fillFirst(page: Page, selectors: string[], value: string): Promise<boolean> {
  for (const s of selectors) {
    const locator = page.locator(s);
    const count = await locator.count();
    if (count > 0) {
      const handle = await locator.elementHandle();
      if (handle) {
        const tag = await handle.evaluate((e: any) => e.tagName && e.tagName.toLowerCase());
        if (tag === 'select') {
          await page.selectOption(s, { label: value });
          return true;
        }
      }
      await locator.fill(value);
      return true;
    }
  }
  return false;
}

export function generateUniqueEmail(prefix = 'alexandre.teste') {
  return `${prefix}+${Date.now()}@example.com`;
}

export async function clickIfExists(page: Page, selector: string): Promise<boolean> {
  const loc = page.locator(selector);
  if (await loc.count()) {
    await loc.first().click();
    return true;
  }
  return false;
}

export async function safeSelect(page: Page, selectors: string[], label: string): Promise<boolean> {
  for (const s of selectors) {
    const loc = page.locator(s);
    if (await loc.count()) {
      await page.selectOption(s, { label });
      return true;
    }
  }
  return false;
}
