import { searchElement } from './../../models/searchElement.model';
import { Component, Input, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.scss']
})
export class ResultComponentComponent implements OnInit {
  tiles: { text: string; cols: number; rows: number; color: string; }[];

  constructor() { }

  @Input() elements: Array<searchElement>;

  ngOnInit(): void {
    this.tiles = [
      {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
      {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];

    this.elements = [
      {id: 1, location: "Mannheim", date: "2.3.2021", time: "10:00 - 20:00", price: "3€ pro Stunde", pictureSrc: "example.png"},
      {id: 2, location: "Heidenheim", date: "3.3.2021", time: "13:00 - 20:00", price: "2€ pro Stunde", pictureSrc: "example.png"},
      {id: 3, location: "Mannheim-Neckarau", date: "4.3.2021", time: "11:00 - 19:00", price: "4€ pro Stunde", pictureSrc: "example.png"},
      {id: 4, location: "Mannheim", date: "5.3.2021", time: "08:00 - 22:00", price: "5€ pro Stunde", pictureSrc: "example.png"},
      {id: 5, location: "Mannheim", date: "6.3.2021", time: "10:00 - 20:00", price: "6€ pro Stunde", pictureSrc: "example.png"},
    ]
  }
}
