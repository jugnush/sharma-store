'use client';
import { useCart } from '@/utils/useCart';
import toast, { Toaster } from 'react-hot-toast';
import { TrashIcon } from '@heroicons/react/24/outline';
import { MinusIcon, PlusIcon, XCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React, { FC, use, useEffect } from 'react';
import { formatAmount } from '@/utils/stripe';
import { handleCheckout } from '../checkOutService';
import router from 'next/router';
import { useRouter } from 'next/navigation';

const Page: FC = () => {
  const { cartCount, cartTotal, cartItems, incrementCartItems, decrementCartItems, deleteAllItems, deleteById } = useCart()
  const router = useRouter();
  // const cartCount: number = 4;
//   const cartCheckout = async () => {
//       const body = cartItems.map((item: {
//         default_price: any; price_id: string, quantity: number 
// }) => {  
//           return {
//               price: item.price_id,
//               quantity: item.quantity
//           }
//       }
//       )
//     const url = await handleCheckout(cartItems)
//     console.log('cart page url', url);
//   }
  const cartCheckout = async () => {
    try {
        const body = cartItems.map(item => {
          console.log('cart page item', item);
            return {
                price: item.price_id,
                quantity: item.quantity
            }
        })
        const url = await handleCheckout(body)
        console.log('cart page url', url);
        router.push(url)
    } catch (err) {
        console.log("err")
        toast.error(`checkout failed`)
    }

}

useEffect(() => {
 const query = new URLSearchParams(window.location.search);
 if (query.get('success')) {
  // toast.success(`${product.name} item added to cart`)
  toast.success('Order placed! You will receive an email confirmation.');
  <Toaster />
  deleteAllItems()
 }  
 if (query.get('canceled')) {
  toast.error('Order canceled -- continue to shop around and checkout when you are ready.');
  <Toaster />
 }  
} , [])

console.log('cartItems',cartItems.length)
  return (
    <div className='m-5 px-20'>
      {cartCount > 0 ? (
        <>
          <h2 className='tex-4x1 font-semibold'>Cart Items: {cartCount}</h2>
          <button className='text-orange-500 mt-2 font-bold hover:text-red-800 hover:cursor-pointer'  onClick={()=>deleteAllItems()}>clear All
            <TrashIcon className='inline-block w-5 h-5' />
          </button>
        </>
      ) : (
        <>
          <h2 className='tex-4x1 font-semibold'>Your Shopping cart is empty!</h2>
          <Link href='/products' className='text-xl mt text-orange-500 font-medium underline'> shopping now</Link>
        </>
      )}

      {
        cartCount > 0 && (
          <div>
            {
              cartItems.map((item, index) => {
                console.log(item);
                return (
                  <div className='bg-white border-spacing-1 p-4 my-2 flex justify-between border rounded hover:shadow-lg items-center'>
                    <Link href={`/products/${item.id}`} className='flex items-center'>
                      <img src={item.image}  alt="" className='w-20 h-auto' />
                      <p className='font-semibold text-xl ml-2'>{item.name}</p>
                    </Link>
                    <div className='flex items-center gap-5'>
                      <div className='flex items-center gap-3'>
                        <button className='p-1 rounded-md text-orange-500 hover:text-white hover:bg-orange-500 disabled:cursor-not-allowed' 
                        onClick={()=>decrementCartItems(item.id)}>
                          <MinusIcon className='w-6 h-6' />
                        </button>
                        <p className='font-semibold text-xl'>{item.quantity}</p>
                        <button className='p-1 rounded-md text-orange-500 hover:text-white hover:bg-orange-500 disabled:cursor-not-allowed'  onClick={()=>incrementCartItems(item.id)}>
                          <PlusIcon className='w-6 h-6' />
                        </button>
                      </div>
                      <p>x <span className='font-semibold text-xl ml-2'>${item.price}</span></p>
                      <button className='text-orange-500 hover:text-red-600'
                       onClick={()=>deleteById(item.id)}>
                        <XCircleIcon className='w-6 h-6' />
                      </button>
                    </div>
                  </div>
                )
              })

            }


            <div className='flex flex-col items-end border-t py-4 mt-6'>
              <p className='text-xl'>
                Total <span className='font-bold text-green-600'>${cartTotal}</span>
              </p>
              <button className='bg-orange-500 mt-4 py-2 px-6 text-white rounded-md hover:bg-red-600' onClick={cartCheckout}>
                Checkout
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Page;