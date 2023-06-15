import PageTitle from "../../components/PageTitle.tsx";
import CustomInput from "../../components/CustomInput.tsx";
import { InboxOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";
import { message, Upload, UploadProps } from "antd";
import { useState } from "react";

const { Dragger } = Upload;
const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
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

function AddProduct() {
  const [value, setValue] = useState("");

  return (
    <>
      <main className="bg-white h-screen p-8">
        <PageTitle title="Add Product" />

        <div>
          <form action="">
            <div className="mb-6">
              <CustomInput
                type={"text"}
                label={"Enter Product Title"}
                name={"product-title"}
                placeholder={"Product 01"}
              />
            </div>

            <div className="bg-white mb-6">
              <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                value={value}
                onChange={(e: any) => setValue(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <CustomInput
                type={"number"}
                label={"Enter Product Price"}
                name={"product-price"}
                placeholder={"100"}
              />
            </div>

            <div className="mb-6">
              <p className="text-sm text-black font-semibold mb-1">
                Select Brand
              </p>
              <select
                className="py-2 px-4 bg-gray-100 text-gray-800 w-full text-sm outline-none font-medium mt-1"
                name=""
                id=""
                placeholder="category 01"
              >
                <option value="">val 01</option>
              </select>
            </div>

            <div className="mb-6">
              <p className="text-sm text-black font-semibold mb-1">
                Select Blog category
              </p>
              <select
                className="py-2 px-4 bg-gray-100 text-gray-800 w-full text-sm outline-none font-medium mt-1"
                name=""
                id=""
                placeholder="category 01"
              >
                <option value="">val 01</option>
              </select>
            </div>

            <div className="mb-6">
              <p className="text-sm text-black font-semibold mb-1">
                Select Color
              </p>
              <select
                className="py-2 px-4 bg-gray-100 text-gray-800 w-full text-sm outline-none font-medium mt-1"
                name=""
                id=""
                placeholder="category 01"
              >
                <option value="">val 01</option>
              </select>
            </div>

            <div className="mt-8 mb-4">
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </Dragger>
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
