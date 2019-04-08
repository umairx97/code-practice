// *****************************************************************************************************
// ******************************************************************************************************
/* TASK NUMBER 1: 
 
Write an arrow function that takes an array as an argument.
The function's duty is to delete the last element from the array and return it

*/

// const getnum = x => {
//   x.pop();
//   console.log(x);
// };

// getnum([1, 2, 3, 4]);
// getnum([6, 7]);

// ******************************************************************************************************
/* TASK NUMBER 2: 
 
Write an arrow function that takes an array as an argument.
The function's duty is add an element at the start of an array and return it 

*/

// const getArr = arr => {
//   arr.unshift("Asad");

//   return arr;
// };

// const arr = ["Umair", "Ashir"];

// console.log(getArr(arr));

// ******************************************************************************************************
/* TASK NUMBER 3: 
 
Write an arrow function that takes an argument.
The function's duty is to check the arguments type and print the type by using switch case statements


For example if i pass in a string the function should print string on the console
if i pass a number the console should print number

*/

// ******************************************************************************************************
/* TASK NUMBER 4: 
 
Write an arrow function that takes an array of numbers as an argument and function's job is to multiply each element of an array by 2 and print it

*/

// ******************************************************************************************************
/* TASK NUMBER 5: 
 
Write an arrow function that takes an array as an argument.
The function's duty is add an element at the start of an array and return it 

*/

// ******************************************************************************************************
/* TASK NUMBER 6: 
 
Write an arrow function that takes an argument as object.
The functions duty is to write the output as follows by using template strings



(My name is Ashir and i am a Developer)

*/

// ******************************************************************************************************
/* TASK NUMBER 7: 
 
const Obj = {
    name: 'Umair',
    Id: '2101', 
    profession: 'React Developer'

}

write an arrow function that takes the above object as an argument and destructure out name and profession from it and print it on the console 

Dont do it like this =>>>> Obj.name, Obj.profession

(use destructuring)

*/

// ******************************************************************************************************
/* TASK NUMBER 8: 
 
write an arrow function that takes two arguments as strings
The functions duty is to check if the first argument passed is a string or not and then print true or false on the console 


The second duty of the function is to check the second argument whether it is a number or not  and then print true or false on the console 

*/

// ******************************************************************************************************
/* TASK NUMBER 9: 
 
Write an arrow function that takes an array as an argument.
The function's duty is add an element at the start of an array and return it 

*/

// ******************************************************************************************************
/* TASK NUMBER 9: 
 
Write an arrow function that does not get any arguments but should return a random id number if called against a variable 

Example 
 const id = generateId();

 the generate function should generate a random id between 1 - 1000 and return it 


 HINT => Use javascript's own Math Library

*/

// const generate = () => {
//   return Math.round(Math.random(1) * 1000);
// };

// const id = generate();

// console.log(id);

// ******************************************************************************************************
/* TASK NUMBER 10: 
 
Write an arrow function that takes in a string as an argument an the functions duty is to check the number of characters in a string a print it on the console
*/

// const getStr = str => {
//   console.log(str.length);
// };

// const name = "umair";

// getStr(name);
// ******************************************************************************************************
/* TASK NUMBER 11: 
 
write an arrow function that reverses a set of numbers when passed as an argument

Example x = 123456;
Expected Output : 654321 




*/

// let num = 123456;

// const getNum = num => {
//   num = num + "";
//   return num
//     .split("")
//     .reverse()
//     .join("");
// };

// console.log(getNum(num));

// ******************************************************************************************************
/* TASK NUMBER 12: 
 
Write an arrow function that prints the current date as follows: 

DD-MM-YYYY

HINT ===> Use Javascripts Date functions
*/

// const getDate = () => {
//   const day = new Date().getDate();
//   const month = new Date().getMonth() + 1;
//   const year = new Date().getFullYear();

//   console.log(day, month, year);
// };

// getDate();

// ******************************************************************************************************
/* TASK NUMBER 13: 
 
write an arrow function that takes in a string as an argument and returns the string in uppercase letters
*/

// const getString = str => {
//   console.log(str.toUpperCase());
// };

// getString("umair");

// ******************************************************************************************************
/* TASK NUMBER 14: 
 
Write an arrow function that takes in an array of country names and returns the name with the equal characters 
give the length yourself
*/

// const countries = ["Pakistan", "India", "Denmark", "Japan"];

// const getCountry = (country, len) => {
//   const filtered = country.filter(item => item.length === len);

//   console.log(filtered);
// };

// getCountry(countries, 5);

// ******************************************************************************************************
/* TASK NUMBER 15: 
 
const obj = {
    name: 'Umair',
    profession: 'developer', 
    age: 21, 
    skills: { 
        Coding: ['react', 'javascript', 'nodejs']; 
        Design: { 
            Platform: ['android', 'ios']
        }
    }
}

Use the above object and the output should be as following in the console 

"Hello my name is umair i'm a developer my skills include coding and design and i design apps for android and ios"

Use bracket notation to extract values from an object;
*/

// const obj = {
//   name: "Umair",
//   profession: "developer",
//   age: 21,
//   skills: {
//     Coding: ["react", "javascript", "nodejs"],
//     Design: {
//       Platform: ["android", "ios"]
//     }
//   }
// };

// const { name, profession } = obj;

// const skills = obj["skills"];
// const design = obj["skills"].Design;
// const platform = design.Platform;

// console.log(
//   `Hello my ${name} is umair i'm a ${profession} my skills include ${
//     skills.Coding
//   } and design and i design apps for ${platform}`
// );

// ******************************************************************************************************
/* TASK NUMBER 16: 
 
write an arrow function that takes in two arguments; 

The first argument should be an array  of number if no array is provided default array of numbers can be used by the function itself

the second argument should be a single digit from within the array 


the function should return the array or print it but it should not contain the number which was passed as a second argument 

Example: 

deletenumber([dummyarray], 5)

Expected output: an array without the digit 5
*/

// const getNum = (arr, digit) => {
//   const filtered = arr.filter(item => {
//     return item !== digit;
//   });

//   console.log(filtered);
// };

// const arr = [1, 2, 3, 4, 5, 6];

// getNum(arr, 5);

// ******************************************************************************************************

/* TASK NUMBER 17: 

const athleteData = [
    { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },
    { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },
    { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },
    { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },
    { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },
    { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },
    { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },
    { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },
    { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },
    { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
];


Use the array of object given above and print the output as follows 

{athlete} in {team} earned {income} euros
 
store the returned data in the variable given below the code should not exceed 4-5 lines

const athleteIncomeStrings = 'Replace this message with your code!';


HINT====>> Use map array helper

*/

// const athleteData = [
//     { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },
//     { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },
//     { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },
//     { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },
//     { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },
//     { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },
//     { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },
//     { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },
//     { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },
//     { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
// ];

// const athleteIncomeStrings = athleteData.map(item => {
//     console.log(`${item.athlete} in ${item.team} earned ${item.income}`)
// })

// ******************************************************************************************************

/* TASK NUMBER 18: 

const athleteData = [
    { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },
    { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },
    { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },
    { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },
    { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },
    { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },
    { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },
    { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },
    { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },
    { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
];


Use the array of object given above and print the name, team and income of those players 
whose income is greater than 7 digits 

store the returned data in the variable given below the code should not exceed 4-5 lines

const results = 'Replace this message with your code!';


HINT====>> Use filter array helper

*/

// const athleteData = [
//     { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },
//     { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },
//     { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },
//     { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },
//     { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },
//     { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },
//     { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },
//     { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },
//     { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },
//     { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
// ];

// const results = athleteData.filter(item => {
//     return item.income.toString().length > 7
// });

// console.log(results)

// ******************************************************************************************************

/* TASK NUMBER 19: 

const athleteData = [
    { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },
    { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },
    { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },
    { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },
    { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },
    { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },
    { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },
    { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },
    { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },
    { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
];


Use the array of object given above and first check if a player income is greater than 10,000,000 euros 
and then print the following 

{player Name} is a great player

store the returned data in the variable given below 

const popularPlayer = 'Replace this message with your code!';


HINT====>> Combine filter and map functions 

*/

// const athleteData = [
//   { athlete: "Lionel Messi", team: "Barcelona", income: 40000000 },
//   { athlete: "Cristiano Ronaldo", team: "Juventus", income: 30000000 },
//   { athlete: "Neymar", team: "Paris Saint-Germain", income: 36800000 },
//   { athlete: "Eden Hazard", team: "Chelsea", income: 10400000 },
//   { athlete: "Mohamed Salah", team: "Liverpool", income: 4680000 },
//   {
//     athlete: "Kylian Mbappé",
//     team: "Paris Saint-Germain: An American Musical",
//     income: 17500000
//   },
//   { athlete: "Luka Modrić", team: "Real Madrid", income: 9360000 },
//   { athlete: "Harry Kane", team: "Tottenham Hotspurs", income: 17600000 },
//   { athlete: "Kevin De Bruyne", team: "Manchester City", income: 5980000 },
//   { athlete: "Paul Pogba", team: "Manchester United", income: 15080000 }
// ];

// const popularPlayer = athleteData
//   .filter(item => {
//     return item.income > 10000000;
//   }) .map(item => {
//     return `${item.athlete} is a great football player`;
//   });

// console.log(popularPlayer);

// ******************************************************************************************************

/* TASK NUMBER 20: 

Write an arrow function that generates a random digit between a given range 

the number generated should not be a floating point number 

3.52 =>>> Wrong 
3 =>>> Right

*/

// const generateId = () => {
//   return Math.round(Math.random(1) * 1000);
// };

// const id = generateId();

// console.log(id);

// ******************************************************************************************************

/* TASK NUMBER 21: 

Write a javascript code to sort an array of numbers in ascending or descending order

*/

// const arr = [5,6,8,4,3,6]
// arr.sort();
// console.log(arr)

// ******************************************************************************************************

/* TASK NUMBER 22: 

Write an arrow function and the functions duty is to first check 

if the argument passed is a string..if it is then you should concatenate behind the sring "Welcome"  and return it

if the argument passed is a number then it should be multiplied by the power of 2 and return it


*/

// const getArgs = x => {
//   if (typeof x === "string") {
//     const greeting = "Welcome " + x;
//     return greeting;
//   } else if (typeof x === "number") {
//     const num = x ** 2;
//     return num;
//   }
// };

// console.log(getArgs(8))

// ******************************************************************************************************

/* TASK NUMBER 23: 

var Books = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

   Take the above array of objects and print the output as following 


   "{Book Name} {Author Name} {Reading Status}"

*/
// var Books = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false
//   }
// ];

// Books.map(item => console.log(item.author, item.title, item.readingStatus));

// ******************************************************************************************************

/* TASK NUMBER 24: 

write an arrow function that takes a string as an argument. 
The function's duty is to save the string in the local storage with a key 

*/

// const name = "umair";
//  const getStr = (x) => localStorage.setItem('name', x)

//  getStr(name)

// ******************************************************************************************************

/* TASK NUMBER 25: 

Write an arrow function that takes an argument. 

the function should return the value stored in local Storage against the argument passed as a key 


if there is no value in the local storage function should print

"Sorry cannot find value"
*/

// const getKey = x => {
//     return localStorage.getItem(x) ? true : false
// }

// console.log(getKey('umair'))

// ******************************************************************************************************

/* TASK NUMBER 26: 

Write an arrow function that takes in two objects as an argument 

and combines the properties of those two objects into a single object an return it 


HINT ==> use javascript Object.assign
*/

// ******************************************************************************************************

/* TASK NUMBER 27: 

Write an arrow function that takes in two objects as an argument 

and combines the properties of those two objects into a single object an return it 


HINT ==> use javascript Object.assign

*/

// const getObj = (x, y) => {
//   return Object.assign({}, x, y);
// };

// const obj1 = {
//   name: "umair"
// };

// const obj2 = {
//   profession: "developer"
// };

// console.log(getObj(obj1, obj2));

// ******************************************************************************************************

/* TASK NUMBER 28: 

Write a code that checks whether the argument passed is an integer or not and prints a boolean value on the console

do not create your own function 
use a pre defined function 
*/

// const checkArgs = (x) => {
//     return typeof(x) === 'number'? true : false
// }

// console.log(checkArgs(2))

// ******************************************************************************************************

/* TASK NUMBER 29: 

const obj = {
    id1: 1, 
    id2: 2, 
    id3: 3
}


take the above object and destructure id1 and id2 out of the object 

compare those two values using ternary and print on the console if they are equal and vice versa
*/

// const obj = {
//   id1: 1,
//   id2: 2,
//   id3: 3
// };

// const { id1, id2 } = obj;

// id1 === id2 ? console.log("Equal") : console.log("Not equal");

// ******************************************************************************************************

/* TASK NUMBER 30: 

Write an arrow function to round a number to a specified number of digits. when passed as an argument and return it

Example: 

roundNumber(4.6); 

Expected Ouput: 5 ===> The number is rounded off 
*/

// const roundNumber = x => {
//   return Math.round(x);
// };

// console.log(roundNumber(4.6));
