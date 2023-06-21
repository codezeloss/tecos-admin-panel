import PageTitle from "../../components/PageTitle.tsx";
import ColorTable from "../../components/Catalog/ColorTable.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductColors } from "../../features/productColor/productColorSlice.ts";

function ColorList() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      // @ts-ignore
      dispatch(getProductColors());
    };
  }, []);

  const productColorsState = useSelector(
    (state: any) => state.productColor.productColors
  );

  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Color list" />

        <div>
          <ColorTable productColorsData={productColorsState} />
        </div>
      </main>
    </>
  );
}

export default ColorList;
