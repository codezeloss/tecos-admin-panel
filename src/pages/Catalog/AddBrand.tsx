import PageTitle from "../../components/PageTitle.tsx";
import CustomInput from "../../components/CustomInput.tsx";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { object, string } from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { createBrand } from "../../features/brand/brandSlice.ts";
import { useEffect } from "react";

let schema = object({
  title: string().required("Brand name is required"),
});

function AddBrand() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //
  const newBrand = useSelector((state: any) => state.brand);
  const { isSuccess, isError, isLoading, createdBrand } = newBrand;

  useEffect(() => {
    if (isSuccess && createdBrand) {
      toast.success("🦄 Brand added successfully!", {});
    }
    if (isError) {
      toast.error("🦄 Something went wrong!!", {});
    }
  }, [isSuccess, isError, isLoading]);

  //
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // @ts-ignore
      dispatch(createBrand(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/category/brand-list");
      }, 3000);
    },
  });

  return (
    <>
      <main className="bg-white h-screen p-8">
        <PageTitle title="Add Brand" />

        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <CustomInput
                type={"text"}
                name={"add-brand"}
                placeholder={"Add Brand"}
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
              Add Brand
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddBrand;
