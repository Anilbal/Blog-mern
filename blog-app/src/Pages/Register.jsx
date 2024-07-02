import React from 'react'
import { Button, Input } from '../component/Index'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="flex flex-col items-center gap-7 justify-center py-20 w-full">
      <h2 className="font-semibold text-4xl">Join Us !</h2>
      <form className="flex flex-col gap-4">
        <Input 
        label="Username" 
        type="text" 
        className="border border-gray-500 p-2 w-80 text-black placeholder-black rounded" 
        placeholder="Username"
        />
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
        <Button children="Register" />
      </form>
      <div className="flex gap-4">
        <p>Already have an acoount?</p>
        <Link to="/login" >
        <p className="text-red-600 hover:underline cursor-pointer">Login here</p>
        </Link>
      </div>
    </div>
  )
}

export default Register