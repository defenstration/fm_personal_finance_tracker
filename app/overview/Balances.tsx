'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

interface Balance {
    current: number
    income: number
    expenses: number
}


const Balances = () => {
    const [balance, setBalance] = useState<Balance | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchBalance() {
            try {
                const {data, error} = await supabase
                    .from('balance')
                    .select('*')
                    .single()

                if (error) throw error
                setBalance(data);
            } catch (error) {
                console.error('Error fetching balance:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchBalance()
    }, [])


    return (
        <section id = "balances" className = "flex flex-col gap-3 tablet:gap-4 tablet:flex-row ">
            <div id = "current-balance" className = "balance-card bg-grey-900 text-beige-100 flex flex-col gap-3 h-fit p-5 tablet:p-6 rounded-lg w-full">
                <h4>Current Balance</h4>
                <div className = "text-typ1">${loading ? '0.00' : balance?.current.toFixed(2)}</div>
            </div>
            <div id = "income" className = "balance-card bg-beige-100 text-grey-900 flex flex-col gap-3 h-fit p-5 tablet:p-6 rounded-lg w-full">
                <h4>Income</h4>
                <div className = "text-typ1">${loading ? '0.00' : balance?.income.toFixed(2)}</div>
            </div>
            <div id = "expenses" className = "balance-card bg-beige-100 text-grey-900 flex flex-col gap-3 h-fit p-5 tablet:p-6 rounded-lg w-full">
                <h4>Expenses</h4>
                <div className = "text-typ1">${loading ? '0.00' : balance?.expenses.toFixed(2)}</div>
            </div>
        </section>
    )
}


export default Balances