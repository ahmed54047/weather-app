import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
//   <div className='bg-[#382F34]'>
<div className="bg-[url('./assets/photo2.png')] bg-no-repeat bg-center bg-cover min-h-screen">
    <Header/>
    <Outlet/>
    <Footer/>
  </div>
  )
}
