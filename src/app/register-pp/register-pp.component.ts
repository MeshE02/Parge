import { UserService } from './../services/user.service';
import { ParkingplaceService } from './../services/parkingplace.service';
import { Component, OnInit } from '@angular/core';
import { Parkingplace } from '../models/Parkingplace.model';
import { Router } from '@angular/router';
import { concatMap, last } from 'rxjs/operators';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

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
  imageUrl: string;

  constructor(
    private ppService: ParkingplaceService,
    private userService: UserService,
    public router: Router,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.userService.getUserAttributes().then(
      userobj => {
        console.log(userobj);
        this.userId = userobj.documentId;
      }
    );
  }

  uploadFile(event) {
    const file: File = event.target.files[0];
    const filePath = `parkingplacesImages/${file.name}`;
    this.ppService.uploadImage(file, filePath).snapshotChanges().pipe(
      last(),
      concatMap(() => this.storage.ref(filePath).getDownloadURL())
      ).subscribe(
      resp => {
        this.imageUrl = resp;
        console.log(resp);
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
      isWallBox: this.isWallbox,
      imageUrl: this.imageUrl
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
        this.imageUrl = null;
      }
    });
  }

}
