function registerUser(user) {
  if (!user.name || !user.email) {
    throw new Error("User details are incomplete!"); // User-specified error
  }
  console.log("User registered:", user.name);
}

try {
  registerUser({ email: "test@example.com" });
} catch (err) {
  console.error("Caught Error:", err.message);
}
