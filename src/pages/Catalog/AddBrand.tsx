import PageTitle from "../../components/PageTitle.tsx";
import CustomInput from "../../components/CustomInput.tsx";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { object, string } from "yup";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import {
  createBrand,
  getBrand,
  updateBrand,
} from "../../features/brand/brandSlice.ts";
import { useEffect } from "react";
import { resetState } from "../../utils/reset_redux_states.ts";

let schema = object({
  title: string().required("Brand name is required"),
});

function AddBrand() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // ** RTK - Brand State
  const newBrand = useSelector((state: any) => state.brand);
  const {
    isSuccess,
    isError,
    isLoading,
    createdBrand,
    brandName,
    updatedBrand,
  } = newBrand;

  // ** Brand id
  const brandId = location.pathname.split("/")[4];
  //
  useEffect(() => {
    if (brandId !== undefined) {
      // @ts-ignore
      dispatch(getBrand(brandId));
    } else {
      dispatch(resetState());
    }
  }, [brandId]);

  // ** Toast
  useEffect(() => {
    if (isSuccess && createdBrand) {
      toast.success("🦄 Brand added successfully!", {});
    }
    if (isSuccess && updatedBrand) {
      toast.success("🦄 Brand updated successfully!", {});
      navigate("/admin/catalog/brand-list");
    }
    if (isError) {
      toast.error("🦄 Something went wrong!!", {});
    }
  }, [isSuccess, isError, isLoading, createdBrand]);

  // ** Formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: String(brandName) || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (brandId !== undefined) {
        const data = { id: brandId, brandData: values };
        // @ts-ignore
        dispatch(updateBrand(data));
        dispatch(resetState());
      } else {
        // @ts-ignore
        dispatch(createBrand(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
          navigate("/admin/catalog/brand-list");
        }, 1000);
      }
    },
  });

  return (
    <>
      <main className="bg-white h-screen p-8">
        <PageTitle title={`${brandId !== undefined ? "Edit" : "Add"} Brand`} />

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
              {`${brandId !== undefined ? "Edit" : "Add"}`} Brand
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddBrand;
