import { PlanetDto } from "./planet.dto";

export interface GalaxyDto {
    id: string;
    name: string;
    order: number;
    planets: PlanetDto[];
}