import PageTitle from "../../components/PageTitle.tsx";
import ProductTable from "../../components/Catalog/ProductTable.tsx";

function ProductList() {
  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Product list" />

        <div>
          <ProductTable />
        </div>
      </main>
    </>
  );
}

export default ProductList;
