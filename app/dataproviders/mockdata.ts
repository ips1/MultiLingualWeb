import { Deck } from "../model/deck"
import { Card } from "../model/card"
import { Language } from "../model/Language"
import { Languages } from "../model/Languages"

function createSimpleCard(original: string, lang: Language, translation: string) : Card {
    let map = new Map<Language, string>()
    map.set(lang, translation)
    return {
        originalText : original,
        translations : map
    }
}

export const MOCK_DATA : Array<Deck> = [
        {
            name : "SpanishDeck",
            cards : [
                createSimpleCard("house", Languages.spanish(), "la casa"),
                createSimpleCard("man", Languages.spanish(), "el hombre"),
                createSimpleCard("dog", Languages.spanish(), "el perro")
            ]
        },
        {
            name : "SecondDeck",
            cards : [
                createSimpleCard("house", Languages.spanish(), "la casa"),
                createSimpleCard("man", Languages.spanish(), "el hombre"),
                createSimpleCard("dog", Languages.spanish(), "el perro")
            ]
        }
        ]
