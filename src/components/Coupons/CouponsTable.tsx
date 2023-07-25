import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { LuEdit } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CustomModal from "../CustomModal.tsx";
import {
  deleteCoupon,
  getAllCoupons,
} from "../../features/coupons/couponSlice.ts";

interface DataType {
  key: number;
  name: string;
  expiry: string;
  discount: number;
  action: any;
}

const columns: ColumnsType<DataType> = [
  {
    title: "S.No.",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a: any, b: any) => a.name.length - b.name.length,
  },
  {
    title: "Expiration date",
    dataIndex: "expiry",
    sorter: (a: any, b: any) => a.expiry.length - b.expiry.length,
  },
  {
    title: "Discount %",
    dataIndex: "discount",
    sorter: (a: any, b: any) => a.discount.length - b.discount.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

function CouponTable({ couponsData }: any) {
  const data: DataType[] = [];
  const [open, setOpen] = useState(false);
  const [couponId, setCouponId] = useState("");
  const dispatch = useDispatch();

  // Modal
  const showModal = (id: string) => {
    setOpen(true);
    setCouponId(id);
  };
  const hideModal = () => {
    setOpen(false);
  };

  // Delete Coupon
  const deCoupon = (id: string) => {
    // @ts-ignore
    dispatch(deleteCoupon(id));
    setOpen(false);
    setTimeout(() => {
      // @ts-ignore
      dispatch(getAllCoupons());
    }, 100);
  };

  for (let i = 0; i < couponsData?.length; i++) {
    data.push({
      key: i + 1,
      name: couponsData[i].name,
      expiry: new Date(couponsData[i].expiry).toLocaleString(),
      discount: couponsData[i].discount,
      action: (
        <div className="flex items-center gap-1">
          <Link to={`/admin/coupons/add-coupon/${couponsData[i]._id}`}>
            <LuEdit />
          </Link>
          <button
            type={"button"}
            className="text-lg text-red-600"
            onClick={() => showModal(couponsData[i]._id)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      ),
    });
  }

  return (
    <div className="shadow-sm">
      <Table columns={columns} dataSource={data} size="middle" />
      <CustomModal
        open={open}
        hideModal={hideModal}
        performAction={() => deCoupon(couponId)}
        title={"Are you sure you want to delete this coupon?"}
      />
    </div>
  );
}

export default CouponTable;
