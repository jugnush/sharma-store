import { stripe } from '../utils/stripe'

export const getProducts = async (limit: number) => {
    let products = {
        data:[]
    }
    try{
         products = await stripe.products.list({
            limit: limit || 10,
            expand:['data.default_price']
        });
        // console.log('----------------products',JSON.stringify(products, null, 2));
    }catch(e){
        console.log('error from stripß', e);
    }

    return products;
}

export const getProdectById = async (productId: number) => {
    let product = null
    try{
         product = await stripe.products.retrieve(productId, {
            expand:['default_price']
        });
         // console.log('----------------product',JSON.stringify(product, null, 2));
    } catch(e){
        console.log('error from stripß', e);
    }
   
   
    return product;
}
