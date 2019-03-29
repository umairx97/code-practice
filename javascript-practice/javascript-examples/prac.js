// const Data = {
//   React: {
//     title: "React",
//     questions: [
//       {
//         question: "What is React?",
//         answer: "A library for managing user interfaces"
//       },
//       {
//         question: "Where do you make Ajax requests in React?",
//         answer: "The componentDidMount lifecycle event"
//       }
//     ]
//   },
//   JavaScript: {
//     title: "JavaScript",
//     questions: [
//       {
//         question: "What is a closure?",
//         answer:
//           "The combination of a function and the lexical environment within which that function was declared."
//       }
//     ]
//   }
// };

// const getDeckByTitle = (name, Data) => {
//   const deck = Data[name];
//   return deck;
// };

// const abc = {title, questions} = Data['React'];
// console.log(abc)


/* ****************************************************
********************************************************* */

/*
Use React and the data below to display a list of people alongside their books they like.

Fazal Deen's likes a Imran Series book.

For detailed instructions, refer to instructions.md.
*/

// const chart = [
//   {
//     id: 1,
//     peepsID: "1",
//     bookLikedID: "1"
//   },
//   {
//     id: 2,
//     peepsID: "2",
//     bookLikedID: "1"
//   },
//   {
//     id: 3,
//     peepsID: "4",
//     bookLikedID: "5"
//   },
//   {
//     id: 4,
//     peepsID: "5",
//     bookLikedID: "2"
//   },
//   {
//     id: 5,
//     peepsID: "3",
//     bookLikedID: "5"
//   },
//   {
//     id: 6,
//     peepsID: "6",
//     bookLikedID: "4"
//   }
// ];

// const peeps = {
//   1: {
//     id: 1,
//     name: "Fazal Deen",
//     readerCategory: "champ"
//   },
//   2: {
//     id: 2,
//     name: "Irfan",
//     readerCategory: "rising-star"
//   },
//   3: {
//     id: 3,
//     name: "Muneeb",
//     readerCategory: "beginner"
//   },
//   4: {
//     id: 4,
//     name: "Osama",
//     readerCategory: "champ"
//   },
//   5: {
//     id: 5,
//     name: "Najam",
//     readerCategory: "champ"
//   },
//   6: {
//     id: 6,
//     name: "Aamir",
//     readerCategory: "beginner"
//   }
// };

// const books = {
//   1: {
//     id: 1,
//     name: "Imran Series"
//   },
//   2: {
//     id: 2,
//     name: "Harry Potter"
//   },
//   3: {
//     id: 3,
//     name: "I Am Malala"
//   },
//   4: {
//     id: 4,
//     name: "Bang-e-Dara by Allama Iqbal"
//   },
//   5: {
//     id: 5,
//     name: "Jokes 101"
//   }
// };

// chart.map(item => {
//   const PeepName = peeps[item.peepsID].name;
//   const FavBook = books[item.bookLikedID].name;

//   console.log(`${PeepName} Likes ${FavBook} Book`);
// });
