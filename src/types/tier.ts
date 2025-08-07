export type Tier = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';

export const TIER_LABELS = {
    bronze: '브론즈',
    silver: '실버',
    gold: '골드',
    platinum: '플래티넘',
    diamond: '다이아몬드',
} as const satisfies Record<Tier, string>;

export const KOREAN_TO_TIER = {
    브론즈: 'bronze',
    실버: 'silver',
    골드: 'gold',
    플래티넘: 'platinum',
    다이아몬드: 'diamond',
} as const satisfies Record<string, Tier>;
