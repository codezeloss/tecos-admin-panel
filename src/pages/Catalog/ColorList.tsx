import PageTitle from "../../components/PageTitle.tsx";
import ColorTable from "../../components/Catalog/ColorTable.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getColors } from "../../features/color/colorSlice.ts";
import { resetState } from "../../utils/reset_redux_states.ts";

function ColorList() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      // @ts-ignore
      dispatch(resetState());
      // @ts-ignore
      dispatch(getColors());
    };
  }, []);

  const colorsState = useSelector((state: any) => state.color.colors);

  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Color list" />

        <div>
          <ColorTable colorsData={colorsState} />
        </div>
      </main>
    </>
  );
}

export default ColorList;
