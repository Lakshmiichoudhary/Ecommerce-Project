import React, { useContext } from 'react'
import CartContext from '../../utils/CartContext'
import CartList from './CartList'

const Cart = (props) => {
  const cxt = useContext(CartContext)
  const totalAmount = `₹${cxt.totalAmount.toFixed(2)}`
    const cartItem = <ul className='m-6 '>{
      cxt.items.map((item) =>( 
      <CartList key={item.id} item={item}
       />))}</ul>

  return (
    <div className='flex items-start my-5 h-screen w-screen fixed top-35 md:left-[25%]'>
    <div className='text-center text-white bg-black mx-auto p-8 rounded-lg bg-opacity-90'>
      {cartItem}
      <div className='flex md:justify-between m-4 font-bold p-2'>
        <span>Total Amount : </span>
        <span className='px-3'>{totalAmount}</span>
      </div>
      <div>
        <button className='p-3 m-2 rounded-lg px-6 bg-slate-950 text-white' onClick={props.onClose}>
          Close
        </button>
      </div>      
    </div>
    </div>
  )
}

export default Cart
