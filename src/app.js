require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Enjoy  this api!",
  });
});

app.use("/api", require("../src/routes/films"));
app.use("/api", require("../src/routes/people"));
app.use("/api", require("../src/routes/planets"));
app.use("/api", require("../src/routes/species"));
app.use("/api", require("../src/routes/starships"));
app.use("/api", require("../src/routes/vehicles"));

app.use("/api", require("../src/routes/clients"));

exports.app = app;
