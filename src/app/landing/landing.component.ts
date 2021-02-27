import { ParkingplaceService } from './../services/parkingplace.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable, throwError } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { first, map } from 'rxjs/operators';
import { convertSnaps } from '../services/common';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Parkingplace } from '../models/Parkingplace.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserAttributes().then(
      userobj => {
        console.log(userobj);
      }
    );
  }

}
