import Profile2 from '@/assets/images/profile2.svg?react';
import LevelProgressCircle from '../@common/level-info/LevelProgressCircle';
import { PROFILE_COLORS } from '../../constants/profile-colors';

interface User {
  userId: number;
  nickname: string;
  level: number;
  lp: number;
  rank: number;
  profileImgNumber: number;
}

interface UserListProps {
  users: User[];
  loading: boolean;
}

export default function UserList({ users, loading }: UserListProps) {
  return (
    <div className="flex flex-col w-[80%] lg:w-full gap-2">
      {users.map((user) => {
        const profileBgColor =
          PROFILE_COLORS[user.profileImgNumber as keyof typeof PROFILE_COLORS];

        return (
          <div
            key={user.userId}
            className="flex flex-row w-full h-16 items-stretch justify-between border border-[#DCDCDC] rounded-xl overflow-hidden"
          >
            <div className="flex flex-row items-center gap-4 lg:px-3 px-6 bg-white w-3/4">
              <span className="font-mbc text-xl font-medium text-[#930000] w-12 text-left">
                {String(user.rank).padStart(3, '0')}
              </span>
              <div className="flex w-14 h-14 h- items-center justify-center">
                <LevelProgressCircle level={user.level} maxLevel={10}>
                  <Profile2 className="w-10 h-10" style={{ color: profileBgColor }} />
                </LevelProgressCircle>
              </div>
              <span className="text-xl font-medium font-mbc">{user.nickname}</span>
            </div>
            <div className="flex flex-col justify-center bg-[#FEF2FF] w-1/4 min-w-[110px] px-4 py-2 text-lg -space-y-1">
              <div className="flex flex-row items-center justify-start gap-1.5 pl-2 xl:pl-6">
                <span className="text-[#4C4C4C] font-medium w-6">LV</span>
                <span className="text-[#FFB608] font-semibold">{user.level}</span>
              </div>
              <div className="flex flex-row items-center justify-start gap-1.5 pl-2 xl:pl-6">
                <span className="text-[#4C4C4C] font-medium w-6">LP</span>
                <span className="text-[#FFB608] font-semibold">{user.lp}</span>
              </div>
            </div>
          </div>
        );
      })}
      {loading && <div className="text-center py-2">Loading...</div>}
    </div>
  );
}
