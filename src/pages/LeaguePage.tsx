import { useRef, useState } from "react";
import Banner from "../components/@common/banner/Banner";
import ProgressBar from '../components/@common/progress-bar/ProgressBar';
import Cup from '@/assets/icons/cup.svg?react';
import Xp from '@/assets/icons/xp.svg?react';
import TierCircle from '@/assets/icons/tier-circle.svg?react';
import Profile from '@/assets/images/profile.svg';
import TierIcon from '@/assets/icons/tier-icon.svg?react';
import ProfileSub from '@/assets/icons/profile-sub.svg?react';

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
      <ProgressBar completed={74} level={13} />
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

type Friend = {
  id: number;
  nickname: string;
  level: number;
  tierIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  profileIcon: string;
};

const friends: Friend[] = [
  { id: 1, nickname: "친구1", level: 10, tierIcon: TierCircle, profileIcon: Profile },
  { id: 2, nickname: "친구2", level: 12, tierIcon: TierCircle, profileIcon: Profile },
  { id: 3, nickname: "친구3", level: 8, tierIcon: TierCircle, profileIcon: Profile },
  { id: 4, nickname: "친구4", level: 15, tierIcon: TierCircle, profileIcon: Profile },
  { id: 5, nickname: "친구5", level: 20, tierIcon: TierCircle, profileIcon: Profile },
  { id: 6, nickname: "친구6", level: 9, tierIcon: TierCircle, profileIcon: Profile },
  { id: 7, nickname: "친구7", level: 15, tierIcon: TierCircle, profileIcon: Profile },
  { id: 8, nickname: "친구8", level: 20, tierIcon: TierCircle, profileIcon: Profile },
];

const maxVisibleFriends = 3;
const visibleFriends = friends.slice(0, maxVisibleFriends);
const remainingCount = friends.length - maxVisibleFriends;

type User = {
  id: number;
  nickname: string;
  level: number;
  tierIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  profileIcon: string;
};

const users: User[] = [
  { id: 1, nickname: "사용자 1", level: 10, tierIcon: TierIcon, profileIcon: Profile },
  { id: 2, nickname: "사용자 2", level: 12, tierIcon: TierIcon, profileIcon: Profile },
  { id: 3, nickname: "사용자 3", level: 8, tierIcon: TierIcon, profileIcon: Profile },
  { id: 4, nickname: "사용자 4", level: 15, tierIcon: TierIcon, profileIcon: Profile },
  { id: 5, nickname: "사용자 5", level: 200, tierIcon: TierIcon, profileIcon: Profile },
  { id: 6, nickname: "사용자 6", level: 8, tierIcon: TierIcon, profileIcon: Profile },
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
                    <TierIcon className={`${isSelected ? 'lg:w-52 lg:h-52 w-52 h-52' : 'lg:w-48 lg:h-48 w-48 h-48'}`} />
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
          <button className="flex flex-row w-full h-16 items-center justify-between p-4 bg-white shadow-md rounded-lg font-medium mb-6 text-[#222222]">
            친구 리그 보기
            <span className="flex flex-row items-center text-[#6D6D6D]">
              {visibleFriends.map((friend, index) => (
                <img
                  key={friend.id}
                  src={friend.profileIcon}
                  className={`w-10 h-10 rounded-full border-2 border-white object-cover ${
                    index !== 0 ? '-ml-3' : ''
                  }`}
                />
              ))}

              {remainingCount > 0 && (
                <span className="-ml-3 w-10 h-10 flex items-center justify-center rounded-full bg-[#D9D9D9] border-2 border-white">
                  +{remainingCount}
                </span>
              )}
            </span>
          </button>

          <div className="flex flex-col w-full">
            {[...users]
              .sort((a, b) => b.level - a.level)
              .map((user, index) => {
                const TierIcon = user.tierIcon;
                const rank = index + 1;

                return (
                  <div
                    key={user.id}
                    className="flex flex-row w-full h-16 items-center justify-between px-6 py-4 bg-white shadow-lg rounded-xl mb-2"
                  >
                    <div className="flex flex-row items-center gap-4">
                      <span className="text-xl font-semibold text-[#FFB608]">
                        {rank}
                      </span>
                      <div className="relative w-10 h-10">
                        <img
                            src={user.profileIcon}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <ProfileSub className="absolute top-[-7.5px] left-[-7.5px] w-14 h-14" />
                      </div>
                      <span className="text-[22px] font-bold">{user.nickname}</span>
                    </div>

                    <div className="flex flex-row items-center justify-start gap-3 min-w-[100px]">
                      <TierIcon className="w-9 h-9" />
                      <span className="flex flex-row text-[#4C4C4C] font-medium gap-1.5">
                        LV
                        <span className="text-[#FFB608]">{user.level}</span>
                      </span>
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
