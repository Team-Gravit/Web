import type { PlanetId } from '../constants/planet-image';

export interface Chapter {
    id: PlanetId;
    name: string;
    description: string;
    totalUnits: number;
    completedUnits: number;
}
