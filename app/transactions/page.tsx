'use client'

import { useTransactions } from "../hooks/useTransactions"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"
import ImageUrl from "../components/ImageUrl"
export default function Page () {
    const {data: transactions, isLoading, error} = useTransactions()

    if (isLoading) {
        return (
            <div>
                <Skeleton className = 'w-full h-[200px] rounded-lg' />
            </div>
        )
    }

    if (error || !transactions) {
        return <p>Error loading transactions</p>
    }

    return (
        <div>
            <h1 className = 'text-typ1'>Transactions</h1>
            <div>
                {transactions.map((transaction) => (
                    <div key={transaction.id}>
                        <Image src = {ImageUrl(transaction.avatar)} alt = {transaction.name} width = {32} height = {32} className = 'rounded-full' />
                        <p>{transaction.name}</p>
                        <p>{transaction.amount}</p>
                        <p>{transaction.date}</p>
                        <p>{transaction.category}</p>
                        <p>{transaction.recurring}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}