import PageTitle from "../../components/PageTitle.tsx";
import CustomInput from "../../components/CustomInput.tsx";
import { object, string } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { createBlogCategory } from "../../features/blogCategory/blogCategorySlice.ts";

let schema = object({
  title: string().required("Blog Category name is required"),
});

function AddBlogCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //
  const newBlogCategory = useSelector((state: any) => state.blogCategory);
  const { isSuccess, isError, isLoading, createdBlogCategory } =
    newBlogCategory;

  useEffect(() => {
    if (isSuccess && createdBlogCategory) {
      toast.success("🦄 Blog Category added successfully!", {});
    }
    if (isError) {
      toast.error("🦄 Something went wrong!!", {});
    }
  }, [isSuccess, isError, isLoading, createdBlogCategory]);

  //
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // @ts-ignore
      dispatch(createBlogCategory(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/blogs/category-list");
      }, 3000);
    },
  });

  return (
    <>
      <main className="bg-white h-screen p-8">
        <PageTitle title="Add Blog Category" />

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
              Add Blog Category
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddBlogCategory;
