import { Page, expect } from '@playwright/test';
import { fillFirst, safeSelect } from '../fixtures/utils';

export class AccountPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async fillAccountInfo(data: any) {
    await this.page.locator('input[name="password"]').fill(data.senha);
    if (await this.page.getByLabel('Mr.').count()) await this.page.getByLabel('Mr.').check();
    await safeSelect(this.page, ['select[name="days"]', 'select#days'], data.day);
    await safeSelect(this.page, ['select[name="months"]', 'select#months'], data.month);
    await safeSelect(this.page, ['select[name="years"]', 'select#years'], data.year);

    if (await this.page.getByLabel('Sign up for our newsletter!').count())
      await this.page.getByLabel('Sign up for our newsletter!').check();
    if (await this.page.getByLabel('Receive special offers from our partners!').count())
      await this.page.getByLabel('Receive special offers from our partners!').check();

    await this.page.getByLabel(/First name/i).fill(data.first);
    await this.page.getByLabel(/Last name/i).fill(data.last);
    await this.page.locator('input[name="company"]').fill(data.company);

    await fillFirst(this.page, ['input[name="address1"]', 'input[placeholder*="Address"]'], data.address);
    await fillFirst(this.page, ['input[name="address2"]', 'input[placeholder*="Address 2"]'], data.address2);
    await safeSelect(this.page, ['select[name="country"]', 'select#country'], data.country);
    if (await this.page.getByLabel(/State/i).count()) await this.page.getByLabel(/State/i).fill(data.state);
    if (await this.page.getByLabel(/City/i).count()) await this.page.getByLabel(/City/i).fill(data.city);

    await fillFirst(this.page, ['input[name="zipcode"]', 'input[name="zip"]', 'input[id*="zip"]', 'input[placeholder*="Zip"]'], data.zipcode);
    await fillFirst(this.page, ['input[name="mobile_number"]', 'input[name="mobile"]', 'input[placeholder*="Mobile"]'], data.mobile);
  }

  async createAccount() {
    await this.page.getByRole('button', { name: /Create Account/i }).click();
    await expect(this.page).toHaveURL(/.*account_created.*/);
    await expect(this.page.getByRole('heading', { name: /Account Created!/i })).toBeVisible();
  }

  async continueToHome() {
    await this.page.getByRole('link', { name: /Continue/i }).click();
    await expect(this.page.locator('text=Logged in as')).toBeVisible();
  }

  async deleteAccount() {
    await this.page.getByRole('link', { name: /Delete Account/i }).click();
    await expect(this.page.locator('text=ACCOUNT DELETED!')).toBeVisible();
    await this.page.getByRole('link', { name: /Continue/i }).click();
  }
}
