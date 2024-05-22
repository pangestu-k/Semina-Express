const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

// router
const categoriesRouter = require("./app/api/v1/categories/router");

// middleware
const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddleware = require("./app/middlewares/handler-error");

// versioning
const v1 = "/api/v1/cms";

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//? api
app.use(v1, categoriesRouter);

app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
