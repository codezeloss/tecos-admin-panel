import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PageTitle from "../../components/PageTitle.tsx";
import { date, number, object, string } from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { resetState } from "../../utils/reset_redux_states.ts";
import {
  createCoupon,
  getCoupon,
  updateCoupon,
} from "../../features/coupons/couponSlice.ts";
import CustomInput from "../../components/CustomInput.tsx";

let schema = object({
  name: string().required("Coupon name is required"),
  expiry: date().required("Coupon name is required"),
  discount: number().required("Coupon name is required"),
});

function AddCoupon() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // RTK
  const newCoupon = useSelector((state: any) => state.coupon);
  const {
    isSuccess,
    isError,
    isLoading,
    createdCoupon,
    couponName,
    couponExpiry,
    couponDiscount,
    updatedCoupon,
    updatedExpiry,
    updatedDiscount,
  } = newCoupon;

  // Coupon id
  const couponId = location.pathname.split("/")[4];
  //
  useEffect(() => {
    if (couponId !== undefined) {
      // @ts-ignore
      dispatch(getCoupon(couponId));
    } else {
      dispatch(resetState());
    }
  }, [couponId]);

  // Toast
  useEffect(() => {
    if (isSuccess && createdCoupon) {
      toast.success("🦄 Coupon added successfully!", {});
    }
    if (isSuccess && updatedCoupon && updatedExpiry && updatedDiscount) {
      toast.success("🦄 Coupon updated successfully!", {});
      navigate("/admin/coupons/coupons-list");
    }
    if (isError) {
      toast.error("🦄 Something went wrong!!", {});
    }
  }, [isSuccess, isError, isLoading, createdCoupon]);

  //
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: couponName || "",
      expiry: couponExpiry || "",
      discount: couponDiscount || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (couponId !== undefined) {
        const data = { id: couponId, couponData: values };
        // @ts-ignore
        dispatch(updateCoupon(data));
        dispatch(resetState);
      } else {
        // @ts-ignore
        dispatch(createCoupon(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState);
          navigate("/admin/coupons/coupons-list");
        }, 100);
      }
    },
  });

  return (
    <>
      <main className="bg-white h-screen p-8">
        <PageTitle
          title={`${couponId !== undefined ? "Edit" : "Add"} Coupon`}
        />

        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <CustomInput
                type={"text"}
                name={"add-coupon"}
                label={"Coupon name"}
                placeholder={"Friday"}
                onBlur={formik.handleBlur("name")}
                onChange={formik.handleChange("name")}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="error">
                  <p>{formik.errors.name}</p>
                </div>
              ) : null}
            </div>

            <div className="mb-3">
              <CustomInput
                type={"date"}
                name={"expiry"}
                label={"Expiration date"}
                placeholder={"dd/mm/yyyy"}
                onBlur={formik.handleBlur("expiry")}
                onChange={formik.handleChange("expiry")}
                value={formik.values.expiry}
              />
              {formik.touched.expiry && formik.errors.expiry ? (
                <div className="error">
                  <p>{formik.errors.expiry}</p>
                </div>
              ) : null}
            </div>

            <div className="mb-3">
              <CustomInput
                type={"number"}
                name={"discount"}
                placeholder={"%"}
                label={"Discount"}
                onBlur={formik.handleBlur("discount")}
                onChange={formik.handleChange("discount")}
                value={formik.values.discount}
              />
              {formik.touched.discount && formik.errors.discount ? (
                <div className="error">
                  <p>{formik.errors.discount}</p>
                </div>
              ) : null}
            </div>

            <button
              className="bg-secondary w-fit py-3 px-4 text-white font-semibold rounded-md text-xs"
              type="submit"
            >
              {`${couponId !== undefined ? "Edit" : "Add"}`} Coupon
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddCoupon;
