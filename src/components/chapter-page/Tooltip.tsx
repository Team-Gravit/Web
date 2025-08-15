import { Link } from 'react-router-dom';

function Tooltip({ chapterName, chapterNumber, xp }: { chapterName: string; chapterNumber: number; xp: number }) {
    return (
        <div className="absolute transform top-full left-1/2 -translate-x-1/2 translate-y-3">
            {/* 툴팁 꼬리 */}
            <div className="w-0 h-0 mx-auto border-l-[12px] border-r-[12px] border-b-[12px] border-transparent border-b-[#FFB608]" />
            {/* 툴팁 몸통 */}
            <div className="bg-[#FFB608] flex flex-col p-4 w-[371px] h-[130px] rounded-2xl justify-between z-50">
                <h2 className="text-2xl font-bold text-white text-start">{`${chapterName}: ${chapterNumber}챕터`}</h2>
                <Link
                    to="/lesson"
                    className="h-[54px] bg-white text-xl font-semibold text-[#222124] rounded-2xl flex items-center justify-center"
                >
                    학습 시작하기 (+{xp}xp)
                </Link>
            </div>
        </div>
    );
}

export default Tooltip;
