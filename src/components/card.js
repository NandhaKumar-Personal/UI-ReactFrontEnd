export const Card = ({ title, value, percentage, reportLink, Icon }) => {
  return (
    <div className="p-4 px-[300px] bg-white border border-gray-300 rounded-lg shadow-md mt-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="mr-2 text-2xl material-symbols-outlined">
            {Icon}
          </span>
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <span className="text-xl material-symbols-outlined">more_horiz</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-sm text-gray-500">
            {percentage} vs last month
          </div>
        </div>
        <div className="w-48"></div>
      </div>
      <div className="flex items-center justify-between p-2 mt-1 bg-gray-50 rounded-xl">
        <span>View Report</span>
        <span className="material-symbols-outlined">arrow_right_alt</span>
      </div>
    </div>
  );
};
