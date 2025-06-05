function TypeNarrow(input: unknown) : input is Date {
    return input instanceof Date;
}

function FridayThe13th(input: unknown[]): void {
    enum Months {
        January,
        February,
        March,
        April,
        May,
        June,
        July,
        August,
        September,
        October,
        November,
        December
    }
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (!TypeNarrow(element)) continue;

        if (element.getDay() === 5 && element.getDate() === 13) { // friday 13th
            console.log(element.getDate() + "-" + Months[element.getMonth()] + "-" + element.getFullYear());
        }            
    }    
}

FridayThe13th(
    [
        {},
        new Date(2025, 4, 13),
        null,
        new Date(2025, 5, 13),
        '13-09-2023',
        new Date(2025, 6, 13)
    ]
);

console.log("------------------------------");

FridayThe13th(
    [
        new Date(2024, 0, 13),
        new Date(2024, 1, 13),
        new Date(2024, 2, 13),
        new Date(2024, 3, 13),
        new Date(2024, 4, 13),
        new Date(2024, 5, 13),
        new Date(2024, 6, 13),
        new Date(2024, 7, 13),
        new Date(2024, 8, 13),
        new Date(2024, 9, 13),
        new Date(2024, 10, 13),
        new Date(2024, 11, 13)
    ]
);