const axios = require("axios");

axios
  .get("http://localhost:3001/api")
  .then(data => {
    console.log(data.data);
  })
  .catch(err => {
    console.log(err);
  });
