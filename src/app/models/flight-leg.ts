import { ActualDateTimeUTC } from "./actual-date-time-utc";
import { ActualStation } from "./actual-station";
import { Aircraft } from "./aircraft";
import { CodeShare } from "./code-share";
import { EstimatedDateTimeUTC } from "./estimated-date-time-utc";
import { ScheduledDateTimeUTC } from "./scheduled-date-time-utc";
import { ScheduledStation } from "./scheduled-station";

export interface FlightLeg {
    legNumber: number;
    scheduledDateTimeUTC: ScheduledDateTimeUTC;
    estimatedDateTimeUTC: EstimatedDateTimeUTC;
    actualDepartureStation: ActualStation;
    actualArrivalStation: ActualStation;
    actualdatetimeutc: ActualDateTimeUTC;
    irropsType?: any;
    opsReason?: any;
    scheduledArrivalStation: ScheduledStation;
    scheduledDepartureStation: ScheduledStation;
    codeShares: CodeShare[];
    aircraft: Aircraft;
    iataFlightServiceType: string;
    isETOPSFlight: boolean;
    flightRangeCode?: any;
    operatingAirlineCode: string;
    operatingAirlineName: string;
    sourceInternalId: string;
    scheduledDepartureDateStnLocal: string;
    onwardOperatingAirlineCode?: any;
    onwardOperatingFlightNumber?: any;
}