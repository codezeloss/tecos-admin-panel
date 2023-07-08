import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link, useLocation } from "react-router-dom";
import { LuEdit } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle.tsx";
import { useEffect } from "react";
import { getOrders, getUserOrders } from "../../features/order/orderSlice.ts";

interface DataType {
  key: number;
  name: string;
  brand: string;
  count: number;
  amount: number;
  color: string;
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
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

function ViewOrder() {
  const data: DataType[] = [];
  const location = useLocation();
  const dispatch = useDispatch();

  // RTK
  const userOrdersState = useSelector((state: any) => state.order);
  console.log(userOrdersState.userOrders);

  // Get the user ID
  const userId = location.pathname.split("/")[3];
  console.log(userId);
  useEffect(() => {
    // @ts-ignore
    dispatch(getOrders());
    // @ts-ignore
    dispatch(getUserOrders(userId));
  }, []);

  //
  for (let i = 0; i < userOrdersState.length; i++) {
    data.push({
      key: i + 1,
      name: userOrdersState[i].products.product.title,
      brand: userOrdersState[i].products.product.brand,
      count: userOrdersState[i].products.product.count,
      amount: userOrdersState[i].products.product.price,
      color: userOrdersState[i].products.product.color,
      date: new Date(
        userOrdersState[i].products.product.createdAt
      ).toLocaleString(),
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
    <>
      <main className="h-screen p-8">
        <PageTitle title={"View Order"} />

        <Table columns={columns} dataSource={data} size="middle" />
      </main>
    </>
  );
}

export default ViewOrder;
