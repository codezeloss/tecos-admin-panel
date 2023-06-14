import PageTitle from "../components/PageTitle.tsx";
import OrdersTable from "../components/Orders/OrdersTable.tsx";

function Orders() {
  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Orders" />

        <div>
          <OrdersTable />
        </div>
      </main>
    </>
  );
}

export default Orders;
