import React from 'react'
import { IoIosShareAlt } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";



const SingleBlog = () => {
  return (
    <div className=' px-80 py-10 w-full border border-gray-500 flex flex-col gap-8'>
        <h1 className=' font-bold text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quas?</h1>

        <div className='w-full flex items-center justify-between'>
            <div className='flex items-center gap-5'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlIhENfIqZPbgiqLqYVSugDvvUV2-_O6H1A&s" alt="" className=' h-10 w-10 rounded-full'/>
                <p>@Username</p>
            </div>
            <p>Published on Date</p>
        </div>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlIhENfIqZPbgiqLqYVSugDvvUV2-_O6H1A&s" alt="" className=' h-[600px] w-full'/>

        <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quis aperiam soluta recusandae, enim impedit, blanditiis magnam temporibus odit quos inventore molestiae illo iusto error voluptatibus a! Provident omnis iure laborum laudantium delectus blanditiis sed dolorem eum a reprehenderit beatae ipsa, culpa ipsum unde tenetur earum est placeat odio qui dolor? Quam esse, obcaecati repellendus veniam illum amet in alias eum quod repudiandae, maiores assumenda, soluta ratione cumque magnam aut aperiam doloribus. Sint voluptatibus iure illum obcaecati, voluptas ut aperiam, cupiditate sed molestias voluptate quis accusantium sapiente quasi praesentium porro fuga magni quo officia repellat saepe ratione incidunt reprehenderit optio.</p>

        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-6'>
                <div className='flex items-center gap-2'>
                    <FaHeart className='text-2xl text-gray-600 cursor-pointer'/>
                    <p className='text-xl'>1</p>
                </div>
                <div className='flex items-center gap-2'>
                    <FaRegCommentDots className='text-2xl'/>
                    <p className='text-xl'>1</p>
                </div>
            </div>
            <IoIosShareAlt className='text-3xl'/>
        </div>
    </div>
  )
}

export default SingleBlog