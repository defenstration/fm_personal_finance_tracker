import DonutChart from "../components/DonutChart"
import data from "@/lib/data.json"

console.log(data)

const budgetData = [
    { category: "Entertainment", amount: 50, color: "#1c9984" },
    { category: "Bills", amount: 750, color: "#96d3e2" },
    { category: "Dining Out", amount: 75, color: "#f3d6b1" },
    { category: "Personal Care", amount: 100, color: "#6a6378" },
];

export default function OverviewBudgets() {
    return (
        <section id = "overview-budgets" className = 'w-[clamp(300px, 90%, 400px)]'>
            <h3>Overview Budgets</h3>
            <DonutChart data={budgetData} totalBudget={975} currentSpend={500} />
        </section>
    )
}