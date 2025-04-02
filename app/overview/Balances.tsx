const Balances = () => {
    return (
        <section id = "balances" className = "flex flex-col gap-3 tablet:gap-4 tablet:flex-row ">
            <div id = "current-balance" className = "balance-card bg-grey-900 text-beige-100 flex flex-col gap-3 h-fit p-5 tablet:p-6 rounded-lg w-full">
                <h4>Current Balance</h4>
                <div className = "text-typ1">$0.00</div>
            </div>
            <div id = "income" className = "balance-card bg-beige-100 text-grey-900 flex flex-col gap-3 h-fit p-5 tablet:p-6 rounded-lg w-full">
                <h4>Income</h4>
                <div className = "text-typ1">$0.00</div>
            </div>
            <div id = "expenses" className = "balance-card bg-beige-100 text-grey-900 flex flex-col gap-3 h-fit p-5 tablet:p-6 rounded-lg w-full">
                <h4>Expenses</h4>
                <div className = "text-typ1">$0.00</div>
            </div>
        </section>
    )
}


export default Balances