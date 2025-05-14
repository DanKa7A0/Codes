function EvenSum(num1: number, num2: number, num3: number): boolean {
    let sum: number = num1 + num2 + num3;

    if (sum % 2 === 0) {
        return true;
    }

    return false;
}

console.log("Sum of 1, 2, 3 is even: " + EvenSum(1, 2, 3));
console.log("Sum of 2, 2, 3 is even: " + EvenSum(2, 2, 3));
