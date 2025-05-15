function UnknownRespnose(input: unknown): string {
    if (!input.hasOwnProperty("value") || typeof (input as any).value !== "string"){
        return "-";
    }

    return (input as any).value;
}

console.log(UnknownRespnose({ code: 200, text: 'Ok', value: [1, 2, 3]}));
console.log(UnknownRespnose({ code: 301, text: 'Moved Permanently', value: 'New Url'}));
console.log(UnknownRespnose({ code: 201, text: 'Created', value: { name: 'Test', age: 20 } }));
console.log(UnknownRespnose({ code: 201, text: 'Created', value: 'Object Created' }));
console.log(UnknownRespnose({ code: 404, text: 'Not found' }));
console.log(UnknownRespnose({ code: 500, text: 'Internal Server Error'}));