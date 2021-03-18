const express = require("express");

const authRouter = express.Router();

// controllers
const showMessage = require("../controllers/auth");

authRouter.get("/:message", showMessage);

module.exports = authRouter;
