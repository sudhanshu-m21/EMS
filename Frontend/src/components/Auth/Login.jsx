import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border-2 border-emerald-700 h-1/2 w-1/3 rounded-2xl">
        <form className="h-full w-full flex flex-col justify-center items-center">
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="Email"
            placeholder="Enter Your Email..."
            className="w-3/4 py-3 px-5 border-2 outline-none border-emerald-600 rounded-full text-gray-400"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="Enter Your Password..."
            className="w-3/4 py-3 px-5 border-2 outline-none border-emerald-600 rounded-full mt-6 text-gray-400"
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className="w-1/4 py-3 px-5 border-none bg-emerald-600 rounded-2xl mt-8"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
