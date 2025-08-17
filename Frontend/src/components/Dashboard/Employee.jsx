import React from "react";
import Header from "../Header";
import TaskNumbers from "../TaskNumbers";
import TaskList from "../TaskList/TaskList";

const Employee = (props) => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default Employee;
