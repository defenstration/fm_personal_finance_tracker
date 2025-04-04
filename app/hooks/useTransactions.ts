import { useQuery } from "@tanstack/react-query"
import { supabase } from "@/lib/supabaseClient"

export interface Transaction {
    id: string
    avatar: string
    name: string
    category: string
    date: string
    amount: number
    recurring: boolean
}

interface UseTransactionOptions {
    limit?: number
    offset?: number
}

export function useTransactions({ limit = 10, offset = 0 }: UseTransactionOptions = {}) {
    return useQuery({
        queryKey: ['transactions', limit, offset],
        queryFn: async () => {
            const {data, error} = await supabase
                .from('transactions')
                .select('*')
                .order('date', { ascending: false })
                .range(offset, offset + limit - 1)

            if (error) {
                console.error('Supabase error:', error)
                throw error
            }
            return data as Transaction[]
        }
    })
}

export function useRecurringTransactions() {
    return useQuery({
        queryKey: ['recurring-transactions'],
        queryFn: async () => {
            const {data, error} = await supabase
                .from('transactions')
                .select('*')
                .eq('recurring', true)
                .order('date', { ascending: false })

            if (error) {
                console.error('Supabase error:', error)
                throw error
            }
            return data as Transaction[]
        }
    })
}
