// ================== Using Object.keys to extract values from an object ===================
// const users = {
//   umair: {
//     id: 1,
//     name: "Umair Ahmed Bajwa",
//     profession: "Developer",
//     skills: ["Javascript", "React", "Nodejs"]
//   },
//   asad: {
//     id: 2,
//     name: "Asad Ikhlas",
//     profession: "Developer",
//     skills: ["Javascript", "React", "Nodejs", "PHP"]
//   }
// };

// const keys = Object.keys(users);
// console.log(keys);


// ================== Using Object.values to extract values from an object ===================

// const users = {
//   umair: {
//     id: 1,
//     name: "Umair Ahmed Bajwa",
//     profession: "Developer",
//     skills: ["Javascript", "React", "Nodejs"]
//   },
//   asad: {
//     id: 2,
//     name: "Asad Ikhlas",
//     profession: "Developer",
//     skills: ["Javascript", "React", "Nodejs", "PHP"]
//   }
// };

// const values = Object.values(users);
// console.log(values);


// ================== Using Object.Entries to extract key,value pairs from an object ===================

// const users = {
//   umair: {
//     id: 1,
//     name: "Umair Ahmed Bajwa",
//     profession: "Developer",
//     skills: ["Javascript", "React", "Nodejs"]
//   },
//   asad: {
//     id: 2,
//     name: "Asad Ikhlas",
//     profession: "Developer",
//     skills: ["Javascript", "React", "Nodejs", "PHP"]
//   }
// };

// const umair = Object.entries(users);
// console.log(umair);

// ================== Using Object.Entries to extract key,value pairs from an object ===================


// *************************************************************
// let obj1 = {
//     fname: "Irfan",
//     lname: "Ali",
//     degrees: 2,
// }
// let obj2 = {
//     city: "Karachi",
//     country: "Pakistan",
//     gender: "male",
// }
// let obj3 = {
//     fname: "Aamir",
//     lname: "Pinger",
// }

// // first argument is target object and rest are sources
// let newObject = Object.assign(obj1, obj2, obj3)

// console.log(newObject)