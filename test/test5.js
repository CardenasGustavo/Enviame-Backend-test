const div = (n) => {
    let values = [];
    const end = Math.floor(Math.sqrt(n));

    for (let i = 1; i <= end; i++) {
        if (n % i == 0) {
            values.push(i);
            if (i * i != n) {
                values.push(n / i);
            }
        }
    }
    return values.sort((a, b) => a - b);
}


let fibonacci = [0, 1];
let i = 2

let qtyDiv = [];
while (qtyDiv.length < 1000) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    qtyDiv = div(fibonacci[i]);
    i++;
};

console.log("The first fibonacci sequence with more than 1000 divisors is  ", fibonacci[fibonacci.length - 1]);
console.log("Quantity of divisors is   ", qtyDiv.length);
console.log(" Divisors : ", qtyDiv);





//console.log(fibonacci(100));
//console.log(div(1000))

//fibonacci  1548008755920
//960
//fibonacci  2504730781961
//4