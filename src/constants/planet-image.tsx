import MercuryImg from '@/assets/images/planets/Mercury.png';
import VenusImg from '@/assets/images/planets/Venus.png';
import EarthImg from '@/assets/images/planets/Earth.png';
import MarsImg from '@/assets/images/planets/Mars.png';
import JupiterImg from '@/assets/images/planets/Jupiter.png';
import SaturnImg from '@/assets/images/planets/Saturn.png';
import UranusImg from '@/assets/images/planets/Uranus.png';
import NeptuneImg from '@/assets/images/planets/Neptune.png';
import MoonImg from '@/assets/images/planets/Moon.png';

export const PLANET_IMG_MAP = {
    1: MercuryImg,
    2: VenusImg,
    3: EarthImg,
    4: MarsImg,
    5: JupiterImg,
    6: SaturnImg,
    7: UranusImg,
    8: NeptuneImg,
    9: MoonImg,
} as const;

export type PlanetId = keyof typeof PLANET_IMG_MAP;

export function isPlanetId(id: number): id is PlanetId {
    return id >= 1 && id <= 9 && Number.isInteger(id);
}

export function getPlanetImage(chapterId: number): string {
    if (isPlanetId(chapterId)) {
        return PLANET_IMG_MAP[chapterId]; // 타입 에러 없음!
    }
    return PLANET_IMG_MAP[1]; // 기본값
}
