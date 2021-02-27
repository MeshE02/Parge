import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { convertSnaps } from './common';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ParkingplaceService {

  constructor(
    private db: AngularFirestore
  ) { }

  loadParkingplaces(): Observable<Parkingplace[]> {
    return this.db.collection('tables', ref => ref)
      .snapshotChanges()
      .pipe(
        map(snaps => convertSnaps<Parkingplace>(snaps))
      );
  }
}
