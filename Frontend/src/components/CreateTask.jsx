import React, { useState } from "react";
import Employee from "./Dashboard/Employee";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [catagory, setCatagory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  // const [newTask, setNewTask] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      catagory,
      active: true,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = JSON.parse(localStorage.getItem("employees"));
    data.forEach((elem) => {
      if (elem.firstName === assignTo) {
        elem.tasks.push(newTask);
        if (newTask.active) elem.taskCounts.active += 1;
        // if (newTask.newTask) elem.taskCounts.newTask += 1;
        // if (newTask.completed) elem.taskCounts.completed += 1;
        // if (newTask.failed) elem.taskCounts.failed += 1;
      }
    });
    localStorage.setItem("employees", JSON.stringify(data));
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setCatagory("");
    setAssignTo("");
  };
  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI design"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              type="date"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              type="text"
              placeholder="Employee name"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              type="text"
              placeholder="Design, Dev, etc"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
              value={catagory}
              onChange={(e) => setCatagory(e.target.value)}
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <div className="mb-4 w-full">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              placeholder="Enter task description..."
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
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
