import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { LuEdit } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteBlogCategory,
  getBlogCategories,
} from "../../features/blogCategory/blogCategorySlice.ts";
import CustomModal from "../CustomModal.tsx";

interface DataType {
  key: number;
  name: string;
  action: any;
}

const columns: ColumnsType<DataType> = [
  {
    title: "S.No.",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a: any, b: any) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

function BlogCategoryListTable({ blogCategoriesData }: any) {
  const data: DataType[] = [];
  const [open, setOpen] = useState(false);
  const [blogCategoryId, setBlogCategoryId] = useState("");
  const dispatch = useDispatch();

  // Modal
  const showModal = (id: string) => {
    setOpen(true);
    setBlogCategoryId(id);
  };
  const hideModal = () => {
    setOpen(false);
  };

  // Delete BlogCategory
  const delBlogCategory = (id: string) => {
    // @ts-ignore
    dispatch(deleteBlogCategory(id));
    setOpen(false);
    // @ts-ignore
    dispatch(getBlogCategories());
  };

  for (let i = 0; i < blogCategoriesData.length; i++) {
    data.push({
      key: i + 1,
      name: blogCategoriesData[i].title,

      action: (
        <div className="flex items-center gap-1">
          <Link
            to={`/admin/blogs/add-blog-category/${blogCategoriesData[i]._id}`}
          >
            <LuEdit />
          </Link>
          <button
            type={"button"}
            className="text-lg text-red-600"
            onClick={() => showModal(blogCategoriesData[i]._id)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      ),
    });
  }

  return (
    <div>
      <Table columns={columns} dataSource={data} size="middle" />
      <CustomModal
        open={open}
        hideModal={hideModal}
        performAction={() => delBlogCategory(blogCategoryId)}
        title={"Are you sure you want to delete this blog category?"}
      />
    </div>
  );
}

export default BlogCategoryListTable;
