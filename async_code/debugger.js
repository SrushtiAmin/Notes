// Example to explore debugger with multiple steps

function multiply(a, b) {
    debugger; // Step into this function
    const result = a * b;
    console.log(`Inside multiply: ${a} * ${b} = ${result}`);
    return result;
}

function calculateSumAndMultiply(x, y) {
    const sum = x + y;
    console.log(`Sum: ${sum}`);
    const product = multiply(x, y); // Step into here
    return { sum, product };
}

console.log("Starting calculation...");

setTimeout(() => { // Async example to see event loop in debugger
    const { sum, product } = calculateSumAndMultiply(5, 10);
    console.log(`Sum: ${sum}, Product: ${product}`);
}, 1000);

console.log("Program continues while waiting for setTimeout...");
