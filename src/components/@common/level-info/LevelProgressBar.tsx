type LevelProgressBarProps = {
    completed: number;
    level: number;
};

const LevelProgressBar = ({ completed, level }: LevelProgressBarProps) => {
    return (
        <div className="relative flex-grow flex-1 h-full bg-white rounded-full overflow-hidden min-h-[30px]">
            <div
                className=" h-full transition-all duration-300 min-h-[30px]"
                style={{ width: `${completed}%`, backgroundImage: 'var(--linear-main-gradient)' }}
            >
                <span className="absolute inset-y-0 left-5 text-white font-bold inline-flex items-center h-full">
                    LV{level}
                </span>
            </div>
        </div>
    );
};
export default LevelProgressBar;
