import React from 'react'
import ProductCard from '../components/ProductCard'
import { getProdects } from '../services';

const Product = async () => {
  console.log('product listing page return');
  const products = await getProdects(5)
  return (
    <div className='my-4 mx-12 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
 {products.data.map((item: any)=> <ProductCard item={item} />
    )}
     
    </div>
  )
}

export default Product