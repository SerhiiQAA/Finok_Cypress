const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require('@simonsmith/cypress-image-snapshot/plugin');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      addMatchImageSnapshotPlugin(on);
      // implement node event listeners here
    },
    baseUrl: ('https://finok.com.ua/')
  },
});
