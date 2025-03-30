'use client'
import toast, { Toaster } from 'react-hot-toast';
// import {data, data1} from '../test/page';
import { useContext } from 'react';
import { useCart } from '../../utils/useCart'


function AddToCardBtn({product}) {
    // const name = useContext(data)
    // const age = useContext(data1)
    const {addItem} = useCart()

    const handleAddtoCart = () => {
        addItem(product)
        toast.success(`${product.name} item added to cart`)
    }
    return (
        <div>
            <button onClick={handleAddtoCart} className='w-full bg-orange-500 mt-4 py-2 px-6 text-white rounded-md hover:bg-red-600'>
                Add to Card
                {/* {name}{age} */}
            </button>
            <Toaster />
        </div>
    )
}

export default AddToCardBtn