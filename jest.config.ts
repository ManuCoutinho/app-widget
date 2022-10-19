/** @type {import('jest').Config} */
export default {
  preset: 'ts-jest',
  coverageDirectory: 'coverage',
  collectCoverage: false,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
    '!**/*.d.ts',
    '!**/types.ts',
    '!src/**/*stories*.{js,jsx,ts,tsx}',
    '!<rootDir>/out/**',
    '!<rootDir>/dist/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**'
  ],
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', 'src/'],
  testMatch: [
    '**/__tests__/**/*.[t]s?(x)',
    '**/?(*.)+(spec|test|tests).ts?(x)'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/.storybook/',
    '/public/'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
  transformIgnorePatterns: ['/node_modules/']
}
