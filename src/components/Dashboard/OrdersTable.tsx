import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";

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
];

function OrdersTable() {
  return (
    <div>
      <h3 className="text-xl mt-10 mb-4 font-semibold">Recent Orders</h3>
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
  );
}

export default OrdersTable;
