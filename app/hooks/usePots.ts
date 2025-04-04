import {useQuery} from '@tanstack/react-query'
import { supabase } from '@/lib/supabaseClient'

export interface Pot {
    id: string
    name: string
    target: number
    total: null
    theme: string
}

interface UsePotOptions {
    limit?: number
    offset?: number
}


export function usePots({ limit = 10, offset = 0 }: UsePotOptions = {}) {
    return useQuery({
        queryKey: ['posts', limit, offset],
        queryFn: async () => {
            const{data, error} = await supabase
                .from('pots')
                .select('*')
                .order('id', { ascending: false })
                .range(offset, offset + limit - 1)

            if (error) {
                console.error('Supabase error:', error)
                throw error
            }
            return data as Pot[]
        }
    })
}