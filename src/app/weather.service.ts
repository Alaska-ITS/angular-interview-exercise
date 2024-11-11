import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private stationsUrl = 'https://api.weather.gov/stations?limit=100';
  private observationsUrl = 'https://api.weather.gov/stations/';

  constructor(private http: HttpClient) { }

  getStations(): Observable<any> {
    return this.http.get<any>(this.stationsUrl);
  }

  getTemperature(stationId: string): Observable<any> {
    return this.http.get<any>(`${this.observationsUrl}${stationId}/observations?limit=1`);
  }
}
