import PageTitle from "../../components/PageTitle.tsx";
import CategoryTable from "../../components/Catalog/CategoryTable.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductCategories } from "../../features/productCategory/productCategorySlice.ts";

function CategoryList() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      // @ts-ignore
      dispatch(getProductCategories());
    };
  }, []);

  const productCategoriesState = useSelector(
    (state: any) => state.productCategory.productCategories
  );

  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Category list" />

        <div>
          <CategoryTable productCategoriesData={productCategoriesState} />
        </div>
      </main>
    </>
  );
}

export default CategoryList;
