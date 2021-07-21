import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { FlightsService } from './flights.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  healthPing: Observable<string>;

  constructor(private flightService: FlightsService) {

  }

  ngOnInit(): void {
    this.healthPing = this.flightService.getHealthPing();
  }

}
