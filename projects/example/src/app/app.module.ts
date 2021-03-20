import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiaTableModule } from 'projects/agencycoda/mia-table/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MiaTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
