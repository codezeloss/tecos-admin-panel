import PageTitle from "../../components/PageTitle.tsx";
import CustomInput from "../../components/CustomInput.tsx";
import ReactQuill from "react-quill";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { array, number, object, string } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategories } from "../../features/productCategory/productCategorySlice.ts";
import "react-widgets/styles.css";
import Dropzone from "react-dropzone";
import { deleteImg, uploadImg } from "../../features/upload/uploadSlice.ts";
import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../../features/product/productSlice.ts";
import { getColors } from "../../features/color/colorSlice.ts";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Multiselect from "react-widgets/Multiselect";
import { resetState } from "../../utils/reset_redux_states.ts";
import { getBrands } from "../../features/brand/brandSlice.ts";

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
  tags: string().required("Tag is required"),
  quantity: string().required("Quantity is required"),
  color: array()
    .min(1, "Pick at least one color")
    .required("Color is required"),
});

function AddProduct() {
  const [color, setColor] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  //
  useEffect(() => {
    // @ts-ignore
    dispatch(getProducts());
    // @ts-ignore
    dispatch(getProductCategories());
    // @ts-ignore
    dispatch(getColors());
    // @ts-ignore
    dispatch(getBrands());
  }, []);

  // RTK states
  const brandState = useSelector((state: any) => state.brand.brands);
  const productCategoryState = useSelector(
    (state: any) => state.productCategory.productCategories
  );
  const colorState = useSelector((state: any) => state.color.colors);
  const imageState = useSelector((state: any) => state.upload.images);
  const newProduct = useSelector((state: any) => state.product);
  const {
    isSuccess,
    isError,
    isLoading,
    createdProduct,
    productTitle,
    productDesc,
    productPrice,
    productBrand,
    productCategory,
    productTags,
    productQuantity,
    productColor,
    productImages,
    updatedProductTitle,
  } = newProduct;

  // Product id
  const productId = location.pathname.split("/")[4];
  //
  useEffect(() => {
    if (productId !== undefined) {
      // @ts-ignore
      dispatch(getProduct(productId));
    } else {
      dispatch(resetState());
    }
  }, [productId]);

  //
  let colorOptions: any[] = [];
  colorState.forEach((i: any) => {
    colorOptions.push({
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

  // Toast
  useEffect(() => {
    if (isSuccess && createdProduct) {
      toast.success("Product added successfully!", {});
    }
    if (isSuccess && updatedProductTitle) {
      toast.success("Product updated successfully!", {});
      navigate("/admin/catalog/product-list");
    }
    if (isError) {
      toast.error("Something went wrong!!", {});
    }
  }, [isSuccess, isError, isLoading, createdProduct]);

  // Formik
  useEffect(() => {
    // @ts-ignore
    formik.values.color = color ? color : "";
    // @ts-ignore
    formik.values.images = img;
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: productTitle || "",
      description: productDesc || "",
      price: productPrice || "",
      brand: productBrand || "",
      category: productCategory || "",
      tags: productTags || "",
      quantity: productQuantity || "",
      color: productColor || [],
      images: productImages || [],
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (productId !== undefined) {
        const data = { id: productId, productData: values };
        // @ts-ignore
        dispatch(updateProduct(data));
        dispatch(resetState());
      } else {
        // @ts-ignore
        dispatch(createProduct(values));
        formik.resetForm();
        setColor([]);
        setTimeout(() => {
          dispatch(resetState());
          navigate("/admin/catalog/product-list");
        }, 300);
      }
    },
  });

  return (
    <>
      <main className="bg-white p-8">
        <PageTitle
          title={`${productId !== undefined ? "Edit" : "Add"} Product`}
        />

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
                {brandState.map((i: any) => {
                  return <option value={i.title}>{i.title}</option>;
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
                {productCategoryState.map((i: any) => {
                  return <option value={i.title}>{i.title}</option>;
                })}
              </select>
              {formik.touched.category && formik.errors.category ? (
                <div className="error">
                  <p>{formik.errors.category}</p>
                </div>
              ) : null}
            </div>

            <div className="mb-6">
              <p className="text-sm text-black font-semibold mb-1">
                Product tags
              </p>
              <select
                className="py-2 px-4 bg-gray-100 text-gray-800 w-full text-sm outline-none font-medium mt-1"
                name="tags"
                id="product-tags"
                placeholder="tags 01"
                onBlur={formik.handleBlur("tags")}
                onChange={formik.handleChange("tags")}
                value={formik.values.tags}
              >
                <option value="" disabled>
                  select
                </option>
                <option value="featured">Featured</option>
                <option value="popular">Popular</option>
                <option value="special">Special</option>
              </select>
              {formik.touched.tags && formik.errors.tags ? (
                <div className="error">
                  <p>{formik.errors.tags}</p>
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
                data={colorOptions}
                onChange={(e: any) => {
                  setColor(e);
                }}
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
                          Drag 'n' drop some files here, or click to select
                          files
                        </p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
              <div className="my-6 relative z-10">
                {imageState?.map((i: any) => {
                  // @ts-ignore
                  return (
                    <div>
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
              className="bg-secondary w-fit py-3 px-4 text-white font-semibold rounded-md text-xs"
              type="submit"
            >
              {`${productId !== undefined ? "Edit" : "Add"}`} Product
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddProduct;
