'use client';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useCart } from '@/utils/useCart';

function NavBar() {
    const { cartCount } = useCart();
    return (
        <nav className='bg-white p-2 flex justify-between'>
            <Link href='/' className='text-orange-500 mt-2 from-orange-500 font-bold text-2xl'><img src="/images/photo.png" alt="" className='w-20 h-20' /></Link>

            <div className='text-orange-400 px-4 py-2 font-bold hover:text-red-600 hover:cursor-pointer'>
                <Link href='/cart' >
                <ShoppingCartIcon className='w7 h-7 inline-block' />
                cart
                <span>{cartCount}</span>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar

// <ul>
// <li></li>
// <li><Link href='/products'>products</Link></li>
// <li><Link href='/products/p1'>products-p1</Link></li>
// </ul>