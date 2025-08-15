import { useEffect, useState } from 'react';
import Profile2 from '@/assets/images/profile2.svg?react';
import Person from '@/assets/icons/person.svg?react';
import People from '@/assets/icons/people.svg?react';
import RightArrow from '@/assets/icons/right-arrow.svg?react';
import GoldBadge from '@/assets/icons/gold-badge.svg?react';
import CopperBadge from '@/assets/icons/copper-badge.svg?react';
import { GetMypage } from '../api/getMypage';
import { PROFILE_COLORS } from '../constants/profile-colors';

type UserInfo = {
    nickname: string;
    profileImgNumber: number;
    handle: string;
    followers: number;
    following: number;
    badge: number;
    version: string;
};

const dummyUserInfo: UserInfo = {
    nickname: '땅콩',
    profileImgNumber: 1,
    handle: '@in234jj',
    followers: 4,
    following: 4,
    badge: 4,
    version: '6.4.0',
};

export default function UserPage() {
    const [userinfo, setUserinfo] = useState<UserInfo>(dummyUserInfo);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await GetMypage();
                setUserinfo({
                    nickname: res.nickname,
                    profileImgNumber: res.profileImgNumber,
                    handle: res.handle,
                    followers: res.follower,
                    following: res.following,
                    badge: dummyUserInfo.badge,
                    version: dummyUserInfo.version,
                });
            } catch (error) {
                console.error('마이페이지 불러오기 실패:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    }, []);

    const totalBadges = 12;
    const badges = Array.from({ length: totalBadges }, (_, i) => (i < userinfo.badge ? 'gold' : 'copper'));

    if (loading) return <div>로딩 중...</div>;

    const profileBgColor = PROFILE_COLORS[userinfo.profileImgNumber as keyof typeof PROFILE_COLORS];

    return (
        <div className="w-full h-full flex flex-row">
            <div className="w-full lg:w-1/3 flex flex-col bg-white shadow-[0_4px_8px_rgba(0,0,0,0.25)] z-10 p-8">
                <section className="flex flex-col items-center">
                    <Profile2 style={{ color: profileBgColor }} />
                    <h3 className="mt-4 text-3xl font-semibold text-[#222222]">{userinfo.nickname}</h3>
                    <span className="mt-1.5 text-lg text-[#222222]/80">{userinfo.handle}</span>
                    <div className="flex flex-row mt-2 gap-4 text-[#222222]/80 text-lg">
                        <div className="w-[104px] h-9 flex flex-row items-center justify-center border border-[#000000]/10 rounded-lg gap-2">
                            팔로워
                            <span className="font-medium">{userinfo.followers}</span>
                        </div>
                        <div className="w-[104px] h-9 flex flex-row items-center justify-center border border-[#000000]/10 rounded-lg gap-2">
                            팔로잉
                            <span className="font-medium">{userinfo.following}</span>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col gap-4 py-8">
                    <h3 className="text-2xl font-semibold text-[#222222]/80 self-start px-1.5"> 내 정보 </h3>
                    <button className="flex flex-row items-center justify-between text-xl text-[#222222]">
                        <div className="flex flex-row gap-3 ">
                            <Person className="mt-0.5" />
                            계정 정보
                        </div>
                        <RightArrow />
                    </button>
                    <button className="flex flex-row items-center justify-between text-xl text-[#222222]">
                        <div className="flex flex-row gap-3">
                            <People className="mt-0.5" />
                            친구 추가
                        </div>
                        <RightArrow />
                    </button>
                </section>
                <p className="w-full h-0 border-[0.5px] border-[#F2F2F2]" />

                <section className="flex flex-col gap-2.5 py-8 px-1.5">
                    <h3 className="text-2xl font-semibold text-[#222222]/80 self-start "> 뱃지 </h3>
                    <span className="text-xl text-[#000000]/80"> 총 {userinfo.badge}개를 모았어요.</span>
                    <div className="grid grid-cols-6 mt-1 gap-4 w-full h-40 bg-[#F2F2F2] rounded-xl p-3">
                        {badges.map((type, idx) =>
                            type === 'gold' ? (
                                <GoldBadge key={idx} className="w-14 h-14" />
                            ) : (
                                <CopperBadge key={idx} className="w-14 h-14" />
                            )
                        )}
                    </div>
                </section>
            </div>
            <div className="hidden lg:flex w-2/3 bg-[#f2f2f2] flex-col p-10 gap-10">
                <section className="w-full h-52 bg-white rounded-xl border border-[#000000]/10 py-6 px-8">
                    <h3 className="text-xl font-medium text-[#222222]/80"> 기본 정보 </h3>
                    <div className="flex flex-row items-center justify-between py-3">
                        <div className="flex flex-row gap-10 items-center">
                            <Profile2 className="w-24 h-24" style={{ color: profileBgColor }} />
                            <div className="flex flex-col">
                                <span className="text-lg text-[#222222]/80">{userinfo.handle}</span>
                                <span className="text-[28px] font-semibold text-[#222222]">{userinfo.nickname}</span>
                                <div className="flex flex-row mt-2 gap-2 text-[#222222]/80 text-lg">
                                    <div className="lg:w-[104px] w-[90px] h-9 flex flex-row items-center justify-center border border-[#000000]/10 rounded-lg gap-2">
                                        팔로워
                                        <span className="font-medium">{userinfo.followers}</span>
                                    </div>
                                    <div className="lg:w-[104px] w-[90px] h-9 flex flex-row items-center justify-center border border-[#000000]/10 rounded-lg gap-2">
                                        팔로잉
                                        <span className="font-medium">{userinfo.following}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="lg:w-[108px] w-[90px] h-11 rounded-lg bg-[#F2F2F2] text-[#6D6D6D] text-center text-lg font-medium">
                            정보 수정
                        </button>
                    </div>
                </section>

                <section className="w-full h-[520px] bg-white rounded-xl border border-[#000000]/10 py-6 px-8">
                    <h3 className="text-xl font-medium text-[#222222]/80 mb-5"> 사용자 설정 </h3>
                    <div className="flex flex-col p-3 justify-between gap-8 text-[#222124] text-xl">
                        <button className="flex flex-row items-center justify-between">
                            마케팅 / 이벤트 알림
                            <RightArrow />
                        </button>
                        <button className="flex flex-row items-center justify-between">
                            화면 설정
                            <RightArrow />
                        </button>
                        <button className="flex flex-row items-center justify-between">
                            공지사항
                            <RightArrow />
                        </button>
                        <button className="flex flex-row items-center justify-between">
                            고객센터
                            <RightArrow />
                        </button>
                        <button className="flex flex-row items-center justify-between">
                            서비스 이용약관
                            <RightArrow />
                        </button>
                        <button className="flex flex-row items-center justify-between">
                            개인정보 처리 방침
                            <RightArrow />
                        </button>
                        <span className="flex flex-row items-center justify-between">
                            버전 정보
                            <span className="text-[#A8A8A8]"> {userinfo.version} </span>
                        </span>
                    </div>
                </section>
            </div>
        </div>
    );
}
