function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false; // simulate failure
      if (success) {
        resolve({ id: 1, name: "Srushti" });
      } else {
        reject("Error: Failed to fetch data");
      }
    }, 2000);
  });
}

async function displayData() {
  try {
    console.log("displayData: start");
    const result = await fetchData(); // waits for promise to resolve
    console.log("displayData: received", result);
  } catch (error) {
    console.error("displayData: caught error", error);
  }
}

displayData();
