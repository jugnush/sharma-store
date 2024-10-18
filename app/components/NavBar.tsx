import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

function NavBar() {
    return (
        <nav className='bg-white p-2 flex justify-between'>
            <Link href='/' className='text-orange-500 mt-2 from-orange-500 font-bold text-2xl'>Sharma Store</Link>
            <div className='text-orange-400 px-4 py-2 font-bold hover:text-red-600 hover:cursor-pointer'>
                <ShoppingCartIcon className='w7 h-7 inline-block' />
                cart
                <span>(0)</span>
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