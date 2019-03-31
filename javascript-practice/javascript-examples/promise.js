const anyFunction = () => {
  return Math.floor(Math.random() * 10) % 2 === 0 ? true : false;
};

const resolveFunction = () => console.log("success");
const rejectFunction = () => console.log("failure");

// Promise will output failure if no time is given to calculations
const result = new Promise((res, rej) => {
  setTimeout(() => (anyFunction() ? res() : rej()), 1000);
});

result.then(resolveFunction).catch(rejectFunction);
console.log("Hello world");
