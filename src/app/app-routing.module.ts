import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './components/flights/flights.component';
import { StatusComponent } from './components/status/status.component';

const routes: Routes = [
  {
    path: 'flights',
    component: FlightsComponent
  },
  {
    path: 'status',
    component: StatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
