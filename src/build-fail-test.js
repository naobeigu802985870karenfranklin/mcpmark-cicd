// This file will cause build/startup failures
const express = require('express');
const nonExistentModule = require('this-module-does-not-exist-anywhere');
const anotherMissing = require('@fake/missing-package');

// This will cause runtime errors during startup
const app = express();

// Define a route that will cause issues
app.get('/test', (req, res) => {
  // Try to use non-existent modules
  nonExistentModule.doSomething();
  anotherMissing.initialize();
  res.send('This should never work');
});

// Override the listen method to always fail
const originalListen = app.listen;
app.listen = function(port, callback) {
  console.log('Attempting to start server...');
  // This will crash during build validation
  throw new Error('Intentional build failure for testing');
};

module.exports = app;