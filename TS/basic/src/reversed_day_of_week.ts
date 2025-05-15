function ReversedDayOfWeek(day: string) : number {
    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    return Days[day as keyof Days] || "error";
}

console.log("Day of week for Monday is: " + ReversedDayOfWeek("Monday"));
console.log("Day of week for Tuesday is: " + ReversedDayOfWeek("Tuesday"));
console.log("Day of week for Mitko is: " + ReversedDayOfWeek("Mitko"));


