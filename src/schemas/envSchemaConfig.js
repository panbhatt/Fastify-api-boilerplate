const convict = require('convict');

// Define a schema
const config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development"
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 3000,
    env: "PORT"
  },
  db: {
    host: {
      ip: {
        doc: "Database Server Name",
        format: String,
        default: 'localhost'
      },
      port: {
        doc: "Database Port",
        format: Number,
        default: 27017
      },
      name: {
          doc: "Database  Name",
          format: String,
          default: 'legalAgreementsDB'
        },
    }
  }
});

module.exports = config;

