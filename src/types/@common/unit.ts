import type { Lesson } from './lesson';

export interface Unit {
    id: number;
    name: string;
    totalLesson: number;
    completedLesson: number;
    lessonList: Lesson[];
}
