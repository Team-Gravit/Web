export type LessonProgressResponse = {
    lessonId: number;
    name: string;
    isCompleted: boolean;
};

export interface UnitsResponse {
    unitProgressDetailResponse: {
        unitId: number;
        name: string;
        totalLesson: number;
        completedLesson: number;
    };
    lessonProgressSummaryResponses: LessonProgressResponse[];
}
