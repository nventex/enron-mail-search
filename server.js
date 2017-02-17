const express = require("express");
const compression = require("compression");

const app = express();

app.use(express.static(__dirname + "/dist"));
app.use(compression());

app.listen(process.env.PORT || 8080);