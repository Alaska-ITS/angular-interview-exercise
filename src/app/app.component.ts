import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  stations: any[] = [];
  selectedStation: any = null;
  temperature: string | null = null;

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit(): void {
    this.loadStations();
  }

  loadStations(): void {
    this.weatherService.getStations().subscribe((data) => {
      this.stations = data.features;
    });
  }

  onSelectStation(station: any): void {
    this.selectedStation = station;
    this.weatherService.getTemperature(station.properties.stationIdentifier).subscribe((data) => {
      const temperature = data.features[0].properties?.temperature?.value;
      this.temperature = temperature ? `${temperature} °F` : 'Temperature not available';
    });
  }
}
