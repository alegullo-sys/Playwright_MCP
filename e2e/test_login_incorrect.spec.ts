import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';

test('CT003 - Login User with incorrect email and password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await test.step('1-3. Open home page', async () => {
    await loginPage.openHome();
  });

  await test.step('4-5. Navigate to login and verify form', async () => {
    await loginPage.goToLogin();
  });

  await test.step('6-7. Enter incorrect credentials and attempt login', async () => {
    const email = 'usuario@incorreto.com';
    const password = 'senhaincorreta9';
    const emailLocator = page.locator('input[data-qa="login-email"]');
    const passLocator = page.locator('input[data-qa="login-password"]');
    if (await emailLocator.count()) await emailLocator.fill(email);
    if (await passLocator.count()) await passLocator.fill(password);
    await page.getByRole('button', { name: /Login/i }).click();
  });

  await test.step('8. Verify error message visible', async () => {
    await expect(page.locator('text=Your email or password is incorrect!')).toBeVisible();
  });
});
