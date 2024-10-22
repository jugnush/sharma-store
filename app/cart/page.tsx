import { TrashIcon } from '@heroicons/react/24/outline';
import { MinusIcon, PlusIcon, XCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React, { FC } from 'react';

const Page: FC = () => {
  const cartCount: number = 4;

  return (
    <div className='m-5 px-20'>
      {cartCount > 0 ? (
        <>
          <h2 className='tex-4x1 font-semibold'>Cart Items: {cartCount}</h2>
          <button className='text-orange-500 mt-2 font-bold hover:text-red-800 hover:cursor-pointer'>clear All
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
            <div className='bg-white border-spacing-1 p-4 my-2 flex justify-between border rounded hover:shadow-lg items-center'>
              <Link href='/sdf' className='flex items-center'>
                <img src="/images/product1.png" alt="" className='w-20 h-auto' />
                <p className='font-semibold text-xl ml-2'>codding shirt</p>
              </Link>
              <div className='flex items-center gap-5'>
                <div className='flex items-center gap-3'>
                  <button className='p-1 rounded-md text-orange-500 hover:text-white hover:bg-orange-500 disabled:cursor-not-allowed'>
                    <MinusIcon className='w-6 h-6' />
                  </button>
                  <p className='font-semibold text-xl'>0</p>
                  <button className='p-1 rounded-md text-orange-500 hover:text-white hover:bg-orange-500 disabled:cursor-not-allowed'>
                    <PlusIcon className='w-6 h-6' />
                  </button>
                </div>
                <p>x <span className='font-semibold text-xl ml-2'>999</span></p>
                <button className='text-orange-500 hover:text-red-600'>
                  <XCircleIcon className='w-6 h-6' />
                </button>
              </div>
            </div>
            
            <div className='flex flex-col items-end border-t py-4 mt-6'>
              <p className='text-xl'>
                Total <span className='font-bold text-green-600'>5000</span>
              </p>
              <button className='bg-orange-500 mt-4 py-2 px-6 text-white rounded-md hover:bg-red-600'>
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