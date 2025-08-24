import type { Lesson } from '../@common/lesson';
import type { Unit } from '../@common/unit';
import type { LessonProgressResponse, UnitsResponse } from '../api/unit';

export const transformLesson = (response: LessonProgressResponse): Lesson => ({
    id: response.lessonId,
    name: response.name,
    isCompleted: response.isCompleted,
});

export const transformUnit = (response: UnitsResponse): Unit => {
    const { unitProgressDetailResponse, lessonProgressSummaryResponses } = response;

    return {
        id: unitProgressDetailResponse.unitId,
        name: unitProgressDetailResponse.name,
        totalLesson: unitProgressDetailResponse.totalLesson,
        completedLesson: unitProgressDetailResponse.completedLesson,
        lessonList: lessonProgressSummaryResponses.map(transformLesson),
    };
};
const transformUnits = (responses: UnitsResponse[]): Unit[] => responses.map(transformUnit);

export default transformUnits;
