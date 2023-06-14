import PageTitle from "../../components/PageTitle.tsx";
import CustomInput from "../../components/CustomInput.tsx";
import { useState } from "react";
import ReactQuill from "react-quill";

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

        <form>
          <div className="mb-6">
            <CustomInput
              type={"text"}
              label={"Enter Blog Title"}
              name={"blog-title"}
              placeholder={"Write here"}
            />
          </div>

          <div className="bg-white mb-6">
            <p className="text-sm text-black font-semibold mb-1">
              Select blog category
            </p>
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
