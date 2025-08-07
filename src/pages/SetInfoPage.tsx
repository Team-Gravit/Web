
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
  const [isLimit, setIsLimit] = useState(false);
  const [checking, setChecking] = useState(false); 
  const navigate = useNavigate();

  const handlePrev = () => {
    setColorIndex((prev) => (prev === 0 ? colors.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setColorIndex((prev) => (prev === colors.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const trimmed = nickname.trim();
    const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,8}$/;

    if (!trimmed) {
      setIsLimit(false);
      setChecking(false);
      return;
    }

    setChecking(true);
    const handler = setTimeout(() => {
      setIsLimit(!nicknameRegex.test(trimmed));
      setChecking(false);
    }, 300);

    return () => clearTimeout(handler);
  }, [nickname]);

  const handleSubmit = () => {
    if (!nickname.trim()) {
      alert('닉네임을 입력해주세요.');
      return;
    }
    if (isLimit) {
      alert('닉네임은 2자 이상 8자 이하이며, 공백 및 특수문자는 사용할 수 없어요.');
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
              isLimit
                ? 'border-[#FF0000]'
                : nickname.trim()
                ? 'border-[#0033FF]'
                : 'border-[#C3C3C3]'
            } focus:outline-none`}
          />
          <div className="min-h-[30px]">
            {!checking && nickname.trim() && !isLimit && (
              <p className="text-xs text-[#868686]">사용 가능한 닉네임이에요.</p>
            )}
            {!checking && isLimit && (
              <p className="text-xs text-[#FF0000]">닉네임은 2~8자, 공백 및 특수문자 없이 입력해주세요.</p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={!nickname.trim() || isLimit || checking}
            className={`w-full h-14 text-white py-2 rounded-xl text-lg font-semibold transition
              ${!nickname.trim() || isLimit || checking ? 'bg-[#8100B3] opacity-50' : 'bg-[#8100B3]'}`}
          >
            다음
          </button>
        </div>
      </section>
    </div>
  );
}
