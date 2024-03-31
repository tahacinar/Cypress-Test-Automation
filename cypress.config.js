const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "68perd",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
