import ChapterProgressBar from '../@common/chapter-progress/ChapterProgressBar';
import { getPlanetImage } from '../../constants/planet-image';
import backgroundImg from '@/assets/images/background.webp';
import ArrowLeftSvg from '@/assets/icons/button/arrow-left.svg?react';
import { Link } from 'react-router-dom';

type RecentLearningSectionProps = {
    chapterId: number;
    chapterName: string;
    totalUnits: number;
    completedUnits: number;
};

function RecentLearningSection({ chapterName, completedUnits, totalUnits, chapterId }: RecentLearningSectionProps) {
    const isNewUser = chapterId === 0;

    let content = (
        <>
            <div className="font-mbc font-semibold text-[18px] text-white z-10">
                <p className="mb-0.5">이어서 학습하기</p>
                <h3 className="text-[32px]">{chapterName}</h3>
            </div>
            <div className="w-1/2 mt-3 z-10">
                <ChapterProgressBar current={completedUnits} total={totalUnits} />
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-all ease-out duration-500 z-0"></div>

            <img
                src={getPlanetImage(chapterId)}
                className="absolute w-3/5 top-1/3 transform right-0 translate-x-3 group-hover:-rotate-20 group-hover:scale-110 transition-all ease-out duration-500"
                alt={`${chapterName} 행성`}
            />
        </>
    );

    if (isNewUser) {
        content = (
            <Link to="/study">
                <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-all ease-out duration-500 z-0"></div>
                <div className="flex w-full justify-between">
                    <h3 className="text-[32px] font-normal text-white font-mbc inline-block z-10">
                        새로운 학습을 시작하기
                    </h3>
                    <ArrowLeftSvg className="z-10 relative" />
                </div>
                <p className="mb-2 text-white font-medium text-2xl z-10 relative">
                    최근에 진행한 학습 정보가 없습니다.
                </p>
            </Link>
        );
    }

    return (
        <section className=" w-full lg:w-1/2  flex flex-col gap-8 ">
            <h2 className="font-semibold text-[32px] shrink-0">최근 진행한 학습</h2>
            <article
                className="cursor-pointer relative flex flex-col flex-1 w-full rounded-2xl bg-cover bg-center justify-start p-10 overflow-hidden drop-shadow-xl group min-h-[250px]"
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                {content}
            </article>
        </section>
    );
}

export default RecentLearningSection;
