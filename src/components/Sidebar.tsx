import { Link } from "react-router-dom";
import { HiOutlineUserGroup, HiQueueList } from "react-icons/hi2";
import { FaOpencart } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { BsNewspaper } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";

function Sidebar() {
  return (
    <div className="bg-primary w-[350px] h-screen text-white">
      <h1 className="text-3xl pl-8 py-6 font-bold">
        <span className="text-amber-200">@</span>T
        <span className="text-amber-200">eco</span>s.
      </h1>

      <div className="flex flex-col gap-2">
        <div>
          <Link to="/admin">
            <div className="flex items-center gap-1 px-8 py-2 hover:bg-gray-800">
              <LuLayoutDashboard />
              <p className="font-medium text-base">Dashboard</p>
            </div>
          </Link>
        </div>

        <div>
          <Link to="/admin">
            <div className="flex items-center gap-1 px-8 py-2  hover:bg-gray-800">
              <HiQueueList />
              <p className="font-medium text-base">Catalog</p>
            </div>
          </Link>
          <div className="text-sm px-14 flex flex-col gap-3 my-2">
            <p>Add product</p>
            <p>Product list</p>
            <p>Brand</p>
            <p>Brand list</p>
            <p>Category</p>
            <p>Category list</p>
            <p>Color</p>
            <p>Color list</p>
          </div>
        </div>

        <div>
          <Link to="/admin">
            <div className="flex items-center gap-1 px-8 py-2  hover:bg-gray-800">
              <BsNewspaper />
              <p className="font-medium text-base">Blogs</p>
            </div>
          </Link>
          <div className="text-sm px-14 flex flex-col gap-3 my-2">
            <p>Add blog</p>
            <p>Blog list</p>
            <p>Add blog category</p>
            <p>Blog category list</p>
          </div>
        </div>

        <div>
          <Link to="/admin">
            <div className="flex items-center gap-1 px-8 py-2  hover:bg-gray-800">
              <TbShoppingCartDiscount />
              <p className="font-medium text-base">Coupons</p>
            </div>
          </Link>
          <div className="text-sm px-14 flex flex-col gap-3 my-2">
            <p>coupon</p>
            <p>list</p>
          </div>
        </div>

        <div>
          <Link to="/admin">
            <div className="flex items-center gap-1 px-8 py-2  hover:bg-gray-800">
              <FaOpencart />
              <p className="font-medium text-base">Orders</p>
            </div>
          </Link>
        </div>

        <div>
          <Link to="/admin">
            <div className="flex items-center gap-1 px-8 py-2  hover:bg-gray-800">
              <HiOutlineUserGroup />
              <p className="font-medium text-base">Customers</p>
            </div>
          </Link>
        </div>

        <div>
          <Link to="/admin">
            <div className="flex items-center gap-1 px-8 py-2  hover:bg-gray-800">
              <MdOutlineAttachMoney />
              <p className="font-medium text-base">Enquiries</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
