import { TravelerDto } from "./traveler.dto";

export interface PlanetDto {
    id: string;
    name: string;
    conferenceLink: string;
    travelers: TravelerDto[];
}