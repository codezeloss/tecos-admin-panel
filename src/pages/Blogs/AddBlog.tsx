import PageTitle from "../../components/PageTitle.tsx";
import CustomInput from "../../components/CustomInput.tsx";
import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import { array, object, string } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Dropzone from "react-dropzone";
import { deleteImg, uploadImg } from "../../features/upload/uploadSlice.ts";
import { toast } from "react-toastify";
import { getBlogCategories } from "../../features/blogCategory/blogCategorySlice.ts";
import {
  createBlog,
  getBlog,
  updateBlog,
} from "../../features/blogs/blogSlice.ts";
import { resetState } from "../../utils/reset_redux_states.ts";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

let schema = object({
  title: string().required("Title is required"),
  description: string().required("Description is required"),
  category: string().required("Category is required"),
  images: array().required("Image is required"),
});

function AddBlog() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // @ts-ignore
    dispatch(getBlogCategories());
  }, [getBlogCategories]);

  // RTK
  const imageState = useSelector((state: any) => state.upload.images);
  // Handle Images
  let img: any[] = [];
  imageState.forEach((i: any) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });

  const blogCategoryState = useSelector(
    (state: any) => state.blogCategory.blogCategories
  );
  const newBlog = useSelector((state: any) => state.blog);
  const {
    isSuccess,
    isError,
    isLoading,
    createdBlog,
    blogName,
    blogDescription,
    blogCategory,
    blogImages,
    updatedBlog,
    updatedDescription,
    updatedCategory,
    updatedImages,
  } = newBlog;

  // Blog Category id
  const blogId = location.pathname.split("/")[4];
  //
  useEffect(() => {
    if (blogId !== undefined) {
      // @ts-ignore
      dispatch(getBlog(blogId));
      img.push(blogImages);
    } else {
      dispatch(resetState());
    }
  }, [blogId]);

  // Toast
  useEffect(() => {
    if (isSuccess && createdBlog) {
      toast.success("🦄 Blog Post added successfully!", {});
    }
    if (
      isSuccess &&
      updatedBlog &&
      updatedDescription &&
      updatedCategory &&
      updatedImages
    ) {
      toast.success("🦄 Blog updated successfully!", {});
      navigate("/admin/blogs/list");
    }
    if (isError) {
      toast.error("🦄 Something went wrong!!", {});
    }
  }, [isSuccess, isError, isLoading, createdBlog]);

  useEffect(() => {
    // @ts-ignore
    formik.values.images = img;
  }, []);

  // Formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: blogName || "",
      description: blogDescription || "",
      category: blogCategory || "",
      images: blogImages || [],
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (blogId !== undefined) {
        const data = { id: blogId, blogsData: values };
        // @ts-ignore
        dispatch(updateBlog(data));
        dispatch(resetState());
      } else {
        // @ts-ignore
        dispatch(createBlog(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
          navigate("/admin/blogs/list");
        }, 300);
      }
    },
  });

  return (
    <>
      <main className="bg-white p-8">
        <PageTitle title={`${blogId !== undefined ? "Edit" : "Add"} Blog`} />

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-6">
            <CustomInput
              type={"text"}
              label={"Blog Title"}
              name={"blog-title"}
              placeholder={"Write here"}
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

          <div className="mb-6">
            <p className="text-sm text-black font-semibold mb-1">
              Product category
            </p>
            <select
              className="py-2 px-4 bg-gray-100 text-gray-800 w-full text-sm outline-none font-medium mt-1"
              name="category"
              id="blog-category"
              placeholder="category 01"
              onBlur={formik.handleBlur("category")}
              onChange={formik.handleChange("category")}
              value={formik.values.category}
            >
              <option value="">select</option>
              {blogCategoryState.map(
                (i: any, j: React.Key | null | undefined) => {
                  return (
                    <option key={j} value={i.title}>
                      {i.title}
                    </option>
                  );
                }
              )}
            </select>
            {formik.touched.category && formik.errors.category ? (
              <div className="error">
                <p>{formik.errors.category}</p>
              </div>
            ) : null}
          </div>

          <div className="bg-white mb-6">
            <p className="text-sm text-black font-semibold mb-1">
              Blog Description
            </p>
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              onBlur={formik.handleBlur("description")}
              onChange={formik.handleChange("description")}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="error">
                <p>{formik.errors.description}</p>
              </div>
            ) : null}
          </div>

          <div>
            <p className="text-sm text-black font-semibold mb-1">Blog Image</p>
            <div className="bg-white p-8 text-center mb-6 rounded-md border-[1px] border-gray-200 cursor-pointer">
              <Dropzone
                onDrop={(acceptedFiles) => {
                  // @ts-ignore
                  dispatch(uploadImg(acceptedFiles));
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
            <div className="my-6 relative z-10">
              {imageState?.map((i: any, j: React.Key | null | undefined) => {
                // @ts-ignore
                return (
                  <div key={j}>
                    <img
                      className=""
                      src={i.url}
                      alt={"Uploaded Image"}
                      width={300}
                      height={300}
                    />
                    <button
                      className="bg-white py-1 px-2 rounded-full text-xs font-bold text-gray-800 absolute left-1 top-1 z-20"
                      type="button"
                      onClick={() => {
                        // @ts-ignore
                        dispatch(deleteImg(i.public_id));
                      }}
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            className="bg-secondary w-full py-3 text-white font-semibold rounded-md text-sm"
            type="submit"
          >
            {`${blogId !== undefined ? "Edit" : "Add"}`} Blog
          </button>
        </form>
      </main>
    </>
  );
}

export default AddBlog;
