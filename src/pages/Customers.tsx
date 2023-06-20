import PageTitle from "../components/PageTitle.tsx";
import CustomersTable from "../components/Customers/CustomersTable.tsx";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/customers/customerSlice.ts";
import { useEffect } from "react";

function Customers() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      // @ts-ignore
      dispatch(getUsers());
    };
  }, []);

  const customersState = useSelector((state: any) => state.customer.customers);

  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Customers" />

        <div>
          <CustomersTable customersData={customersState} />
        </div>
      </main>
    </>
  );
}

export default Customers;
