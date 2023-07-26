import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.tsx";
import Headbar from "./Headbar.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

{
  /*onContextMenu={(e) => e.preventDefault()}*/
}

function Layout() {
  return (
    <>
      <div className="flex overflow-hidden">
        <div className="w-[300px]">
          <Sidebar />
        </div>
        <div className="w-full h-screen bg-gray-100 overflow-scroll">
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Headbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
