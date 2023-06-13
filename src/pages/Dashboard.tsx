import LayoutDashPage from "../components/LayoutDashPage.tsx";
import StatusCard from "../components/Dashboard/StatusCard.tsx";

function Dashboard() {
  return (
    <div className="w-full h-screen p-5">
      <LayoutDashPage title="Dashboard" />

      <div>
        <div className="flex items-center gap-3">
          <StatusCard />
          <StatusCard />
          <StatusCard />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Dashboard;
