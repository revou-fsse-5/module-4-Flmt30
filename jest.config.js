// jest.config.js

module.exports = {
  // Specify the environment in which the tests should run
  testEnvironment: 'jsdom',

  // Transform files with specified extensions using appropriate transformers
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  // Setup files that will be executed before the tests run
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Specifies the patterns Jest uses to detect test files
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],

  // Indicates which module file extensions Jest will recognize
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],

  // Optionally include coverage reporting
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'icon', 'text', 'clover'],

  // Configure module paths if you use custom paths
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
