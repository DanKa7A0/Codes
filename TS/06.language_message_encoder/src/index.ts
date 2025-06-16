import { Cipher } from "./contracts/cipher";
import { CaesarCipher } from "./contracts/implemented/caesarCipher";
import { Language } from "./contracts/language";
import { LanguageMessageEncoder } from "./languageMessageEncoder";
import { LowercaseCharactersOnlyLanguage } from "./contracts/implemented/lowercaseCharactersOnlyLanguage";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { DNACodeLanguage } from "./dna_language";

// Example 1

// let lowercaseCharsLanguage = new LowercaseCharactersOnlyLanguage();
// let caesarCipher = new CaesarCipher(lowercaseCharsLanguage);
// let encoder = new LanguageMessageEncoder<LowercaseCharactersOnlyLanguage, CaesarCipher<LowercaseCharactersOnlyLanguage>>(lowercaseCharsLanguage, caesarCipher);
// let ex1_encodedMessage = encoder.encodeMessage('the carthaginians are coming');
// console.log(ex1_encodedMessage);
// let ex1_decodedMessage = encoder.decodeMessage(ex1_encodedMessage);
// console.log(ex1_decodedMessage);
// console.log(encoder.totalProcessedCharacters('Both'));
// let ex1_encodedMessage2 = encoder.encodeMessage('!abc_');
// console.log(ex1_encodedMessage2);
// let ex1_decodedMessage2 = encoder.decodeMessage(ex1_encodedMessage2);
// console.log(ex1_decodedMessage2);
// console.log(encoder.totalProcessedCharacters('Encoded'));


console.log("------------------------------------------------------------------------");

// Example 2

// let ex2_lowercaseCharsLanguage = new LowercaseCharactersOnlyLanguage();
// let ex2_caesarCipher = new CaesarCipher(ex2_lowercaseCharsLanguage);
// let ex2_encoder = new LanguageMessageEncoder<LowercaseCharactersOnlyLanguage, CaesarCipher<LowercaseCharactersOnlyLanguage>>(ex2_lowercaseCharsLanguage, ex2_caesarCipher);

// let ex2_encodedMessage = ex2_encoder.encodeMessage(undefined);
// console.log(ex2_encodedMessage);
// let ex2_decodedMessage = ex2_encoder.decodeMessage(true);
// console.log(ex2_decodedMessage);
// let ex2_encodedMessage2 = ex2_encoder.encodeMessage(undefined);
// console.log(ex2_encodedMessage2);
// let ex2_decodedMessage2 = ex2_encoder.decodeMessage(true);
// console.log(ex2_decodedMessage2);
// let ex2_encodedMessage3 = ex2_encoder.encodeMessage('1abc');
// console.log(ex2_encodedMessage3);
// let ex2_decodedMessage3 = ex2_encoder.decodeMessage('test"12"');
// console.log(ex2_decodedMessage3);


// Example 3
// let ex3_lowercaseCharsLanguage = new LowercaseCharactersOnlyLanguage();
// let ex3_caesarCipher = new CaesarCipher(ex3_lowercaseCharsLanguage);
// ex3_lowercaseCharsLanguage.charset.add('A');
// let ex3_encoder = new LanguageMessageEncoder<LowercaseCharactersOnlyLanguage, CaesarCipher<Language>>(ex3_lowercaseCharsLanguage, ex3_caesarCipher);
// ex3_encoder.totalProcessedCharacters('age');


console.log("------------------------------------------------------------------------");

// Example 4

// let ex4_dnaCharsLanguage = new DNACodeLanguage();
// let ex4_caesarCipher = new CaesarCipher(ex4_dnaCharsLanguage);
// let ex4_encoder = new LanguageMessageEncoder<DNACodeLanguage, CaesarCipher<DNACodeLanguage>>(ex4_dnaCharsLanguage, ex4_caesarCipher);

// let ex4_encodedMessage = ex4_encoder.encodeMessage('ACGT');
// console.log(ex4_encodedMessage);
// let ex4_decodedMessage = ex4_encoder.decodeMessage(ex4_encodedMessage);
// console.log(ex4_decodedMessage);
// let ex4_encodedMessage2 = ex4_encoder.encodeMessage('GAGCCCTCA');
// console.log(ex4_encodedMessage2);
// let ex4_decodedMessage2 = ex4_encoder.decodeMessage(ex4_encodedMessage2);
// console.log(ex4_decodedMessage2);
// let ex4_decodedMessage3 = ex4_encoder.decodeMessage('AGGCAT');
// console.log(ex4_decodedMessage3);
// let ex4_decodedMessage4 = ex4_encoder.decodeMessage('DACG');
// console.log(ex4_decodedMessage4);
// console.log(ex4_encoder.totalProcessedCharacters('Both'));



// Example 5

// let dnaCharsLanguage = new DNACodeLanguage();
// dnaCharsLanguage.charset.add('B');



// Example 6

let lowercaseCharsLanguage = new LowercaseCharactersOnlyLanguage();
let caesarCipher = new CaesarCipher(lowercaseCharsLanguage);
let encoder = new LanguageMessageEncoder<LowercaseCharactersOnlyLanguage, CaesarCipher<LowercaseCharactersOnlyLanguage>>(lowercaseCharsLanguage, caesarCipher);

let encodedMessage = encoder.encodeMessage('there is no "spoon"');
console.log(encodedMessage);
let decodedMessage = encoder.decodeMessage(encodedMessage);
console.log(decodedMessage);
let encodedMessage2 = encoder.encodeMessage("in cryptography, a 'cipher' is an algorithm for performing encryption or decryption - a series of well-defined steps that can be followed as a procedure.");
console.log(encodedMessage2);
let decodedMessage2 = encoder.decodeMessage(encodedMessage2);
console.log(decodedMessage2);
console.log(encoder.totalProcessedCharacters('Both'));

let encodedMessage3 = encoder.encodeMessage('_test;b1c2');
console.log(encodedMessage3);
let encodedMessage4 = encoder.encodeMessage('_test;b-c');
console.log(encodedMessage4);
let decodedMessage3 = encoder.decodeMessage('"hello" he said');
console.log(decodedMessage3);
console.log(encoder.totalProcessedCharacters('Decoded'));
console.log(PartialMessageEncoder.forbiddenSymbols);