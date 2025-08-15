import type { League } from './league';

export interface User {
    id: number;
    profileImgNumber: number;
    nickname: string;
    league?: League;
    level: number;
}
