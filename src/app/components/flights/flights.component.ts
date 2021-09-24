import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Flight } from '../../models/flight';
import { FlightsService } from '../../services/flights/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent {
  origin = "SEA";
  destination = "LAX";
  fromDate = "2021-07-25";
  toDate = "2021-07-25";
  nonStopOnly = false;
  flights$: Observable<Flight[]> = this.flightsService.getFlights(this.origin, this.destination, this.fromDate, this.toDate, this.nonStopOnly);
  constructor(private readonly flightsService: FlightsService) { }

  getFlightsHandler() {
    this.flights$ = this.flightsService.getFlights(this.origin, this.destination, this.fromDate, this.toDate, this.nonStopOnly);
  }
}
