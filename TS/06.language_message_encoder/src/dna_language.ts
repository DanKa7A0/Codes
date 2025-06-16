import { Language } from "./contracts/language";
export class DNACodeLanguage implements Language {
    private _charset: Set<'A' | 'C' | 'G' | 'T'> = new Set(['A', 'C', 'G', 'T']);

    get charset() {
        return this._charset;
    }

    isCompatibleToCharset(sample: string): boolean {
        let allChars = sample.split('');
        let isCompatible = allChars.every(x => x === 'A' || x === 'C' || x === 'G' || x === 'T');
        return isCompatible;
    }
}