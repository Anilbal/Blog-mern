import React, { useEffect, useRef, useState } from 'react'
import { SiMongodb } from "react-icons/si";
import { FaRegFile } from "react-icons/fa";
import { Button } from '../Index';
import { Link } from 'react-router-dom';

const userProfile=[
  {
    title:"Profile",
    link:"profile"
  },
  {
    title:"Dashboard",
    link:"dashboard"
  },
  {
    title:"Setting",
    link:"edit"
  },
  {
    title:"Logout",
    link:"logout"
  },
]
const Header = () => {
  const [isLogged,setIsLogged]=useState(true)
  const [open,setOpen]=useState(false)
  
  const openRef=useRef()

  useEffect(()=>{
    window.addEventListener("click",(e)=>{
      if(!openRef.current.contains(e.target)){
        setOpen(false)
      }
    })
  })
  return (
    <div className='pt-20'>
    <div className='w-full  py-5 px-20 flex items-center justify-between fixed top-0 left-0 z-[999] bg-[#F0F0F0]'>
        <div className=' flex gap-10 items-center'>
          <Link to='/'>
          <i className=' text-[30px] text-green-600 flex items-center'><SiMongodb />Blog.</i>
          </Link>
        <div className=' ml-20 border border-gray-500 rounded-lg p-1 w-[350px] flex justify-between'>
          <input type="text"  className='p-1 border-none outline-none w-[230px] bg-transparent' placeholder='Search'/>
          <Button children={"Search"}/>
        </div>
        </div>
        {
          isLogged===true?
        <div className='flex items-center justify-center px-5 gap-10'> 
          <div className='flex items-center gap-2 border border-gray-600 cursor-pointer p-2 rounded-md'>
          <FaRegFile />
          <p>Write</p>
          </div>
          <div className='flex items-center gap-1 relative' onClick={()=>setOpen(!open)} ref={openRef}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Random_photo_on_wikipedia.jpg" alt="" className='rounded-full h-9 w-9'/>
            <p>@Username</p>
            {
              open?
            <div className=' absolute top-16'>
              <ul className='bg-[#F0F0F0]'>
                {
                  userProfile.map((item)=>(
                    <Link to={`/user/${item.link}`} key={item.title}>
                      <li className='py-2 px-10 text-xl border-b-[1px] border-gray-400'>{item.title}</li>
                    </Link>
                  ))
                }
              </ul>
            </div>:
            ""
            }
          </div>
        </div>:
        <Link to="/login">
        <Button children={"Login"}/>
        </Link>
        }

    </div>
    </div>
  )
}

export default Header