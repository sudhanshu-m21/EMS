import React from "react";

const TaskNumbers = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between mt-10 ">
      <div className="rounded-xl py-6 px-9 w-[45%] bg-yellow-300">
        <h2 className="text-3xl font-semibold">{data?.taskCounts.newTask}</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-blue-300">
        <h2 className="text-3xl font-semibold">{data?.taskCounts.completed}</h2>
        <h3 className="text-xl font-semibold">Completed Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-green-300">
        <h2 className="text-3xl font-semibold">{data?.taskCounts.active}</h2>
        <h3 className="text-xl font-semibold">Active Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-red-300">
        <h2 className="text-3xl font-semibold">{data?.taskCounts.failed}</h2>
        <h3 className="text-xl font-semibold">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskNumbers;
