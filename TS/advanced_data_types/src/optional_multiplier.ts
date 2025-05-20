function ConvertNumber(num: number|string): number {
    if (typeof num !== "number" || typeof num !== "string") return 1;
    if (typeof num === "string") num = parseInt(num);
    return num;
}

function OptionalMultiplier(num1?: number|string, num2?: number|string, num3?: number|string): number {
    let result: number = 1;
    result *= ConvertNumber(num1);
    result *= ConvertNumber(num2);
    result *= ConvertNumber(num3);

    return result;
}

console.log(OptionalMultiplier('3', 5, '10' ));
console.log(OptionalMultiplier('2','2' ));
console.log(OptionalMultiplier(undefined, 2, 3));
console.log(OptionalMultiplier(7, undefined, '2'));
console.log(OptionalMultiplier());