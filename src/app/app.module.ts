import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ParameterComponentComponent } from './search-result/parameter-component/parameter-component.component';
import { ResultComponentComponent } from './search-result/result-component/result-component.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
