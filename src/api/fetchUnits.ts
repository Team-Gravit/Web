import { ApiError } from '../types/@common/api';
import type { Unit } from '../types/@common/unit';
import transformUnits from '../types/transformers/units';

export default async function fetchUnits(id: number): Promise<Unit[]> {
    const accessToken = localStorage.getItem('accessToken');
    try {
        const response = await fetch(`https://grav-it.inuappcenter.kr/api/v1/learning/${id}/units`, {
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
                errorData = new ApiError(`HTTP ${response.status}: ${response.statusText}`, 'HTTP_ERROR');
            }
            throw errorData;
        }

        const data = await response.json();

        return transformUnits(data);
    } catch (error) {
        // 네트워크 에러나 기타 예외 처리
        if (error instanceof ApiError) {
            throw error;
        }

        throw new ApiError('네트워크 연결을 확인해주세요.', 'NETWORK_ERROR');
    }
}
