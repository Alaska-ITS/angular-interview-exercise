import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './components/flights/flights.component';
import { FilterFormComponent } from './components/flights/filter-form/filter-form.component';
import { ListComponent } from './components/flights/list/list.component';
import { StatusComponent } from './components/status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    FilterFormComponent,
    ListComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
