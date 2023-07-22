interface Props {
  total: number;
  count: number;
}

function StatusCards({ total, count }: Props) {
  return (
    <>
      <div className="flex flex-col gap-6 bg-white rounded-md shadow-sm w-full px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500 font-medium">Total Income</p>
          <div />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold">${total}</p>
          <div className="text-xs text-right text-gray-500 -mb-6">
            <div />
            {/*
              <div className="text-right flex justify-end gap-1 items-center text-green-500">
                <BsArrowUpRight />
                <p>10.78%</p>
              </div>
            */}
            <p>Yearly Total Income</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 bg-white rounded-md shadow-sm w-full px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500 font-medium">Total Sales</p>
          <div />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold">{count}</p>
          <div className="text-xs text-right text-gray-500 -mb-6">
            <div />
            {/*
              <div className="text-right flex justify-end gap-1 items-center text-green-500">
                <BsArrowUpRight />
                <p>5.90%</p>
              </div>
            */}
            <p>Yearly Total Sales</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatusCards;
