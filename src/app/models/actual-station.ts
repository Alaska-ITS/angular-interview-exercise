import { Gate } from "./gate";

export interface ActualStation {
    airportCode: string;
    zuluOffset: number;
    gate: Gate;
    countryCode2Letters: string;
    countryCode3Letters: string;
}