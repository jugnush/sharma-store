import { stripe } from '../utils/stripe'

// export const getProducts = async (limit: number) => {
//     let products = {
//         data:[]
//     }
//     try{
//          products = await stripe.products.list({
//             limit: limit || 10,
//             expand:['data.default_price']
//         });
//         console.log('----------------jugnu',JSON.stringify(products, null, 2));
//     }catch(e){
//         console.log('error from stripß', e);
//     }

//     return products;
// }

export const getProducts = async (limit: number) => {
    let products = {
        data:[]
    }
    try{
        products = await stripe.products.list({
        limit: limit || 10,
        expand: ['data.default_price']
    })
    console.log("------------all--products----------")
    console.log(JSON.stringify(products,null,2))  
    }catch(err){
        console.log("ERROR FROM STRIPE:",err)
    }
 
    return products
}


export const getProdectById = async (productId: number) => {
   
        const product = await stripe.products.retrieve(productId, {
            expand:['default_price']
        });
         console.log('----------------product', JSON.stringify(product, null, 2));
 
        // console.log('error from stripß', e);

   
    return product;
}
