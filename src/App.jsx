import { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import Admin from "./components/Dashboard/Admin";
import Employee from "./components/Dashboard/Employee";
import { AuthContext } from "./context/AuthProvider";
const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  const handleLogin = ({ email, password }) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else alert("Invalid Credentials.");
  };
  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" ? <Admin /> : <Employee data={loggedInUserData} />}
    </>
  );
};

export default App;
