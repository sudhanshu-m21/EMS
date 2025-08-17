import React from "react";

const Header = (props) => {
  const logoutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">
          {props.data?.firstName} 👋
        </span>
      </h1>
      <button
        onClick={logoutUser}
        className="bg-red-500 text-white text-lg font-medium px-5 py-2 rounded-sm"
      >
        LogOut
      </button>
    </div>
  );
};

export default Header;
