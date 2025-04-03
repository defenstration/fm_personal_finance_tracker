import OverviewPots from "./OverviewPots";
import OverviewBudgets from "./OverviewBudgets";
import OverviewTransactions from "./OverviewTransactions";
import OverviewRecurring from "./OverviewRecurring";



export default function OverviewItems () {
    return (
        <section id = "overview-items" className = "grid gap-4 tablet:gap-6 desktop:grid-cols-2 p-10">
            <OverviewPots />
            <OverviewBudgets />
            <OverviewTransactions />
            <OverviewRecurring />
        </section>
    )
}

