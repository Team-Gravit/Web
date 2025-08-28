import backgroundImg from '@/assets/images/background.webp';
import defaultPlanet from '@/assets/images/planets/Moon.png';
import { useParams } from 'react-router-dom';
import { getPlanetImage } from '../constants/planet-image';

import MascotSvg from '@/assets/mascot/mascot-space-suit.svg?react';
import Line from '@/assets/mascot/line.svg?react';
import CircularSegmentIndicator from '../components/chapter-page/CircularSegmentIndicator';
import { useState } from 'react';
import Tooltip from '../components/chapter-page/Tooltip';
import fetchUnits from '../api/fetchUnits';
import { useQuery } from '@tanstack/react-query';

const positions = [
    { x: 70, y: 170 },
    { x: 52, y: 280 },
    { x: 34, y: 390 },
    { x: 16, y: 500 },
    { x: 34, y: 610 },
    { x: 52, y: 720 },
    { x: 70, y: 800 },
];

function ChapterDetailPage() {
    const { chapterId } = useParams();
    const [tooltip, setTooltip] = useState<number | null>(null);

    const { data, isPending, isError, error } = useQuery({
        queryKey: ['unit-list', { id: chapterId }],
        queryFn: () => fetchUnits(Number(chapterId)),
    });

    // 최대 y 좌표 + 여유 공간으로 실제 높이 계산
    const maxY = Math.max(...positions.map((pos) => pos.y));
    const contentHeight = maxY + 200; // 여유 공간 추가

    if (isPending) {
        <div>로딩중</div>;
    }

    if (isError) {
        <div>{error.message}</div>;
    }

    const units = data;

    if (!data) {
        return <div></div>;
    }

    if (data) {
        console.log(data);
    }

    return (
        <div
            className="w-full bg-no-repeat relative"
            style={{
                backgroundImage: `url(${backgroundImg}), url(${getPlanetImage(Number(chapterId))})`,
                backgroundSize: 'cover, 110px 110px',
                backgroundPosition: 'center, top-left',
                backgroundRepeat: 'no-repeat, no-repeat',
                minHeight: 'calc(100vh - var(--header-height))',
                height: `${contentHeight}px`,
            }}
        >
            {units?.map((unit, index) => {
                if (index == 0) {
                    return (
                        <button
                            key={unit.id}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                            style={{
                                left: `${positions[index].x}%`,
                                top: `${positions[index].y}px`,
                                zIndex: tooltip === index ? 50 : 10,
                            }}
                            onClick={() => {
                                setTooltip(tooltip === index ? null : index);
                            }}
                        >
                            <CircularSegmentIndicator chapterNumber={3}>
                                <img src={getPlanetImage(Number(chapterId))} className="w-[110px]" alt={unit.name} />
                            </CircularSegmentIndicator>
                            {tooltip === index && <Tooltip chapterName={unit.name} chapterNumber={unit.id} xp={20} />}
                        </button>
                    );
                }

                return (
                    <button
                        key={unit.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        style={{
                            left: `${positions[index].x}%`,
                            top: `${positions[index].y}px`,
                            zIndex: tooltip === index ? 50 : 10,
                        }}
                        onClick={() => {
                            setTooltip(tooltip === index ? null : index);
                        }}
                    >
                        <img src={defaultPlanet} className="w-[110px]" alt={unit.name} />
                        {tooltip === index && <Tooltip chapterName={unit.name} chapterNumber={unit.id} xp={20} />}
                    </button>
                );
            })}

            <Line className="absolute bottom-30 lg:bottom-50 right-0 w-[150px] lg:w-[333px]" />
            <MascotSvg className="absolute bottom-50 w-[150px] lg:w-[232px] right-25 z-10" />
        </div>
    );
}

export default ChapterDetailPage;
