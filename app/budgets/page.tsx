'use client'

import { useBudgets } from "../hooks/useBudgets"
import { Skeleton } from "@/components/ui/skeleton"



export default function Page () {
    const {data: budgets, isLoading, error} = useBudgets()

    if (isLoading) {
        return (
            <div>
                <Skeleton className = 'w-full h-[200px] rounded-lg' />
            </div>
        )
    }

    if (error || !budgets) {    
        return <p>Error loading budgets</p>
    }

    return (
        <div>
            <h1 className = 'text-typ1'>Budgets</h1>
            <div>
                {budgets.map((budget) => (
                    <div key={budget.id}>
                        <p>{budget.category}</p>
                        <p>${budget.maximum}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}