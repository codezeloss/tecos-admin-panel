import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { LuEdit } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CustomModal from "../CustomModal.tsx";
import {
  deleteProduct,
  getProducts,
} from "../../features/product/productSlice.ts";

interface DataType {
  key: number;
  title: string;
  price: number;
  color: string;
  brand: string;
  quantity: string;
  category: string;
  action: any;
}

const columns: ColumnsType<DataType> = [
  {
    title: "S.No.",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a: any, b: any) => a.title.length - b.title.length,
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a: any, b: any) => a.price.length - b.price.length,
  },
  {
    title: "Color",
    dataIndex: "color",
    sorter: (a: any, b: any) => a.color.length - b.color.length,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    sorter: (a: any, b: any) => a.brand.length - b.brand.length,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    sorter: (a: any, b: any) => a.quantity.length - b.quantity.length,
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a: any, b: any) => a.category.length - b.category.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

function ProductTable({ productsData }: any) {
  const data: DataType[] = [];
  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const dispatch = useDispatch();

  // Modal
  const showModal = (id: string) => {
    setOpen(true);
    setProductId(id);
  };
  const hideModal = () => {
    setOpen(false);
  };

  // Delete Brand
  const delProduct = (id: string) => {
    // @ts-ignore
    dispatch(deleteProduct(id));
    setOpen(false);
    setTimeout(() => {
      // @ts-ignore
      dispatch(getProducts());
    }, 100);
  };

  for (let i = 0; i < productsData.length; i++) {
    data.push({
      key: i + 1,
      title: productsData[i].title,
      price: productsData[i].price,
      color: productsData[i].color.map((c: any) => <p>{`${c.color} `}</p>),
      brand: productsData[i].brand,
      quantity: productsData[i].quantity,
      category: productsData[i].category,
      action: (
        <div className="flex items-center gap-1">
          <Link to={`/admin/catalog/add-product/${productsData[i]._id}`}>
            <LuEdit />
          </Link>
          <button
            type="button"
            className="text-lg text-red-600"
            onClick={() => showModal(productsData[i]._id)}
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
        performAction={() => delProduct(productId)}
        title={"Are you sure you want to delete this product?"}
      />
    </div>
  );
}

export default ProductTable;
