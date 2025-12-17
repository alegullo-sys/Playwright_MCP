import baseTest from '@playwright/test';
import { generateUniqueEmail } from './utils';
import { getUserData } from './userData';
import { getCredentials } from './credentials';

type MyFixtures = {
  userData: ReturnType<typeof getUserData>;
  credentials: ReturnType<typeof getCredentials>;
};

export const test = baseTest.extend<MyFixtures>({
  userData: async ({ }, use) => {
    const email = generateUniqueEmail();
    const data = getUserData(email);
    await use(data);
  },
  credentials: async ({ }, use) => {
    const creds = getCredentials();
    await use(creds);
  }
});

export const expect = baseTest.expect;
