module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/index.js",
    "!**/node_modules/**"
  ],
  coverageDirectory: "coverage"
};
