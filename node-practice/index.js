const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ExpressDB')

const {Post} = require('./models')

const app = express();

app.use(morgan('dev'))
app.use(bodyParser())
app.use(cookieParser())

app.get('/', (req,res) => {
  res.send('Welcome to express')
  Post.find({}, (err, doc) =>{
    console.log(doc)
  })
})

app.post('/store', (req,res) => {

  Post.create(req.body)
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`The server is running at port ${PORT}`)
})
