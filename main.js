const fs = require('fs')
function isPrime(n) {
    // Corner cases
    n = BigInt(n)
    if (n <= BigInt(1))
        return false;
    if (n <= BigInt(3))
        return true;
    if (n % BigInt(2) == BigInt(0) || n % BigInt(3) == BigInt(0))
        return false
    for (let i = BigInt(5); i * i <= n; i = i + BigInt(6))
        if (n % i == BigInt(0) || n % (i + BigInt(2)) == BigInt(0))
            return false;

    return true;
}
function twinPrime(n1, n2) {
    return (isPrime(n1) && isPrime(n2));
}
console.log('ok')

for (let i = BigInt(0); i >= 0; i++) {
    if (twinPrime(i, i + BigInt(2))) {
        console.log(`${i} - ${i + BigInt(2)}`)
        fs.readFileSync('./twin-primes.txt', 'utf-8');
        fs.appendFileSync('./twin-primes.txt', `${i} - ${i + BigInt(2)}\n`, (err) => {
            if (err) throw err;
        });
    }
}