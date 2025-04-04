'use client'

import { useTransactions } from "../hooks/useTransactions"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"



export default function OverviewTransactions() {
    const {data: transactions, isLoading, error} = useTransactions()

    if (isLoading) {
        return (
            <section id = "overview-transactions" className = 'w-[clamp(300px, 90%, 400px)]'>
                <h3>Overview Transactions</h3>
                <Skeleton className = 'w-full h-[200px] rounded-lg' />
            </section>
        )
    }

    if (error || !transactions) {
        return (
            <div>Error loading transactions</div>
        )
    }

    const imageUrl = (avatar: string) => {
        if (avatar.startsWith('./assets/images/avatars/')) {
            return `/${avatar}`
        }
        return avatar
    }

    return (
        <section id = "overview-transactions" className = 'w-[clamp(300px, 90%, 400px)]'>
            <h3>Overview Transactions</h3>
            <div className = 'flex flex-col gap-4'>
                {transactions.slice(0, 5).map(transaction => (
                    <div key = {transaction.id}>
                        <div className = 'flex items-center gap-2'>
                            <Image src = {imageUrl(transaction.avatar)} alt = {transaction.name} width = {32} height = {32} className = 'rounded-full' />
                            <div>
                                <p>{transaction.name}</p>
                                <p>{transaction.category}</p>
                            </div>
                            <p>${transaction.amount}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}