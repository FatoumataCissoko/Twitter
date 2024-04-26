const express = require("express");
const morgan = require("morgan");
const path = require("path");
const methodOverride = require("method-override");

const index = require("./routes");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

require("./database");

app.use(index);

app.listen(3000);
