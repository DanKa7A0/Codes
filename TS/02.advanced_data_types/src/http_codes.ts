type codes1 = {
    code: 200 | 201 | 301;
    text: string;
}
type codes2 = {
    code: 400 | 404 | 500;
    text: string;
    printChars?: number
}

function HttpCode(input: codes1 | codes2): void {
    if ("printChars" in input) {
        console.log(input.text.substring(0, input.printChars));
        return;
    }

    console.log(input.text);
}

HttpCode({ code: 200, text: 'OK'});
HttpCode({ code: 201, text: 'Created'});
HttpCode({ code: 400, text: 'Bad Request', printChars: 4});
HttpCode({ code: 404, text: 'Not Found'} );
HttpCode({ code: 404, text: 'Not Found', printChars: 3});
HttpCode({ code: 500, text: 'Internal Server Error', printChars: 1});