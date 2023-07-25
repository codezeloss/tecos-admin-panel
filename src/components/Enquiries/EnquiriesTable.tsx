import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlineEye } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CustomModal from "../CustomModal.tsx";
import {
  deleteEnquiry,
  getEnquiries,
  updateEnquiry,
} from "../../features/enquiry/enquirySlice.ts";

interface DataType {
  key: number;
  name: string;
  email: string;
  comment: string;
  mobile: string;
  status: any;
  date: string;
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
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Comment",
    dataIndex: "comment",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

function EnquiriesTable({ enquiriesData }: any) {
  const data: DataType[] = [];
  const [open, setOpen] = useState(false);
  const [enquiryId, setEnquiryId] = useState("");
  const dispatch = useDispatch();

  // **
  useEffect(() => {
    // @ts-ignore
    dispatch(getEnquiries());
  }, []);

  // ** Modal
  const showModal = (id: string) => {
    setOpen(true);
    setEnquiryId(id);
  };
  const hideModal = () => {
    setOpen(false);
  };

  // ** Delete Color
  const delEnquiry = (id: string) => {
    // @ts-ignore
    dispatch(deleteEnquiry(id));
    setOpen(false);
    // @ts-ignore
    dispatch(getEnquiries());
  };

  // ** Handle Enquiry Status Change
  const setEnquiryStatus = (e: string, id: string) => {
    const data = { id, enquiryData: e };
    // @ts-ignore
    dispatch(updateEnquiry(data));
  };

  for (let i = 0; i < enquiriesData.length; i++) {
    data.push({
      key: i + 1,
      name: enquiriesData[i].name,
      email: enquiriesData[i].email,
      comment: enquiriesData[i].comment,
      mobile: enquiriesData[i].mobile,
      status: (
        <select
          className="py-2 px-4 bg-gray-100 text-gray-800 w-full text-sm outline-none font-medium mt-1"
          placeholder="category 01"
          defaultValue={
            enquiriesData[i].status ? enquiriesData[i].status : "Submitted"
          }
          onChange={(e) =>
            setEnquiryStatus(e.target.value, enquiriesData[i]._id)
          }
        >
          <option value="Submitted">Submitted</option>
          <option value="Contacted">Contacted</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      ),
      date: new Date(enquiriesData[i].createdAt).toLocaleString(),
      action: (
        <div className="flex items-center gap-1">
          <Link
            className="text-lg text-gray-600"
            to={`/admin/enquiries/${enquiriesData[i]._id}`}
          >
            <HiOutlineEye />
          </Link>
          <button
            type={"button"}
            className="text-lg text-red-600"
            onClick={() => showModal(enquiriesData[i]._id)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      ),
    });
  }

  return (
    <div>
      <Table columns={columns} dataSource={data} size="middle" />
      <CustomModal
        open={open}
        hideModal={hideModal}
        performAction={() => delEnquiry(enquiryId)}
        title={"Are you sure you want to delete this enquiry?"}
      />
    </div>
  );
}

export default EnquiriesTable;
