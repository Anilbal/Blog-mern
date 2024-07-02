import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const Category = () => {
    const category=[
        "Travel",
        "Food",
        "Music",
        "Adventure",
        "Dicoveries",
        "Ancient News",
        "Football",
        "Love",
        "Dicoveries",
        "Ancient News",
        "Football",
        "Love"
    ]

    //show less/more function
    const [show,setShow]=useState(false)
  return (
    <>
    <div className="px-5 py-2 flex flex-col gap-6">
        <h1 className='font-semibold text-xl'>All Category</h1>
        <div className={show?'grid grid-cols-[1fr,1fr] gap-3':"grid grid-cols-[1fr,1fr] gap-3 h-[134px] overflow-hidden "}>
           {category.map((item,i)=>(
             <div className=' border border-gray-400 py-1 px-6 text-normal font-normal rounded-xl flex items-center justify-center h-9 cursor-pointer bg-[#F0F0F0]' key={i}>
             <p>{item}</p>
            </div>
           ))}
        </div>
    </div>
        {
            show?
            <button className='border-none bg-black text-white w-[140px] ml-[65%] mt-1 rounded  p-1 flex items-center justify-center gap-3'
            onClick={()=>setShow(!show)}
            >Show Less <IoIosArrowUp className='text-2xl'/></button>
            : 
            <button className='border-none bg-black text-white w-[140px] rounded ml-[65%] mt-1  p-1 flex items-center justify-center gap-3'
            onClick={()=>setShow(!show)}
            >Show More <IoIosArrowDown className='text-2xl'/></button>
        }
    </>
  )
}

export default Category