import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between py-5 bg-slate-900 text-white'>
      <p className='md:font-bold md:text-2xl py-2 mx-2 md:mx-10'>Lets Shop</p>
      <div className='flex my-2 md:mx-4'>
        <Link to={"/"}  className='px-3'>Home</Link>
        <Link to={"/about"} className='px-3'>About</Link>
        <Link to={"/store"} className='px-3'>Store</Link>
        <h1 className='px-3'>Cart<sup className='p-1'>0</sup></h1>
      </div>
    </div>
  )
}

export default Header
