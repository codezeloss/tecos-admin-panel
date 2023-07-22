import { Column } from "@ant-design/plots";

function SalesCharts({ monthlySalesData }: any) {
  const config: any = {
    data: monthlySalesData,
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

  return (
    <div className="w-[50%]">
      <h3 className="text-xl mt-10 mb-6 font-semibold">Sales Statics</h3>
      <div className="w-full">
        <Column {...config} />
      </div>
    </div>
  );
}

export default SalesCharts;
