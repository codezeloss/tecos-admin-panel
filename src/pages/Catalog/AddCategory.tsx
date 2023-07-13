import PageTitle from "../../components/PageTitle.tsx";
import CustomInput from "../../components/CustomInput.tsx";
import { object, string } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import {
  createProductCategory,
  getProductCategory,
  updateProductCategory,
} from "../../features/productCategory/productCategorySlice.ts";
import { resetState } from "../../utils/reset_redux_states.ts";

let schema = object({
  title: string().required("Product Category name is required"),
});

function AddCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // RTK
  const newCategory = useSelector((state: any) => state.productCategory);
  const {
    isSuccess,
    isError,
    isLoading,
    createdProductCategory,
    categoryName,
    updatedProductCategory,
  } = newCategory;

  // Product Category id
  const pcId = location.pathname.split("/")[4];
  //
  useEffect(() => {
    if (pcId !== undefined) {
      // @ts-ignore
      dispatch(getProductCategory(pcId));
    } else {
      dispatch(resetState());
    }
  }, [pcId]);

  // Toast
  useEffect(() => {
    if (isSuccess && createdProductCategory) {
      toast.success("🦄 Product Category added successfully!", {});
    }
    if (isSuccess && updatedProductCategory) {
      toast.success("🦄 Product Category updated successfully!", {});
      navigate("/admin/catalog/category-list");
    }
    if (isError) {
      toast.error("🦄 Something went wrong!!", {});
    }
  }, [isSuccess, isError, isLoading, createdProductCategory]);

  // Formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: categoryName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (pcId !== undefined) {
        const data = { id: pcId, productCategoryData: values };
        // @ts-ignore
        dispatch(updateProductCategory(data));
        dispatch(resetState());
      } else {
        // @ts-ignore
        dispatch(createProductCategory(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
          navigate("/admin/catalog/category-list");
        }, 1000);
      }
    },
  });

  return (
    <>
      <main className="bg-white h-screen p-8">
        <PageTitle title={`${pcId !== undefined ? "Edit" : "Add"} Category`} />

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
              {`${pcId !== undefined ? "Edit" : "Add"}`} Category
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddCategory;
