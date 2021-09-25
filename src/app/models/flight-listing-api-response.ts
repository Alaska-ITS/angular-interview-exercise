import { ActionResult } from "./action-result";
import { Flight } from "./flight";

export interface FlightListingAPIResponse {
    flights: Flight[];
    actionResult: ActionResult;
}

export interface FlightsListingAPIErrorResponse {
    error: string;
}