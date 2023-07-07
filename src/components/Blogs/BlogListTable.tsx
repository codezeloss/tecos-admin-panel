import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { LuEdit } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBlog, getBlogs } from "../../features/blogs/blogSlice.ts";
import CustomModal from "../CustomModal.tsx";

interface DataType {
  key: number;
  name: string;
  category: string;
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
    title: "Category",
    dataIndex: "category",
    sorter: (a: any, b: any) => a.category.length - b.category.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

function BlogListTable({ blogsData }: any) {
  const data: DataType[] = [];
  const [open, setOpen] = useState(false);
  const [blogId, setBlogId] = useState("");
  const dispatch = useDispatch();

  // Modal
  const showModal = (id: string) => {
    setOpen(true);
    setBlogId(id);
  };
  const hideModal = () => {
    setOpen(false);
  };

  // Delete Blog
  const delBlog = (id: string) => {
    // @ts-ignore
    dispatch(deleteBlog(id));
    setOpen(false);
    // @ts-ignore
    dispatch(getBlogs());
  };

  for (let i = 0; i < blogsData.length; i++) {
    data.push({
      key: i + 1,
      name: blogsData[i].title,
      category: blogsData[i].category,
      action: (
        <div className="flex items-center gap-1">
          <Link to={`/admin/blogs/add-blog/${blogsData[i]._id}`}>
            <LuEdit />
          </Link>
          <button
            type={"button"}
            className="text-lg text-red-600"
            onClick={() => showModal(blogsData[i]._id)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      ),
    });
  }

  return (
    <div className="shadow-sm">
      <Table columns={columns} dataSource={data} size="middle" />
      <CustomModal
        open={open}
        hideModal={hideModal}
        performAction={() => delBlog(blogId)}
        title={"Are you sure you want to delete this blog?"}
      />
    </div>
  );
}

export default BlogListTable;
