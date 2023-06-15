import PageTitle from "../components/PageTitle.tsx";
import StatusCard from "../components/Dashboard/StatusCard.tsx";
import IncomeCharts from "../components/Dashboard/IncomeCharts.tsx";
import OrdersTable from "../components/Dashboard/OrdersTable.tsx";

{
  /*
  import RecentReviewsTable from "../components/Dashboard/RecentReviewsTable.tsx";
  */
}

function Dashboard() {
  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Dashboard" />
        <div>
          <h3 className="text-xl mt-6 mb-4 font-semibold">Status</h3>
          <div className="flex items-center gap-3 mb-4">
            <StatusCard />
            <StatusCard />
            <StatusCard />
          </div>

          <div className="w-full grid grid-cols-2 gap-6">
            <OrdersTable />
            <IncomeCharts />
          </div>
          {/*<RecentReviewsTable />*/}
        </div>
      </main>
    </>
  );
}

export default Dashboard;
