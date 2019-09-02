// const express = require('express');
// var app = express();
// const bodyParser = require('body-parser');

// const mongoose = require('mongoose');



// app.use(bodyParser.json());


// mongoose.connect("mongodb://localhost:27017/prac", { useCreateIndex: true, useNewUrlParser: true });

// const userSchema = mongoose.Schema({
//     name: {
//         type: String,
//         trim: true,
//         unique: false,
//         required: false,
//         minlength: 3,
//         maxlength: 15
//     },

//     favourites: {
//         books: [
//             {
//                 id: mongoose.Types.ObjectId,
//                 name: String,
//                 desc: String,
//                 author: String
//             }
//         ],

//         movies: [
//             {
//                 id: mongoose.Types.ObjectId,
//                 name: String,
//                 desc: String,
//                 producer: String
//             }
//         ]

//     }
// })

// const User = mongoose.model('User', userSchema);


// app.post('/api/users', async (req, res) => {

//     // console.log(req.body)
//     // let data = await User.create(req.body); 
//     // data.save((err, doc) => { 
//     //     res.send({ success: true, doc })
//     // })


//     const data = await User.find({ _id: req.body.id })
//     console.log(data)
//     res.send(data)

// })



// app.listen(3000, () => {
//     console.log(`The server is running at port 3000`)
// })









/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/




// const express = require('express');
// var app = express();
// const bodyParser = require('body-parser');

const mongoose = require('mongoose');



// app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/prac", { useCreateIndex: true, useNewUrlParser: true });


const commentSchema = mongoose.Schema({ 
    text: String, 
    username: String,
})


const postSchema = mongoose.Schema({ 
    text: String, 
    username: String,
    comments: [commentSchema]
})

const Post = mongoose.model('Post', postSchema)
const Comment = mongoose.model('Comment', commentSchema)

const aPost = new Post({ text: "Hello", username: "umair" })
// const aComment = new Comment({ text: "World", username: "asad" });

aPost.comments.push({ username: "asad", text: "welcome to my app" })
// aComment.save(); 
// aPost.comments.push(aComment); 
aPost.save((err, data) => {}); 


// Post.findOne({}).populate('comments').exec().then(res => { 
//     console.log(res)
// })
