import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: Observable<firebase.User>;

  constructor(
    private angularFireAuth: AngularFireAuth,
  ) {
    this.userData = this.angularFireAuth.authState;
  }

  // Sign In
  signIn(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('You are Successfully logged in!');
        // this.router.navigateByUrl('order');
        return true;
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
        // this.router.navigateByUrl('auth');
        return false;

      });
  }

    // Sign Up
    signUp(email: string, password: string) {
      return this.angularFireAuth.createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log('User successfully created!');
          console.log(res);
          return res.user.uid;
        })
        .catch(err => {
          console.log('Something is wrong:', err.message);
          return null;
        });
    }

  changePasswort(newPassword: string) {
    this.angularFireAuth.user.pipe(first()).toPromise().then(
      user => {
        user.updatePassword(newPassword);
      }
    );
  }

  // Sign Out
  signOut() {
    this.angularFireAuth.signOut();
    // console.log('You are Successfully logged out!');
  }
}
