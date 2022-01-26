const fs = require('fs')
function isPrime(n) {
    n = BigInt(n)
    if (n <= 1n)
        return false;
    if (n <= 3n)
        return true;
    if (n % 2n == 0n || n % 3n == 0n)
        return false
    for (let i = 5n; i * i <= n; i = i + 6n)
        if (n % i == 0n || n % (i + 2n) == 0n)
            return false;

    return true;
}

function twinPrime(n1, n2) {
    return (isPrime(n1) && isPrime(n2));
}

for (let i = BigInt(0); i >= 0; i++) {
    if (twinPrime(i, i + BigInt(2))) {
        console.log(`${i} - ${i + BigInt(2)}`)
        fs.readFileSync('./twin-primes.txt', 'utf-8');
        fs.appendFileSync('./twin-primes.txt', `${i} - ${i + BigInt(2)}\n`, (err) => {
            if (err) throw err;
        });
    }
}
