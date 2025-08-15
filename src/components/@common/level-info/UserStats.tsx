import StatusBadge from '../badge/StatusBadge';
import LevelProgressBar from './LevelProgressBar';
import Cup from '@/assets/icons/cup.svg?react';
import Xp from '@/assets/icons/xp.svg?react';

type PlayerStatsProps = {
    league: string;
    value: number;
    level: number;
};

const UserStats = ({ level, value, league }: PlayerStatsProps) => {
    return (
        <section className="w-full flex flex-row items-center gap-2 min-h-[30px]">
            <StatusBadge icon={Cup} label={league} />
            <StatusBadge icon={Xp} label={`${value} XP`} />

            <LevelProgressBar completed={74} level={level} />
        </section>
    );
};

export default UserStats;
