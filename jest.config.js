const { join } = require('path');
const config = require('@folio/jest-config-stripes');

// Stripes 10's stripes-components uses keyboardjs, which ships ES module syntax that Jest
// can't run as-is. This adds it to the list of node_modules packages Jest transforms.
const transformKeyboardjs = (pattern) => pattern.replace('(?!', '(?!keyboardjs|');

/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
module.exports = {
  ...config,

  coverageProvider: 'v8',

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],

  testMatch: ['**/src/**/?(*.)test.{js,jsx,ts,tsx}'],

  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.test.{ts,tsx}',
    '!src/test/**',
    '!**/node_modules/**'
  ],

  setupFiles: [...config.setupFiles, join(__dirname, './src/test/setupTests.ts')],
  setupFilesAfterEnv: [join(__dirname, './src/test/jest.setup.ts')],

  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    ...config.transform,
  },

  transformIgnorePatterns: config.transformIgnorePatterns.map(transformKeyboardjs),

  moduleNameMapper: {
    '^.+\\.(css|svg)$': 'identity-obj-proxy',

    // Force module uuid to resolve with the CJS entry point, because Jest does not support package.json.exports. See https://github.com/uuidjs/uuid/issues/451
    uuid: require.resolve('uuid')
  },

  slowTestThreshold: 10,
  testTimeout: 20000,
};
