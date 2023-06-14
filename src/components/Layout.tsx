import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.tsx";
import Headbar from "./Headbar.tsx";

function Layout() {
  return (
    <>
      <div className="flex overflow-hidden">
        <div className="w-[300px]">
          <Sidebar />
        </div>
        <div className="w-full h-screen bg-gray-100 overflow-scroll">
          <Headbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
