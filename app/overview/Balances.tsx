const Balances = () => {
    return (
        <section id = "balances" className = "flex flex-col justify-between tablet:flex-row gap-4">
            <div id = "current-balance" className = "balance-card bg-grey-900 text-beige-100">
                <h4>Current Balance</h4>
                <div className = "text-1">$0.00</div>
            </div>
            <div id = "income" className = "balance-card bg-beige-100 text-grey-900">
                <h4>Income</h4>
                <div className = "text-1">$0.00</div>
            </div>
            <div id = "expenses" className = "balance-card bg-beige-100 text-grey-900">
                <h4>Expenses</h4>
                <div className = "text-1">$0.00</div>
            </div>
        </section>
    )
}


export default Balances