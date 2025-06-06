function conditionalNumber<T>(input: T extends number ? T : string){
    if (typeof input === "number") {
        console.log(input.toFixed(2));
        return;    
    } 
    
    console.log(input);
    return;
}




conditionalNumber<number>(20.3555);
conditionalNumber<string>('wow');
conditionalNumber<boolean>('a string');

// conditionalNumber<boolean>(30); // TS error
// conditionalNumber<number>('test'); // TS error
