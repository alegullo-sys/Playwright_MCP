export function getCredentials() {
  return {
    email: process.env.TEST_LOGIN_EMAIL || 'alexandre@play.com',
    password: process.env.TEST_LOGIN_PASSWORD || 'play',
  };
}
