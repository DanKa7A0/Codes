function DayOfWeek(num: number) : string {
    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    return Days[num] || "error";
}

console.log("Day of week for 1 is: " + DayOfWeek(1));
console.log("Day of week for 2 is: " + DayOfWeek(2));
console.log("Day of week for 8 is: " + DayOfWeek(8));