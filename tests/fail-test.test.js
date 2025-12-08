const request = require('supertest');

describe('Intentional Test Failures', () => {
  test('This test should always fail', () => {
    expect(2 + 2).toBe(5); // Intentionally wrong
  });
  
  test('Another failing test', () => {
    expect(true).toBe(false); // Intentionally wrong
  });
  
  test('Math failure', () => {
    expect(Math.max(1, 2, 3)).toBe(1); // Intentionally wrong
  });
});