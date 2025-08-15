import React, { type ReactNode } from 'react';

const CircularSegmentIndicator = ({ children, chapterNumber }: { children: ReactNode; chapterNumber: number }) => {
    const progress = 33.33 * chapterNumber;

    // 설정값들
    const settings = {
        segmentsCount: 3,
        segmentWidth: 17,
        spaceBetweenSegments: 25, // degrees
        segmentColor: '#81DACD',
        defaultSegmentColor: '#FFFFFF99',
        animationDuration: 0.5,
        isStaticSegmentsVisible: true,
    };

    // 도를 라디안으로 변환
    const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

    // 세그먼트 경로 계산
    const calculateSegmentPath = (segmentIndex: number, radius: number, centerX: number, centerY: number) => {
        const emptySpace = settings.segmentsCount * settings.spaceBetweenSegments;
        const emptySpaceInRadians = toRadians(emptySpace);

        const summedSpaceForSegments = 2 * Math.PI - emptySpaceInRadians;
        const segmentSpace = summedSpaceForSegments / settings.segmentsCount;

        const halfSpace = toRadians(settings.spaceBetweenSegments) / 2;

        const startAngle = segmentSpace * segmentIndex + halfSpace + 2 * halfSpace * segmentIndex - Math.PI / 2; // -90도로 12시 방향 시작
        const endAngle = startAngle + segmentSpace;

        const startX = centerX + radius * Math.cos(startAngle);
        const startY = centerY + radius * Math.sin(startAngle);
        const endX = centerX + radius * Math.cos(endAngle);
        const endY = centerY + radius * Math.sin(endAngle);

        const largeArcFlag = segmentSpace > Math.PI ? 1 : 0;

        return {
            path: `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
            circumference: radius * segmentSpace,
            startAngle,
            endAngle,
        };
    };

    // 현재 진행도에 따른 세그먼트 상태 계산
    const getSegmentProgress = (segmentIndex: number, progress: number) => {
        const singlePart = 100 / settings.segmentsCount;
        const segmentStart = segmentIndex * singlePart;
        const segmentEnd = (segmentIndex + 1) * singlePart;

        if (progress <= segmentStart) return 0;
        if (progress >= segmentEnd) return 1;
        return (progress - segmentStart) / singlePart;
    };

    const radius = 75;
    const centerX = 85;
    const centerY = 85;
    const svgSize = 170;

    return (
        <div className="relative flex items-center justify-center">
            <svg width={svgSize} height={svgSize} className="absolute">
                {/* 정적 세그먼트 (배경) */}
                {settings.isStaticSegmentsVisible &&
                    Array.from({ length: settings.segmentsCount }, (_, index) => {
                        const segmentData = calculateSegmentPath(index, radius, centerX, centerY);
                        return (
                            <path
                                key={`static-${index}`}
                                d={segmentData.path}
                                fill="none"
                                stroke={settings.defaultSegmentColor}
                                strokeWidth={settings.segmentWidth}
                                strokeLinecap="round"
                                opacity="0.3"
                            />
                        );
                    })}

                {/* 동적 세그먼트 (진행도) */}
                {Array.from({ length: settings.segmentsCount }, (_, index) => {
                    const segmentData = calculateSegmentPath(index, radius, centerX, centerY);
                    const segmentProgress = getSegmentProgress(index, progress);
                    const strokeDasharray = segmentData.circumference;
                    const strokeDashoffset = segmentData.circumference * (1 - segmentProgress);

                    return (
                        <path
                            key={`dynamic-${index}`}
                            d={segmentData.path}
                            fill="none"
                            stroke={settings.segmentColor}
                            strokeWidth={settings.segmentWidth}
                            strokeLinecap="round"
                            strokeDasharray={strokeDasharray}
                            strokeDashoffset={strokeDashoffset}
                            style={{
                                transition: `stroke-dashoffset ${settings.animationDuration}s ease-in-out`,
                            }}
                        />
                    );
                })}
            </svg>

            {/* 중앙 컨텐츠 영역 */}
            <div className="relative z-10 w-[110px] h-[110px] flex items-center justify-center">{children}</div>
        </div>
    );
};

export default CircularSegmentIndicator;
