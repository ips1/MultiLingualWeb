import { Injectable } from '@angular/core'
import { Deck } from "../model/deck"
import { Card } from "../model/card"
import { Language } from "../model/Language"
import { Languages } from "../model/Languages"
import { MOCK_DATA } from "../dataproviders/mockdata"

@Injectable()
export class DecksProviderService {
    private readonly data : Array<Deck> = MOCK_DATA;

    constructor() { }

    getAllDecks(): Array<Deck> {
        return this.data;
    }


}