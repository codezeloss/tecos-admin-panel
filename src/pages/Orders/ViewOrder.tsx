import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle.tsx";
import { useEffect } from "react";
import { getSingleOrder } from "../../features/order/orderSlice.ts";

interface DataType {}

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
    title: "Brand",
    dataIndex: "brand",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Count",
    dataIndex: "count",
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

function ViewOrder() {
  const data: any[] = [];
  const location = useLocation();
  const dispatch = useDispatch();

  // ** RTK
  const userOrdersState = useSelector((state: any) => state.order.singleOrder);

  // ** Get the order ID
  const orderId = location.pathname.split("/")[3];

  // ** Get the Product with its ID
  useEffect(() => {
    // @ts-ignore
    dispatch(getSingleOrder(orderId));
  }, []);

  // ** Push data to Table
  for (let i = 0; i < userOrdersState.orderItems?.length; i++) {
    data.push({
      key: i + 1,
      name: userOrdersState?.orderItems[i]?.product?.title,
      brand: userOrdersState?.orderItems[i]?.product?.brand,
      count: userOrdersState?.orderItems.length,
      amount: userOrdersState?.orderItems[i]?.price,
      color: userOrdersState?.orderItems[i]?.color?.title,
      action: (
        <>
          <select
            className="py-2 px-4 bg-gray-100 text-gray-800 w-full text-sm outline-none font-medium mt-1"
            name=""
            id=""
          >
            <option value="Ordered" disabled selected>
              Ordered
            </option>
            <option value="Processed">Processed</option>
            <option value="Shipped">Shipped</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
        </>
      ),
    });
  }

  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title={"View Order"} />

        <Table columns={columns} dataSource={data} size="middle" />
      </main>
    </>
  );
}

export default ViewOrder;
