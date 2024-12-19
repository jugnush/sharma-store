import Link from 'next/link';

function ProductLayuout({children}) {
  return (
    <div>
             <Link href='/products' className='inline-block m-2 text-orange-500 p-4 font-bold hover:underline'>
             All products</Link>
             {children}
    </div>
  )
}

export default ProductLayuout