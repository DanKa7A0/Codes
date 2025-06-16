import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";
import { MessageEncoder } from "./contracts/messageEncoder";

export class LanguageMessageEncoder<T, U> extends PartialMessageEncoder implements MessageEncoder {
    constructor(lang:T, sipher: U) {
        super(lang, sipher);
    };
  
    public override encodeMessage(secretMessage: unknown): string {
        if (typeof secretMessage !== "string" || secretMessage.length === 0) {
            return "No message.";
        }
        
        secretMessage = this.stripForbiddenSymbols(secretMessage);
        if (typeof secretMessage !== "string"){
            return "No message.";
        }
        

        if (!this.language.isCompatibleToCharset(secretMessage)){
            return "Message not compatible.";
        }

        LanguageMessageEncoder.encodedSymbols += secretMessage.length;
        return this.cipher.encipher(secretMessage);
    }

    public override decodeMessage(secretMessage: unknown): string {
        if (typeof secretMessage !== "string" || secretMessage.length === 0) {
            return "No message.";
        }

        if (!this.language.isCompatibleToCharset(secretMessage)){
            return "Message not compatible.";
        }

        LanguageMessageEncoder.decodedSymbols += secretMessage.length;
        return this.cipher.decipher(secretMessage);
    }

    public override totalProcessedCharacters(type: 'Encoded' | 'Decoded' | 'Both'): string {
        const printInfo = {
            "Encoded" : LanguageMessageEncoder.decodedSymbols,
            "Decoded" : LanguageMessageEncoder.encodedSymbols,
            "Both" : LanguageMessageEncoder.decodedSymbols + LanguageMessageEncoder.encodedSymbols
        };

        return `Total processed characters count: ${printInfo[type]}`;
    }
     
    protected override stripForbiddenSymbols(message: string): string {
        let forbiddenSymbols = PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach(x => message = message.replaceAll(x, ''));
        return message;
    }

    private static encodedSymbols: number = 0;
    private static decodedSymbols: number = 0;
}
