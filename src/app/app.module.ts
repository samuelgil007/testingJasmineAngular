import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RomanosComponent } from './romanos/romanos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
/* import {} from '@angular/material'; */


@NgModule({
  declarations: [
    AppComponent,
    RomanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
