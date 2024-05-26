module.exports = {
  preset: 'jest-puppeteer',
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testTimeout: 30000, // Aumentar el tiempo de espera del test si es necesario
};
