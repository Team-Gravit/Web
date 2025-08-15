export type League = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';

export const LEAGUE_LABELS = {
    bronze: '브론즈',
    silver: '실버',
    gold: '골드',
    platinum: '플래티넘',
    diamond: '다이아몬드',
} as const satisfies Record<League, string>;

export const KOREAN_TO_LEAGUE = {
    브론즈: 'bronze',
    실버: 'silver',
    골드: 'gold',
    플래티넘: 'platinum',
    다이아몬드: 'diamond',
} as const satisfies Record<string, League>;
