import { Link } from "react-router-dom";
import { HiOutlineUserGroup, HiQueueList } from "react-icons/hi2";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { BsNewspaper } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useState } from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Sidebar() {
  const [showCatalogOptions, setShowCatalogOptions] = useState(false);
  const [showBlogsOptions, setShowBlogsOptions] = useState(false);
  const [showCouponsOptions, setShowCouponsOptions] = useState(false);

  return (
    <div className="bg-primary w-[300px] h-screen max-h-screen min-h-screen text-white pb-10 overflow-scroll overflow-x-hidden">
      <h1 className="text-3xl pl-8 py-6 font-bold">@Tecos.</h1>

      <div className="flex flex-col gap-2">
        <div>
          <Link to="/admin/dashboard">
            <div className="flex items-center gap-1 px-8 py-2 hover:bg-gray-800">
              <LuLayoutDashboard />
              <p className="font-medium text-base">Dashboard</p>
            </div>
          </Link>
        </div>

        <div>
          <div
            className="cursor-pointer"
            onClick={() => setShowCatalogOptions(!showCatalogOptions)}
          >
            <div className="flex items-center justify-between px-8 py-2 pr-3 hover:bg-gray-800">
              <div className="flex items-center gap-1">
                <HiQueueList />
                <p className="font-medium text-base">Catalog</p>
              </div>
              <IoIosArrowUp />
            </div>
          </div>
          {showCatalogOptions && (
            <div className="text-sm px-14 flex flex-col gap-3 my-2">
              <div className="flex flex-col gap-1.5">
                <Link to="/admin/catalog/add-product">
                  <p>Add Product</p>
                </Link>
                <Link to="/admin/catalog/product-list">
                  <p>Product List</p>
                </Link>
              </div>
              <div className="flex flex-col gap-1.5">
                <Link to="/admin/catalog/add-brand">
                  <p>Add Brand</p>
                </Link>
                <Link to="/admin/catalog/brand-list">
                  <p>Brand List</p>
                </Link>
              </div>
              <div className="flex flex-col gap-1.5">
                <Link to="/admin/catalog/add-category">
                  <p>Add Category</p>
                </Link>
                <Link to="/admin/catalog/category-list">
                  <p>Category List</p>
                </Link>
              </div>
              <div className="flex flex-col gap-1.5">
                <Link to="/admin/catalog/add-color">
                  <p>Add Color</p>
                </Link>
                <Link to="/admin/catalog/color-list">
                  <p>Color List</p>
                </Link>
              </div>
            </div>
          )}
        </div>

        <div>
          <div
            className="cursor-pointer"
            onClick={() => setShowBlogsOptions(!showBlogsOptions)}
          >
            <div className="flex items-center justify-between px-8 py-2 pr-3 hover:bg-gray-800">
              <div className="flex items-center gap-1">
                <BsNewspaper />
                <p className="font-medium text-base">Blogs</p>
              </div>
              <IoIosArrowDown />
            </div>
          </div>
          {showBlogsOptions && (
            <div className="text-sm px-14 flex flex-col gap-3 my-2">
              <div className="flex flex-col gap-1.5">
                <Link to="/admin/blogs/add-blog">
                  <p>Add Blog</p>
                </Link>
                <Link to="/admin/blogs/list">
                  <p>Blog List</p>
                </Link>
              </div>
              <div className="flex flex-col gap-1.5">
                <Link to="/admin/blogs/add-blog-category">
                  <p>Add Blog Category</p>
                </Link>
                <Link to="/admin/blogs/category-list">
                  <p>Blog Category List</p>
                </Link>
              </div>
            </div>
          )}
        </div>

        <div>
          <div
            className="cursor-pointer"
            onClick={() => setShowCouponsOptions(!showCouponsOptions)}
          >
            <div className="flex items-center justify-between px-8 py-2 pr-3 hover:bg-gray-800">
              <div className="flex items-center gap-1">
                <TbShoppingCartDiscount />
                <p className="font-medium text-base">Coupons</p>
              </div>
              <IoIosArrowDown />
            </div>
          </div>
          {showCouponsOptions && (
            <div className="text-sm px-14 flex flex-col gap-3 my-2">
              <Link to="/admin/coupons/add-coupon">
                <p>Add Coupon</p>
              </Link>
              <Link to="/admin/coupons/coupons-list">
                <p>Coupon List</p>
              </Link>
            </div>
          )}
        </div>

        <div>
          <Link to="/admin/orders">
            <div className="flex items-center gap-1 px-8 py-2 hover:bg-gray-800">
              <MdOutlineAttachMoney />
              <p className="font-medium text-base">Orders</p>
            </div>
          </Link>
        </div>

        <div>
          <Link to="/admin/customers">
            <div className="flex items-center gap-1 px-8 py-2 hover:bg-gray-800">
              <RiCustomerService2Line />
              <p className="font-medium text-base">Customers</p>
            </div>
          </Link>
        </div>

        <div>
          <Link to="/admin/enquiries">
            <div className="flex items-center gap-1 px-8 py-2 hover:bg-gray-800">
              <HiOutlineUserGroup />
              <p className="font-medium text-base">Enquiries</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
