const mongoose = require('mongoose')
const express = require("express");
const app = express();
const logger = require('morgan');

mongoose.connect("mongodb://localhost:27017/testing", {
  useNewUrlParser: true,
  useCreateIndex: true
});

app.use(express.json());
app.use(logger('dev'))

const Student = require("./models/student");


app.get('/api/students', async (req, res) => { 
  const student =  await Student.find({})

  if(!student){ 
    res.status(404).json({ message: 'Cannot find data' })
  }
  res.send(student)
})



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



app.post("/api/student", (req, res) => {
  const student = Student(req.body);
  student.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err});
    }

    res.status(200).json({
      success: true,
      userData: doc
    });

  });
});


app.patch('/api/student/:id', async (req, res) =>{ 
  const id = req.params.id;

  const updatedFields = Object.keys(req.body); 
  const fieldsInModel = ['age', 'email', 'name', 'password', 'gender'];

  
  const isUpdateAllowed = updatedFields.every(field => fieldsInModel.includes(field));

  if(!isUpdateAllowed){ 
    res.status(400).send({ success: false, error: 'Invalid Fields' })
  }
  
  try { 
      const student = await Student.findByIdAndUpdate(id, req.body, {new: true, runValidators: true, useFindAndModify: false})
      
      if(!student){ 
        res.status(404).send({ success: false, error: 'Cannot find student by Id' })
      }
      
      res.send(data);
  } catch(err){ 
    console.log(err)
  }
})



app.delete('/api/student/:id', async (req, res) => { 
  const id = req.params.id; 

  try { 
    const student = await Student.findByIdAndRemove(id, {useFindAndModify: false}); 

    if(!student){ 
    return res.status(404).send({ success: false, error: 'Cannot Find, No such student exists' })
    }

    res.send({ success: true })
  } catch(err){ 
    console.log(err)
  }
})


app.listen(3000, () => {
  console.log("Server listening at 3000");
});


