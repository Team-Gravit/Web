import Banner from '../components/@common/banner/Banner';
import StudyBg from '@/assets/images/study-bg.jpg';
import SubjectProgress from '../components/@common/subject-progress/SubjectProgress';
import InfoCircle from '@/assets/icons/info-circle.svg?react';
import type { Chapter } from '../types/chapter';
import { PLANET_IMG_MAP } from '../constants/planet-image';

const chapters: Chapter[] = [
    {
        id: 1,
        name: '자료구조',
        description: '큐, 스택, 힙과 같은 자료구조에 대해 학습합니다.',
        totalUnits: 7,
        completedUnits: 10,
    },
    { id: 2, name: '알고리즘', description: '알고리즘에 대해 학습합니다.', totalUnits: 6, completedUnits: 10 },
    { id: 3, name: '네트워크', description: '네트워크에 대해 학습합니다.', totalUnits: 5, completedUnits: 10 },
    { id: 4, name: '운영체제', description: '운영체제에 대해 학습합니다.', totalUnits: 3, completedUnits: 10 },
    { id: 5, name: '데이터베이스', description: '데이터베이스에 대해 학습합니다.', totalUnits: 1, completedUnits: 10 },
    { id: 6, name: '보안', description: '보안에 대해 학습합니다.', totalUnits: 7, completedUnits: 10 },
    {
        id: 7,
        name: '컴퓨터 아키텍처',
        description: '컴퓨터 아키텍처에 대해 학습합니다.',
        totalUnits: 2,
        completedUnits: 10,
    },
    {
        id: 8,
        name: '소프트웨어\n엔지니어링',
        description: '소프트웨어 엔지니어링에 대해 학습합니다.',
        totalUnits: 4,
        completedUnits: 10,
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
                        <div
                            key={chapter.id}
                            className="relative flex flex-col justify-between w-full h-64 lg:max-w-[300px] lg:h-72 bg-cover bg-center rounded-sm overflow-hidden p-4"
                            style={{ backgroundImage: `url(${StudyBg})` }}
                        >
                            <div className="flex flex-col relative z-10">
                                <div className="flex flex-row">
                                    <span className="text-3xl xl:text-4xl font-extrabold text-white">
                                        {chapter.name === '소프트웨어 엔지니어링' ? (
                                            <>
                                                <span className="hidden lg:inline">
                                                    소프트웨어
                                                    <br />
                                                    엔지니어링
                                                </span>
                                                <span className="inline lg:hidden">소프트웨어 엔지니어링</span>
                                            </>
                                        ) : (
                                            chapter.name
                                        )}
                                    </span>
                                    <InfoCircle className="ml-auto mt-0.5 w-7 h-7 lg:mb-0 mb-32" />
                                </div>
                                <SubjectProgress current={chapter.completedUnits} total={chapter.totalUnits} />
                            </div>

                            <img
                                src={PLANET_IMG_MAP[chapter.id]}
                                alt={chapter.name}
                                className={`absolute lg:right-[-30px] z-0 
                  ${
                      chapter.name === '데이터베이스'
                          ? 'w-[580px] h-[580px] lg:w-52 lg:h-52 lg:right-[-30px] lg:top-[128px] right-[-84px] top-[-22px]'
                          : chapter.name === '컴퓨터 아키텍처'
                          ? 'w-[450px] h-[450px] lg:w-56 lg:h-56 lg:top-[118px] right-[-52px] top-[-30px]'
                          : 'w-[550px] h-[550px] lg:w-48 lg:h-48 right-[-80px] lg:right-[-30px] lg:bottom-[-48px]'
                  }
                `}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StudyPage;
