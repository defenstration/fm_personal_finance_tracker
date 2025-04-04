import { useRecurringTransactions } from "../hooks/useTransactions"
import { Skeleton } from "@/components/ui/skeleton"


export default function OverviewRecurring() {
    const {data: recurringTransactions, isLoading, error} = useRecurringTransactions()

    if (isLoading) {
        return (
            <section id = "overview-recurring-bills" className = 'w-[clamp(300px, 90%, 400px)]'></section>
        )
    }

    if (error || !recurringTransactions) {
        return (
            <div>Error loading recurring transactions</div>
        )
    }
    
    const paidBillstotal = recurringTransactions.filter(transaction => transaction.category === 'Bills' && new Date(transaction.date) < new Date()).reduce((sum, transaction) => sum - transaction.amount, 0)
    const upcomingBillsTotal = recurringTransactions.filter(transaction => transaction.category === 'Bills' && new Date(transaction.date) >= new Date()).reduce((sum, transaction) => sum + transaction.amount, 0)
    const dueSoonBillsTotal = recurringTransactions.filter(transaction => {
        const dueDate = new Date(transaction.date)
        const today = new Date()
        const dueDateNextMonth = new Date(today.getFullYear(), today.getMonth() + 1, dueDate.getDate())
        return dueDateNextMonth <= today
    }).reduce((sum, transaction) => sum + transaction.amount, 0)


    return (
        <section id = "overview-recurring-bills" className = 'w-[clamp(300px, 90%, 400px)]'>
            <h3>Overview Recurring Bills</h3>
            <p>${paidBillstotal}</p>
            <p>${upcomingBillsTotal}</p>
            <p>${dueSoonBillsTotal}</p>
        </section>
    )
}

