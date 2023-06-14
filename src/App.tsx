import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import Layout from "./components/Layout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Enquiries from "./pages/Enquiries.tsx";
import BlogCategoryList from "./pages/Blogs/BlogCategoryList.tsx";
import BlogList from "./pages/Blogs/BlogList.tsx";
import Orders from "./pages/Orders.tsx";
import Customers from "./pages/Customers.tsx";
import ProductList from "./pages/Catalog/ProductList.tsx";
import BrandList from "./pages/Catalog/BrandList.tsx";
import CategoryList from "./pages/Catalog/CategoryList.tsx";
import ColorList from "./pages/Catalog/ColorList.tsx";
import AddBlog from "./pages/Blogs/AddBlog.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/enquiries" element={<Enquiries />} />
          <Route path="/admin/blogs/list" element={<BlogList />} />
          <Route
            path="/admin/blogs/category-list"
            element={<BlogCategoryList />}
          />
          <Route path="/admin/blogs/add-blog" element={<AddBlog />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route
            path="/admin/category/product-list"
            element={<ProductList />}
          />
          <Route path="/admin/category/brand-list" element={<BrandList />} />
          <Route
            path="/admin/category/category-list"
            element={<CategoryList />}
          />
          <Route path="/admin/category/color-list" element={<ColorList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
