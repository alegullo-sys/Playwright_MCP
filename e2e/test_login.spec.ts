import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { getCredentials } from './fixtures/index';

test('CT002 - Login User with correct email and password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const { email, password } = getCredentials();

  await test.step('1-3. Open home page', async () => {
    await loginPage.openHome();
  });

  await test.step('4-5. Navigate to login and verify form', async () => {
    await loginPage.goToLogin();
  });

  await test.step('6-7. Enter credentials and login', async () => {
    await loginPage.login(email, password);
  });

  await test.step('9-10. Logout and verify login form visible', async () => {
    await loginPage.logout();
  });
});
