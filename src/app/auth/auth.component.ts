import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  isAuthenticated = false;
  private userSub: Subscription;
  email: string;
  password: string;
  signInFailed = false;

  ngOnInit() {
    this.userSub = this.authenticationService.userData.pipe(
      map(authState => {
        return authState;
      }),
    ).subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  signIn() {
    this.authenticationService.signIn(this.email, this.password).then(res => {
      if (res) {
        console.log('Hello from AuthComponent, Res is true');
        this.email = '';
        this.password = '';
        this.isAuthenticated = true;
        this.router.navigateByUrl('');
      } else {
        this.email = '';
        this.password = '';
        this.signInFailed = true;
      }
    });

  }

  signOut() {
    this.authenticationService.signOut();
    this.isAuthenticated = false;
  }

}
