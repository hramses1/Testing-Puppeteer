module.exports = {
  preset: 'jest-puppeteer',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', // Transforma archivos .ts, .tsx, .js y .jsx usando babel-jest
  },
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'], // Coincide con archivos de prueba .ts, .tsx, .js y .jsx
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testTimeout: 30000,
};