import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { LuEdit } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import React from "react";

interface DataType {
  key: number;
  name: string;
  product: any;
  amount: number;
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
  },
  {
    title: "Title",
    dataIndex: "product",
  },
  {
    title: "Amount",
    dataIndex: "amount",
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

function OrdersTable({ ordersData }: any) {
  const data: DataType[] = [];

  for (let i = 0; i < ordersData.length; i++) {
    data.push({
      key: i + 1,
      name: ordersData[i].orderBy.firstname,
      product: ordersData[i].products.map(
        (i: any, j: React.Key | null | undefined) => {
          return (
            <ul key={j}>
              <li>{i?.product?.title}</li>
            </ul>
          );
        }
      ),
      amount: ordersData[i].paymentIntent.amount,
      date: new Date(ordersData[i].createdAt).toLocaleString(),
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

export default OrdersTable;
