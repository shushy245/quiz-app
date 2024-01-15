module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
  testEnvironment: "jest-environment-jsdom",
};
