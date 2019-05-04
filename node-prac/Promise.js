// const addNumber = (a, b) => {
//   const fail = false;

//   return new Promise((resolve, reject) => {
//     if (!fail) {
//       resolve(a + b);
//     } else {
//       reject("Rejected");
//     }
//   });
// };

// const getResult = async () => {
//   try { 
//     const result = await addNumber(5, 6);
//     const result2 = await addNumber(6, 4);
//     const r3 = await addNumber(6, 5);
//     const r4 = await addNumber(6, 6);
//     const r5 = await addNumber(6, 7);
//     const r6 = await addNumber(6, 8);

//     console.log(result);
//     console.log(result2);
//     console.log(r3, r4, r5, r6);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getResult();
