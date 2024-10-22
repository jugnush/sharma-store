import React, { FC } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services';

interface ProductItem {
  // Define the structure of the product item based on your API response
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  default_price: {
    unit_amount: number;
  };
}

interface ProductsResponse {
  data: ProductItem[];
}

const Product: FC = async () => {
  console.log('product listing page return');
  const products: ProductsResponse = await getProducts(5);
  return (
    <div className='my-4 mx-12 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
      {products.data.map((item: ProductItem, index) => <ProductCard key={item.id} item={item} index={index}/>)}
    </div>
  );
}

export default Product;