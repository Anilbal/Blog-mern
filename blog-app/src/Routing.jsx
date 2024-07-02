import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Layout ,UserLayout} from './component/Index'
import {Dashboard, Home, Login, PageNotFound, Profile, Register, SingleBlog, UserEdit} from './Pages/Indexing'


const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='blog/:id' element={<SingleBlog/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='user' element={<UserLayout/>}>
            <Route path='profile' element={<Profile/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='edit' element={<UserEdit/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing