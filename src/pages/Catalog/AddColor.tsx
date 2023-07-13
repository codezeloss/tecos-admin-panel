import PageTitle from "../../components/PageTitle.tsx";
import CustomInput from "../../components/CustomInput.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { object, string } from "yup";
import {
  createColor,
  getColor,
  updateColor,
} from "../../features/color/colorSlice.ts";
import { resetState } from "../../utils/reset_redux_states.ts";

let schema = object({
  title: string().required("Color name is required"),
});

function AddColor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // RTK
  const newColor = useSelector((state: any) => state.color);
  const {
    isSuccess,
    isError,
    isLoading,
    createdColor,
    colorName,
    updatedColor,
  } = newColor;

  // Product color id
  const colorId = location.pathname.split("/")[4];
  //
  useEffect(() => {
    if (colorId !== undefined) {
      // @ts-ignore
      dispatch(getColor(colorId));
    } else {
      dispatch(resetState());
    }
  }, [colorId]);

  // Toast
  useEffect(() => {
    if (isSuccess && createdColor) {
      toast.success("🦄 Color added successfully!", {});
    }
    if (isSuccess && updatedColor) {
      toast.success("🦄 Color updated successfully!", {});
      navigate("/admin/catalog/color-list");
    }
    if (isError) {
      toast.error("🦄 Something went wrong!!", {});
    }
  }, [isSuccess, isError, isLoading, createdColor]);

  // Formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: colorName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (colorId !== undefined) {
        const data = { id: colorId, colorData: values };
        // @ts-ignore
        dispatch(updateColor(data));
        dispatch(resetState());
      } else {
        // @ts-ignore
        dispatch(createColor(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
          navigate("/admin/catalog/color-list");
        }, 1000);
      }
    },
  });

  return (
    <>
      <main className="bg-white h-screen p-8">
        <PageTitle title={`${colorId !== undefined ? "Edit" : "Add"} Color`} />

        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <CustomInput
                type={"text"}
                name={"add-color"}
                placeholder={"Add Color"}
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
              {`${colorId !== undefined ? "Edit" : "Add"}`} Color
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddColor;
