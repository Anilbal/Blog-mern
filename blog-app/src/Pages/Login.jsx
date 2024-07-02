import React from "react";
import { Button, Input } from "../component/Index";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center gap-7 justify-center py-28 w-full">
      <h2 className="font-semibold text-4xl">Welcome Back</h2>
      <form className="flex flex-col gap-6">
        <Input 
        label="Email" 
        type="email" 
        className="border border-gray-500 p-2 w-80 text-black placeholder-black rounded" 
        placeholder="Email"
        />
        <Input 
        label="Password" 
        type="password" 
        className="border border-gray-500 p-2 w-80 text-black placeholder-black rounded" 
        placeholder="Password"
        />
        <Button children="Login" />
      </form>
      <div className="flex gap-4">
        <p>Doesn't have an acoount?</p>
        <Link to="/register" >
        <p className="text-red-600 hover:underline cursor-pointer">Register here</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
