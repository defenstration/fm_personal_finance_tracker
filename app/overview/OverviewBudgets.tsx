import DonutChart from "../components/DonutChart"
import data from "@/lib/data.json"

console.log(data)

const budgetData = [
    { category: "Entertainment", amount: 50, color: "#277C78" },
    { category: "Bills", amount: 750, color: "#82C9D7" },
    { category: "Dining Out", amount: 75, color: "#F2CDAC" },
    { category: "Personal Care", amount: 100, color: "#626070" },
];

export default function OverviewBudgets() {
    return (
        <section id="overview-budgets" className='w-[clamp(300px, 90%, 400px)]'>
            <div className="flex justify-between">
                <h3 className='text-typ3'>Budgets</h3>
                <div>See Details</div>
            </div>
            <DonutChart data={budgetData} totalBudget={975} currentSpend={500} />
        </section>
    )
}