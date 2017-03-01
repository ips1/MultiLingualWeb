import { Card } from "./card" 

export class Deck {
    readonly name: string
    readonly cards: Array<Card>
    constructor(name: string, cards: Array<Card>) {
        this.name = name
        this.cards = cards
    }
}