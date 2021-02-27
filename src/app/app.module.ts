import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import { SearchResultComponent } from './search-result/search-result.component';
import { ParameterComponentComponent } from './search-result/parameter-component/parameter-component.component';
import { ResultComponentComponent } from './search-result/result-component/result-component.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,

    SearchResultComponent,
    ParameterComponentComponent,
    ResultComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatGridListModule,
    AppRoutingModule

    AuthComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Shark'),
    AngularFirestoreModule.enablePersistence(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
