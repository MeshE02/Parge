import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';

import { User } from './../auth/user.model';
import { first, map } from 'rxjs/operators';
import { convertSnap, convertSnaps } from './common';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private db: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    private afFun: AngularFireFunctions
  ) { }

  async getUserId() {
    let userId: string;
    await this.angularFireAuth.user.pipe(first()).toPromise().then(
      user => {
        if (user) {
          userId = user.uid;
        } else {
          userId = null;
        }
      }
    );
    return userId;
  }

  async getUserAttributes(): Promise<User> {
    let user: User;

    const userId = await this.getUserId();

    if (userId) {
      await this.db.collection('users').doc(userId)
        .snapshotChanges()
        .pipe(first()).toPromise().then(
          userobj => {
            if (userobj) {
              user = convertSnap<User>(userobj);
            }
          }
        );
    } else {
      user = null;
    }

    return user;
  }
}
