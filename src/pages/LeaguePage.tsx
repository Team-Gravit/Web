import { useState, useEffect, useCallback, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import Banner from '../components/@common/banner/Banner';
import UserStats from '../components/@common/level-info/UserStats';
import TierSelector from '../components/league-page/TierSelector';
import UserList from '../components/league-page/UserList';
import fetchMainInfo from '../api/fetchMainInfo';
import { getUserLeagues } from '../api/getUserLeagues';
import { getTierLeagues } from '../api/getTierLeagues';
import { tiers } from '../constants/tiers';

type User = {
  userId: number;
  nickname: string;
  level: number;
  lp: number;
  profileImgNumber: number;
  rank: number;
};

function LeaguePage() {
  const [selectedTierId, setSelectedTierId] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState<User[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const fetchingRef = useRef(false);

  const { data: mainInfo } = useQuery({
    queryKey: ['main-info'],
    queryFn: fetchMainInfo,
    select: (data) => ({
      nickname: data.nickname,
      league: data.league,
      level: data.level,
      xp: data.xp,
    }),
  });

  const getTierIdFromLeague = (league?: string | null) => {
    if (!league) return 1;
    const tier = tiers.find((t) => league.includes(t.name));
    return tier?.id ?? 1;
  };

  useEffect(() => {
    if (mainInfo && selectedTierId === null) {
      setSelectedTierId(getTierIdFromLeague(mainInfo.league));
    }
  }, [mainInfo, selectedTierId]);


  const fetchUsers = useCallback(
    async (targetPage: number, targetHasMore: boolean) => {
      if (!selectedTierId || fetchingRef.current || !targetHasMore) return;

      fetchingRef.current = true;
      try {
        let newUsers: User[] = [];
        if (selectedTierId === getTierIdFromLeague(mainInfo?.league)) {
          newUsers = await getUserLeagues(targetPage);
        } else {
          newUsers = await getTierLeagues(selectedTierId, targetPage);
        }

        if (newUsers.length > 0) {
          setUsers((prev) => {
            const existingIds = new Set(prev.map((u) => u.userId));
            return [...prev, ...newUsers.filter((u) => !existingIds.has(u.userId))];
          });
          setPage(targetPage + 1);
        }

        if (newUsers.length < 10) setHasMore(false);
      } catch (error) {
        console.error('유저 불러오기 실패:', error);
      } finally {
        fetchingRef.current = false;
      }
    },
    [selectedTierId, mainInfo]
  );

  useEffect(() => {
    if (selectedTierId !== null) {
      setUsers([]);
      setPage(0);
      setHasMore(true);
      fetchUsers(0, true); 
    }
  }, [selectedTierId, fetchUsers]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (fetchingRef.current || !hasMore) return;
      if (container.scrollTop + container.clientHeight >= container.scrollHeight - 50) {
        fetchUsers(page, hasMore);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [page, hasMore, fetchUsers]);

  return (
    <div className="w-full h-full flex flex-col">
      <Banner />
      <div className="flex-grow py-20 bg-[#f2f2f2] flex lg:flex-row flex-col gap-5.5">
        <section className="flex flex-col gap-8 lg:w-1/2 w-full min-w-0">
          <div className="flex flex-col gap-8 lg:pl-20 px-20 lg:px-0">
            <h2 className="font-semibold text-[32px]">
              현재 {mainInfo?.nickname}님의 티어는{' '}
              <strong className="text-[#ff9500]">{mainInfo?.league || '브론즈'}</strong> 입니다!
            </h2>
            <UserStats
              league={mainInfo?.league || '브론즈'}
              value={mainInfo?.xp ?? 0}
              level={mainInfo?.level ?? 0}
            />
          </div>

          <TierSelector
            tiers={tiers}
            selectedTierId={selectedTierId}
            onSelectTier={(id) => setSelectedTierId(id)}
          />
        </section>

        <section
          ref={scrollContainerRef}
          style={{ height: 700, overflowY: 'auto' }}
          className="lg:w-1/2 w-full flex flex-col items-center gap-8 lg:pl-6 lg:pr-32 px-5 lg:px-0"
        >
          <UserList users={users} loading={fetchingRef.current} />
          {!hasMore && <p className="text-gray-500">더 이상 유저가 없습니다.</p>}
        </section>
      </div>
    </div>
  );
}

export default LeaguePage;
