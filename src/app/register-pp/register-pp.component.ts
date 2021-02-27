import { UserService } from './../services/user.service';
import { ParkingplaceService } from './../services/parkingplace.service';
import { Component, OnInit } from '@angular/core';
import { Parkingplace } from '../models/Parkingplace.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-pp',
  templateUrl: './register-pp.component.html',
  styleUrls: ['./register-pp.component.scss']
})
export class RegisterPPComponent implements OnInit {
  isWallbox = true;
  city: string;
  houseNumber: string;
  street: string;
  zipCode: number;
  pricePerHour: number;
  description: string;
  userId: string;

  constructor(
    private ppService: ParkingplaceService,
    private userService: UserService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.userService.getUserAttributes().then(
      userobj => {
        console.log(userobj);
        this.userId = userobj.documentId;
      }
    );
  }

  onRegisterPP() {
    const parkingplaceentry: Parkingplace = {
      city: this.city,
      zipCode: this.zipCode,
      street: this.street,
      houseNumber: this.houseNumber,
      creationDateTime: new Date(),
      pricePerHour: this.pricePerHour,
      description: this.description,
      ownerUserId: this.userId,
      isPublic: false,
      isWallBox: this.isWallbox
    };
    this.ppService.createParkingplace(parkingplaceentry).then((res) => {
      if (res) {
        console.log('done!');
        this.city = null;
        this.zipCode = null;
        this.street = null;
        this.houseNumber = null;
        this.pricePerHour = null;
        this.description = null;
        this.isWallbox = null;
        this.router.navigateByUrl('');
      }
    });
  }

}
