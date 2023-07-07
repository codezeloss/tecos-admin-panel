import PageTitle from "../../components/PageTitle.tsx";
import CustomInput from "../../components/CustomInput.tsx";
import { object, string } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import {
  createBlogCategory,
  getBlogCategory,
  updateBlogCategory,
} from "../../features/blogCategory/blogCategorySlice.ts";
import { resetState } from "../../utils/reset_redux_states.ts";

let schema = object({
  title: string().required("Blog Category name is required"),
});

function AddBlogCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // RTK
  const newBlogCategory = useSelector((state: any) => state.blogCategory);
  const {
    isSuccess,
    isError,
    isLoading,
    createdBlogCategory,
    blogCategoryName,
    updatedBlogCategory,
  } = newBlogCategory;

  // Blog Category id
  const bcId = location.pathname.split("/")[4];
  //
  useEffect(() => {
    if (bcId !== undefined) {
      // @ts-ignore
      dispatch(getBlogCategory(bcId));
    } else {
      dispatch(resetState());
    }
  }, [bcId]);

  // Toast
  useEffect(() => {
    if (isSuccess && createdBlogCategory) {
      toast.success("🦄 Blog Category added successfully!", {});
    }
    if (isSuccess && updatedBlogCategory) {
      toast.success("🦄 Blog Category updated successfully!", {});
      navigate("/admin/blogs/category-list");
    }
    if (isError) {
      toast.error("🦄 Something went wrong!!", {});
    }
  }, [isSuccess, isError, isLoading, createdBlogCategory]);

  // Formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: blogCategoryName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (bcId !== undefined) {
        const data = { id: bcId, blogCategoryData: values };
        // @ts-ignore
        dispatch(updateBlogCategory(data));
        dispatch(resetState());
      } else {
        // @ts-ignore
        dispatch(createBlogCategory(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
          navigate("/admin/blogs/category-list");
        }, 300);
      }
    },
  });

  return (
    <>
      <main className="bg-white h-screen p-8">
        <PageTitle
          title={`${bcId !== undefined ? "Edit" : "Add"} Blog Category`}
        />

        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <CustomInput
                type={"text"}
                name={"blog-category"}
                placeholder={"Enter Blog Category"}
                onBlur={formik.handleBlur("title")}
                onChange={formik.handleChange("title")}
                value={formik.values.title}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="error">
                  <p>{formik.errors.title}</p>
                </div>
              ) : null}
            </div>

            <button
              className="bg-secondary w-full py-3 text-white font-semibold rounded-md text-sm"
              type="submit"
            >
              {`${bcId !== undefined ? "Edit" : "Add"}`} Blog Category
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddBlogCategory;
