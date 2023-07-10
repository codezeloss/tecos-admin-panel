import PageTitle from "../../components/PageTitle.tsx";
import ProductTable from "../../components/Catalog/ProductTable.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../features/product/productSlice.ts";
import { resetState } from "../../utils/reset_redux_states.ts";

function ProductList() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      // @ts-ignore
      dispatch(resetState());
      // @ts-ignore
      dispatch(getProducts());
    };
  }, []);

  const productsState = useSelector((state: any) => state.product.products);

  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Product list" />

        <div>
          <ProductTable productsData={productsState} />
        </div>
      </main>
    </>
  );
}

export default ProductList;
