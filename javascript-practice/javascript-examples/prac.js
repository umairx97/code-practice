const arr = [1, 2, 3, 4, 5, 6];

/* Filter method runs on a specific
condition and returns a new array 
that satisfies the condition */
const newArr = arr.filter(num => {
  // Return an array that excludes 3
  return num !== 3;
});

console.log(newArr);
// Result:
// Array(5) [ 1, 2, 4, 5, 6 ]
