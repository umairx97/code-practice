/**
|--------------------------------------------------
| Try to understand the structure of code rather than copying it exact same 
  The code below is just for understanding purpose.. it will not run without a raspberry PI
|--------------------------------------------------
*/



// Importing 3rd party libraries that we will use later on in the code 
const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const onoff = require('onoff');
const cors = require('cors');


// Initializing a variable "App" with all the functions of express;
const app = express();



// Using predefined middlewares in our express server below

app.use(bodyParser()); // This middleware is used to catch the incoming data in req.body in json format
app.use(cookieParser()) // This middleware is used to catch the cookies coming from client
app.use(logger('dev')) //This middleware is used to see on which route the request came on 
app.use(cors()) // This middleware allows to make cross origin request to the server 

// This is my own made custom middleware that just show which route was accessed on the server
app.use(customMiddleware = (request, response, next) => {
    console.log('There was a request on this url' + request.url)
    next();
});

// Middlewares are triggered whenever a request comes to the server 
// Every middleware has its own functionlity 
// You can create your own middlewares too 







// /**
// |--------------------------------------------------
// | Below code represents Raspberry being connected and running
// |--------------------------------------------------
// */

let Gpio = onoff.Gpio;

// The line below is setting a new input output port for the LED light 

// The hardware port 4 is used to denote the output of current in the circuit
let led = new Gpio('4', 'out');
let interval;


// Process to stop the raspberryy PI
process.on('SIGINT', function () {
    clearInterval(interval);
    led.writeSync(0);
    led.unexport();
    console.log('Bye, bye!');
    process.exit();
});






/**
|--------------------------------------------------
| Below code represents Express code 
  In which we will use specific API routes to change the condition of LIGHTS, FANS and other devices 
|--------------------------------------------------
*/




// The on and off routes below will turn the led light connected to raspberry on and off
app.get('/LED/:condition', (request, response) => { // :id is the dynamic on off parameter which the client will send to the server 

    // Taking out the specific condition from the parameters of the url
    const condition = request.params.condition;



    // EXPLANATION of the below scenario 
    // Imagine if ke client se hamare server per request arhi ha is route pr =>>>> http://localhost:3001/LED/on 
    // Jo last ma ON likha ha route ma wo hamari condition ha jise ham dynamically pick kr rhe ha from params above 
    // uski base pr identify krenge ke light ko on kr wana ha ya off 
    // agar client last ma off wale route pr request bhejega then our server will know ke konsi if condition ko run krna ha 
    // refer to the code below for conditions 

    if (condition === 'on') {
        // The interval code below is used to change the state of the LED from on to off and vice versa every 2 seconds 
        interval = setInterval(() => {
            condition = (led.readSync() + 1) % 2;
            led.write(condition, function () {
                console.log("Changed LED state to: " + condition);
            });
        }, 1000); // this is nanoseconds 

        response.send('The led is turned ON ')
    } else {
        interval = setInterval(() => {
            condition = (led.readSync() + 1) % 2;
            led.write(condition, function () {
                console.log("Changed LED state to: " + condition);
            });
        }, 1000); // this is nanoseconds 

        response.send('The led is turned OFF ')

    }
})




// The on and off routes below will turn the led light connected to raspberry on and off
app.get('/FAN/:condition', (request, response) => { // :id is the dynamic on off parameter which the client will send to the server 

    // Taking out the specific condition from the parameters of the url
    const condition = request.params.condition;



    // EXPLANATION of the below scenario 
    // Imagine if ke client se hamare server per request arhi ha is route pr =>>>> http://localhost:3001/FAN/on 
    // Jo last ma ON likha ha route ma wo hamari condition ha jise ham dynamically pick kr rhe ha from params above 
    // uski base pr identify krenge ke fan ko on kr wana ha ya off 
    // agar client last ma off wale route pr request bhejega then our server will know ke konsi if condition ko run krna ha 
    // refer to the code below for conditions 

    if (condition === 'on') {
        // The interval code below is used to change the state of the FAN from on to off and vice versa every 2 seconds 
        interval = setInterval(() => {
            condition = (fan.readSync() + 1) % 2;
            fan.write(condition, function () {
                console.log("Changed fan state to: " + condition);
            });
        }, 1000); // this is nanoseconds 

        response.send('The fan is turned ON ')
    } else {
        interval = setInterval(() => {
            condition = (fan.readSync() + 1) % 2;
            fan.write(condition, function () {
                console.log("Changed fan state to: " + condition);
            });
        }, 1000); // this is nanoseconds 

        response.send('The fan is turned OFF ')

    }
})



/**
|--------------------------------------------------
| Below code representst the login and register functionality with Specific Routes
|--------------------------------------------------
*/


// Login API for clients
// Post route is used to send the data to the server 
app.post('/login', (request, response) => {

    // LOGIC OF LOGIN ROUTE
    /* Ham assume krenge ke client hame 2 cheezen bhejega 
    the username and the password... hamen check krna ha phr ke hamare pas ye specific username or pass exist krte ha ke nai 
    if agar krte ha ham user ko authenticate krwadenge  */

    // Dummy Static Users
    const users = [
        { username: 'umair', password: '123456' },
        { username: "asad", password: '123456' },
        { userame: 'shahbaz', password: '654321' }
    ]


    //Checking if the body is empty or not for errors handling
    if (!request.body) {
        return response.send('Please send data in body')
        // The below code will not execute in route because it will return from here
    }


    // catching the username and password coming from client side
    // all the data comming from client side will come in request body
    const username = request.body.username;
    const password = request.body.password;


    // Loop the users array to find matches 
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) { //Checking if any set of username and password match with client or not
            response.send('You are authenticated');
        } else {
            response.send('Wrong username or password')
        }
    }

})



// REGISTER route for client
app.post('/register', (request, response) => {

    // LOGIC from registration 
    /* Just like login ham assume krenge ke hame username and password bheja ja rha ha client se for registration 
    Ham apne pas data save krwake client ko confirmation dedenge you are registered 
    */


    let RegUsers = [];



    //Checking if the body is empty or not for errors handling
    if (!request.body) {
        return response.send('Please send data in body')
        // The below code will not execute in route because it will return from here
    }


    // Picking out username and password from the request 
    const { username, password } = request.body;


    // Creating an object to save the details of a new user
    const newUser = {
        username,
        password
    }

    RegUsers.push(newUser); //Adding the new user in the array 

    // CHecking if there is a user added or not by checking the length of users array
    if (RegUsers.length) {
        response.send('You are registered')

    } else {
        response.send('Please Try Again')
    }


})






// We define port dynamically on which our server will run 
// The line below will determine if there is any port available from system 
// if there is no port available we define it as 3001 
const PORT = process.env.PORT || 4000;

// The code below starts the server on a given port and executes a function whenever a server is started
app.listen(PORT, () => {
    console.log('The server is running on port: ' + PORT)
})

