const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    screenshotOnRunFailure: true,
    specPattern: "cypress/e2e//*.cy.{js,jsx,ts,ysx}",
    env: {
      allureReuseAfterSpec: true,
      allure: false
    }
  },
});
