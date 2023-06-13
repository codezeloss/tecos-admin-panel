import { BsArrowUpRight } from "react-icons/bs";

function StatusCard() {
  return (
    <div className="flex flex-col gap-6 bg-white rounded-md shadow-sm min-w-[300px] w-full px-4 py-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Total</p>
        <div />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">$3788</p>
        <div className="text-xs text-right text-gray-500">
          <div className="text-right flex justify-end gap-1 items-center text-green-500">
            <BsArrowUpRight />
            <p>12.78%</p>
          </div>
          <p>Compared to April 2021</p>
        </div>
      </div>
    </div>
  );
}

export default StatusCard;
