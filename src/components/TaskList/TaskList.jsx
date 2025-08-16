import React from "react";
import AcceptedTask from "./AcceptedTask";
import NewTask from "./NewTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="taskList"
      className="overflow-x-auto h-[35%] flex flex-nowrap gap-5 items-center justify-start mt-10"
    >
      {data?.tasks.map((e, idx) => {
        if (e.active) {
          return <AcceptedTask key={idx} data={e} />;
        }
        if (e.newTask) {
          return <NewTask key={idx} data={e} />;
        }
        if (e.completed) {
          return <CompletedTask key={idx} data={e} />;
        }
        if (e.failed) {
          return <FailedTask key={idx} data={e} />;
        }
      })}
    </div>
  );
};

export default TaskList;
