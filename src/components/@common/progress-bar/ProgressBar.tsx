type ProgressProps = {
    completed: number;
    level: number;
};

const ProgressBar = ({ completed, level }: ProgressProps) => {
    return (
        <div className="relative flex-grow h-[30px] bg-white rounded-full my-[50px] overflow-hidden">
            <div
                className=" h-full rounded-full text-right transition-all duration-300"
                style={{ width: `${completed}%`, backgroundImage: 'var(--linear-main-gradient)' }}
            >
                {/* 레벨 텍스트 */}
                <span className="absolute inset-y-0 left-0 pl-5 text-white font-bold flex items-center">LV{level}</span>
            </div>
        </div>
    );
};
export default ProgressBar;
