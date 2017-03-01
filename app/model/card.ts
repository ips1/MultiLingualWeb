import { Language } from "./language"

export class Card {
    readonly originalText: string
    readonly translations: Map<Language, string>

    constructor (originalText: string, translations: Map<Language, string>) {
        this.originalText = originalText
        this.translations = translations
    }
}