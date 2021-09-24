import { FlightDetails } from "./flight-details";

export interface Flight {
    flightDetails: FlightDetails;
    flightLookupKey: string;
    updateCount: number;
}