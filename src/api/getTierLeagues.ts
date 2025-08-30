import { API_ENDPOINTS } from '../constants/api';

export const getTierLeagues = async (id: number, num: number) => {
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await fetch(API_ENDPOINTS.leagues.tier(id, num), {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      credentials: 'include', 
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error response:', response.status, errorData);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
