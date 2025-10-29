const axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    console.log("GET Response:", response.data);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });
axios.post("https://jsonplaceholder.typicode.com/posts", {
  title: "Hello",
  body: "This is a test post",
  userId: 1
})
  .then(response => {
    console.log("POST Response:", response.data);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });
