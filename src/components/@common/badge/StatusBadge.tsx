import React from 'react';

type StatusBadgeProps = {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    className?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

function StatusBadge({ icon: Icon, label, className = '', ...props }: StatusBadgeProps) {
    return (
        <span
            className={`flex flex-row items-center justify-center gap-0.5 text-xl font-bold px-1.5 py-1 bg-white rounded-full text-main-2 ${className}`}
            {...props}
        >
            <Icon className="bg-main-1 rounded-full w-5 h-5 p-0.5" />
            <span>{label}</span>
        </span>
    );
}

export default StatusBadge;
