'use client'
import toast, { Toaster } from 'react-hot-toast';

function AddToCardBtn() {
    const handleAddtoCart = () => {
        toast.success('item added to cart')
    }
    return (
        <div>
            <button onClick={handleAddtoCart} className='w-full bg-orange-500 mt-4 py-2 px-6 text-white rounded-md hover:bg-red-600'>
                Add to Card
            </button>
            <Toaster />
        </div>
    )
}

export default AddToCardBtn