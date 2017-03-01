import { Component } from '@angular/core';
import { Deck } from "./model/deck"
import { DecksProviderService } from './services/DecksProvider.Service';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
    <h2>My Decks</h2>
    <ul class="deck_list">
      <li *ngFor="let deck of decks"
        [class.selected]="deck === selectedDeck"
        (click)="onSelect(deck)">
        {{deck.name}}
      </li>
    </ul>
    <div *ngIf="selectedDeck != null">
      <h2>{{selectedDeck.name}} details!</h2>
      <div><label>card count: </label>{{selectedDeck.cards.length}}</div>
    </div>`,
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .deck_list {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .deck_list li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .deck_list li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .deck_list li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .deck_list .text {
    position: relative;
    top: -3px;
  }
  .deck_list .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  providers: [DecksProviderService]
})

export class AppComponent  { 
  constructor(private decksProvider : DecksProviderService) {
  }

  title = 'MultiLingual';
  name = 'Angular'; 
  decks = this.decksProvider.getAllDecks();
  selectedDeck : Deck = null;

  onSelect(deck: Deck): void {
    this.selectedDeck = deck;
  }
}
