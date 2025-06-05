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

// console.log(OptionalMultiplier('3', 5, '10' ));
// console.log(OptionalMultiplier('2','2' ));
// console.log(OptionalMultiplier(undefined, 2, 3));
// console.log(OptionalMultiplier(7, undefined, '2'));
// console.log(OptionalMultiplier());



function OptionalMultiplier2(num1?: number|string, num2?: number|string, num3?: number|string): number {
    num1 = num1 != null ? Number(num1) : 1;
    num2 = num2 != null ? Number(num2) : 1;
    num3 = num3 != null ? Number(num3) : 1;

    return num1 * num2 * num3;
}

console.log(OptionalMultiplier2('3', 5, '10' ));
console.log(OptionalMultiplier2('2','2', null));
console.log(OptionalMultiplier2(undefined, 2, 3));
console.log(OptionalMultiplier2(7, undefined, '2'));
console.log(OptionalMultiplier2());