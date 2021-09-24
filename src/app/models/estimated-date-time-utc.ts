import { DelayInformation } from "./delay-information";
import { ScheduledDateTimeUTC } from "./scheduled-date-time-utc";

export interface EstimatedDateTimeUTC extends ScheduledDateTimeUTC {
    delayInformation: DelayInformation[];
}