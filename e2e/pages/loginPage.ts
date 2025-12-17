import { Page, expect } from '@playwright/test';

export class LoginPage {
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

  async goToLogin() {
    await this.page.getByRole('link', { name: /Signup \/ Login/i }).click();
    await expect(this.page.getByRole('heading', { name: /Login to your account/i })).toBeVisible();
  }

  async login(email: string, password: string) {
    const emailLocator = this.page.locator('input[data-qa="login-email"]');
    const passLocator = this.page.locator('input[data-qa="login-password"]');
    if (await emailLocator.count()) await emailLocator.fill(email);
    if (await passLocator.count()) await passLocator.fill(password);
    await this.page.getByRole('button', { name: /Login/i }).click();
    await expect(this.page.locator('text=Logged in as')).toBeVisible();
  }

  async logout() {
    await this.page.getByRole('link', { name: /Logout/i }).click();
    await expect(this.page.getByRole('heading', { name: /Login to your account/i })).toBeVisible();
  }
}
