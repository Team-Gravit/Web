import React, { useState } from 'react';
import XIcon from '@/assets/icons/x.svg?react';
import TimerIcon from '@/assets/icons/timer.svg?react';
import ClipBoardIcon from '@/assets/icons/clipboard.svg?react';
import LessonQuitModal from '../components/modal/LessonQuitModal';

function LessonPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOnClose() {
        setIsModalOpen(true);
    }
    return (
        <>
            {isModalOpen && <LessonQuitModal onClose={handleOnClose} isOpen={isModalOpen} />}
            <div className="flex flex-col w-full h-full">
                <header className="flex flex-row justify-between items-center px-10 py-6">
                    <button onClick={handleOnClose}>
                        <XIcon />
                    </button>
                    <h1 className="text-2xl font-semibold">자료구조</h1>
                    <div className="flex flex-row items-center gap-2">
                        <TimerIcon />
                        <p className="text-2xl font-semibold text-[#494949]">00:07</p>
                    </div>
                </header>
                <div className="relative w-full h-1 rounded bg-[#BA00FF]/20 z-20">
                    <div style={{ width: '50%' }} className="absolute left-0 top-0 h-full bg-[#BA00FF]" />
                </div>
                <main className="flex-grow bg-[#F2F2F2] flex flex-col items-center">
                    <section className="max-w-[1188px] flex flex-col gap-4 ">
                        <p className="flex flex-row gap-2 items-center">
                            <ClipBoardIcon />
                            <h2 className="inline-block font-semibold text-[32px]">1/10</h2>
                        </p>
                        <p className="font-semibold text-2xl">빈칸에 들어갈 단어를 고르세요</p>
                        <article className="w-full h-[216px] bg-white rounded-sm leading-[150%] p-4 border border-[#DCDCDC]">
                            OOO는 넣고 또 넣고, 위에 넣고 또 위에 넣고 꺼내면 위에 거부터 꺼내고 또 꺼내면 그 아래 거
                            꺼내고 다시 넣으면 또 위에 올라가고 다시 꺼내면 또 위에 거부터 빠지는 구조예요. 이런 거 보면
                            사람들은 다 말하죠. “이거 완전 ( ) 아냐?” OOO는 넣고 또 넣고, 위에 넣고 또 위에 넣고 꺼내면
                            위에 거부터 꺼내고 또 꺼내면 그 아래 거 꺼내고 다시 넣으면 또 위에 올라가고 다시 꺼내면 또
                            위에 거부터 빠지는 구조예요. 이런 거 보면 사람들은 다 말하죠. “이거 완전 ( ) 아냐?” OOO는
                            넣고 또 넣고, 위에 넣고 또 위에 넣고 꺼내면 위에 거부터
                        </article>
                    </section>
                    <section className="flex flex-col max-w-[1188px] w-full">
                        <ol className="flex flex-col">
                            <li className="flex flex-row gap-4 items-center w-full p-4 ">
                                <span className="inline-flex items-center justify-center rounded-full bg-white border border-[#6D6D6D] text-[#6D6D6D] w-10 h-10 font-bold">
                                    1
                                </span>
                                <span className="text-2xl font-medium text-[#6D6D6D]">FIFO</span>
                            </li>

                            <li className="flex flex-row gap-4 items-center w-full p-4">
                                <span className="inline-flex items-center justify-center rounded-full bg-white border border-[#6D6D6D] text-[#6D6D6D] w-10 h-10 font-bold">
                                    2
                                </span>
                                <span className="text-2xl font-medium text-[#6D6D6D]">DFS</span>
                            </li>

                            <li className="flex flex-row gap-4 items-center w-full p-4">
                                <span className="inline-flex items-center justify-center rounded-full bg-white border border-[#6D6D6D] text-[#6D6D6D] w-10 h-10 font-bold">
                                    3
                                </span>
                                <span className="text-2xl font-medium text-[#6D6D6D]">LIFO</span>
                            </li>

                            <li className="flex flex-row gap-4 items-center w-full p-4">
                                <span className="inline-flex items-center justify-center rounded-full bg-white border border-[#6D6D6D] text-[#6D6D6D] w-10 h-10 font-bold">
                                    4
                                </span>
                                <span className="text-2xl font-medium text-[#6D6D6D]">해시맵</span>
                            </li>

                            <li className="flex flex-row gap-4 items-center w-full p-4">
                                <span className="inline-flex items-center justify-center rounded-full bg-white border border-[#6D6D6D] text-[#6D6D6D] w-10 h-10 font-bold">
                                    5
                                </span>
                                <span className="text-2xl font-medium text-[#6D6D6D]">큐</span>
                            </li>
                        </ol>
                    </section>
                </main>
            </div>
        </>
    );
}

export default LessonPage;
