// *****************************************************************************************************
// ******************************************************************************************************
/* TASK NUMBER 1: 
 
Write an arrow function that takes an array as an argument.
The function's duty is to delete the last element from the array and return it

*/

// ******************************************************************************************************
/* TASK NUMBER 2: 
 
Write an arrow function that takes an array as an argument.
The function's duty is add an element at the start of an array and return it 

*/

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

// ******************************************************************************************************
/* TASK NUMBER 10: 
 
Write an arrow function that takes in a string as an argument an the functions duty is to check the number of characters in a string a print it on the console
*/

// ******************************************************************************************************
/* TASK NUMBER 11: 
 
write an arrow function that reverses a set of numbers when passed as an argument

Example x = 123456;
Expected Output : 654321 

*/

// ******************************************************************************************************
/* TASK NUMBER 12: 
 
Write an arrow function that prints the current date as follows: 

DD-MM-YYYY

HINT ===> Use Javascripts Date functions
*/

// ******************************************************************************************************
/* TASK NUMBER 13: 
 
write an arrow function that takes in a string as an argument and returns the string in uppercase letters
*/

// ******************************************************************************************************
/* TASK NUMBER 14: 
 
Write an arrow function that takes in an array of country names and returns the name with the most characters
*/

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

// ******************************************************************************************************

/* TASK NUMBER 20: 

Write an arrow function that generates a random digit between a given range 

the number generated should not be a floating point number 

3.52 =>>> Wrong 
3 =>>> Right

*/

// ******************************************************************************************************

/* TASK NUMBER 21: 

Write a javascript code to sort an array of numbers in ascending or descending order

*/

// ******************************************************************************************************

/* TASK NUMBER 22: 

Write an arrow function and the functions duty is to first check 

if the argument passed is a string..if it is then you should concatenate behind the sring "Welcome"  and return it

if the argument passed is a number then it should be multiplied by the power of 2 and return it

*/

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

// ******************************************************************************************************

/* TASK NUMBER 24: 

write an arrow function that takes a string as an argument. 
The function's duty is to save the string in the local storage with a key 

*/

// ******************************************************************************************************

/* TASK NUMBER 25: 

Write an arrow function that takes an argument. 

the function should return the value stored in local Storage against the argument passed as a key 


if there is no value in the local storage function should print

"Sorry cannot find value"
*/

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


// ******************************************************************************************************

/* TASK NUMBER 28: 

Write a code that checks whether the argument passed is an integer or not and prints a boolean value on the console

do not create your own function 
use a pre defined function 
*/

// ******************************************************************************************************

/* TASK NUMBER 29: 

const obj = {
    id1 = 1, 
    id2 = 2, 
    id3 = 3
}


take the above object and destructure id1 and id2 out of the object 

compare those two values using ternary and print on the console if they are equal and vice versa
*/

// ******************************************************************************************************

/* TASK NUMBER 30: 

Write an arrow function to round a number to a specified number of digits. when passed as an argument and return it

Example: 

roundNumber(4.6); 

Expected Ouput: 5 ===> The number is rounded off 
*/
