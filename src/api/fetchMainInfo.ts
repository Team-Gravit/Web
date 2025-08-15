import { API_ENDPOINTS } from '../constants/api';
import { ApiError } from '../types/@common/api';
import type MainPageResponse from '../types/api/main';

export default async function fetchMainInfo(): Promise<MainPageResponse> {
    const accessToken = localStorage.getItem('accessToken');

    try {
        const response = await fetch(API_ENDPOINTS.main.base, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            let errorData: ApiError;

            try {
                const errorResponse = await response.json();
                errorData = new ApiError(
                    errorResponse.message || `HTTP ${response.status}: ${response.statusText}`,
                    errorResponse.error || 'HTTP_ERROR'
                );
            } catch {
                // JSON 파싱 실패 시 기본 에러 메시지
                errorData = new ApiError(`HTTP ${response.status}: ${response.statusText}`, 'HTTP_ERROR');
            }
            throw errorData;
        }

        // 성공 응답 파싱
        const data = await response.json();
        console.log('서버 응답:', data); // 디버깅용

        // 서버 응답이 직접 데이터인 경우
        return data;
    } catch (error) {
        // 네트워크 에러나 기타 예외 처리
        if (error instanceof ApiError) {
            throw error;
        }

        throw new ApiError('네트워크 연결을 확인해주세요.', 'NETWORK_ERROR');
    }
}
