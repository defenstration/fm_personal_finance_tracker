import {useQuery} from '@tanstack/react-query'
import { supabase } from '@/lib/supabaseClient'

export interface Budget {
    id: string
    name: string
    maximum: number
    theme: string
}

interface UseBudgetOptions {
    limit?: number
    offset?: number
}

export function useBudgets({ limit = 10, offset = 0 }: UseBudgetOptions = {}) {
    return useQuery({
        queryKey: ['budgets', limit, offset],
        queryFn: async () => {
            const {data, error} = await supabase
                .from('budgets')
                .select('*')
                .order('created_at', { ascending: false })
                .range(offset, offset + limit - 1)

            if (error) {
                console.error('Supabase error:', error)
                throw error
            }
            return data as Budget[]
        }
    })
}

export function useBudgetDetails(budgetId: string) {
    return useQuery({
        queryKey: ['budget', budgetId],
        queryFn: async () => {
            const {data, error} = await supabase
                .from('budgets')
                .select('*, transactions:transactions(*)')
                .eq('id', budgetId)
                .single()

            if (error) throw error
            return data as Budget
        }
    })
}

export function useBudgetStats(budgetId: string) {
    return useQuery({
        queryKey: ['budget-stats', budgetId],
        queryFn: async () => {
            const now = new Date()
            const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

            const {data, error} = await supabase
                .from('transactions')
                .select('amount')
                .eq('budget_id', budgetId)
                .gte('date', startOfMonth.toISOString())
                .lt('date', now.toISOString())

            if (error) throw error

            return {
                currentSpend: data.reduce((sum, tx)=> sum + tx.amount, 0)
            }
        },
        enabled: !!budgetId
    })
}

export function useTotalBudgetSpend(budgetIds: string[]) {
    return useQuery({
        queryKey: ['total-budget-spend', budgetIds],
        queryFn: async () => {
            const now = new Date()
            const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

            const {data, error} = await supabase
                .from('transactions')
                .select('amount')
                .in('budget_id', budgetIds)
                .gte('date', startOfMonth.toISOString())
                .lt('date', now.toISOString())

            if (error) throw error

            return data.reduce((sum, tx) => sum + tx.amount, 0)
        },
        enabled: budgetIds.length > 0
    })
}