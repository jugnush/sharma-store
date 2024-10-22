import Link from 'next/link';
import ProductCard from './components/ProductCard';
import { getProducts } from './services';

interface Product {
  // Define the properties of the product based on your data structure
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
  data: Product[];
}

const Page = async (): Promise<JSX.Element> => {
  const products: ProductsResponse = await getProducts(5);
  return (
    <div>
      <div className='bg-blue-950 h-80'>
        <h1 className='text-white text-6xl font-bold pt-20 text-center'>Indias Most loved <span className='text-orange-500'>Fashion</span> for <span className='text-rose-800'>Coders</span> </h1>
      </div>

      <div className='m-4 flex flex-wrap gap-2'>
        {products.data.map((item: Product, index) => <ProductCard key={item.id} item={item} index={index} />)}
      </div>
      <Link href='/products' className='inline-block m-2 text-orange-500 p-4 font-bold hover:underline'>View All</Link>
    </div>
  );
}

export default Page;