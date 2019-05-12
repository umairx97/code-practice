const mongoose = require('mongoose')
const express = require("express");
const app = express();


mongoose.connect("mongodb://localhost:27017/testing", {
  useNewUrlParser: true,
  useCreateIndex: true
});

app.use(express.json());

const Student = require("./models/student");

app.post("/api/student", (req, res) => {
  const student = Student(req.body);
  student.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err: {message: 'Sorry, Please try again later'} });
    }
    res.status(200).json({
      success: true,
      userData: doc
    });

    console.log('This log is after storing data')
  });
});

app.get("/api/student/:id", (req, res) => {
  const id = req.params.id;

  Student.findById(id)
    .then(profile => {
      if (!profile) {
        res.status(404);
      }

      res.send(profile);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.listen(3000, () => {
  console.log("Server listening at 3000");
});


