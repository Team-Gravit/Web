import { ApiError } from '../types/@common/api';
import type { Chapter } from '../types/@common/chapter';
import { transformChapters } from '../utils/transformChapter';

export default async function fetchChapters(): Promise<Chapter[]> {
    const accessToken = localStorage.getItem('accessToken');
    try {
        const response = await fetch(`https://grav-it.inuappcenter.kr/api/v1/learning/chapters`, {
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

        return transformChapters(data);
    } catch (error) {
        // 네트워크 에러나 기타 예외 처리
        if (error instanceof ApiError) {
            throw error;
        }

        throw new ApiError('네트워크 연결을 확인해주세요.', 'NETWORK_ERROR');
    }
}
