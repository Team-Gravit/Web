import type { Chapter } from '../../../types/chapter';
import StudyBg from '@/assets/images/study-bg.jpg';
import InfoCircle from '@/assets/icons/info-circle.svg?react';
import ChapterProgressBar from '../../@common/chapter-progress/ChapterProgressBar';
import { PLANET_IMG_MAP } from '../../../constants/planet-image';

function ChapterCard({ chapter }: { chapter: Chapter }) {
    return (
        <article
            key={chapter.id}
            className="cursor-pointer relative flex flex-col justify-between lg:justify-start w-full h-64 lg:max-w-[300px] lg:h-72 bg-cover bg-center rounded-sm overflow-hidden p-4"
            style={{ backgroundImage: `url(${StudyBg})` }}
        >
            <div className="flex flex-row lg:mb-3 z-10">
                <span className="text-3xl xl:text-4xl font-extrabold text-white">
                    <span className="lg:hidden">{chapter.name.replace(/\n/g, ' ')}</span>
                    <span className="hidden lg:inline whitespace-pre-line">{chapter.name}</span>
                </span>

                <InfoCircle className="relative ml-auto mt-0.5 w-7 h-7 lg:mb-0 mb-32" />
            </div>
            <ChapterProgressBar total={chapter.completedUnits} current={chapter.totalUnits} />
            <img
                src={PLANET_IMG_MAP[chapter.id]}
                className="absolute w-[60%] h-auto lg:w-45 top-1/3 transform right-0 translate-x-3 lg:top-1/2 lg:translate-x-7"
            />
        </article>
    );
}

export default ChapterCard;
