function isNonEmptyStringArray(arr: unknown) : arr is string[] {
    return Array.isArray(arr) && arr.length > 0 && arr.every(i => typeof i === "string");
}


const arr: unknown = {};
if (isNonEmptyStringArray(arr)) {
    console.log(arr.length); // allowed
}

const arr2: unknown = { test: 'one' };
if (isNonEmptyStringArray(arr2)) {
    console.log(arr2.length); // allowed
}

const arr3: unknown = undefined;
if (isNonEmptyStringArray(arr3)) {
    console.log(arr3.length); // allowed
}

const arr4: unknown = ['a', 'b', 'c'];
if (isNonEmptyStringArray(arr4)) {
    console.log(arr4.length); // allowed
}