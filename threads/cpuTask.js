function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

process.on("message", ({ start, end }) => {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) primes.push(i);
  }
  process.send({ primes });
});
