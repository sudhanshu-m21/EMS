import React from "react";
import Header from "../Header";
import TaskNumbers from "../TaskNumbers";
import TaskList from "../TaskList/TaskList";

const Employee = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header />
      <TaskNumbers />
      <TaskList />
    </div>
  );
};

export default Employee;
