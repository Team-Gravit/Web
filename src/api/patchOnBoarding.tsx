import axios from 'axios';
import type { AxiosResponse } from 'axios';
import { API_ENDPOINTS } from '../constants/api';

export const PatchOnBoarding = async (nickname: string, profilePhotoNumber: number) => {
    const accessToken = localStorage.getItem('accessToken');

    try {
        const response: AxiosResponse = await axios.patch(
            `${API_ENDPOINTS.users.base}/onboarding`,
            {
                nickname,
                profilePhotoNumber,
            },
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
