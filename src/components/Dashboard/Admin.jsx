import React from "react";
import Header from "../Header";
import CreateTask from "../CreateTask";
import AllTask from "../AllTask";

const Admin = () => {
  return (
    <div className="h-screen w-full p-7">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default Admin;
