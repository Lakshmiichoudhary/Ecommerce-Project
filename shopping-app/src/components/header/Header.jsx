import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../utils/CartContext';


const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemCount = cartCtx.items.length; 
  
  return (
    <div className='flex justify-between py-5 bg-slate-900 text-white'>
      <p className='md:font-bold md:text-2xl py-2 mx-2 md:mx-10'>Lets Shop</p>
      <div className='flex my-2 md:mx-4'>
        <Link to={"/"}  className='px-3'>Home</Link>
        <Link to={"/about"} className='px-3'>About</Link>
        <Link to={"/store"} className='px-3'>Store</Link>
        <div className="cursor-pointer" onClick={props.onShowCart}>
        Cart<sup>{cartItemCount}</sup>
        </div>
      </div>
    </div>
  )
}

export default Header
