import React from 'react';

type StatusBadgeProps = {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

function StatusBadge({ icon: Icon, label, className = '', ...props }: StatusBadgeProps) {
    return (
        <div
            className={`flex flex-row items-center justify-center gap-0.5 text-xl font-bold px-1.5 py-[3px] bg-white rounded-full text-main-2 ${className}`}
            {...props}
        >
            <div className="bg-main-1 rounded-full relative w-6 h-6">
                <Icon className="absolute w-5 h-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            <span>{label}</span>
        </div>
    );
}

export default StatusBadge;
