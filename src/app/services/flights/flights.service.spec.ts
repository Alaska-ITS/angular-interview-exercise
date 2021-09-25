import { TestBed } from '@angular/core/testing';
import { Flight } from '../../models/flight';
import { FlightsService } from './flights.service';
import { FlightDetails } from '../../models/flight-details';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { tap } from 'rxjs/operators';

describe('FlightsService', () => {
  let service: FlightsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        FlightsService,
      // { provide: 'BASE_URL', useValue: 'https://apis.qa.alaskaair.com/aag/1/guestServices/flights/'}
    ]
    });
    service = TestBed.inject(FlightsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve data from the API via GET', () => {
    const BASE_API_URL = 'https://apis.qa.alaskaair.com/aag/1/guestServices/flights/';
    const flightDetails: FlightDetails = {
      sourceSystemName: 'VISOPS',
      sourceSystemLastModifiedDateTimeUtc: new Date('2021-07-25T15:45:51.7580000Z'),
      schemaVersion: '1.0',
      lastEventType: 'IN',
      operatingFlightNumber: '404',
      scheduledFlightOriginationDateUTC: '2021-07-25Z',
      scheduledFlightOriginationDateLocal: '2021-07-25',
      flightLegs: [
        {
          legNumber: 1,
          scheduledDateTimeUTC: {
            out: new Date('2021-07-25T13:00:00Z'),
            in: new Date('2021-07-25T15:50:00Z')
          },
          estimatedDateTimeUTC: {
            out: new Date('2021-07-25T13:00:00Z'),
            in: new Date('2021-07-25T15:28:00Z'),
            delayInformation: null
          },
          actualDepartureStation: {
            airportCode: 'SEA',
            zuluOffset: -7,
            gate: {
              podium: 'N13',
              parkingSpot: 'N13',
              carousel: null
            },
            countryCode2Letters: 'US',
            countryCode3Letters: 'USA'
          },
          actualArrivalStation: {
            airportCode: 'LAX',
            zuluOffset: -7,
            gate: {
              podium: '61',
              parkingSpot: '61',
              carousel: null
            },
            countryCode2Letters: 'US',
            countryCode3Letters: 'USA'
          },
          actualdatetimeutc: {
            out: new Date('2021-07-25T12:59:00Z'),
            in: new Date('2021-07-25T15:41:00Z'),
            on: new Date('2021-07-25T15:26:00Z'),
            off: new Date('2021-07-25T13:08:00Z')
          },
          irropsType: null,
          opsReason: null,
          scheduledArrivalStation: {
            airportCode: 'LAX'
          },
          scheduledDepartureStation: {
            airportCode: 'SEA'
          },
          codeShares: null,
          aircraft: {
            aircraftRegistration: 'N566AS',
            fleetType: '737-800E',
            fleetSeries: '737-800',
            iataAircraftCode: '73H',
            oagFleetCode: '73H',
            manufacturer: 'BOEING',
            reservationSystemEquipmentTypeCode: null
          },
          iataFlightServiceType: 'SCHEDULED',
          isETOPSFlight: false,
          flightRangeCode: null,
          operatingAirlineCode: 'AS',
          operatingAirlineName: 'Alaska Airlines',
          sourceInternalId: '8765586',
          scheduledDepartureDateStnLocal: '2021-07-25',
          onwardOperatingAirlineCode: null,
          onwardOperatingFlightNumber: null
        }
      ]
    };
    const flights: Flight[] = [{
      flightDetails,
      flightLookupKey: 'AS_404_SEA_2021-07-25',
      updateCount: 0
    }];
    service.getFlights("SEA", "LAX", "2021-07-25", "2021-07-25", false).pipe(
      tap(console.log)
    ).subscribe(result => {
      console.log(result)
      expect(result).toEqual(flights);
    });
    const request = httpMock.expectOne(`${BASE_API_URL}?fromDate=2021-07-25&toDate=2021-07-25&origin=SEA&destination=LAX&nonStopOnly=false`);
    expect(request.request.method).toBe('GET');
    request.flush({ flights });
  });

  it('should be able to ping', () => {
    const BASE_API_URL = 'https://apis.qa.alaskaair.com/aag/1/guestServices/flights/';
    const success = "Successful Ping, hello if you're wondering about the date and time it is 25 Sep 12:08 AM."
    service.getHealthPing().subscribe(result => {
      expect(result).toEqual(success)
    });
    const request = httpMock.expectOne( `${BASE_API_URL}ping`);
    expect(request.request.method).toBe('GET');
    request.flush(success);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
