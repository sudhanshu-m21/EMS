import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div>
      <div className="flex-shrink-0 p-5 h-full w-[300px] bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 rounded-sm text-sm px-3 py-1">
            {data?.category}
          </h3>
          <h4 className="text-sm">{data?.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">{data?.taskTitle}</h2>
        <p className="h-[80px] text-sm overflow-auto mt-2">
          {data?.taskDescription}
        </p>
        <div className="mt-2 flex justify-center">
          <button className="px-2 py-1 bg-red-600">Failed</button>
        </div>
      </div>
    </div>
  );
};

export default FailedTask;
