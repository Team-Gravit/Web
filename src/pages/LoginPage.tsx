import LoginBg from '@/assets/images/login-bg.svg';
import Logo from '@/assets/logo/white-logo.svg?react';
import Profile3 from '@/assets/images/profile3.svg?react';
import google from '@/assets/images/google.svg';
import kakao from '@/assets/images/kakao.svg';
import naver from '@/assets/images/naver.svg';
import { API_ENDPOINTS } from '../constants/api';

export default function LoginPage() {
    const redirectToLogin = async (provider: 'google' | 'kakao' | 'naver') => {
        try {
            const response = await fetch(`${API_ENDPOINTS.oauth.base}/login-url/${provider}`);
            const data = await response.json();

            if (!data.loginUrl) {
                throw new Error('로그인 URL을 받아오지 못했습니다.');
            }

            localStorage.setItem('returnTo', window.location.pathname);

            window.location.href = data.loginUrl;
        } catch (error) {
            console.error(`${provider} 로그인 처리 중 오류:`, error);
            alert('로그인 요청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        }
    };

    return (
        <div
            className="w-screen h-full flex flex-col items-center py-30 lg:py-10 gap-4.5"
            style={{
                backgroundImage: `url(${LoginBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Logo className="w-96" />
            <h2 className="font-bold text-xl text-white">그래빗과 함께 CS 지식을 마스터해요!</h2>
            <section className="flex flex-col w-[480px] lg:w-[560px] h-[500px] rounded-xl bg-white items-center py-6 px-10 gap-6">
                <Profile3 className="w-18 h-18" />
                <div className="flex flex-col leading-tight">
                    <h3 className="font-bold text-[32px] text-center">
                        교육행성에 어서 오세요.
                        <br />
                        Gravit!
                    </h3>
                    <span className="font-medium text-[20px] text-[#7D7D7D] mt-2">
                        회원 서비스 이용을 위해 로그인 해주세요.
                    </span>
                </div>
                <div className="w-full border-[0.5px] border-dashed border-[#C3C3C3]" />
                <div className="flex flex-col items-center w-full h-40 gap-1.5">
                    <button id="google" className="flex w-full" onClick={() => redirectToLogin('google')}>
                        <img className="flex w-full h-full" src={google} alt="Google" />
                    </button>
                    <button id="kakao" className="flex w-full" onClick={() => redirectToLogin('kakao')}>
                        <img className="flex w-full h-full" src={kakao} alt="Kakao" />
                    </button>
                    <button id="naver" className="flex w-full" onClick={() => redirectToLogin('naver')}>
                        <img className="flex w-full h-full" src={naver} alt="Naver" />
                    </button>
                </div>
            </section>
        </div>
    );
}
