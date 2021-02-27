import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';
import { User } from '../auth/user.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  isAuthenticated = false;

  constructor(
    private authenticationService: AuthenticationService,
    public router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.authenticationService.userData.pipe(
      map(authState => {
        return authState;
      }),
    ).subscribe(user => {
      this.userService.getUserAttributes().then(
        userobj => {
          if (userobj) {
            this.user = userobj;
            this.isAuthenticated = !!this.user;
            console.log(`Is Authenticated: ${this.isAuthenticated}`);
            console.log(this.user);
          } else {
            console.log('No User Object found!');
            this.isAuthenticated = false;
          }
        }
      );
    });
  }

  onMainMenu() {
    this.router.navigateByUrl('');
  }

  onSignIn() {
    this.router.navigateByUrl('auth');
  }
  onRegister() {
    this.router.navigateByUrl('register');
  }

  onSignOut() {
    this.isAuthenticated = false;
    this.authenticationService.signOut();
    this.router.navigateByUrl('auth');
  }

  onCreatePP() {
    this.router.navigateByUrl('registerPP');
  }
}
