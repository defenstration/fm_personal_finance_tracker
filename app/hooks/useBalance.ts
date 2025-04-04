import {useQuery} from '@tanstack/react-query'
import { supabase } from '@/lib/supabaseClient'

export interface Balance {
    id: string
    current: number
    income: number
    expenses: number
}

export function useBalance() {
    return useQuery({
        queryKey: ['balance'],
        queryFn: async () => {
            const {data, error} = await supabase
                .from('balance')
                .select('*')
                .single()

            if (error) {
                console.error('Supabase error:', error)
                throw error
            }

            return data as Balance
        }
    })
}
