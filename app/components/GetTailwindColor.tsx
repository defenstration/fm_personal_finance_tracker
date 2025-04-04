export default function GetTailwindColor(hex: string) {
    const colorMap: Record<string, string> = {
        '#277C78': 'bg-green',      // Teal color
        '#82C9D7': 'bg-cyan',       // Light blue
        '#F2CDAC': 'bg-yellow',     // Light orange/beige
        '#626070': 'bg-grey-500',   // Grey
        '#826CB0': 'bg-purple-1'    // Purple
    }

    return colorMap[hex] || 'bg-grey-500'
}