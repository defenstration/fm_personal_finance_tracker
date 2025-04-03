'use client'

import DonutChart from "../components/DonutChart"
import data from "@/lib/data.json"
import { supabase } from "@/lib/supabaseClient"
import { useEffect, useState } from "react"

interface BudgetData {
    category: string
    amount: number
    color: string
}

interface budgets {
    id: string
    name: string
    maximum: number
    theme: string
}

const budgetData: BudgetData[] = [
    { category: "Entertainment", amount: 50, color: "#277C78" },
    { category: "Bills", amount: 750, color: "#82C9D7" },
    { category: "Dining Out", amount: 75, color: "#F2CDAC" },
    { category: "Personal Care", amount: 100, color: "#626070" },
];

export default function OverviewBudgets() {
    const [budgets, setBudgets] = useState<budgets[]>([])
    const [totalBudget, setTotalBudget] = useState(0)
    const [currentSpend, setCurrentSpend] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchBudgets() {
            try {
                const {data, error} = await supabase
                    .from('budgets')
                    .select('*')

                    if (error) throw error
                    setBudgets(data)
                    setTotalBudget(data.reduce((acc, budget) => acc + budget.maximum, 0))
            } catch (error) {
                console.error('Error fetching budgets:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchBudgets()
    }, [])

    console.log(budgets)
    
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