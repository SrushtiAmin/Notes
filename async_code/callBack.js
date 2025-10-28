function fetchData(callback) {
  console.log("fetchData: start");

  setTimeout(function () {
    const data = { id: 1, name: "Srushti" };
    console.log("fetchData: async operation complete");
    callback(null, data);
  }, 2000);
}

function displayData(err, data) {
  if (err) {
    console.error("displayData: error", err);
    return;
  }
  console.log("displayData: received", data);
}

fetchData(displayData);
