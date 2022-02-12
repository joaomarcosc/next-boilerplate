module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  coverageFrom: ['src/**/*.ts(x)?'],
  setupFilesAfterEnv: ['./jest.setup.js']
}
