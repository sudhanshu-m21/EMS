import React from "react";

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI design"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              type="date"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              type="text"
              placeholder="Employee name"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              type="text"
              placeholder="Design, Dev, etc"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <div className="mb-4 w-full">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              placeholder="Enter task description..."
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-5 rounded text-sm w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
