import PageTitle from "../components/PageTitle.tsx";
import StatusCards from "../components/Dashboard/StatusCards.tsx";
import IncomeCharts from "../components/Dashboard/IncomeCharts.tsx";
import OrdersTable from "../components/Dashboard/OrdersTable.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getMonthlyOrdersData,
  getOrders,
  getYearlyStatsData,
} from "../features/order/orderSlice.ts";
import SalesCharts from "../components/Dashboard/SalesCharts.tsx";

function Dashboard() {
  const dispatch = useDispatch();
  const [monthlyIncomeData, setMonthlyIncomeData] = useState<any[]>([]);
  const [monthlySalesData, setMonthlySalesData] = useState<any[]>([]);

  // ** RTK - Monthly Orders State
  const monthlyOrdersState = useSelector(
    (state: any) => state.order?.monthlyOrders
  );

  // ** RTK - Yearly Stats State
  const yearlyStatsState = useSelector((state: any) => state.order.yearlyStats);

  // ** RTK - Orders State
  const ordersState = useSelector((state: any) => state.order);
  const { orders } = ordersState;

  // **
  useEffect(() => {
    // @ts-ignore
    dispatch(getMonthlyOrdersData());
    // @ts-ignore
    dispatch(getYearlyStatsData());
    // @ts-ignore
    dispatch(getOrders());
  }, []);

  // **
  useEffect(() => {
    if (monthlyOrdersState) {
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let dataIncome = [];
      let dataSales = [];

      for (let i = 0; i < monthlyOrdersState.length; i++) {
        const element = monthlyOrdersState[i];
        dataIncome.push({
          type: months[element?._id?.month],
          income: element?.amount,
        });
        dataSales.push({
          type: months[element?._id?.month],
          sales: element?.count,
        });
      }

      setMonthlyIncomeData(dataIncome);
      setMonthlySalesData(dataSales);
    }
  }, [monthlyOrdersState]);

  return (
    <>
      <main className="w-full h-screen p-8">
        <PageTitle title="Dashboard" />
        <div>
          <h3 className="text-xl mt-6 mb-4 font-semibold">Status</h3>
          <div className="flex items-center gap-3 mb-4">
            <StatusCards
              total={yearlyStatsState ? yearlyStatsState[0]?.amount : "--"}
              count={yearlyStatsState ? yearlyStatsState[0]?.count : "--"}
            />
          </div>

          <div className="w-full flex items-center gap-6">
            <IncomeCharts monthlyIncomeData={monthlyIncomeData} />
            <SalesCharts monthlySalesData={monthlySalesData} />
          </div>

          <OrdersTable ordersData={orders} />
        </div>
      </main>
    </>
  );
}

export default Dashboard;
