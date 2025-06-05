function ConvertArray(arr: string[]) : [string, number]{
    const result = arr.join("");
    return [result, result.length];
}

console.log(ConvertArray(['How', 'are', 'you?']));
console.log(ConvertArray(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));