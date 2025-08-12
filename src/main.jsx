import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Auth from "./context/Auth.jsx";
import Task from "./context/Task.jsx";
// localStorage.clear();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth>
      <Task>
        <App />
      </Task>
    </Auth>
  </StrictMode>
);
