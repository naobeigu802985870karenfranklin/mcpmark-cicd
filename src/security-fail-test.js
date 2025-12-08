// This file contains patterns that should trigger secret detection
const hardcodedPassword = 'admin123password';
const fakeApiKey = 'sk_test_' + 'fake123key456here789';
const awsLikeKey = 'AKIA' + 'FAKEKEY7EXAMPLE';
const dbPassword = 'password' + '=' + 'supersecret123';
const tokenPattern = 'token' + '=' + 'ghp_1234567890abcdef';

// These patterns should trigger secret detection
console.log('Password:', hardcodedPassword);
console.log('API Key:', fakeApiKey);
console.log('AWS Key:', awsLikeKey);
console.log('DB Password:', dbPassword);
console.log('Token:', tokenPattern);

module.exports = {
  password: hardcodedPassword,
  apiKey: fakeApiKey
};