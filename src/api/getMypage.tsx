import axios from 'axios';
import type { AxiosResponse } from 'axios';
import { API_PREFIX } from '../constants/api';


export const GetMypage = async () => {
  
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response: AxiosResponse = await axios.get(
      `${API_PREFIX.users}/my-page`,
      {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,  
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const { status, data } = error.response;
        console.error('Error response:', status, data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
    }

    throw error;
  }
};
