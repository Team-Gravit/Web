import { useEffect, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { API_PREFIX } from '../constants/api';

export default function PostOAuth() {
    const { provider } = useParams<{ provider: string }>();
    const location = useLocation();
    const navigate = useNavigate();

    const isCalledRef = useRef(false);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const code = query.get('code');

        if (!code || isCalledRef.current) return;

        isCalledRef.current = true;

        const postCode = async () => {
            try {
                const res = await fetch(`${API_PREFIX.oauth}/${provider}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ code }),
                });

                if (!res.ok) throw new Error('로그인 실패');

                const data: { accessToken: string; isOnboarded: boolean } = await res.json();
                console.log('accessToken:', data.accessToken);

                localStorage.setItem('accessToken', data.accessToken);

                if (data.isOnboarded) {
                    navigate('/main', { replace: true });
                } else {
                    navigate('/set-info', { replace: true });
                }
            } catch (error) {
                console.error(`${provider} 로그인 실패:`, error);
                alert('로그인 중 오류가 발생했습니다.');
                navigate('/login', { replace: true });
            }
        };

        postCode();
    }, [provider, location.search, navigate]);

    return null;
}
