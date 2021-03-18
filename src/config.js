module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  API_TOKEN: process.env.API_TOKEN || "super-creepy-api-keyed",
  DB_URL: process.env.DB_URL || "// db connection string",
  TEST_DB_URL: process.env.TEST_DB_URL || "some connection string",
};
