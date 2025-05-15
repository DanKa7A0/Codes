function SummarizePerson(id: number, firstName: string, lastName: string, age: number, middleName?: string, hobbies?: string[], workInfo?: [string, number])
: [number, string, number, string, string] {
    const fullName = `${firstName} ${middleName || ""} ${lastName}`;
    const hobbiesList = hobbies ? hobbies.join(", ") : "-";
    const workInfoList = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : "-";
    return [id, fullName, age, hobbiesList, workInfoList];
}

console.log(SummarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['SalesConsultant', 2500]));
console.log(SummarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']));
console.log(SummarizePerson(21, 'Joseph', 'Angler', 28));
console.log(SummarizePerson(21, 'Kristine', 'Neva', 23, ''));