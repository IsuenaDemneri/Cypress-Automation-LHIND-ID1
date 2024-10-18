const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    "screenshotfolder" : "cypress/screenshot",
    screenshotOnRunFailure: true, 
    setupNodeEvents(on, config) {
    },

    baseUrl: 'https://magento.softwaretestingboard.com/', 
    defaultCommandTimeout: 8000, 

  },
});

