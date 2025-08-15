export const API_BASE_URL = 'https://grav-it.inuappcenter.kr/api/v1';
export const API_PREFIX = {
  oauth: `${API_BASE_URL}/oauth`,
  main: `${API_BASE_URL}/main`,
  users: `${API_BASE_URL}/users`,
  learning: `${API_BASE_URL}/learning`,
  friends: `${API_BASE_URL}/friends`
} as const;