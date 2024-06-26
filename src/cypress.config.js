import { defineConfig } from 'cypress'

export default defineConfig({
    projectId: 'm357oss',
    e2e: {
        setupNodeEvents(on, config) {
          if (process.env["NODE_ENV"] === 'production') {
            config.baseUrl = 'https://www.mymoss.ca';
            config.responseTimeout = 60000;
          }
          return config;
        },
        baseUrl: 'http://localhost:3000',
        responseTimeout: 40000,
        specPattern: 'cypress/e2e/*.cy.{js,jsx,}'
      }
})