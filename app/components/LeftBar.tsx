interface LeftBarProps {
    borderColor: string;
    children: React.ReactNode;
}

export default function LeftBar({borderColor, children}: LeftBarProps) {
    return (
        <div className = "relative">
            <div className = "absolute top-0 left-0 h-full">
                <div className = {`w-1 h-full rounded-full ${borderColor}`}></div>
            </div>
            <div className = "pl-8">
                {children}
            </div>
        </div>
    )
}
