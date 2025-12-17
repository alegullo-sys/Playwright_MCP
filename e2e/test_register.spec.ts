import { test, expect } from './fixtures/test-fixtures';
import { SignupPage } from './pages/signupPage';
import { AccountPage } from './pages/accountPage';

test('CT001 - Register User', async ({ page, userData }) => {
  const data = userData;

  const signup = new SignupPage(page);
  const account = new AccountPage(page);

  await test.step('1-4. Open home and navigate to signup', async () => {
    await signup.openHome();
    await signup.goToSignup();
  });

  await test.step('5-7. Fill signup name + email and submit', async () => {
    await signup.submitSignup(data.nome, data.email);
  });

  await test.step('8-13. Fill account information and create account', async () => {
    await account.fillAccountInfo(data);
    await account.createAccount();
  });

  await test.step('14-16. Continue and verify logged in', async () => {
    await account.continueToHome();
  });

  await test.step('17-18. Delete account and verify deletion', async () => {
    await account.deleteAccount();
  });
});
