// const mongoose = require('mongoose')
// const express = require("express");
// const app = express();
// const logger = require('morgan');

// mongoose.connect("mongodb://localhost:27017/testing", {
//   useNewUrlParser: true,
//   useCreateIndex: true
// });

// app.use(express.json());
// app.use(logger('dev'))

// const Student = require("./models/student");


// app.get('/api/students', async (req, res) => { 
//   const student =  await Student.find({})

//   if(!student){ 
//     res.status(404).json({ message: 'Cannot find data' })
//   }
//   res.send(student)
// })



// app.get("/api/student/:id", (req, res) => {
//   const id = req.params.id;

//   Student.findById(id)
//     .then(profile => {
//       if (!profile) {
//         res.status(404);
//       }

//       res.send(profile);
//     })
//     .catch(err => {
//       res.status(500).send(err);
//     });
// });



// app.post("/api/student", (req, res) => {
//   const student = Student(req.body);
//   student.save((err, doc) => {
//     if (err) {
//       return res.json({ success: false, err});
//     }

//     res.status(200).json({
//       success: true,
//       userData: doc
//     });

//   });
// });


// app.patch('/api/student/:id', async (req, res) =>{ 
//   const id = req.params.id;

//   const updatedFields = Object.keys(req.body); 
//   const fieldsInModel = ['age', 'email', 'name', 'password', 'gender'];
//   const isUpdateAllowed = updatedFields.every(field => fieldsInModel.includes(field));

//   if(!isUpdateAllowed){ 
//     res.status(400).send({ success: false, error: 'Invalid Fields' })
//   }

//   try { 
//       const student = await Student.findByIdAndUpdate(id, req.body, {new: true, runValidators: true, useFindAndModify: false})

//       if(!student){ 
//         res.status(404).send({ success: false, error: 'Cannot find student by Id' })
//       }

//   } catch(err){ 
//     console.log(err)
//   }
// })



// app.delete('/api/student/:id', async (req, res) => { 
//   const id = req.params.id; 

//   try { 
//     const student = await Student.findByIdAndRemove(id, {useFindAndModify: false}); 

//     if(!student){ 
//     return res.status(404).send({ success: false, error: 'Cannot Find, No such student exists' })
//     }

//     res.send({ success: true })
//   } catch(err){ 
//     console.log(err)
//   }
// })


// app.listen(3000, () => {
//   console.log("Server listening at 3000");
// });






/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/


const express = require("express");
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const fs = require('fs');
const mongoose = require('mongoose')


const DATABASE_URI_PROD = "mongodb+srv://umair:home5757@cluster0-4iwec.mongodb.net/icart?retryWrites=true&w=majority"
const DATABASE_URI_DEV = 'mongodb://localhost:27017/icart';
mongoose.connect(DATABASE_URI_DEV, { useNewUrlParser: true, useCreateIndex: true });


const ProductSchema = mongoose.Schema({

    id: Number,

    title: String,

    img: String,

    price: Number,

    company: String,

    info: String,

    inCart: Boolean,

    total: Number,

    count: Number

})


const Product = mongoose.model('Product', ProductSchema);

require('dotenv').config();

app.use(bodyParser());
app.use(cookieParser());
app.use(logger('dev'));
app.use("*", cors());


let ProductData = {
    preDef: '',
    postDef: ''
};



app.get('/api/products', async (req, res) => {

    try {
        const products = await Product.find({})
        if (!products) {
            res.status(404).json({ success: false, data: [] })
        }
        res.status(200).json({
            success: true,
            products: products
        })

    } catch (err) {
        res.send(err)
    }
})



app.listen(4000, () => {
    console.log('The server is running at 4000')

    fs.readFile('DATA.json', async function (err, data) {
        if (err) {
            console.log('File not found')

        } else {
            try {
                const parsed = JSON.parse(data);

                const product = await Product.create(parsed.Product1);
                product.save();

                if (product) {
                    const saved = await Product.find({})
                    if (saved) {
                        ProductData.postDef = saved;
                        return ProductData;
                    }
                }

            } catch (err) {
                console.log(err)
            }
        }
    });

})






/**
|--------------------------------------------------
|
|--------------------------------------------------
*/





// const express = require("express");
// const app = express();
// const logger = require('morgan');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const cors = require('cors')


// let multer  = require('multer')
// let upload = multer({ dest: 'uploads/' })




// // app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cookieParser());
// app.use(logger('dev'));
// app.use("*", cors());



// app.post('/form', upload.single('file'),  (req, res) => {


//   const data = JSON.stringify(req.body); 
//   const parsed = JSON.parse(data);

//   let fields = {
//     parsed, 
//     file: req.file 
//   }

//   console.log(fields)



// })



// app.listen(4000, () => {
//   console.log('The server is running at 4000')
// })


