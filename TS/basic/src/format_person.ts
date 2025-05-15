function FormatPerson(input: [string, number]) : string {
    return `Hello, my name is ${input[0]} and my age is ${input[1]}`;
}

console.log(FormatPerson(["John", 30]));
console.log(FormatPerson(["Jane", 25]));
//console.log(FormatPerson(["Doe", 40, "Palnik"])); // This will cause an error because the input is not a tuple of [string, number]