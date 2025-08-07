import { useMemo } from 'react';
import { type User } from '../types/user';
import { TIER_LABELS } from '../types/tier';

function useTierLabel(user?: User) {
    return useMemo(() => {
        if (!user?.tier) return '브론즈';

        return TIER_LABELS[user.tier];
    }, [user?.tier]);
}

export default useTierLabel;
