import type { PlanetId } from '../constants/planet-image';
import type { Chapter } from '../types/@common/chapter';
import type { ChapterResponse } from '../types/api/chapter';

export const transformChapter = (response: ChapterResponse): Chapter => ({
    id: response.chapterId as PlanetId,
    name: response.name,
    description: response.description,
    totalUnits: response.totalUnits,
    completedUnits: response.completedUnits,
});

export const transformChapters = (responses: ChapterResponse[]): Chapter[] => responses.map(transformChapter);
