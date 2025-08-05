import { useNavigate } from 'react-router-dom'; 
import LoginBg from '@/assets/images/login-bg.svg';
import Logo from '@/assets/logo/white-logo.svg?react';
import Success from '@/assets/icons/success.svg?react';

export default function SuccessPage() {
  const navigate = useNavigate(); 

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
      <h2 className="font-bold text-xl text-white">
        그래빗과 함께 CS 지식을 마스터해요!
      </h2>
      <section className="flex flex-col w-[480px] lg:w-[560px] h-[460px] rounded-xl bg-white items-center py-10 px-20">
        <h3 className="text-2xl font-semibold">계정 생성 완료!</h3>
        <span className="text-[16px] text-[#4C4C4C] mt-4">그래빗의 일원이 된 걸 환영해요!</span>
        <Success />
        <button
          onClick={() => navigate('/')}
          className="mt-8 w-full h-14 text-white py-2 rounded-xl text-lg font-semibold bg-[#8100B3]"
        >
          홈으로
        </button>
      </section>
    </div>
  );
}
