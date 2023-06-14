import PageTitle from "../components/PageTitle.tsx";
import CustomersTable from "../components/Customers/CustomersTable.tsx";

function Customers() {
  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Customers" />

        <div>
          <CustomersTable />
        </div>
      </main>
    </>
  );
}

export default Customers;
