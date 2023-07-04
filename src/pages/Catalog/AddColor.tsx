import PageTitle from "../../components/PageTitle.tsx";
import CustomInput from "../../components/CustomInput.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { object, string } from "yup";
import { createColor } from "../../features/color/colorSlice.ts";

let schema = object({
  title: string().required("Color name is required"),
});

function AddColor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // -------
  const newColor = useSelector((state: any) => state.color);
  const { isSuccess, isError, isLoading, createdColor } = newColor;

  useEffect(() => {
    if (isSuccess && createdColor) {
      toast.success("🦄 Color added successfully!", {});
    }
    if (isError) {
      toast.error("🦄 Something went wrong!!", {});
    }
  }, [isSuccess, isError, isLoading, createdColor]);

  // --------
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // @ts-ignore
      dispatch(createColor(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/category/color-list");
      }, 3000);
    },
  });

  return (
    <>
      <main className="bg-white h-screen p-8">
        <PageTitle title="Add Color" />

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
              Add Color
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddColor;
