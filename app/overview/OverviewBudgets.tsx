'use client'

import DonutChart from "../components/DonutChart"
import {useBudgets, useTotalBudgetSpend} from "../hooks/useBudgets"
import {Skeleton} from "@/components/ui/skeleton"

export default function OverviewBudgets() {
    const {data: budgets, isLoading, error} = useBudgets({limit: 5})
    const budgetIds = budgets?.map(budget => budget.id) || []
    const {data: currentSpend = 0} = useTotalBudgetSpend(budgetIds)

    if (isLoading) {
        return (
        <section id="overview-budgets" className='w-[clamp(300px, 90%, 400px)]'>
            <div className="flex justify-between">
                <Skeleton className='w-24 h-4 rounded-lg' />
                <Skeleton className='w-24 h-4 rounded-lg' />
            </div>
            <Skeleton className="w-full h-[200px] rounded-lg" />
        </section>           
        )
    }

    if (error || !budgets) {
        return (
            <div>Error loading budgets</div>
        )
    }

    const totalBudget = budgets.reduce((sum, budget) => sum + budget.maximum, 0)

    return (
        <section id="overview-budgets" className='w-[clamp(300px, 90%, 400px)]'>
            <div className="flex justify-between">
                <h3 className='text-typ3'>Budgets</h3>
                <div>See Details</div>
            </div>
            <DonutChart data={budgets} totalBudget={totalBudget} currentSpend={currentSpend} />
        </section>
    )
}