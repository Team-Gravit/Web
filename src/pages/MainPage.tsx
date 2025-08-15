import Banner from '../components/@common/banner/Banner';

import { Link } from 'react-router-dom';
import Rocket from '@/assets/icons/rocket.svg?react';
import Fire from '@/assets/icons/fire.svg?react';
import StudyBg from '@/assets/images/study-bg.jpg';
import { PLANET_IMG_MAP } from '../constants/planet-image';
import ChapterProgressBar from '../components/@common/chapter-progress/ChapterProgressBar';
import UserStats from '../components/@common/level-info/UserStats';
import type { User } from '../types/@common/user';
import type { Chapter } from '../types/@common/chapter';
import useLeagueLabel from '../hooks/useLeagueLabel';

function MainPage() {
    const user: User = { id: 0, profileImgNumber: 1, nickname: '방귀요정 뿡뿡이', league: 'diamond', level: 12 };

    const recentLearningChapter: Chapter = {
        id: 1,
        name: '알고리즘',
        totalUnits: 10,
        completedUnits: 5,
        description: '',
    };

    return (
        <div className="h-full w-full flex flex-col">
            <Banner />
            <div className="flex-grow p-20 bg-[#f2f2f2] flex flex-col lg:flex-row gap-6">
                <section className=" w-full lg:w-1/2 flex flex-col gap-8">
                    <h2 className="font-semibold text-[32px]">
                        현재 {user.nickname}님의 티어는{' '}
                        <strong className="text-[#ff9500]">{useLeagueLabel(user)}</strong>
                        입니다!
                    </h2>
                    <UserStats league="브론즈" value={789} level={12} />

                    <div className="flex flex-row gap-4">
                        <article className=" h-full w-2/3 min-h-[334px] flex flex-col justify-between p-4 bg-white rounded-2xl">
                            <div className="flex flex-col gap-3">
                                <h3 className="font-semibold text-[32px] leading-none">오늘의 미션🔥</h3>
                                <hr className="text-gray-500 border-dashed border-2" />
                                <ul className="flex list-disc pl-5 leading-none">
                                    <li className="text-2xl font-medium">
                                        {recentLearningChapter.name} 챕터{recentLearningChapter.completedUnits} 완료
                                        <small className="block text-base text-gray-800 font-normal mt-1">
                                            완료 시 150XP
                                        </small>
                                    </li>
                                </ul>
                            </div>
                            <Link
                                to="study"
                                className="w-full bg-gray-200 rounded-xl px-2.5 py-5 font-semibold text-2xl text-center"
                            >
                                학습하러 가기
                            </Link>
                        </article>
                        <aside className="flex flex-col w-1/3 min-h-[334px] gap-8">
                            <dl className="flex flex-col gap-4 flex-grow">
                                <div className="w-full flex-1 bg-white rounded-2xl p-4 flex flex-row justify-center items-center">
                                    <Rocket />

                                    <p className=" flex flex-col justify-start items-start">
                                        <dt className="font-normal text-base">행성 정복률</dt>
                                        <dd className="font-semibold text-2xl">15%</dd>
                                    </p>
                                </div>

                                <div className="w-full flex-1 bg-white rounded-2xl p-4 flex flex-row justify-center items-center">
                                    <Fire />
                                    <p className="flex flex-col justify-center items-start">
                                        <dt className="font-normal text-base">연속 학습일</dt>
                                        <dd className="font-semibold text-2xl">3일</dd>
                                    </p>
                                </div>
                            </dl>
                        </aside>
                    </div>
                </section>
                <section className=" w-full lg:w-1/2  flex flex-col gap-8 ">
                    <h2 className="font-semibold text-[32px] shrink-0">최근 진행한 학습</h2>
                    <article
                        className="cursor-pointer relative flex flex-col flex-1 w-full rounded-2xl bg-cover bg-center justify-start p-10 overflow-hidden drop-shadow-xl group"
                        style={{ backgroundImage: `url(${StudyBg})` }}
                    >
                        <div className="font-mbc font-semibold text-[18px] text-white z-10">
                            <p className="mb-0.5">이어서 학습하기</p>
                            <h3 className="text-[32px]">{recentLearningChapter.name}</h3>
                        </div>

                        <div className="w-1/2 mt-3 z-10">
                            <ChapterProgressBar
                                current={recentLearningChapter.completedUnits}
                                total={recentLearningChapter.totalUnits}
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-all ease-out duration-500 z-0"></div>

                        <img
                            src={PLANET_IMG_MAP[recentLearningChapter.id]}
                            className="absolute w-3/5 top-1/3 transform right-0 translate-x-3 group-hover:-rotate-20 group-hover:scale-110 transition-all ease-out duration-500"
                            alt={`${recentLearningChapter.name} 행성`}
                        />
                    </article>
                </section>
            </div>
        </div>
    );
}

export default MainPage;
