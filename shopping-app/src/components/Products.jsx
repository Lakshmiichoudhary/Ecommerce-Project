import React from 'react'
import ProductsCard from './ProductsCard'

const Products = () => {
  const items =[{
    id:0,
  title: 'Colors',
  price: 100,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id:10,
  title: 'Black and white Colors',
  price: 50,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id:11,
  title: 'Yellow and Black Colors',
  price: 70,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
  id:12,  
  title: 'Blue Color',
  price: 100,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }]

  return (
    <div className='flex flex-wrap w-[50%] p-5 mx-[25%]'>
      {items.map((item) =>(
        <ProductsCard key={item.id} item={item} />))}
    </div>
  )
}

export default Products
