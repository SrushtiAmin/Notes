function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Srushti" });
    }, 2000);
  });
}

async function displayData() {
  console.log("displayData: start");
  const result = await fetchData();
  console.log("displayData: received", result);
}

displayData();
