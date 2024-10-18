import Link from 'next/link'
import ProductCard from './components/ProductCard'
import {getProdects} from './services';

const Page = async () => {
  const products = await getProdects(5);
  console.log('home page return');
  return (
    <div>
      <div className='bg-blue-950 h-80'>
        <h1 className='text-white text-6xl font-bold pt-20 text-center'>Indias Most loved <span className='text-orange-500'>Fashion</span> for <span className='text-rose-800'>Coders</span> </h1>
      </div>
   
      <div className='m-4 flex flex-wrap gap-2'>
      {products.data.map((item: any)=> <ProductCard item={item} />
    )}


   </div>
      <Link href='/products' className='inline-block m-2 text-orange-500 p-4 font-bold hover:underline'>View All</Link>
    </div>
  )
}

export default Page