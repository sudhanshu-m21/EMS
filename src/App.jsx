import { useEffect } from "react";
import Login from "./components/Auth/Login";
import Admin from "./components/Dashboard/Admin";
import Employee from "./components/Dashboard/Employee";
import { setLocalStorage } from "./utils/localstorage";

const App = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default App;
