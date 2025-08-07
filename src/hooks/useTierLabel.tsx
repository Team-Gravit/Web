import { useMemo } from 'react';
import { TIER_LABELS, type User } from '../types/user';

function useTierLabel(user?: User) {
    return useMemo(() => {
        if (!user?.tier) return '브론즈';

        return TIER_LABELS[user.tier];
    }, [user?.tier]);
}

export default useTierLabel;
