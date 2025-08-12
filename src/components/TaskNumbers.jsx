import React from "react";

const TaskNumbers = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-between mt-10 ">
      <div className="rounded-xl py-6 px-9 w-[45%] bg-red-300">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-blue-300">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-green-300">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-yellow-300">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
    </div>
  );
};

export default TaskNumbers;
