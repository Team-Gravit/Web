import Banner from '../components/@common/banner/Banner';
import ChapterCard from '../components/study-page/ChapterCard';
import type { Chapter } from '../types/@common/chapter';

const chapters: Chapter[] = [
    {
        id: 1,
        name: '자료구조',
        description: '큐, 스택, 힙과 같은 자료구조에 대해 학습합니다.',
        totalUnits: 10,
        completedUnits: 7,
    },
    { id: 2, name: '알고리즘', description: '알고리즘에 대해 학습합니다.', totalUnits: 10, completedUnits: 6 },
    { id: 3, name: '네트워크', description: '네트워크에 대해 학습합니다.', totalUnits: 10, completedUnits: 5 },
    { id: 4, name: '운영체제', description: '운영체제에 대해 학습합니다.', totalUnits: 10, completedUnits: 3 },
    { id: 5, name: '데이터베이스', description: '데이터베이스에 대해 학습합니다.', totalUnits: 10, completedUnits: 1 },
    { id: 6, name: '보안', description: '보안에 대해 학습합니다.', totalUnits: 10, completedUnits: 7 },
    {
        id: 7,
        name: '컴퓨터 아키텍처',
        description: '컴퓨터 아키텍처에 대해 학습합니다.',
        totalUnits: 10,
        completedUnits: 2,
    },
    {
        id: 8,
        name: '소프트웨어\n엔지니어링',
        description: '소프트웨어 엔지니어링에 대해 학습합니다.',
        totalUnits: 10,
        completedUnits: 4,
    },
];

function StudyPage() {
    return (
        <div className="w-full h-full flex flex-col">
            <Banner />
            <div className="flex flex-col px-24 bg-[#f2f2f2]">
                <h2 className="font-semibold text-[32px] py-6">학습</h2>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">
                    {chapters.map((chapter) => (
                        <ChapterCard chapter={chapter} key={chapter.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StudyPage;
