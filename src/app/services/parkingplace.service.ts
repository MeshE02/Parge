import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { convertSnaps } from './common';
import { map } from 'rxjs/operators';
import { Parkingplace } from '../models/Parkingplace.model';


@Injectable({
  providedIn: 'root'
})
export class ParkingplaceService {

  constructor(
    private db: AngularFirestore
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
}
