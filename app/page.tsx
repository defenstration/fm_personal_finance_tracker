import Balances from "./overview/Balances";
import OverviewItems from "./overview/OverviewItems";

export default function Page () {
    return (
        <div id = "content" className = "grid h-dvh left-10 p-6 tablet:p-8 gap-8">
            <h2>Overview</h2>
            <Balances />
            <OverviewItems />
        </div>
    ) 
}

