import { Column } from "@ant-design/plots";

const data = [
  {
    type: "Jan",
    sales: 38,
  },
  {
    type: "Feb",
    sales: 52,
  },
  {
    type: "Mar",
    sales: 61,
  },
  {
    type: "Apr",
    sales: 145,
  },
  {
    type: "May",
    sales: 48,
  },
  {
    type: "Jun",
    sales: 38,
  },
  {
    type: "July",
    sales: 38,
  },
  {
    type: "Aug",
    sales: 38,
  },
  {
    type: "Sept",
    sales: 38,
  },
  {
    type: "Oct",
    sales: 38,
  },
  {
    type: "Nov",
    sales: 38,
  },
  {
    type: "Dec",
    sales: 38,
  },
];
const config = {
  data,
  xField: "type",
  yField: "sales",
  color: () => {
    return "#ffa726";
  },
  label: {
    position: "middle",
    style: {
      fill: "#FFFFFF",
      opacity: 0.6,
    },
  },
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false,
    },
  },
  meta: {
    type: {
      alias: "Month",
    },
    sales: {
      alias: "Income",
    },
  },
};

function IncomeCharts() {
  // @ts-ignore
  return (
    <div>
      <h3 className="text-xl mt-10 mb-4 font-semibold">Income Static</h3>
      <div className="w-full">
        <Column {...config} />
      </div>
    </div>
  );
}

export default IncomeCharts;
