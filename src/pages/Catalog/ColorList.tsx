import PageTitle from "../../components/PageTitle.tsx";
import ColorTable from "../../components/Catalog/ColorTable.tsx";

function ColorList() {
  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Color list" />

        <div>
          <ColorTable />
        </div>
      </main>
    </>
  );
}

export default ColorList;
