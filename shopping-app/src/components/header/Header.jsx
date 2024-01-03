import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between py-5 bg-slate-900 text-white'>
      <p className='md:font-bold md:text-2xl py-2 mx-2 md:mx-10'>Lets Shop</p>
      <ul className='flex my-2 md:mx-4'>
        <li className='px-3'>Home</li>
        <li className='px-3'>About</li>
        <li className='px-3'>Store</li>
        <li className='px-3'>Cart<sup className='p-1'>0</sup></li>
      </ul>
    </div>
  )
}

export default Header
