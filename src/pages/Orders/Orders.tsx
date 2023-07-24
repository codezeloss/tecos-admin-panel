import PageTitle from "../../components/PageTitle.tsx";
import OrdersTable from "../../components/Orders/OrdersTable.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../../features/order/orderSlice.ts";

function Orders() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      // @ts-ignore
      dispatch(getOrders());
    };
  }, []);

  const ordersState = useSelector((state: any) => state.order);
  const { orders } = ordersState;

  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Orders" />

        <div>
          <OrdersTable ordersData={orders} />
        </div>
      </main>
    </>
  );
}

export default Orders;
