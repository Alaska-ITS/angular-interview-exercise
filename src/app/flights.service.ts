import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private healthEndpoint: string = 'https://apis.qa.alaskaair.com/aag/1/guestServices/flights/ping';
  private flightsEndpoint: string = 'https://apis.qa.alaskaair.com/aag/1/guestServices/flights/?fromDate=2021-07-25&toDate=2021-07-25&origin=SEA&destination=LAX&nonStopOnly=false';

  constructor(private http: HttpClient) { }

  public getHealthPing(): Observable<string> {
    const options = {
      headers: new HttpHeaders({
        'Ocp-Apim-Subscription-Key': environment.apiKey
      }),
    };

    return this.http.get<string>(this.healthEndpoint, options).pipe(
      map((result: string) => {
        return result;
      })
    );
  }
}
