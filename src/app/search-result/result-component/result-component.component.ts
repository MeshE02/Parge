import { ParkingplaceService } from './../../services/parkingplace.service';
import { Parkingplace } from '../../models/Parkingplace.model';
import { Component, Input, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.scss']
})
export class ResultComponentComponent implements OnInit {
  tiles: { text: string; cols: number; rows: number; color: string; }[];
  beschr: string;

  constructor(

  ) { }

  @Input() elements: Array<Parkingplace>;

  ngOnInit(): void {
    // tslint:disable-next-line: max-line-length
    this.beschr = "Ein Parkplatz mit 21kW Ladestation in der Nähe des Geiloparks in Mannheim!"
    this.elements = [
      {creationDateTime: '', city: 'Mannheim', zipCode: 1337, street: 'Baker Street', houseNumber: '3', pricePerHour: '1€/h', description: this.beschr, isPublic: true, isWallBox: true, pictureSrc: '../../../assets/images/example.jpg'},
      {creationDateTime: '', city: 'Heidenheim', zipCode: 666, street: 'Not Baker Street', houseNumber: '5', pricePerHour: '1€/h', description:'Parkplatz nahe der Bibliothek!', isPublic: false, isWallBox: true, pictureSrc: '../../../assets/images/example2.jpg'},
      {creationDateTime: '', city: 'Ludwigshafen', zipCode: 6969, street: 'Baker Road', houseNumber: '7', pricePerHour: '2€/h', description:'Beschreibung!!!', isPublic: true, isWallBox: false, pictureSrc: '../../../assets/images/example.jpg'},
      {creationDateTime: '', city: 'Mannheim', zipCode: 1111, street: 'Milky Way', houseNumber: '11', pricePerHour: '3€/h', description:'Beschreibung!!!', isPublic: false, isWallBox: false, pictureSrc: '../../../assets/images/example.jpg'},
      {creationDateTime: '', city: 'Mannheim', zipCode: 1999, street: 'Route 66', houseNumber: '13', pricePerHour: '5€/h', description:'Beschreibung!!!', isPublic: false, isWallBox: true, pictureSrc: '../../../assets/images/example.jpg'},
    ]
  }


}
