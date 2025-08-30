import { API_ENDPOINTS } from '../constants/api';

export const getMypage = async () => {
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await fetch(`${API_ENDPOINTS.users.base}/my-page`, {
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
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
