import { Page, expect } from '@playwright/test';

export class SignupPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async openHome() {
    const url = 'https://automationexercise.com/';
    try {
      await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    } catch (e) {
      await this.page.goto(url, { waitUntil: 'networkidle' });
    }
    await expect(this.page.getByRole('heading', { name: /AutomationExercise/i })).toBeVisible();
  }

  async goToSignup() {
    await this.page.getByRole('link', { name: /Signup \/ Login/i }).click();
    await expect(this.page.getByRole('heading', { name: /New User Signup!/i })).toBeVisible();
  }

  async submitSignup(name: string, email: string) {
    await this.page.locator('input[data-qa="signup-name"]').fill(name);
    await this.page.locator('input[data-qa="signup-email"]').fill(email);
    await this.page.getByRole('button', { name: /Signup/i }).click();
    await expect(this.page.getByRole('heading', { name: /Enter Account Information/i })).toBeVisible();
  }
}
