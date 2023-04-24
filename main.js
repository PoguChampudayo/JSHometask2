function isPrime (n) {
    for(let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if(n % i === 0) return false;
    }
    return n > 1;
}

function findPrimeNumbers(n) {
    let resArray = []
    let i = 2
    if (n < 1) return 'Введите положительное число'
    while (resArray.length < n) {
        if (isPrime(i)) resArray.push(i);
    i++
    }
    return resArray
}
console.time()
console.log(findPrimeNumbers(process.argv[2]));
console.timeEnd()