import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

interface DataType {
  key: number;
  name: string;
  email: string;
  mobile: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "S.No.",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    defaultSortOrder: "descend",
    sorter: (a: any, b: any) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
];

function CustomersTable({ customersData }: any) {
  const data: DataType[] = [];

  for (let i = 0; i < customersData.length; i++) {
    data.push({
      key: i + 1,
      name: customersData[i].firstname + " " + customersData[i].lastname,
      email: customersData[i].email,
      mobile: customersData[i].mobile,
    });
  }

  return (
    <div>
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
  );
}

export default CustomersTable;
