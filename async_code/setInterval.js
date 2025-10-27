let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(`Interval count: ${count}`);
  
  if (count === 5) {
    clearInterval(intervalId); // stop after 5 times
    console.log("Interval stopped.");
  }
}, 1000); // runs every 1 second
