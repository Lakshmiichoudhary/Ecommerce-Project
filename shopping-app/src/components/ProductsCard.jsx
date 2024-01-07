import React, { useContext } from 'react'

const ProductsCard = ({onAdd,item}) => {
 
  return (
    <div className='w-50 p-2 justify-between hover:scale-110'>
        <img src={item.imageUrl} alt='product'/>
        <h1 className='text-black'>{item.title}</h1>
        <h1>{item.price}</h1>
        <button className='p-2 bg-slate-950 text-white rounded-md'
        onClick={() => onAdd(item)}>
          Add to Cart
          </button>
    </div>
  )
}

export default ProductsCard
