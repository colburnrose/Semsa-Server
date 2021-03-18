require("dotenv").config;
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");

const app = express();
const morganConfig = NODE_ENV === "production" ? "tiny" : "common";

// import routes
const authRouter = require("./routes/auth-router");

app.use(morgan(morganConfig));
app.use(helmet());
app.use(cors());
app.use(express.json());

// authorization
// app.use(validateBearerToken);

// routes
app.use(authRouter);

module.exports = app;
