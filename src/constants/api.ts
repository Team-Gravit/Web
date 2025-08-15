export const API_BASE_URL = 'https://grav-it.inuappcenter.kr/api/v1';

export const API_ENDPOINTS = {
    oauth: {
        base: `${API_BASE_URL}/oauth`,
        login: `${API_BASE_URL}/oauth/login`,
        callback: `${API_BASE_URL}/oauth/callback`,
    },
    main: {
        base: `${API_BASE_URL}/main`,
    },
    users: {
        base: `${API_BASE_URL}/users`,
        profile: `${API_BASE_URL}/users/profile`,
    },
    learning: {
        base: `${API_BASE_URL}/learning`,
        chapters: `${API_BASE_URL}/learning/chapters`,
        chapter: (id: number) => `${API_BASE_URL}/learning/chapters/${id}`,
        progress: `${API_BASE_URL}/learning/progress`,
    },
    friends: {
        base: `${API_BASE_URL}/friends`,
        list: `${API_BASE_URL}/friends/list`,
        add: `${API_BASE_URL}/friends/add`,
    },
} as const;
