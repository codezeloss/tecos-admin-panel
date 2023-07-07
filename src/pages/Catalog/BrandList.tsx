import PageTitle from "../../components/PageTitle.tsx";
import BrandTable from "../../components/Catalog/BrandTable.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBrands } from "../../features/brand/brandSlice.ts";
import { resetState } from "../../utils/reset_redux_states.ts";

function BrandList() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      // @ts-ignore
      dispatch(resetState());
      // @ts-ignore
      dispatch(getBrands());
    };
  }, []);

  const brandsState = useSelector((state: any) => state.brand.brands);

  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Brand list" />

        <div>
          <BrandTable brandsData={brandsState} />
        </div>
      </main>
    </>
  );
}

export default BrandList;
