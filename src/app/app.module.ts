import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './components/flights/flights.component';
import { FilterFormComponent } from './components/flights/filter-form/filter-form.component';
import { ListComponent } from './components/flights/list/list.component';
import { ListItemComponent } from './components/flights/list/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    FilterFormComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
