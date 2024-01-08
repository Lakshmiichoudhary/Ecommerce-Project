import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../utils/CartContext';


const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemCount = cartCtx.items.length; 
  
  return (
    <div className='flex md:justify-between py-5 bg-slate-900 text-white'>
      <h1 className='md:font-bold md:text-2xl py-2 mx-2 md:mx-10'>Lets Shop</h1>
      <div className='flex my-2 md:mx-4'>
        <Link to={"/home"}  className='px-2 md:px-3'>Home</Link>
        <Link to={"/about"} className='px-2 md:px-3'>About</Link>
        <Link to={"/contact"} className='px-2 md:px-3'>Contact</Link>
        <Link to={"/"} className='px-2 md:px-3'>Store</Link>
        <div className="cursor-pointer px-2 md:px-3" onClick={props.onShowCart}>
        Cart<sup>{cartItemCount}</sup>
        </div>
      </div>
    </div>
  )
}

export default Header
