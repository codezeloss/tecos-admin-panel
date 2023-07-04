import PageTitle from "../../components/PageTitle.tsx";
import CustomInput from "../../components/CustomInput.tsx";
import { object, string } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { createProductCategory } from "../../features/productCategory/productCategorySlice.ts";

let schema = object({
  title: string().required("Product Category name is required"),
});

function AddCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //
  const newCategory = useSelector((state: any) => state.productCategory);
  const { isSuccess, isError, isLoading, createdProductCategory } = newCategory;

  useEffect(() => {
    if (isSuccess && createdProductCategory) {
      toast.success("🦄 Product Category added successfully!", {});
    }
    if (isError) {
      toast.error("🦄 Something went wrong!!", {});
    }
  }, [isSuccess, isError, isLoading, createdProductCategory]);

  //
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // @ts-ignore
      dispatch(createProductCategory(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/category/category-list");
      }, 3000);
    },
  });

  return (
    <>
      <main className="bg-white h-screen p-8">
        <PageTitle title="Add Category" />

        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <CustomInput
                type={"text"}
                name={"add-product-category"}
                placeholder={"category"}
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
              className="bg-secondary w-fit py-3 px-4 text-white font-semibold rounded-md text-xs"
              type="submit"
            >
              Add Category
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddCategory;
