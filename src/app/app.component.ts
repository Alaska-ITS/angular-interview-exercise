import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightsService } from './services/flights/flights.service';
import { Flight } from './models/flight';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  healthPing: Observable<string>;
  flights$: Observable<Flight[]> = this.flightService.getFlights("SEA", "LAX", "2021-07-25", "2021-07-25", false);

  constructor(private flightService: FlightsService) {

  }

  ngOnInit(): void {
    this.healthPing = this.flightService.getHealthPing();
  }

}
