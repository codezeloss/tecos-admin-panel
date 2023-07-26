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
    title: "Total Price",
    dataIndex: "price",
  },
  {
    title: "Total Price After Discount",
    dataIndex: "dprice",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

function OrdersTable({ ordersData }: any) {
  let data: any[] = [];
  for (let i = 0; i < ordersData?.length; i++) {
    data.push({
      key: i,
      name: ordersData[i]?.user.firstname + " " + ordersData[i]?.user.lastname,
      product: ordersData[i]?.orderItems.length,
      price: ordersData[i]?.totalPrice ? ordersData[i]?.totalPrice : "--",
      dprice: ordersData[i]?.totalPriceAfterDiscount
        ? ordersData[i]?.totalPriceAfterDiscount
        : "--",
      status: ordersData[i]?.paymentInfos?.orderStatus,
    });
  }

  return (
    <div className="w-full mb-20">
      <h3 className="text-xl mt-10 mb-6 font-semibold">Recent Orders</h3>
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
  );
}

export default OrdersTable;
