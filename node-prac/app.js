const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect("mongodb://localhost:27017/testing", {
  useNewUrlParser: true,
  useCreateIndex: true
});

app.use(express.json());


const { Student } = require("./models/student");

app.post("/api/student", (req, res) => {
  const student = new Student(req.body);
  student.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});


app.listen(3000, () => {
  console.log("Server listening at 3000");
});
