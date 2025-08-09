import type { Tier } from './tier';

export interface User {
    id: number;
    profileImgNumber: number;
    nickname: string;
    tier?: Tier;
    level: number;
}
