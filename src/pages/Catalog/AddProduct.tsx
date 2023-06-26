import PageTitle from "../../components/PageTitle.tsx";
import CustomInput from "../../components/CustomInput.tsx";
import ReactQuill from "react-quill";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { array, number, object, string } from "yup";
import { login } from "../../features/auth/authSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../features/brand/brandSlice.ts";
import { getProductCategories } from "../../features/productCategory/productCategorySlice.ts";
import "react-widgets/styles.css";
import Multiselect from "react-widgets/Multiselect";
import { getColors } from "../../features/color/colorSlice.ts";
import Dropzone from "react-dropzone";
import { deleteImg, uploadImg } from "../../features/upload/uploadSlice.ts";
import { createProducts } from "../../features/product/productSlice.ts";

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
  price: number().required("Price is required"),
  brand: string().required("Brand is required"),
  category: string().required("Category is required"),
  quantity: string().required("Quantity is required"),
  color: array().required("Colors are required"),
});

function AddProduct() {
  const dispatch = useDispatch();
  const [color, setColor] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // @ts-ignore
    dispatch(getBrands());
    // @ts-ignore
    dispatch(getProductCategories());
    // @ts-ignore
    dispatch(getColors());
  }, []);

  const brandState = useSelector((state: any) => state.brand.brands);
  const productCategoryState = useSelector(
    (state: any) => state.productCategory.productCategories
  );
  const colorState = useSelector((state: any) => state.color.colors);
  const imageState = useSelector((state: any) => state.upload.images);

  let colors: any[] = [];
  colorState.forEach((i: any) => {
    colors.push({
      _id: i._id,
      color: i.title,
    });
  });

  let img: any[] = [];
  imageState.forEach((i: any) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });

  useEffect(() => {
    formik.values.color = color;
    formik.values.images = images;
  }, [color, images]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      quantity: "",
      color: [],
      images: [],
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // @ts-ignore
      dispatch(createProducts(values));
    },
  });

  // @ts-ignore
  // @ts-ignore
  return (
    <>
      <main className="bg-white p-8">
        <PageTitle title="Add Product" />

        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-6">
              <CustomInput
                type={"text"}
                label={"Product Title"}
                name={"title"}
                placeholder={"Product 01"}
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

            <div>
              <p className="text-sm text-black font-semibold mb-1">
                Product Description
              </p>
              <div className="bg-white mb-6">
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
            </div>

            <div className="mb-6">
              <CustomInput
                type={"number"}
                label={"Product Price"}
                name={"price"}
                placeholder={"10.89"}
                onBlur={formik.handleBlur("price")}
                onChange={formik.handleChange("price")}
                value={formik.values.price}
              />
              {formik.touched.price && formik.errors.price ? (
                <div className="error">
                  <p>{formik.errors.price}</p>
                </div>
              ) : null}
            </div>

            <div className="mb-6">
              <p className="text-sm text-black font-semibold mb-1">
                Product Brand
              </p>
              <select
                className="py-2 px-4 bg-gray-100 text-gray-800 w-full text-sm outline-none font-medium mt-1"
                name="brand"
                id="product-brand"
                placeholder="category 01"
                onBlur={formik.handleBlur("brand")}
                onChange={formik.handleChange("brand")}
                value={formik.values.brand}
              >
                <option value="">select</option>
                {brandState.map((i: any, j: React.Key | null | undefined) => {
                  return (
                    <option key={j} value={i.title}>
                      {i.title}
                    </option>
                  );
                })}
              </select>
              {formik.touched.brand && formik.errors.brand ? (
                <div className="error">
                  <p>{formik.errors.brand}</p>
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
                id="product-category"
                placeholder="category 01"
                onBlur={formik.handleBlur("category")}
                onChange={formik.handleChange("category")}
                value={formik.values.category}
              >
                <option value="">select</option>
                {productCategoryState.map(
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

            <div className="mb-6 text-sm">
              <p className="text-sm text-black font-semibold mb-1">
                Product Color
              </p>
              <Multiselect
                dataKey="id"
                textField="color"
                data={colors}
                onChange={(e: any) => setColor(e)}
                value={formik.values.color}
              />
              {formik.touched.color && formik.errors.color ? (
                <div className="error">
                  <p>{formik.errors.color}</p>
                </div>
              ) : null}
            </div>

            <div className="mb-6">
              <CustomInput
                type={"number"}
                label={"Product Quantity"}
                name={"quantity"}
                placeholder={"100"}
                onBlur={formik.handleBlur("quantity")}
                onChange={formik.handleChange("quantity")}
                value={formik.values.quantity}
              />
              {formik.touched.quantity && formik.errors.quantity ? (
                <div className="error">
                  <p>{formik.errors.quantity}</p>
                </div>
              ) : null}
            </div>

            <div>
              <p className="text-sm text-black font-semibold mb-1">
                Product Image
              </p>
              <div className="bg-white p-8 text-center mb-6 rounded-md border-[1px] border-gray-200 cursor-pointer">
                <Dropzone
                  onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>
                          Drag 'n' drop some files here, or click to select
                          files
                        </p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
              <div className="my-6 relative z-10">
                {imageState?.map((i: any, j: React.Key | null | undefined) => {
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
                        onClick={() => dispatch(deleteImg(i.public_id))}
                      >
                        X
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              className="bg-secondary w-fit py-3 px-4 text-white font-semibold rounded-md text-xs"
              type="submit"
            >
              Add Product
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddProduct;
