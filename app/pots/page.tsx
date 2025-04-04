'use client'

import { usePots } from "../hooks/usePots"
import { Skeleton } from "@/components/ui/skeleton"

export default function Page () {
    const {data: pots, isLoading, error} = usePots()

    if (isLoading) {
        return (
            <div>
                <Skeleton className = 'w-full h-[200px] rounded-lg' />
            </div>
        )
    }

    if (error || !pots) {
        return <p>Error loading pots</p>
    }

    return (
        <div>
            <h1 className = 'text-typ1'>Pots</h1>
            <div>
                {pots.map((pot) => (
                    <div key={pot.id}>
                        <p>{pot.name}</p>
                        <p>${pot.total}</p>
                        <p>${pot.target}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}