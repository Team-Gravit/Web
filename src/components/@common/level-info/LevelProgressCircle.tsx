interface LevelProgressCircleProps {
  level: number;
  maxLevel?: number;
  children?: React.ReactNode;
}

export default function LevelProgressCircle({
  level,
  maxLevel = 10,
  children,
}: LevelProgressCircleProps) {
  const size = 46; 
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(level / maxLevel, 1);
  const dashOffset = circumference * (1 - progress);

  return (
    <div className="relative w-[46px] h-[46px] flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        {children}
      </div>

      <svg
        width={size}
        height={size}
        className="absolute top-0 left-0 z-10"
        style={{ transform: "rotate(90deg) scale(-1, 1)" }}
        >

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#levelGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round" // 끝이 둥글게
          className="transition-all duration-500 ease-out"
        />
        <defs>
          <linearGradient id="levelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8100B3" />
            <stop offset="100%" stopColor="#DD00FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
