type SubjectProgressProps = {
  current: number; 
  total: number;  
};

const SubjectProgress = ({ current, total }: SubjectProgressProps) => {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className="w-full">
      <div className="relative h-4 bg-[#EEEEEE] rounded-full overflow-hidden mt-4">
        <div
          className="h-full rounded-full transition-all duration-300 bg-main-1"
          style={{
            width: `${percentage}%`
          }}
        />
      </div>

      <div className="text-[22px] text-white mt-1 font-normal">
        {current}/{total}
      </div>
    </div>
  );
};

export default SubjectProgress;
