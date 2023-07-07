import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { LuEdit } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import CustomModal from "../CustomModal.tsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBrand, getBrands } from "../../features/brand/brandSlice.ts";

interface DataType {
  key: number;
  name: string;
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
    title: "Action",
    dataIndex: "action",
  },
];

function BrandTable({ brandsData }: any) {
  const data: DataType[] = [];
  const [open, setOpen] = useState(false);
  const [brandId, setBrandId] = useState("");
  const dispatch = useDispatch();

  // Modal
  const showModal = (id: string) => {
    setOpen(true);
    setBrandId(id);
  };
  const hideModal = () => {
    setOpen(false);
  };

  // Delete Brand
  const deBrand = (id: string) => {
    // @ts-ignore
    dispatch(deleteBrand(id));
    setOpen(false);
    setTimeout(() => {
      // @ts-ignore
      dispatch(getBrands());
    }, 100);
  };

  for (let i = 0; i < brandsData.length; i++) {
    data.push({
      key: i + 1,
      name: brandsData[i].title,
      action: (
        <div className="flex items-center gap-1">
          <Link to={`/admin/catalog/add-brand/${brandsData[i]._id}`}>
            <LuEdit />
          </Link>
          <button
            type={"button"}
            className="text-lg text-red-600"
            onClick={() => showModal(brandsData[i]._id)}
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
        performAction={() => deBrand(brandId)}
        title={"Are you sure you want to delete this brand?"}
      />
    </div>
  );
}

export default BrandTable;
