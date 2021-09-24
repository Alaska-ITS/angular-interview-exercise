import { SubDelayInformationList } from "./sub-delay-information-list";

export interface DelayInformation {
    code: string;
    order: string;
    minutes: string;
    description: string;
    reason: string;
    subDelayInformationList: SubDelayInformationList[];
}