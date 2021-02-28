import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { convertSnaps } from './common';
import { map } from 'rxjs/operators';
import { Parkingplace } from '../models/Parkingplace.model';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class ParkingplaceService {

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  getParkingplaces() {
    // return this.db.collection('parkingplaces').snapshotChanges().subscribe(resp => {
    //   console.log('oha_2');
    //   console.log(resp[0].payload.doc.data());
    // });
    return this.db.collection('parkingplaces').snapshotChanges().pipe(
      map(snaps => convertSnaps<Parkingplace>(snaps))
    );
  }

  createParkingplace(entry: Parkingplace) {
    return this.db.collection('parkingplaces').add(entry)
      .then(res => {
        console.log('parkingplaces successfully submitted');
        return true;
      }, err => {
        console.log('parkingplaces failed to submit');
        console.log(err);
        return false;
      });
  }

  uploadImage(file: File, filePath: string) {
    return this.storage.upload(filePath, file);
  }
}
