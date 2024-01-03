import React from 'react'

const ProductsCard = ({item}) => {
  return (
    <div className='w-50 p-2 justify-between hover:scale-110'>
        <img src={item.imageUrl} alt='product'/>
        <h1 className='text-black'>{item.title}</h1>
        <h1>{item.price}</h1>
      
    </div>
  )
}

export default ProductsCard
