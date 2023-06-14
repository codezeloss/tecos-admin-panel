import PageTitle from "../../components/PageTitle.tsx";
import CategoryTable from "../../components/Catalog/CategoryTable.tsx";

function CategoryList() {
  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Category list" />

        <div>
          <CategoryTable />
        </div>
      </main>
    </>
  );
}

export default CategoryList;
