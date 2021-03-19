require("dotenv").config();
const app = require("./app");
const knex = require("knex");
// const mongoose = require("mongoose");
const { readdirSync } = require("fs");
const { PORT, DB_URL } = require("./config");
const { options } = require("./app");

// DB: CONNECTION CONFIGURATION
const db = knex({
  client: "pg",
  connection: DB_URL,
});

// DB: Connection
// mongoose
// mongoose
//   .connect(DB_URL, {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Database Connected!"))
//   .catch((error) => console.log(error.message));

app.set("db", db);

// middleware
readdirSync("src/routes").map((route) =>
  app.use("/api", require(`./routes/${route}`))
);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
