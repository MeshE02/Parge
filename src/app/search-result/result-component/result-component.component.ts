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

  constructor(

  ) { }

  @Input() elements: Array<Parkingplace>;

  ngOnInit(): void {
  }
}
