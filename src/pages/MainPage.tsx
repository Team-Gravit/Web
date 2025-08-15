import Banner from '../components/@common/banner/Banner';

import { Link } from 'react-router-dom';
import Rocket from '@/assets/images/rocket.png';
import Fire from '@/assets/images/fire.png';
import UserStats from '../components/@common/level-info/UserStats';
import { useQuery } from '@tanstack/react-query';
import fetchMainInfo from '../api/fetchMainInfo';
import RecentLearningSection from '../components/main-page/RecentLearningSection';

function MainPage() {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['main-info'],
        queryFn: fetchMainInfo,
    });

    if (isPending) {
        return <div className="h-full w-full flex flex-col">로딩중</div>;
    }

    if (isError) {
        <div className="h-full w-full flex flex-col"></div>;
        return <div>{error.message}</div>;
    }

    const { nickname, level, xp, league, recentLearningSummaryResponse: recentData } = data;

    return (
        <div className="h-full w-full flex flex-col">
            <Banner />
            <div className="flex-grow p-20 bg-[#f2f2f2] flex flex-col lg:flex-row gap-6">
                <section className=" w-full lg:w-1/2 flex flex-col gap-8">
                    <h2 className="font-semibold text-[32px]">
                        현재 {nickname}님의 티어는 <strong className="text-[#ff9500]">{league || '브론즈'}</strong>
                        입니다!
                    </h2>
                    <UserStats league={league || '브론즈'} value={xp} level={level} />

                    <div className="flex flex-row gap-4">
                        <article className=" h-full w-2/3 min-h-[334px] flex flex-col justify-between p-4 bg-white rounded-2xl">
                            <div className="flex flex-col gap-3">
                                <h3 className="font-semibold text-[32px] leading-none">오늘의 미션🔥</h3>
                                <hr className="text-gray-500 border-dashed border-2" />
                                <ul className="flex list-disc pl-5 leading-none">
                                    <li className="text-2xl font-medium">
                                        {recentData.chapterName} 챕터
                                        {recentData.completedUnits} 완료
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
                                    <img src={Rocket} className="w-[50px]" />

                                    <p className=" flex flex-col justify-start items-start">
                                        <dt className="font-normal text-base">행성 정복률</dt>
                                        <dd className="font-semibold text-2xl">15%</dd>
                                    </p>
                                </div>

                                <div className="w-full flex-1 bg-white rounded-2xl p-4 flex flex-row justify-center items-center">
                                    <img src={Fire} className="w-[50px]" />
                                    <p className="flex flex-col justify-center items-start">
                                        <dt className="font-normal text-base">연속 학습일</dt>
                                        <dd className="font-semibold text-2xl">3일</dd>
                                    </p>
                                </div>
                            </dl>
                        </aside>
                    </div>
                </section>
                <RecentLearningSection
                    chapterId={recentData.chapterId}
                    chapterName={recentData.chapterName}
                    completedUnits={recentData.completedUnits}
                    totalUnits={recentData.totalUnits}
                />
            </div>
        </div>
    );
}

export default MainPage;
