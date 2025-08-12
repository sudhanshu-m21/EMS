import React, { useEffect } from "react";
import { setLocalStorage } from "../utils/localstorage";

const Auth = ({ children }) => {
  // useEffect(() => {
  //   setLocalStorage();
  // }, []);
  return <div>{children}</div>;
};

export default Auth;
