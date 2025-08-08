import { useRef, useState } from 'react';
import Banner from '../components/@common/banner/Banner';
import Cup from '@/assets/icons/cup.svg?react';
import Xp from '@/assets/icons/xp.svg?react';
import TierCircle from '@/assets/icons/tier-circle.svg?react';
import Profile from '@/assets/images/profile.svg';
import ProfileSub from '@/assets/icons/profile-sub.svg?react';
import LevelProgressBar from '../components/@common/level-progress/LevelProgressBar';

type LevelStatusProps = {
    tier: string;
    value: number;
    level: number;
    max: number;
};

const LevelStatus = ({ level, value, max, tier }: LevelStatusProps) => {
    return (
        <article className="w-full h-[44px] flex flex-row items-center gap-2">
            <div className="flex flex-row items-center justify-center gap-0.5 text-xl font-bold px-1.5 py-1 bg-white rounded-full text-main-2">
                <Cup className="bg-main-1 rounded-full w-5 h-5" style={{ padding: '2.2px' }} />
                {tier}
            </div>
            <div className="flex flex-row items-center justify-center gap-0.5 text-xl font-bold px-1.5 py-1 bg-white rounded-full text-main-2">
                <Xp className="bg-main-1 rounded-full w-5 h-5" style={{ padding: '2.2px' }} />
                {tier}
            </div>
            <LevelProgressBar completed={74} level={13} />
        </article>
    );
};

type Tier = {
    id: number;
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    exp: number;
};

const tiers: Tier[] = [
    { id: 1, name: '브론즈', icon: TierCircle, exp: 10 },
    { id: 2, name: '실버', icon: TierCircle, exp: 20 },
    { id: 3, name: '골드', icon: TierCircle, exp: 30 },
    { id: 4, name: '마스터', icon: TierCircle, exp: 40 },
];

type User = {
    id: number;
    nickname: string;
    level: number;
    lp: number;
    profileIcon: string;
};

const users: User[] = [
    { id: 1, nickname: '사용자 1', level: 10, lp: 7897, profileIcon: Profile },
    { id: 2, nickname: '사용자 2', level: 12, lp: 7897, profileIcon: Profile },
    { id: 3, nickname: '사용자 3', level: 8, lp: 7897, profileIcon: Profile },
    { id: 4, nickname: '사용자 4', level: 15, lp: 7897, profileIcon: Profile },
    { id: 5, nickname: '사용자 5', level: 200, lp: 7897, profileIcon: Profile },
    { id: 6, nickname: '사용자 6', level: 8, lp: 7897, profileIcon: Profile },
];

function LeaguePage() {
    const [selectedTierId, setSelectedTierId] = useState(1);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleClick = (index: number, id: number) => {
        setSelectedTierId(id);
        itemRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest',
        });
    };

    return (
        <div className="w-full h-full flex flex-col">
            <Banner />
            <div className="flex-grow py-20 bg-[#f2f2f2] flex lg:flex-row flex-col gap-5.5">
                <section className="flex flex-col gap-8 lg:w-1/2 w-full min-w-0">
                    <div className="flex flex-col gap-8 lg:pl-20 px-5 lg:px-0">
                        <h2 className="font-semibold text-[32px]">
                            현재 땅콩님의 티어는 <strong className="text-[#ff9500]">브론즈</strong>입니다!
                        </h2>
                        <LevelStatus tier="브론즈" value={789} max={10} level={12} />
                    </div>

                    <div className="flex flex-row lg:w-full md:px-3 sm:pl-0 pl-36 py-8 items-center lg:justify-start justify-center gap-6 scroll-smooth overflow-x-auto">
                        <div className="flex-shrink-0 w-[calc(50%+360px)] lg:w-[calc(50%-140px)]" />

                        {tiers.map((tier, index) => {
                            const isSelected = tier.id === selectedTierId;
                            const TierIcon = tier.icon;

                            return (
                                <div
                                    key={tier.id}
                                    ref={(el) => {
                                        itemRefs.current[index] = el;
                                    }}
                                    onClick={() => handleClick(index, tier.id)}
                                    className={`flex flex-col items-center cursor-pointer transition-all duration-300 pl-auto justify-center ${
                                        isSelected ? 'scale-110 px-4' : ''
                                    } min-h-[140px]`}
                                >
                                    <div className="flex items-center justify-center">
                                        <TierIcon
                                            className={`${
                                                isSelected ? 'lg:w-52 lg:h-52 w-52 h-52' : 'lg:w-48 lg:h-48 w-48 h-48'
                                            }`}
                                        />
                                    </div>

                                    <div
                                        className="flex flex-col items-center justify-center pt-4 min-h-[60px]"
                                        style={{ visibility: isSelected ? 'visible' : 'hidden' }}
                                    >
                                        <span className="mb-1 text-3xl font-semibold">{tier.name}</span>
                                        <span className="text-[#FF9500] text-lg font-medium">EXP {tier.exp}</span>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="flex-shrink-0 w-[calc(50%-96px)] lg:w-[calc(50%-208px)]" />
                    </div>
                </section>

                <section className="lg:w-1/2 w-full  flex flex-col items-center gap-8 lg:pl-6 lg:pr-32 px-5 lg:px-0">
                    <div className="flex flex-col w-full">
                        {[...users]
                            .sort((a, b) => b.level - a.level)
                            .map((user, index) => {
                                const rank = String(index + 1).padStart(3, '0');

                                return (
                                    <div
                                        key={user.id}
                                        className="flex flex-row w-full h-16 items-stretch justify-between shadow-lg rounded-xl mb-2 overflow-hidden"
                                    >
                                        <div className="flex flex-row items-center gap-6 px-6 py-4 bg-white w-3/4">
                                            <span className="text-xl font-semibold text-[#930000]">{rank}</span>
                                            <div className="relative w-10 h-10">
                                                <img
                                                    src={user.profileIcon}
                                                    className="w-10 h-10 rounded-full object-cover"
                                                />
                                                <ProfileSub className="absolute top-[-7.5px] left-[-7.5px] w-14 h-14" />
                                            </div>
                                            <span className="text-[22px] font-bold">{user.nickname}</span>
                                        </div>
                                        <div className="flex flex-col justify-center bg-[#FEF2FF] w-1/4 px-4 py-2 gap-1">
                                            <div className="flex flex-row items-center justify-start gap-1.5 pl-6">
                                                <span className="text-[#4C4C4C] font-medium w-6">LV</span>
                                                <span className="text-[#FFB608] font-semibold">{user.level}</span>
                                            </div>
                                            <div className="flex flex-row items-center justify-start gap-1.5 pl-6">
                                                <span className="text-[#4C4C4C] font-medium w-6">LP</span>
                                                <span className="text-[#FFB608] font-semibold">{user.lp}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default LeaguePage;
