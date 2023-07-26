import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useState } from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdLogOut } from "react-icons/io";

const items: MenuProps["items"] = [
  {
    label: <Link to="/admin">Profile</Link>,
    key: "0",
  },
  {
    label: <Link to="/admin">Inbox</Link>,
    key: "1",
  },
  {
    label: <Link to="/admin">Settings</Link>,
    key: "2",
  },
  {
    type: "divider",
  },
  {
    label: <p className="text-red-600 font-semibold">Sign Out</p>,
    key: "3",
  },
];

function Headbar() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  // ** RTK - User State
  const userState = useSelector((state: any) => state.auth);
  const { user } = userState;

  // ** Handle User Logout
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="bg-white flex items-center justify-between py-3 px-4 border-b-[1px] ">
      <div className="flex items-center gap-4">
        <button className="text-xl" type="button">
          <MdKeyboardDoubleArrowLeft />
        </button>
      </div>

      <div className="relative flex items-center gap-4">
        {/*
          <p className="text-sm font-semibold">EN</p>
          <div className="text-xl">
          <MdOutlineNotifications />
          </div>
         */}

        <Dropdown menu={{ items }} trigger={["click"]}>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img
              className="w-10 h-10 rounded-full"
              src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
              alt=""
            />
            <div className="text-xs">
              <p className="font-bold">{user && user?.firstname}</p>
              <p className="text-gray-500">{user && user?.email}</p>
            </div>
          </div>
        </Dropdown>

        <button className="text-xl text-red-500 ml-2" onClick={handleLogout}>
          <IoMdLogOut />
        </button>
      </div>
    </div>
  );
}

export default Headbar;
