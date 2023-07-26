import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Layout from "./components/Layout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Enquiries from "./pages/Enquiries/Enquiries.tsx";
import BlogCategoryList from "./pages/Blogs/BlogCategoryList.tsx";
import BlogList from "./pages/Blogs/BlogList.tsx";
import Orders from "./pages/Orders/Orders.tsx";
import Customers from "./pages/Customers.tsx";
import ProductList from "./pages/Catalog/ProductList.tsx";
import BrandList from "./pages/Catalog/BrandList.tsx";
import CategoryList from "./pages/Catalog/CategoryList.tsx";
import ColorList from "./pages/Catalog/ColorList.tsx";
import AddBlog from "./pages/Blogs/AddBlog.tsx";
import AddBlogCategory from "./pages/Blogs/AddBlogCategory.tsx";
import AddColor from "./pages/Catalog/AddColor.tsx";
import AddCategory from "./pages/Catalog/AddCategory.tsx";
import AddBrand from "./pages/Catalog/AddBrand.tsx";
import AddProduct from "./pages/Catalog/AddProduct.tsx";
import AddCoupon from "./pages/Coupons/AddCoupon.tsx";
import CouponsList from "./pages/Coupons/CouponsList.tsx";
import ViewEnquiry from "./pages/Enquiries/ViewEnquiry.tsx";
import ViewOrder from "./pages/Orders/ViewOrder.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/catalog/add-product" element={<AddProduct />} />
          <Route
            path="/admin/catalog/add-product/:id"
            element={<AddProduct />}
          />
          <Route path="/admin/catalog/product-list" element={<ProductList />} />
          <Route path="/admin/catalog/add-brand" element={<AddBrand />} />
          <Route path="/admin/catalog/add-brand/:id" element={<AddBrand />} />
          <Route path="/admin/catalog/brand-list" element={<BrandList />} />
          <Route path="/admin/catalog/add-color" element={<AddColor />} />
          <Route path="/admin/catalog/add-color/:id" element={<AddColor />} />
          <Route path="/admin/catalog/color-list" element={<ColorList />} />
          <Route path="/admin/catalog/add-category" element={<AddCategory />} />
          <Route
            path="/admin/catalog/add-category/:id"
            element={<AddCategory />}
          />
          <Route
            path="/admin/catalog/category-list"
            element={<CategoryList />}
          />
          <Route path="/admin/blogs/add-blog" element={<AddBlog />} />
          <Route path="/admin/blogs/add-blog/:id" element={<AddBlog />} />
          <Route path="/admin/blogs/list" element={<BlogList />} />
          <Route
            path="/admin/blogs/add-blog-category"
            element={<AddBlogCategory />}
          />
          <Route
            path="/admin/blogs/add-blog-category/:id"
            element={<AddBlogCategory />}
          />
          <Route
            path="/admin/blogs/category-list"
            element={<BlogCategoryList />}
          />
          <Route path="/admin/coupons/add-coupon" element={<AddCoupon />} />
          <Route path="/admin/coupons/add-coupon/:id" element={<AddCoupon />} />
          <Route path="/admin/coupons/coupons-list" element={<CouponsList />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/orders/:id" element={<ViewOrder />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/enquiries" element={<Enquiries />} />
          <Route path="/admin/enquiries/:id" element={<ViewEnquiry />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
