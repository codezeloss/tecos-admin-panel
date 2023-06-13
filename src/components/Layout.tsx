import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.tsx";
import Headbar from "./Headbar.tsx";

function Layout() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full bg-gray-100">
          <Headbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
