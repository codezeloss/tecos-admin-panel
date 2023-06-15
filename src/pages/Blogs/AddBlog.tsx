import PageTitle from "../../components/PageTitle.tsx";
import CustomInput from "../../components/CustomInput.tsx";
import { useState } from "react";
import ReactQuill from "react-quill";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";

{
  /*
  import { Stepper } from "react-form-stepper";*/
}

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

function AddBlog() {
  const [value, setValue] = useState("");

  return (
    <>
      <main className="bg-white h-screen p-8">
        <PageTitle title="Add Blog" />

        {/*
          <div className="my-6">
            <Stepper
              steps={[
                { label: "Add Blog Details" },
                { label: "Upload Images" },
                { label: "Finish" },
              ]}
              activeStep={1}
            />
          </div>*/}

        <form>
          <div className="mb-6">
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

          <div className="mb-6">
            <CustomInput
              type={"text"}
              label={"Enter Blog Title"}
              name={"blog-title"}
              placeholder={"Write here"}
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

          <button
            className="bg-secondary w-full py-3 text-white font-semibold rounded-md text-sm"
            type="submit"
          >
            Add Blog
          </button>
        </form>
      </main>
    </>
  );
}

export default AddBlog;
