import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { AuthComponent } from './auth/auth.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'results', component: SearchResultComponent},
  {path: '**', redirectTo: '/auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
