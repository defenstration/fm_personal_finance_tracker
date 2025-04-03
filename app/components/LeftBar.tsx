interface LeftBarProps {
    borderColor: string; // This should be a Tailwind bg color class like 'bg-green'
    children: React.ReactNode;
}

export default function LeftBar({borderColor, children}: LeftBarProps) {
    return (
        <div className="relative pl-8">
            <div className={`absolute left-0 top-0 h-full w-1 rounded-full ${borderColor}`} />
            {children}
        </div>
    )
}
