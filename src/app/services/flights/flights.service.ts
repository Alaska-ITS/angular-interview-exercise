import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Flight } from '../../models/flight';
import { FlightListingAPIResponse } from '../../models/flight-listing-api-response';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private readonly BASE_API_URL = 'https://apis.qa.alaskaair.com/aag/1/guestServices/flights/';

  constructor(private http: HttpClient) { }

  public getHealthPing(): Observable<string> {
    const healthEndpoint = `${this.BASE_API_URL}ping`;

    const options = {
      headers: new HttpHeaders({
        'Ocp-Apim-Subscription-Key': environment.apiKey
      }),
    };

    return this.http.get<string>(healthEndpoint, options).pipe(
      map((result: string) => {
        return result;
      })
    );
  }

  getFlights(origin: string, destination: string, fromDate: string, toDate: string, nonStopOnly: boolean): Observable<Flight[]> {
    const flightsEndpoint = `${this.BASE_API_URL}?fromDate=${fromDate}&toDate=${toDate}&origin=${origin}&destination=${destination}&nonStopOnly=${nonStopOnly}`;
    const options = {
      headers: new HttpHeaders({
        'Ocp-Apim-Subscription-Key': environment.apiKey
      }),
    };

    return this.http.get<FlightListingAPIResponse>(flightsEndpoint, options).pipe(
      map((result: FlightListingAPIResponse) => result.flights)
    );
  }
}
