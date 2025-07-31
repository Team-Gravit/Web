import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import LoginBg from '@/assets/images/login-bg.svg';
import Logo from '@/assets/logo/white-logo.svg?react';
import RightArrow from '@/assets/icons/right-gray-arrow.svg?react';
import LeftArrow from '@/assets/icons/left-gray-arrow.svg?react';
import Profile2 from '@/assets/images/profile2.svg?react';

export default function SetInfoPage() {
  const colors = ['#D85050', '#4A90E2', '#7ED321', '#F5A623'];
  const [colorIndex, setColorIndex] = useState(0);
  const [nickname, setNickname] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [checking, setChecking] = useState(false); 
  const navigate = useNavigate();

  const handlePrev = () => {
    setColorIndex((prev) => (prev === 0 ? colors.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setColorIndex((prev) => (prev === colors.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!nickname.trim()) {
      setIsDuplicate(false);
      setChecking(false);
      return;
    }

    setChecking(true);
    const handler = setTimeout(() => {
      const duplicatedNicknames = ['test', 'admin', 'guest'];
      const isDup = duplicatedNicknames.includes(nickname.trim().toLowerCase());

      setIsDuplicate(isDup);
      setChecking(false);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [nickname]);

  const handleSubmit = () => {
    if (!nickname.trim()) {
      alert('닉네임을 입력해주세요.');
      return;
    }
    if (isDuplicate) {
      alert('이미 사용중인 닉네임입니다.');
      return;    
    }
    
    navigate('/success');
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
      <h2 className="font-bold text-xl text-white">
        그래빗과 함께 CS 지식을 마스터해요!
      </h2>
      <section className="flex flex-col w-[480px] lg:w-[560px] h-[460px] rounded-xl bg-white items-center py-8 px-20 gap-6">
        <div className="flex flex-row items-center justify-center gap-10">
          <button onClick={handlePrev}>
            <LeftArrow className="mt-0.5 cursor-pointer" />
          </button>
          <Profile2 className="w-40 h-40" style={{ color: colors[colorIndex] }} />
          <button onClick={handleNext}>
            <RightArrow className="cursor-pointer" />
          </button>
        </div>

        <div className="flex flex-col w-full gap-2 mt-6">
          <label className="text-lg font-semibold">닉네임 설정</label>
          <input
            id="nickname"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임"
            className={`w-full px-4 py-2 rounded-lg text-[#4C4C4C] text-lg border ${
                isDuplicate
                ? 'border-[#FF0000]'
                : nickname.trim()
                ? 'border-[#0033FF]'
                : 'border-[#C3C3C3]'
            } focus:outline-none`}
          />
         <div className="min-h-[30px]">
            {!checking && nickname.trim() && !isDuplicate && (
              <p className="text-xs text-[#868686]">사용 가능한 닉네임이에요.</p>
            )}
            {!checking && isDuplicate && (
              <p className="text-xs text-[#868686]">이미 사용중인 닉네임이에요.</p>
            )}
          </div>

         <button
            onClick={handleSubmit}
            disabled={!nickname.trim() || isDuplicate || checking}
            className={`w-full h-14 text-white py-2 rounded-xl text-lg font-semibold transition
              ${!nickname.trim() || isDuplicate || checking ? 'bg-[#8100B3] opacity-50' : 'bg-[#8100B3]'}`}
          >
            다음
          </button>
        </div>
      </section>
    </div>
  );
}
