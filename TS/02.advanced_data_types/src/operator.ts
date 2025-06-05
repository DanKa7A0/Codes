function Operator(param: string | number | string[], operation: 'Index' | 'Length' | 'Add', operand: number){
    if (typeof param === "string" || Array.isArray(param)) {
        if (operation === "Index") return param[operand];
        if (operation === "Length") return param.length % 10;
    }
  
    if (operation === "Add" && typeof param === "string" || typeof param === "number" ) {
        return Number(param) + operand;
    }

}

console.log(Operator(['First', 'Second', 'Third'], 'Index', 1));
console.log(Operator('string', 'Index', 1));
console.log(Operator(['Just', 'Two'], 'Length', 5 ));
console.log(Operator('short string1', 'Length', 5));
console.log(Operator('7', 'Add', 3));
console.log(Operator(11, 'Add', 3));