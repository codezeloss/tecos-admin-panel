import { Table } from "antd";
import React from "react";
import { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  name: string;
  product: number;
  status: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "S.No.",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    product: 32,
    status: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    product: 42,
    status: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    product: 32,
    status: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "John Brown",
    product: 32,
    status: "New York No. 1 Lake Park",
  },
  {
    key: "5",
    name: "Jim Green",
    product: 42,
    status: "London No. 1 Lake Park",
  },
  {
    key: "6",
    name: "Joe Black",
    product: 32,
    status: "Sydney No. 1 Lake Park",
  },
  {
    key: "7",
    name: "John Brown",
    product: 32,
    status: "New York No. 1 Lake Park",
  },
  {
    key: "8",
    name: "Jim Green",
    product: 42,
    status: "London No. 1 Lake Park",
  },
  {
    key: "9",
    name: "Joe Black",
    product: 32,
    status: "Sydney No. 1 Lake Park",
  },
];

function BlogListTable() {
  return (
    <div>
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
  );
}

export default BlogListTable;
