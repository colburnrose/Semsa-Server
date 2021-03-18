const app = require("./app");
const { readdirSync } = require("fs");
const { PORT, DB_URL } = require("./config");

// DB: CONNECTION CONFIGURATION
// const db = knex({
//   client: "pg",
//   connection: DB_URL,
// });

// app.set("db", db);

// routes middleware
readdirSync("src/routes").map((route) =>
  app.use("/api", require(`./routes/${route}`))
);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
