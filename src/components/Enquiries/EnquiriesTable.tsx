import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { LuEdit } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

interface DataType {
  key: number;
  name: string;
  email: string;
  comment: string;
  mobile: string;
  status: any;
  date: string;
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
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Comment",
    dataIndex: "comment",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

function EnquiriesTable({ enquiriesData }: any) {
  const data: DataType[] = [];

  for (let i = 0; i < enquiriesData.length; i++) {
    data.push({
      key: i + 1,
      name: enquiriesData[i].name,
      email: enquiriesData[i].email,
      comment: enquiriesData[i].comment,
      mobile: enquiriesData[i].mobile,
      status: (
        <select
          className="py-2 px-4 bg-gray-100 text-gray-800 w-full text-sm outline-none font-medium mt-1"
          name=""
          id=""
          placeholder="category 01"
        >
          <option value="">Submitted</option>
          <option value="">Submitted</option>
          <option value="">Submitted</option>
        </select>
      ),
      date: new Date(enquiriesData[i].createdAt).toLocaleString(),
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
    <div>
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
  );
}

export default EnquiriesTable;
