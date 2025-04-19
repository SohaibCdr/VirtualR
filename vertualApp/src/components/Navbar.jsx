import React, { useState } from 'react'
import logo from "../assets/logo.png"
import {navItems} from "../constants/index" 
import {Menu , X} from "lucide-react"
const Navbar = () => {
  const [mobileDrawerOpen , setmobileDrawerOpen] = useState(false)
  const toggleNavbar = ()=> {
    setmobileDrawerOpen(!mobileDrawerOpen)
  }
  return (
    <nav className="sticky  top-0 z-50
    backdrop-blur-lg border-b border-neutral-700/80 py-3  ">
        <div className="container px-4 mx-auto relative txt-sm ">
            <div className='flex justify-between items-center'>
                <div className='flex items-center flex-shrink-0'>
                    <img className='h-10 w-10 mr-2  ' src={logo} alt='logo'/>
                    <span className='text-xl tracking-tight'>VirtualR</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12' >
                  {navItems.map((item,index)=>(
                    <li key={index}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
                <div className='hidden lg:flex justify-center space-x-12 items-center '>
                  <a className='py-2 px-4 border rounded-md'  href='#'>Sign In</a>
                  <a className='py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md'  href='#'>Create an account</a>
                </div>
                <div className='lg:hidden md:flex flex-col justify-end'>
                  <button onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X/> : <Menu/>}
                  </button>
                </div>
            </div>
            {mobileDrawerOpen && (
              <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex justify-center items-center flex-col lg:hidden space-y-6'>
                <ul className='flex space-x-6'>
                  {navItems.map((item,index)=>(
                    <li key={index}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
                <div className='flex  space-x-6 '>
                  <a className='py-2 px-4 border rounded-md'  href='#'>Sign In</a>
                  <a className='py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md'  href='#'>Create an account</a>
                </div>
              </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar
