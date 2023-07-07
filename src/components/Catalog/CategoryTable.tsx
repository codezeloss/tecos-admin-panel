import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { LuEdit } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import CustomModal from "../CustomModal.tsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteProductCategory,
  getProductCategories,
} from "../../features/productCategory/productCategorySlice.ts";

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

function CategoryTable({ productCategoriesData }: any) {
  const data: DataType[] = [];
  const [open, setOpen] = useState(false);
  const [productCategoryId, setProductCategoryId] = useState("");
  const dispatch = useDispatch();

  // Modal
  const showModal = (id: string) => {
    setOpen(true);
    setProductCategoryId(id);
  };
  const hideModal = () => {
    setOpen(false);
  };

  // DeleteProductCategory
  const deleteCategory = (id: string) => {
    // @ts-ignore
    dispatch(deleteProductCategory(id));
    setOpen(false);
    // @ts-ignore
    dispatch(getProductCategories());
  };

  for (let i = 0; i < productCategoriesData.length; i++) {
    data.push({
      key: i + 1,
      name: productCategoriesData[i].title,
      action: (
        <div className="flex items-center gap-1">
          <Link
            to={`/admin/catalog/add-category/${productCategoriesData[i]._id}`}
          >
            <LuEdit />
          </Link>
          <button
            type={"button"}
            className="text-lg text-red-600"
            onClick={() => showModal(productCategoriesData[i]._id)}
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
        performAction={() => deleteCategory(productCategoryId)}
        title={"Are you sure you want to delete this product category?"}
      />
    </div>
  );
}

export default CategoryTable;
