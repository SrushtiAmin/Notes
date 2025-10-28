function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 complete");
    callback(null, "Data from step 1");
  }, 1000);
}

function step2(dataFromStep1, callback) {
  setTimeout(() => {
    console.log("Step 2 complete, received:", dataFromStep1);
    callback(null, "Data from step 2");
  }, 1000);
}

function step3(dataFromStep2, callback) {
  setTimeout(() => {
    console.log("Step 3 complete, received:", dataFromStep2);
    callback(null, "Final result");
  }, 1000);
}

// Callback hell: nested structure
step1(function (err, data1) {
  if (err) return console.error("Error in step 1:", err);
  step2(data1, function (err, data2) {
    if (err) return console.error("Error in step 2:", err);
    step3(data2, function (err, data3) {
      if (err) return console.error("Error in step 3:", err);
      console.log("All steps done:", data3);
    });
  });
});
