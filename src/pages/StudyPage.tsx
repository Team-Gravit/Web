import React from 'react';
import Banner from '../components/@common/banner/Banner';
import StudyBg from '@/assets/images/study-bg.jpg';
import InfoIcon from '@/assets/icons/info-circle.svg?react';
import ProgressBar from '../components/@common/progress-bar/ProgressBar';

function StudyPage() {
    return (
        <div className="h-full w-full flex flex-col">
            <Banner />
            <div className="flex-grow px-[120px] pt-8 mx-auto my-0">
                <h1 className="text-[32px] font-bold">학습</h1>

                <section className="flex flex-col gap-8">
                    <div className="flex flex-row gap-8">
                        <article
                            className="w-[273px] h-[273px] rounded-[5px] px-2.5 py-4 shadow-card flex flex-col justify-start gap-3"
                            style={{ backgroundImage: `url(${StudyBg})` }}
                        >
                            <div className="flex flex-row justify-between items-center">
                                <h2 className="inline-block font-normal text-[32px] font-mbc text-white">자료구조</h2>
                                <InfoIcon />
                            </div>
                            <div className="h-4 bg-[#EEEEEE] rounded-full">
                                <div
                                    className=" h-full rounded-full text-right transition-all duration-300"
                                    style={{ width: `${70}%`, backgroundImage: 'var(--linear-main-gradient)' }}
                                ></div>
                            </div>
                        </article>

                        <article
                            className="w-[273px] h-[273px] rounded-[5px] px-2.5 py-4 shadow-card flex flex-col justify-start gap-3"
                            style={{ backgroundImage: `url(${StudyBg})` }}
                        >
                            <div className="flex flex-row justify-between items-center">
                                <h2 className="inline-block font-normal text-[32px] font-mbc text-white">자료구조</h2>
                                <InfoIcon />
                            </div>
                            <div className="h-4 bg-[#EEEEEE] rounded-full">
                                <div
                                    className=" h-full rounded-full text-right transition-all duration-300"
                                    style={{ width: `${70}%`, backgroundImage: 'var(--linear-main-gradient)' }}
                                ></div>
                            </div>
                        </article>

                        <article
                            className="w-[273px] h-[273px] rounded-[5px] px-2.5 py-4 shadow-card flex flex-col justify-start gap-3"
                            style={{ backgroundImage: `url(${StudyBg})` }}
                        >
                            <div className="flex flex-row justify-between items-center">
                                <h2 className="inline-block font-normal text-[32px] font-mbc text-white">자료구조</h2>
                                <InfoIcon />
                            </div>
                            <div className="h-4 bg-[#EEEEEE] rounded-full">
                                <div
                                    className=" h-full rounded-full text-right transition-all duration-300"
                                    style={{ width: `${70}%`, backgroundImage: 'var(--linear-main-gradient)' }}
                                ></div>
                            </div>
                        </article>

                        <article
                            className="w-[273px] h-[273px] rounded-[5px] px-2.5 py-4 shadow-card flex flex-col justify-start gap-3"
                            style={{ backgroundImage: `url(${StudyBg})` }}
                        >
                            <div className="flex flex-row justify-between items-center">
                                <h2 className="inline-block font-normal text-[32px] font-mbc text-white">자료구조</h2>
                                <InfoIcon />
                            </div>
                            <div className="h-4 bg-[#EEEEEE] rounded-full">
                                <div
                                    className=" h-full rounded-full text-right transition-all duration-300"
                                    style={{ width: `${70}%`, backgroundImage: 'var(--linear-main-gradient)' }}
                                ></div>
                            </div>
                        </article>
                    </div>

                    <div className="flex flex-row gap-8">
                        <article
                            className="w-[273px] h-[273px] rounded-[5px] px-2.5 py-4 shadow-card flex flex-col justify-start gap-3"
                            style={{ backgroundImage: `url(${StudyBg})` }}
                        >
                            <div className="flex flex-row justify-between items-center">
                                <h2 className="inline-block font-normal text-[32px] font-mbc text-white">자료구조</h2>
                                <InfoIcon />
                            </div>
                            <div className="h-4 bg-[#EEEEEE] rounded-full">
                                <div
                                    className=" h-full rounded-full text-right transition-all duration-300"
                                    style={{ width: `${70}%`, backgroundImage: 'var(--linear-main-gradient)' }}
                                ></div>
                            </div>
                        </article>

                        <article
                            className="w-[273px] h-[273px] rounded-[5px] px-2.5 py-4 shadow-card flex flex-col justify-start gap-3"
                            style={{ backgroundImage: `url(${StudyBg})` }}
                        >
                            <div className="flex flex-row justify-between items-center">
                                <h2 className="inline-block font-normal text-[32px] font-mbc text-white">자료구조</h2>
                                <InfoIcon />
                            </div>
                            <div className="h-4 bg-[#EEEEEE] rounded-full">
                                <div
                                    className=" h-full rounded-full text-right transition-all duration-300"
                                    style={{ width: `${70}%`, backgroundImage: 'var(--linear-main-gradient)' }}
                                ></div>
                            </div>
                        </article>

                        <article
                            className="w-[273px] h-[273px] rounded-[5px] px-2.5 py-4 shadow-card flex flex-col justify-start gap-3"
                            style={{ backgroundImage: `url(${StudyBg})` }}
                        >
                            <div className="flex flex-row justify-between items-center">
                                <h2 className="inline-block font-normal text-[32px] font-mbc text-white">자료구조</h2>
                                <InfoIcon />
                            </div>
                            <div className="h-4 bg-[#EEEEEE] rounded-full">
                                <div
                                    className=" h-full rounded-full text-right transition-all duration-300"
                                    style={{ width: `${70}%`, backgroundImage: 'var(--linear-main-gradient)' }}
                                ></div>
                            </div>
                        </article>

                        <article
                            className="w-[273px] h-[273px] rounded-[5px] px-2.5 py-4 shadow-card flex flex-col justify-start gap-3"
                            style={{ backgroundImage: `url(${StudyBg})` }}
                        >
                            <div className="flex flex-row justify-between items-center">
                                <h2 className="inline-block font-normal text-[32px] font-mbc text-white">자료구조</h2>
                                <InfoIcon />
                            </div>
                            <div className="h-4 bg-[#EEEEEE] rounded-full">
                                <div
                                    className=" h-full rounded-full text-right transition-all duration-300"
                                    style={{ width: `${70}%`, backgroundImage: 'var(--linear-main-gradient)' }}
                                ></div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default StudyPage;
