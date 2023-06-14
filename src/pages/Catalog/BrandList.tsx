import PageTitle from "../../components/PageTitle.tsx";
import BrandTable from "../../components/Catalog/BrandTable.tsx";

function BrandList() {
  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Brand list" />

        <div>
          <BrandTable />
        </div>
      </main>
    </>
  );
}

export default BrandList;
