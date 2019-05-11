// const express = require('express');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const morgan = require('morgan');
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/ExpressDB')

// const {Post} = require('./models')

// const app = express();

// app.use(morgan('dev'))
// app.use(bodyParser())
// app.use(cookieParser())

// app.get('/', (req,res) => {
//   res.send('Welcome to express')
//   Post.find({}, (err, doc) =>{
//     console.log(doc)
//   })
// })

// app.post('/store', (req,res) => {

//   Post.create(req.body)
// })

// const PORT = process.env.PORT || 4000

// app.listen(PORT, () => {
//   console.log(`The server is running at port ${PORT}`)
// })

// const url = require('url');
// const parsedUrl = url.parse('https://www.facebook.com/umair.bajwa97');
// console.log(parsedUrl);

// var MAX = 100;
// function randomInteger() {
//   return Math.floor(Math.random() * MAX);
// }
// module.exports = randomInteger;

// console.log(randomInteger());

// const data = "This is the data that is going to be put in a text file ";

// const fs = require("fs");

// fs.writeFileSync("data.txt", data);

// var options = { encoding: "utf-8" };
// fs.readFile("data.txt", options, (err, data) => {
//   if (err) {
//     console.error("Error reading file!");
//   }

//   const newData = JSON.stringify(data);
//   console.log(newData);
// });
