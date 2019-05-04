const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("THe user is requesting at" + req.url);
  res.send("Hello world");
});

app.get("/hello", (req, res) => {
  console.log("THe user is requesting at" + req.url);
  res.send({
    name: "Umair",
    profession: "Developer",
    age: 21
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running at " + PORT);
});
