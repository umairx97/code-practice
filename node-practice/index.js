const express = require("express");
const yargs = require("yargs");
const chalk = require("chalk");
const inquirer = require("inquirer");
const path = require("path");

const app = express();

const publicFolder = path.join(__dirname, "./public");

console.log(publicFolder);

app.use(express.static(publicFolder));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("The server is listening at " + PORT);
});
