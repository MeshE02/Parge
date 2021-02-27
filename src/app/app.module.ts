import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';

import { SearchResultComponent } from './search-result/search-result.component';
import { ParameterComponentComponent } from './search-result/parameter-component/parameter-component.component';
import { ResultComponentComponent } from './search-result/result-component/result-component.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AuthComponent,
    FooterComponent,
    HeaderComponent,
    SearchResultComponent,
    ParameterComponentComponent,
    ResultComponentComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatGridListModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Shark'),
    AngularFirestoreModule.enablePersistence(),
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
