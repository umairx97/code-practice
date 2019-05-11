// const data = [
//   {
//     name: "Umair",
//     Amt: 100
//   },
//   {
//     name: "Asad",
//     Amt: 100
//   }
// ];

// const checkBalance = name => {
//   const a = data.filter(item => {
//     return item.name === name;
//   });

//   return a;
// };

// console.log(checkBalance('Umair'))

// const deposit = (name, amount) => {
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].name === name) {
//       data[i].Amt += amount;
//     }
//   }

//   return data;
// };

// console.log(deposit("Umair", 150));

// const closeAccount = name => {
//   const a = data.filter(item => item.name !== name);
//   return a;
// };

// console.log(closeAccount("Asad"));

// const addNewAccount = name => {
//   const obj = {
//     name,
//     Amt: 100
//   };

//   const merged = [...data, obj];

//   return merged;
// };

// console.log(addNewAccount('Ashir'))

// const NAMES = ["Umair", "Asad", "Ashir"];

// const SEMESTER = [8, 6, 7];

// const MARKS = [[20, 30, 40], [50, 60, 70], [30, 40, 60]];

// for (let i = 0; i < NAMES.length; i++) {
//   if ((NAMES[i] && SEMESTER[i] >= 7) || MARKS[i] > 60) {
//     console.log(
//       `${NAMES[i]} appeared in semester ${SEMESTER[i]} and he/she had marks ${
//         MARKS[i]
//       }`
//     );
//   }
// }

// const fruits = ["apple", "banana", "cake"];

// const a = prompt("Enter value to search");

// for (let i = 0; i < fruits.length; i++) {
//   if (a === fruits[i]) {
//     console.log("Value found");
//   } else {
//     console.log("Value not found");
//   }
// }

// const generateId = () => {
//   return Math.round(Math.random(1) * 1000);
// };

// const DATA = [
//   {
//     id: generateId(),
//     brand: "Samsung",
//     mobileName: "Galaxy S6",
//     quantity: 0,
//     inStock: true,
//     price: 100,
//     subTotal: 0
//   },
//   {
//     id: generateId(),
//     brand: "Samsung",
//     mobileName: "Galaxy S7",
//     quantity: 0,
//     inStock: true,
//     price: 150,
//     subTotal: 0
//   },
//   {
//     id: generateId(),
//     brand: "LG",
//     mobileName: "Optimus",
//     quantity: 0,
//     inStock: true,
//     price: 80,
//     subTotal: 0
//   },
//   {
//     id: generateId(),
//     brand: "Apple",
//     mobileName: "Iphone XS",
//     quantity: 0,
//     inStock: true,
//     price: 300,
//     subTotal: 0
//   },
//   {
//     id: generateId(),
//     brand: "Apple",
//     mobileName: "Iphone X",
//     quantity: 0,
//     inStock: true,
//     price: 250,
//     subTotal: 0
//   }
// ];

// const getBrand = () => {
//   const brand = prompt("Enter Brand Below");
//   const data = DATA.filter(item => item.brand === brand);
//   const inStockData = data.filter(item => item.inStock === true);

//   console.log(
//     `Your phone ${data.map(item => item.mobileName)} is in ${inStockData.map(
//       item => item.inStock
//     )}`
//   );

//   // alert(data.map(item => item.mobileName), inStockData.map(item => item.inStock))
// };

// getBrand();

// const getMobileName = name => {
//   for (let i = 0; i < DATA.length; i++) {
//     if (DATA[i].mobileName === name) {
//       return DATA[i];
//     }
//   }
// };

// // console.log(getMobileName("Galaxy S6"));

// const mobileInStock = (name, brand) => {
//   for (let i in DATA) {
//     if (DATA[i].mobileName === name && DATA[i].brand === brand) {
//       return DATA[i].inStock;
//     }
//   }
// };

// console.log(mobileInStock("Galaxy S7", "Samsung"));

// const getMobilePrice = name => {
//   for (let i = 0; i < DATA.length; i++) {
//     if (DATA[i].mobileName === name) {
//       return DATA[i].price;
//     }
//   }
// };

// console.log(getMobilePrice("Galaxy S7"));

// const getMobileByBrand = brand => {
//   const a = DATA.filter(item => item.brand === brand);
//   return a;
// };

// console.log(getMobileByBrand("Samsung"));

// const week = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday"
// ];
// let a = new Date();
// console.log(week[a.getDay()]);

// const a = prompt("Please enter a value");
// const fruits = ["Apple", "Strawberry", "Mango"];
// const result = fruits.filter(item => item === a); 
// result.length ? alert('Value found') : alert('Value not found')



