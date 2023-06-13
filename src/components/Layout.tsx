import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.tsx";

function Layout() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
