import PageTitle from "../components/PageTitle.tsx";
import EnquiriesTable from "../components/Enquiries/EnquiriesTable.tsx";

function Enquiries() {
  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Enquiries" />

        <div>
          <EnquiriesTable />
        </div>
      </main>
    </>
  );
}

export default Enquiries;
