import CustomInput from "../components/CustomInput.tsx";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice.ts";
import { useEffect } from "react";
import {
  getMonthlyOrdersData,
  getOrders,
  getYearlyStatsData,
} from "../features/order/orderSlice.ts";

// ** yup Schema
let userSchema = object({
  email: string().email("Email should be valid!").required("Email is required"),
  password: string().required("Password is required"),
});

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ** RTK - Auth State
  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state: any) => state.auth
  );

  // ** Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      // @ts-ignore
      dispatch(login(values));
    },
  });

  useEffect(() => {
    if (isSuccess) {
      // @ts-ignore
      dispatch(getMonthlyOrdersData());
      // @ts-ignore
      dispatch(getYearlyStatsData());
      // @ts-ignore
      dispatch(getOrders());
      navigate("/admin");
      window.location.reload();
    } else {
      navigate("/");
    }
  }, [user, isError, isSuccess, isLoading]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <form
        className="bg-white w-[400px] rounded-md shadow-sm p-8 flex flex-col"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="mb-6 font-medium">@Tecos. admin panel</h1>
        <h1 className="text-2xl mb-1 font-bold">Sign In</h1>
        <p className="text-sm mb-6 text-gray-600">
          Log in to your account to continue.
        </p>

        <div className="text-red-400 font-bold text-center">
          <p>{message.message == "Rejected" ? "You are not an Admin" : ""}</p>
        </div>

        <div className="mb-2">
          <CustomInput
            label={"Email Address"}
            type={"email"}
            name={"Email"}
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleChange("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">
              <p>{formik.errors.email}</p>
            </div>
          ) : null}
        </div>

        <div className="mb-2">
          <CustomInput
            label={"Password"}
            type={"password"}
            name={"Password"}
            value={formik.values.password}
            onChange={formik.handleChange("password")}
            onBlur={formik.handleChange("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">
              <p>{formik.errors.password}</p>
            </div>
          ) : null}
        </div>

        <button
          className="bg-secondary w-full py-3 text-white font-semibold rounded-md text-sm mt-3"
          type="submit"
        >
          Sign In
        </button>

        {/* <div className="flex items-center my-6">
          <div className="bg-gray-300 h-[1px] w-full" />
          <div className="text-xs text-gray-300 px-1 uppercase">Or</div>
          <div className="bg-gray-300 h-[1px] w-full" />
        </div>

          <div className="flex text-sm items-center gap-1 justify-center">
          <p className="text-gray-600">Don't have an account?</p>
          <Link className="text-blue-500 font-medium" to="/signup">
          Sign up
          </Link>
          </div> */}
      </form>
    </div>
  );
}

export default Login;
