import React from 'react'

const posts = [
    {
        id:"01",
      username: "Anil",
      date: "July 24",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita.",
    },
    {
      username: "Bal",
      date: "July 21",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita.",
        id:"02",
    },
    {
      username: "Shijal",
      date: "August 14",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita.",
        id:"03",
    },
    {
      username: "Shushil",
      date: "June 4",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita.",
        id:"04",
    },
    {
      username: "Yuma",
      date: "July 23",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita.",
        id:"05",
    },
  ];
const Trending = () => {
  return (
    <div className='w-full p-4 mt-3'>
        <h1 className='font-semibold text-xl'>Trending</h1>
        <div className='flex flex-col gap-6 mt-5'>
        {
            posts.map((item)=>{
                return <div className='flex items-center gap-16 justify-between' key={item.id}>
                <p className='text-5xl font-extrabold text-gray-500'>{item.id}</p>
                <div className='flex flex-col'>
                    <div className='flex gap-4'>
                        <p>@{item.username}</p>
                        <p>{item.date}</p>
                    </div>
                    <h2 className='font-semibold text-lg'>{item.title}</h2>
                </div>
            </div>
            })
        }
        </div>
    </div>
  )
}

export default Trending