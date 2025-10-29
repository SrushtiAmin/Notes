// file: fetchExample.js

// GET request
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json()) // convert JSON response to JS object
  .then(data => {
    console.log("GET Response:", data);
  })
  .catch(err => {
    console.error("GET Error:", err.message);
  });

// POST request
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hello",
    body: "This is a test post",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => {
    console.log("POST Response:", data);
  })
  .catch(err => {
    console.error("POST Error:", err.message);
  });
