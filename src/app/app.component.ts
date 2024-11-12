import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from './weather.service';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  stations: any[] = [];
  selectedStation: any = null;
  temperature: string | null = null;
  paginatedStations: any[] = [];
  pageSize = 10;
  currentPage = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit(): void {
    this.loadStations();
  }

  loadStations(): void {
    this.weatherService.getStations().subscribe((data) => {
      this.stations = data.features;
      this.updatePaginatedStations();
    });
  }

  onSelectStation(station: any): void {
    this.selectedStation = station;
    this.weatherService.getTemperature(station.properties.stationIdentifier).subscribe((data) => {
      const temperature = data.features[0].properties?.temperature?.value;
      this.temperature = temperature ? `${temperature} °F` : 'Temperature not available';
    });
  }

  updatePaginatedStations(): void {
    const startIndex = this.currentPage * this.pageSize;
    this.paginatedStations = this.stations.slice(startIndex, startIndex + this.pageSize);
  }

  handlePageEvent(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePaginatedStations();
  }
}
