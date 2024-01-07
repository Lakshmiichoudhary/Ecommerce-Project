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
    <div className='text-center ml-[50%] mt-3 text-white absolute bg-black w-[50%] h-full bg-opacity-90'>
      {cartItem}
      <div className='flex justify-between m-4 font-bold'>
        <span className='m-2'>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className='' >
        <button className='p-3 m-2 rounded-lg px-6 bg-slate-950 text-white'
          onClick={props.onClose}>
          close</button>
      </div>      
    </div>
  )
}

export default Cart
