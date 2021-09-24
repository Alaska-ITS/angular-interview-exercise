import { ScheduledDateTimeUTC } from "./scheduled-date-time-utc";

export interface ActualDateTimeUTC extends ScheduledDateTimeUTC {
    on: Date;
    off: Date;
}