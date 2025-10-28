function fetchData() {
  console.log("fetchData: start");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        console.log("fetchData: async operation complete");
        resolve({ id: 1, name: "Srushti" });
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("then: received", data);
  })
  .catch((error) => {
    console.error("catch: error", error);
  });
