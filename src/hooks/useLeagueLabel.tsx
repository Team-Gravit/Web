import { useMemo } from 'react';
import { LEAGUE_LABELS } from '../types/@common/league';
import type { User } from '../types/@common/user';

function useLeagueLabel(user?: User) {
    return useMemo(() => {
        if (!user?.league) return '브론즈';

        return LEAGUE_LABELS[user.league];
    }, [user?.league]);
}

export default useLeagueLabel;
