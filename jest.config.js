module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globalSetup: './tests/config/globalSetup.ts',
  globalTeardown: './tests/config/globalTeardown.ts',
}
