import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PageTitle from "../../components/PageTitle.tsx";
import CouponsTable from "../../components/Coupons/CouponsTable.tsx";
import { getAllCoupons } from "../../features/coupons/couponSlice.ts";
import { resetState } from "../../utils/reset_redux_states.ts";

function CouponsList() {
  const dispatch = useDispatch();

  const couponState = useSelector((state: any) => state.coupon.coupons);

  useEffect(() => {
    return () => {
      // @ts-ignore
      dispatch(resetState());
      // @ts-ignore
      dispatch(getAllCoupons());
    };
  }, []);

  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Coupons list" />

        <div>
          <CouponsTable couponsData={couponState} />
        </div>
      </main>
    </>
  );
}

export default CouponsList;
