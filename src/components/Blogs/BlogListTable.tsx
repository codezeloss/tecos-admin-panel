import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { LuEdit } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

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

  for (let i = 0; i < blogsData.length; i++) {
    data.push({
      key: i + 1,
      name: blogsData[i].title,
      category: blogsData[i].category,
      action: (
        <div className="flex items-center gap-1">
          <Link to="">
            <LuEdit />
          </Link>
          <Link className="text-lg text-red-600" to="">
            <MdDeleteOutline />
          </Link>
        </div>
      ),
    });
  }

  return (
    <div className="shadow-sm">
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
  );
}

export default BlogListTable;
