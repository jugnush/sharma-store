import Link from 'next/link'
import {formatAmount} from '../../utils/stripe';


function ProductCard({item}) {
    return (

        <Link href={`/products/${item.id}`} className='w-full sm:w-64 h-62 rounded border border-gray-200 hover:cursor-pointer hover:shadow'>
            <img src={item.images[0]} alt="" className='w-full h-40' />
            <div className='flex justify-between p-2 m-1'>
                <div >
                    <h1 className='font-bold'> {item.name}</h1>
                    <p className='w-40 truncate hover:text-clip'>
                       {item.description}
                    </p>
                </div>
                <div className='text-cyan-950 font-bold py-2'>
                    {formatAmount(item.default_price.unit_amount)}

                </div>
            </div>
        </Link>


    )
}

export default ProductCard