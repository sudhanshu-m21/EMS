import React from "react";

const NewTask = ({ data }) => {
  return (
    <div>
      <div className="flex-shrink-0 p-5 h-full w-[300px] bg-green-400 rounded-xl">
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
          <button className="bg-green-700 px-2 py-1">Accept Task</button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
