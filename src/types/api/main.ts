import type { League } from '../@common/league';

export interface RecentLearningSummaryResponse {
    chapterId: number;
    chapterName: string;
    totalUnits: number;
    completedUnits: number;
}

export default interface MainPageResponse {
    nickname: string;
    level: number;
    xp: number;
    league: League | null; // 서버 따라서 수정 가능성 있음
    recentLearningSummaryResponse: RecentLearningSummaryResponse;
}
