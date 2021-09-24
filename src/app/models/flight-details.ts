import { FlightLeg } from "./flight-leg";

export interface FlightDetails {
    sourceSystemName: string;
    sourceSystemLastModifiedDateTimeUtc: Date;
    schemaVersion: string;
    lastEventType: string;
    operatingFlightNumber: string;
    scheduledFlightOriginationDateUTC: string;
    scheduledFlightOriginationDateLocal: string;
    flightLegs: FlightLeg[];
}