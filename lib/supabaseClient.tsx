import { createClient } from '@supabase/supabase-js'
import data from './data.json'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function seedDatabase() {
    try {
        // Insert balance data
        const {error: balanceError } = await supabase.from('balance').insert({
            current: data.balance.current,
            income: data.balance.income,
            expenses: data.balance.expenses
        })

        if (balanceError) {
            throw balanceError
        }
        
        // Insert budgets data
        const {error: budgetsError} = await supabase
            .from('budgets')
            .insert(data.budgets.map(budget => ({
                category: budget.category,
                maximum: budget.maximum,
                theme: budget.theme
            })))

        if (budgetsError) {
            throw budgetsError
        }
        
        // Insert transactions data
        const {error: transactionsError} = await supabase
            .from('transactions')
            .insert(data.transactions.map(transaction => ({
                avatar: transaction.avatar,
                name: transaction.name,
                category: transaction.category,
                date: transaction.date,
                amount: transaction.amount,
                recurring: transaction.recurring
            })))

        if (transactionsError) {
            throw transactionsError
        }

        // Insert pots data
        const {error: potsError} = await supabase
            .from('pots')
            .insert(data.pots.map(pot => ({
                name: pot.name,
                target: pot.target,
                total: pot.total,
                theme: pot.theme
            })))

        if (potsError) {
            throw potsError
        }

        console.log('Database seeded successfully!')
    } catch (error) {
        console.error('Error seeding database:', error)
        throw error
    }
    
}
