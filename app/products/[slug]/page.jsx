import { CheckIcon } from '@heroicons/react/24/solid';
import ShareBtn from '../../components/ShareBtn';
import AddToCardBtn from '../../components/AddToCardBtn';
import {getProdectById, getProducts} from '../../services';
import {formatAmount} from '../../../utils/stripe';
import Image from 'next/image';


export async function generateStaticParams() {
    // const posts = await fetch('https://.../posts').then((res) => res.json())
   
    // return posts.map((post) => ({
    //   slug: post.slug,
    // }))

    const products = await getProducts()
    const slugs = products.data.map(item=>({slug:item.id}))
    return slugs
  }

export async function generateMetadata({params:{slug}}){
    const product = await getProdectById(slug)
    return{
        title:`Sharma Shop | ${product.name}`
    }
}

async function Product1({params:{slug}}) {
    const product = await getProdectById(slug)
    console.log('individual product page return', slug);

    return (
        <div className='mt-2 px-20 border:1px bg-slate-300'>
            <div className='flex justify-around items-center flex-wrap'>
                <div className='w-80 h-80 mt-4'>
                    <Image src={product.images[0]} 
                    priority
                    width={320} height={320} alt="" className='rounded-md w-full h-auto' />
                </div>
                <div className='flex-grow max-w-md border rounded-md shadow-lg p-6 bg-white'>
                    <h2 className='text-3xl font-medium '>{product.name}</h2>
                    <div className='flex pt-2 gap-2'>
                        <CheckIcon className='text-lime-500 w-5 h-5' />
                        <span className='font-semibold'>In stock</span>
                        <ShareBtn />
                    </div>
                    <div className=' mt-4 border-t pt-4 border-cyan-400'>
                        <p className='text-gray-900'>Price</p>
                        <p className='font-semibold font-sans'>           {formatAmount(product.default_price.unit_amount)}</p>
                    </div>
                    <AddToCardBtn />
                </div>

            </div>
            <p className='mt-6 mb-4 py-4 text-sm text-cyan-650'>{product.description}</p>
        </div>
    )
}

export default Product1